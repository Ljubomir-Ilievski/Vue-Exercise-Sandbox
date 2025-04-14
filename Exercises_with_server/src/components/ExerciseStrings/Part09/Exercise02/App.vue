<script setup>
import AppHeader from './/AppHeader.vue'
import AppProfileDisplay from './AppProfileDisplay.vue'
import AppProfileForm from './AppProfileForm.vue'

import { reactive } from 'vue'

const formData = reactive({name:'', occupation:''});

function update(e) {
  formData.name = e.name;
  formData.occupation = e.occupation;
}
</script>

<template>
  <div id="app">
    <AppHeader/>
    <div class="flex flex-col md:flex-row">
      <AppProfileForm @submit="update($event)" />
      <AppProfileDisplay :form-data="formData" />
    </div>
  </div>
</template>
