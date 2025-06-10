<template>
  <el-drawer v-model="showDrawer" size="480px">
    <template #header>
      <h1 class="text-sm">{{ userFormTitle }}</h1>
    </template>
    <el-form v-model="userForm" label-position="top">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="部门" prop="department">
        <el-input v-model="userForm.department" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userForm.password" placeholder="请输入" show-password />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup lang="ts">
const showDrawer = defineModel('showDrawer', {
  type: Boolean,
  default: false,
})

const userForm = defineModel('userForm', {
  type: Object,
  default: () => ({
    username: '',
    department: '',
    password: '',
  }),
})

defineProps({
  title: {
    type: String,
    default: '添加成员',
  },
  userFormTitle: {
    type: String,
    default: '添加成员',
  },
})
</script>

<style scoped></style>
