<template>
  <nav class="flex items-center border-b border-slate-200 px-4 py-2 dark:border-gray-700">
    <!-- Toggle Sidebar Button -->
    <button
      @click="toggleSidebar"
      class="mr-4 flex cursor-pointer items-center hover:bg-stone-200 focus:outline-none"
    >
      <i-lucide-panel-left />
    </button>
    <!-- Breadcrumb Items -->
    <div class="flex flex-1 items-center text-sm text-stone-500">
      <slot>
        <!-- Default Breadcrumb -->
        <span>Home</span>
      </slot>
    </div>
    <!-- Dark mode toggle button -->
    <button
      @click="() => toggleDark()"
      class="flex cursor-pointer items-center rounded p-2 hover:bg-stone-200 focus:outline-none"
    >
      <i-lucide-moon v-if="!isDark" />
      <i-lucide-sun v-else />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { isDark } from '@/theme/composables/dark'

const toggleDark = useToggle(isDark)

const toggleSidebar = () => {
  emit('toggle-sidebar')
}
const emit = defineEmits<{ (e: 'toggle-sidebar'): void }>()
</script>

<style scoped></style>
