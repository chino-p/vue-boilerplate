<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 dark:from-gray-900 dark:to-gray-800"
  >
    <div class="rounded-xl bg-white p-8 text-center shadow-xl dark:bg-gray-900">
      <h1 class="mb-2 text-8xl font-extrabold text-blue-600 dark:text-blue-400">404</h1>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">抱歉，你访问的页面不存在。</p>
      <div class="flex justify-center gap-4">
        <el-button @click="goBack" type="success">
          <iconify-icon icon="lucide-arrow-left" class="mr-2" />返回上级
        </el-button>
        <el-button @click="goHome" type="primary">
          <iconify-icon icon="lucide-home" class="mr-2" />返回首页
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => router.back()
const goHome = () => router.push('/')
</script>

<style scoped>
/* No additional styles: using Tailwind CSS */
</style>
