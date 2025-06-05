import axios, { type AxiosResponse, type InternalAxiosRequestConfig, type AxiosError } from 'axios'
import { useUserStore } from '@/stores/user'
import { getToken } from '@/utils/auth'
import { transParams, blobValidate } from '@/utils/common'
import { HttpStatus } from '@/enums/RespEnum'
import { errorCode } from '@/utils/errorCode'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
import FileSaver from 'file-saver'
import router from '@/router'

let downloadLoadingInstance: LoadingInstance
// 是否显示重新登录
export const isRelogin = { show: false }
export const globalHeaders = () => {
  return {
    Authorization: 'Bearer ' + getToken(),
  }
}

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['1231'] = '123'
// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 500000,
  // withCredentials: true,
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const isToken = config.headers?.isToken === false
    if (getToken() && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
      let url = config.url + '?' + transParams(config.params)
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }
    // FormData数据去请求头Content-Type
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type']
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || HttpStatus.SUCCESS
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
      return res.data
    }
    if (code === 401) {
      // prettier-ignore
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          isRelogin.show = false;
          useUserStore().logout().then(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: encodeURIComponent(router.currentRoute.value.fullPath || '/')
              }
            })
          });
        }).catch(() => {
          isRelogin.show = false;
        });
      }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === HttpStatus.SERVER_ERROR) {
      ElMessage({ message: msg, type: 'error' })
      return Promise.reject(new Error(msg))
    } else if (code === HttpStatus.WARN) {
      ElMessage({ message: msg, type: 'warning' })
      return Promise.reject(new Error(msg))
    } else if (code !== HttpStatus.SUCCESS) {
      ElNotification.error({ title: msg })
      return Promise.reject('error')
    } else {
      return Promise.resolve(res.data)
    }
  },
  (error: AxiosError) => {
    let { message } = error
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    ElMessage({ message: message, type: 'error', duration: 5 * 1000 })
    return Promise.reject(error)
  },
)
// 通用下载方法
export function download(url: string, params: any, fileName: string) {
  downloadLoadingInstance = ElLoading.service({
    text: '正在下载数据，请稍候',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  // prettier-ignore
  return service.post(url, params, {
      transformRequest: [
        (params: any) => {
          return transParams(params);
        }
      ],
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'blob'
    }).then(async (resp: any) => {
      const isLogin = blobValidate(resp);
      if (isLogin) {
        const blob = new Blob([resp]);
        FileSaver.saveAs(blob, fileName);
      } else {
        const resText = await resp.data.text();
        const rspObj = JSON.parse(resText);
        const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default'];
        ElMessage.error(errMsg);
      }
      downloadLoadingInstance.close();
    }).catch((r: any) => {
      console.error(r);
      ElMessage.error('下载文件出现错误，请联系管理员！');
      downloadLoadingInstance.close();
    });
}
// 导出 axios 实例
export default service
