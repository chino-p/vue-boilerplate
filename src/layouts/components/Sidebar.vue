<template>
  <aside
    class="border-r border-slate-100 bg-stone-100 dark:bg-black w-full h-full flex flex-col overflow-y-auto"
  >
    <header class="flex flex-col sticky top-0 dark:bg-black bg-stone-100 p-2">
      <button
        class="hover:bg-stone-200 hover:cursor-pointer rounded-lg items-center p-2 flex gap-2 relative"
      >
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          class="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div class="text-start">
          <span class="text-sm font-semibold block">Document</span>
          <span class="text-xs text-stone-500 block">v1.0</span>
        </div>
        <i-lucide-chevrons-up-down class="absolute right-2 text-xs" />
      </button>
      <Search />
    </header>
    <content class="flex-1">
      <button
        :class="[
          'flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]',
          selected
            ? 'bg-white text-stone-950 shadow'
            : 'hover:bg-stone-200 bg-transparent text-stone-500 shadow-none',
        ]"
      >
        <component :is="Icon" />
        <span>{title}</span>
      </button>
      <p v-for="i in 500" :key="i" class="space-y-1 rounded">内容 {{ i }}</p></content
    >
  </aside>
</template>

<script setup lang="ts">
import Search from './Search.vue'

const props = defineProps({
  selected: {
    type: Boolean,
    required: true,
  },
  Icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
