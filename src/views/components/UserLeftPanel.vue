<template>
  <div class="border-main-bg w-[283px] border-r p-4">
    <el-input :prefix-icon="Search" placeholder="搜索成员、部门、角色" />
    <div class="flex items-center justify-between py-4">
      <el-button :icon="Menu">添加子部门</el-button>
      <SeperatorLine />
      <el-button :icon="Menu">部门管理</el-button>
    </div>
    <el-tree
      style="max-width: 600px"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    />
  </div>
</template>

<script setup lang="ts">
import { Menu, Search } from '@element-plus/icons-vue'
import SeperatorLine from '@/components/SeperatorLine.vue'

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  defaultProps: {
    type: Object,
    default: () => ({
      children: 'children',
      label: 'label',
    }),
    required: false,
  },
})

const handleNodeClick = (data: any) => {
  console.log(data)
}
</script>

<style scoped></style>
