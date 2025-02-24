<template>
  <div class="grid h-full grid-cols-[240px_1fr]">
    <Sidebar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped></style>
