<template>
  <div
    class="h-full"
    :style="{
      display: 'grid',
      gridTemplateColumns: showSidebar ? '240px 1fr' : '60px 1fr',
      transition: 'grid-template-columns 0.3s ease',
    }"
  >
    <aside class="overflow-hidden">
      <Sidebar :collapsed="!showSidebar" />
    </aside>
    <main class="transition-all duration-300">
      <Breadcrumb @toggle-sidebar="toggleSidebar" />
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Sidebar from './components/Sidebar.vue'

const showSidebar = ref(true)
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
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
