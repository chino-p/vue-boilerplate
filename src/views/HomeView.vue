<script setup lang="ts">
import { at } from 'es-toolkit/array'

const numbers = [10, 20, 30, 40, 50]
const result = at(numbers, [1, 3, 4])
console.log(result) // [20, 40, 50]
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
