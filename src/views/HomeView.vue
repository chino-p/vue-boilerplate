<template>
  <main>
    <button @click="toggleDark()">
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
    <i-lucide-moon />
    <el-button type="primary">12312</el-button>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="占用">
        <el-input v-model="formInline.user" placeholder="占用" clearable />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
    <i-lucide-alarm-clock-minus />
    <el-button type="primary">
      <el-icon style="vertical-align: middle"> <i-ep-edit /> </el-icon>123
    </el-button>
    <el-button type="primary" :icon="Apple"> 123 </el-button>
    {{ isWindows ? 'MacOS' : 'Other' }}
  </main>
</template>

<script setup lang="ts">
import { Apple } from '@element-plus/icons-vue'
import { useToggle } from '@vueuse/core'
import { isDark } from '../theme/composables/dark'

import { useUserAgent } from '@/composables/useUserAgent'

const { isMacOS, isWindows } = useUserAgent()

const toggleDark = useToggle(isDark)
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
