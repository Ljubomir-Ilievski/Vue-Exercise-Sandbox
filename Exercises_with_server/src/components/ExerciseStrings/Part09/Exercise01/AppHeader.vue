<script setup>
import { store } from '@/components/ExerciseStrings/Part09/Exercise01/store.js'
</script>

<template>
<header class="w-full block p-4 border-b bg-blue-300 
    border-gray-700">
    <h2 class="text-xl text-gray-800">Profile Card Generator</h2>
    <button class="flex ml-auto text-gray-800 items-center" @click="store.clear()">
      Reset
    </button>
  </header>
</template>

