<template>
  <header class="sticky top-0 flex flex-col bg-stone-100 p-2 dark:bg-black">
    <button
      class="relative mb-2 flex items-center gap-2 rounded-lg p-1 hover:cursor-pointer hover:bg-stone-200"
      @click="toggleDropdown"
    >
      <img
        src="https://api.dicebear.com/9.x/notionists/svg"
        alt="avatar"
        class="size-8 shrink-0 rounded bg-black shadow"
      />
      <div class="text-start">
        <span class="block text-sm font-semibold">Document</span>
        <span class="block text-xs text-stone-500">v1.0</span>
      </div>
      <i-lucide-chevrons-up-down class="absolute right-2 text-xs" />
    </button>
    <Search />
  </header>
</template>

<script setup lang="ts">
import { toggleDropdown } from '@/composables/useDropdown'
import Search from './Search.vue'
</script>

<style scoped></style>
