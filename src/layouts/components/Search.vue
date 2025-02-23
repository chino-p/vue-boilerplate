<template>
  <!-- <div class="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
    <i-lucide-search class="mr-2" />
    <input
      class="bg-transparent placeholder:text-stone-400 focus:outline-none w-full"
      placeholder="Search"
      type="text"
    />
    <span
      className="p-1 text-sx flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2"
    >
      <i-lucide-command />K
    </span>
  </div> -->
  <el-input placeholder="Search" :prefix-icon="Search" class="focus:outline-none">
    <template #suffix>
      <span
        class="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2"
      >
        CTRL K
      </span>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped></style>
