<template>
  <aside
    class="bg-sidebar-bg flex h-full w-full flex-col overflow-y-auto border-r border-slate-100 shadow dark:bg-black"
  >
    <SidebarHeader v-if="!collapsed" />
    <div class="flex-1">
      <RouteItems
        v-for="item in routeItems"
        :key="item.title"
        :selected="item.title === 'Home'"
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
import { defineProps } from 'vue'
import routeItems from '../routeItems'
import RouteItems from './RouteItems.vue'
import SidebarHeader from './SidebarHeader.vue'

defineProps({
  collapsed: { type: Boolean, default: false },
})
</script>

<style scoped></style>
