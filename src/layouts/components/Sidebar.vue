<template>
  <aside
    class="bg-sidebar-bg relative z-10 flex h-full w-full flex-col overflow-y-auto border-r border-slate-100 shadow dark:bg-black"
  >
    <SidebarHeader v-if="!collapsed" />
    <div class="flex-1">
      <RouteItems
        v-for="item in sidebarRoutes"
        :key="item.name"
        :selected="isSelected(item)"
        :icon="item.meta?.icon as string"
        :title="item.meta?.title as string"
        :path="item.path"
        :children="
          item.children?.map((child) => ({
            title: child.meta?.title as string,
            path: child.path as string,
            meta: child.meta as RouteMeta,
          }))
        "
        :collapsed="collapsed"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import RouteItems from './RouteItems.vue'
import SidebarHeader from './SidebarHeader.vue'
import type { RouteMeta } from 'vue-router'

// Determine if sidebar item is selected by comparing current route
const route = useRoute()
// Selected only when the item's own path matches the route
const isSelected = (item: { path?: string }) => item.path === route.path

// TODO filter children
const sidebarRoutes = computed(() => {
  console.log('routes', routes)
  return routes.filter((item) => item.meta?.show !== false)
})

console.log(sidebarRoutes.value)

defineProps({
  collapsed: { type: Boolean, default: false },
})
</script>

<style scoped></style>
