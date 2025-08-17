<script>
import { PickedExerciseStore } from '@/stores/PickedExerciseStore.js'

export default {
  props: ['exercise', 'isOpen'],

  data(){
    return {
      pickedExerciseStore: PickedExerciseStore()
    }
  }

}
</script>

<template>
  <div v-on:click="pickedExerciseStore.changeExerciseRWAPI(this.exercise)" class="my-component" v-bind:class="{isOpen: isOpen}">
    {{exercise.name}}
  </div>
</template>

<style scoped>

.my-component {
  display: none;
}
.isOpen{
  transition: 1s;
  display: block;
  width: 80%;
  height: 6%;
  background-color: #F78764;
  border-width: 1px;
  border-color: navajowhite;
  color: white;
}

</style>
