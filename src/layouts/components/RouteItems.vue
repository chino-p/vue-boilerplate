<template>
  <div @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="relative">
    <div v-if="children.length">
      <div
        v-if="!collapsed"
        @click="toggleNavChildren"
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

      <!-- Submenu: when collapsed and hovering, show submenu items  -->
      <div
        v-if="collapsed && isHover && children.length"
        class="fixed top-auto left-[58px] z-9999 min-w-48 rounded-xl border border-slate-200 bg-white p-1 shadow-lg dark:bg-gray-800"
        :style="{ top: `${submenuTop}px` }"
      >
        <div class="px-3 py-1 text-center text-sm font-medium text-stone-700 dark:text-stone-300">
          {{ title }}
        </div>
        <div class="my-1 border-t border-slate-200 dark:border-slate-600"></div>
        <RouterLink
          v-for="child in children"
          :key="child.title"
          :to="child.path"
          class="block rounded px-3 py-1.5 text-center text-sm text-stone-600 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-gray-700"
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
          'gap-2',
          'rounded',
          'bg-transparent',
          'px-2',
          'py-1.5',
          'text-sm',
          'text-stone-500',
          'transition',
          'hover:bg-stone-200',
          collapsed ? 'justify-center' : '',
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
const toggleNavChildren = () => {
  open.value = !open.value
}

const isHover = ref(false)
const submenuTop = ref(0)

const onMouseEnter = (event: MouseEvent) => {
  isHover.value = true
  // Calculate the vertical position for the submenu
  const element = event.currentTarget as HTMLElement
  const rect = element.getBoundingClientRect()
  submenuTop.value = rect.top
}

const onMouseLeave = () => {
  isHover.value = false
}
</script>

<style scoped>
/* Ensure submenu appears above other elements */
.z-1000 {
  z-index: 1000;
}
</style>
