<template>
  <aside
    class="bg-sidebar-bg relative z-10 flex h-full w-full flex-col overflow-y-auto border-r border-slate-100 shadow dark:bg-black"
  >
    <SidebarHeader v-if="!collapsed" />
    <div class="flex-1">
      <RouteItems
        v-for="item in routeItems"
        :key="item.title"
        :selected="isSelected(item)"
        :icon="item.icon"
        :title="item.title"
        :path="item.path"
        :children="item.children"
        :collapsed="collapsed"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import routeItems from '../routeItems'
import RouteItems from './RouteItems.vue'
import SidebarHeader from './SidebarHeader.vue'
import { useRoute } from 'vue-router'

// Determine if sidebar item is selected by comparing current route
const route = useRoute()
// Selected only when the item's own path matches the route
const isSelected = (item: { path?: string }) => item.path === route.path

defineProps({
  collapsed: { type: Boolean, default: false },
})
</script>

<style scoped></style>
