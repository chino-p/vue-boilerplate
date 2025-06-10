<template>
  <el-table
    :data="userTableData"
    style="width: 100%"
    max-height="250"
    :header-cell-style="{ background: '#f4f6f8', color: '#000000' }"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column fixed prop="username" label="姓名" min-width="150" />
    <el-table-column prop="name" label="帐号类型" width="120" />
    <el-table-column prop="status" label="帐号状态" width="120" />
    <el-table-column prop="position" label="职位" width="120" />
    <el-table-column prop="empNo" label="工号" width="600" />
    <el-table-column prop="email" label="邮箱" min-width="120" />
    <el-table-column fixed="right" label="操作" min-width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="emit('deleteRow', scope.$index)"
        >
          更多
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineProps({
  userTableData: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['deleteRow'])
</script>

<style scoped></style>
