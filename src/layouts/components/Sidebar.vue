<template>
  <aside
    class="flex h-full w-full flex-col overflow-y-auto border-r border-slate-100 bg-stone-100 dark:bg-black"
  >
    <SidebarHeader />
    <div class="flex-1">
      <RouteItems
        v-for="item in routeItems"
        :key="item.title"
        :selected="item.title === 'Home'"
        :icon="item.icon"
        :title="item.title"
        :path="item.path"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import routeItems from '../routeItems'
import RouteItems from './RouteItems.vue'
import SidebarHeader from './SidebarHeader.vue'
</script>

<style scoped></style>
