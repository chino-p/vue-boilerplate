<template>
  <el-card
    shadow="never"
    class="h-full !rounded-b-lg"
    :body-style="{ padding: '0px', height: '100%' }"
  >
    <template #header>标题</template>
    <div class="flex h-full">
      <div class="w-[80%]">123</div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { Menu, Search } from '@element-plus/icons-vue'
import SeperatorLine from '@/components/SeperatorLine.vue'

const handleNodeClick = (data: Tree) => {
  console.log(data)
}
const defaultProps = {
  children: 'children',
  label: 'label',
}
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
