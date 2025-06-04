import type { LoginForm } from '@/types/common'
import request from '@/utils/request'

export const login = (form: LoginForm) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data: form,
  })
}

export const logout = () => {
  return request({
    url: '/auth/logout',
    method: 'get',
  })
}
