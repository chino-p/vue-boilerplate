<template>
  <div class="grid grid-cols-[240px_1fr] h-full">
    <Sidebar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped></style>
