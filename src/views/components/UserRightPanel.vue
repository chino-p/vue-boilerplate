<template>
  <div class="w-[calc(100%-283px)] p-4">
    <h1 class="text-[17px]">部门名称(部门ID: 999536832)</h1>
    <div class="mt-5 flex items-center">
      <el-button type="primary" @click="openUserFormDrawer"
        ><iconify-icon icon="lucide-user-round-plus" class="mr-2" />添加成员</el-button
      >
      <el-button><iconify-icon icon="lucide-qr-code" class="mr-2" />邀请成员</el-button>
      <el-button>添加/申请记录</el-button>
      <SeperatorLine />
      <el-dropdown trigger="click">
        <el-button
          >批量管理<el-icon class="ml-2"> <i-ep-caret-bottom /> </el-icon
        ></el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>调整部门</el-dropdown-item>
            <el-dropdown-item>批量导入</el-dropdown-item>
            <el-dropdown-item>批量导出</el-dropdown-item>
            <el-dropdown-item :style="{ color: '#ff5219' }">直接批量删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-button class="ml-3">调整排序</el-button>
    </div>

    <UserMainTable class="mt-4" :user-table-data="userTableData" @delete-row="handleDeleteRow" />
    <UserFormDrawer
      v-model:showDrawer="showDrawer"
      v-model:user-form="userForm"
      :title="userFormTitle"
    />
  </div>
</template>

<script setup lang="ts">
import UserFormDrawer from './UserFormDrawer.vue'
import UserMainTable from './UserMainTable.vue'

const showDrawer = ref(false)
const userFormTitle = ref('添加成员')

const userTableData = ref([
  {
    username: '张三',
    name: '管理员',
    status: '启用',
    position: '部门经理',
    empNo: '123456',
    email: 'zhangsan@example.com',
  },
  {
    username: '李四',
    name: '普通用户',
    status: '禁用',
    position: '员工',
    empNo: '654321',
    email: 'lisi@example.com',
  },
])

const userForm = ref({
  username: '',
  department: '',
  password: '123456',
})

const handleDeleteRow = (index: number) => {
  userTableData.value.splice(index, 1)
}

const openUserFormDrawer = () => {
  showDrawer.value = true
  userFormTitle.value = '添加成员'
}
</script>

<style scoped></style>
