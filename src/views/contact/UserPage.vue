<template>
  <el-card
    shadow="never"
    class="h-full !rounded-b-lg"
    :body-style="{ padding: '0px', height: '100%' }"
  >
    <template #header>标题</template>
    <div class="flex h-full">
      <UserLeftPanel :data="data" />
      <UserRightPanel />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import UserLeftPanel from '../components/UserLeftPanel.vue'
import UserRightPanel from '../components/UserRightPanel.vue'

const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
</script>

<style scoped></style>
