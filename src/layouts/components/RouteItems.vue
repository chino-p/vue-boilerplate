<template>
  <RouterLink
    :to="path"
    active-class="bg-white text-stone-950 shadow"
    class="m-2 flex items-center justify-start gap-2 rounded bg-transparent px-2 py-1.5 text-sm text-stone-500 shadow-none transition-[box-shadow,_background-color,_color] hover:bg-stone-200"
  >
    <iconify-icon :icon="icon" />
    <span>{{ title }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps({
  selected: {
    type: Boolean,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
