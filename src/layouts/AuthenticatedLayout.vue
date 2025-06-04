<template>
  <div
    class="h-full"
    :style="{
      display: 'grid',
      gridTemplateColumns: showSidebar ? '240px 1fr' : '60px 1fr',
      transition: 'grid-template-columns 0.3s ease',
    }"
  >
    <div class="relative overflow-visible">
      <Sidebar :collapsed="!showSidebar" />
    </div>
    <main class="relative transition-all duration-300">
      <Breadcrumb @toggle-sidebar="toggleSidebar" />
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
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Sidebar from './components/Sidebar.vue'
import { showDropdown } from '@/composables/useDropdown'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

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
function handleLogout() {
  showDropdown.value = false
  return userStore.logout().then(() => router.replace({ path: '/login' }))
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
