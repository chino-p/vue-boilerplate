<template>
  <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="relative">
    <div v-if="children.length">
      <div
        v-if="!collapsed"
        @click="toggle"
        class="m-2 flex cursor-pointer items-center justify-between rounded bg-transparent px-2 py-1.5 text-sm text-stone-500 transition hover:bg-stone-200"
      >
        <div class="flex items-center gap-2">
          <iconify-icon v-if="icon" :icon="icon" />
          <span>{{ title }}</span>
        </div>
        <div>
          <i-lucide-chevron-down v-if="open" />
          <i-lucide-chevron-right v-else />
        </div>
      </div>
      <!-- Collapsed mode: shows only icon -->
      <div
        v-else
        class="m-2 flex cursor-pointer items-center justify-center rounded bg-transparent px-2 py-1.5 text-stone-500 transition hover:bg-stone-200"
      >
        <iconify-icon v-if="icon" :icon="icon" />
      </div>
      <!-- Submenu: when collapsed and hovering, show submenu items -->
      <div
        v-if="collapsed && isHover && children.length"
        class="absolute top-0 left-full z-10 w-48 rounded border border-slate-200 bg-white shadow-md"
      >
        <RouterLink
          v-for="child in children"
          :key="child.title"
          :to="child.path"
          class="block px-4 py-1.5 text-sm text-stone-500 hover:bg-stone-200"
        >
          {{ child.title }}
        </RouterLink>
      </div>
      <!-- Expanded submenu for non-collapsed mode -->
      <div v-if="!collapsed" v-show="open" class="mx-4">
        <RouterLink
          v-for="child in children"
          :key="child.title"
          :to="child.path"
          active-class="bg-stone-200! text-stone-950"
          class="m-2 flex items-center rounded bg-transparent px-4 py-1.5 text-sm text-stone-500 transition hover:bg-stone-200"
        >
          <span>{{ child.title }}</span>
        </RouterLink>
      </div>
    </div>
    <div v-else>
      <RouterLink
        :to="path as string"
        active-class="bg-stone-200! text-stone-950"
        :class="[
          'm-2',
          'flex',
          'items-center',
          collapsed ? 'justify-center' : '',
          'gap-2',
          'rounded',
          'bg-transparent',
          'px-2',
          'py-1.5',
          'text-sm',
          'text-stone-500',
          'transition',
          'hover:bg-stone-200',
        ]"
      >
        <iconify-icon v-if="icon" :icon="icon" />
        <template v-if="!collapsed">
          <span>{{ title }}</span>
        </template>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  selected: { type: Boolean, required: true },
  icon: { type: String, required: false },
  title: { type: String, required: true },
  path: { type: String, required: false },
  children: {
    type: Array as () => { title: string; path: string }[],
    default: () => [],
  },
  collapsed: { type: Boolean, default: false },
})

const open = ref(false)
const toggle = () => {
  open.value = !open.value
}

const isHover = ref(false)
const onMouseEnter = () => {
  isHover.value = true
}
const onMouseLeave = () => {
  isHover.value = false
}
</script>

<style scoped></style>
