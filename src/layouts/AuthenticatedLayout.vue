<template>
  <el-container class="h-full">
    <el-aside :width="showSidebar ? '240px' : '60px'">
      <Sidebar :collapsed="!showSidebar" />
    </el-aside>

    <el-container>
      <el-header class="border-b border-slate-200 bg-white dark:bg-gray-800" height="40px">
        <Breadcrumb @toggle-sidebar="toggleSidebar" />
      </el-header>
      <el-main class="bg-main-bg relative !p-2 transition-all duration-300">
        <RouterView />
        <div
          v-if="showDropdown"
          ref="dropdownRef"
          @click.stop
          class="absolute top-1 left-1 w-48 rounded border-1 border-slate-200 bg-white shadow-md"
        >
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
          <a @click="handleLogout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Logout</a
          >
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import type { ElMessageBoxOptions } from 'element-plus'
import Breadcrumb from './components/Breadcrumb.vue'
import Sidebar from './components/Sidebar.vue'
import { showDropdown } from '@/composables/useDropdown'
import { useUserStore } from '@/stores/user'
import { removeToken } from '@/utils/auth'

// Reference to dropdown container
const dropdownRef = ref<HTMLElement | null>(null)

// Close dropdown when clicking outside
const onClickOutside = (event: MouseEvent) => {
  const target = event.target as Node
  if (dropdownRef.value && !dropdownRef.value.contains(target)) {
    showDropdown.value = false
  }
}
onMounted(() => window.addEventListener('click', onClickOutside))
onBeforeUnmount(() => window.removeEventListener('click', onClickOutside))

const showSidebar = ref(true)
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

// Setup logout handler
const router = useRouter()
const userStore = useUserStore()
const handleLogout = async () => {
  showDropdown.value = false
  await ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  } as ElMessageBoxOptions)

  await userStore.logout()
  // 跳转到登录页面，并且保存之前访问的路径，方便登录之后可以继续返回到界面
  router.replace({
    path: '/login',
    query: {
      redirect: encodeURIComponent(router.currentRoute.value.fullPath || '/'),
    },
  })
}
</script>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease;
}
.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.sidebar-enter-to,
.sidebar-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
