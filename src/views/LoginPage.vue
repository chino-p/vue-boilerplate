<template>
  <div class="flex min-h-screen">
    <!-- 左侧背景区 -->
    <div
      class="relative hidden w-1/2 items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-800 lg:flex"
    >
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/assets/pattern.svg'); opacity: 0.1"
      ></div>
      <!-- 彩色渐变叠加层 -->
      <div
        class="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 mix-blend-overlay"
      ></div>
      <div class="relative px-8 text-center text-white">
        <h1 class="mb-4 text-4xl font-bold">Innovate. Integrate. Elevate.</h1>
        <p class="text-lg">Empowering the future with cutting-edge technology.</p>
      </div>
    </div>
    <!-- 右侧登录表单 -->
    <div
      class="flex w-full items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8"
    >
      <div class="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            欢迎使用钧恒管理系统👏
          </h2>
        </div>
        <form @submit.prevent="onSubmit" class="mt-8 space-y-6">
          <div class="space-y-4">
            <div>
              <label for="username" class="mb-1 block text-sm font-medium text-gray-700"
                >帐号</label
              >
              <input
                id="username"
                type="text"
                v-model="form.username"
                required
                class="block w-full rounded-lg bg-gray-100 px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                placeholder="请输入您的帐号"
              />
            </div>
            <div>
              <label for="password" class="mb-1 block text-sm font-medium text-gray-700"
                >密码</label
              >
              <div class="relative">
                <input
                  id="password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="form.password"
                  required
                  class="block w-full rounded-lg bg-gray-100 px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                  placeholder="请输入您的密码"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute top-1/2 right-3 flex -translate-y-1/2 items-center text-gray-500"
                >
                  <iconify-icon
                    :icon="showPassword ? 'lucide:eye-off' : 'lucide:eye'"
                    width="20"
                    height="20"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                v-model="form.rememberMe"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">记住我</label>
            </div>
            <div class="text-sm">
              <RouterLink
                to="/forgot-password"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                忘记密码
              </RouterLink>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            >
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/login'
import type { LoginForm } from '@/types/common'
import { setToken } from '@/utils/auth'

const router = useRouter()

const form = ref<LoginForm>({
  username: '',
  password: '',
  rememberMe: false,
})
const showPassword = ref(false)

const redirect = ref('/')
watch(
  () => router.currentRoute.value,
  (newRoute: any) => {
    redirect.value =
      newRoute.query && newRoute.query.redirect && decodeURIComponent(newRoute.query.redirect)
  },
  { immediate: true },
)

// 登录方法
const onSubmit = async () => {
  // TODO loading
  const res = await login(form.value)
  setToken(res.data)
  const redirectUrl = redirect.value || '/'
  await router.push(redirectUrl)
}
</script>

<style scoped></style>
