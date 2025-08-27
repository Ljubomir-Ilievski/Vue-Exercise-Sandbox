<script>
import { PickedExerciseStore } from '@/stores/PickedExerciseStore.js'

export default {
  props: ['exercise', 'isOpen', 'referenceToClickedExercise'],

  data(){
    return {
      pickedExerciseStore: PickedExerciseStore()
    }
  },
  methods: {
    handleClick(){
      this.pickedExerciseStore.changeExerciseRWAPI(this.exercise)
    }
  }

}
</script>

<template>
  <div :class="{'clicked': pickedExerciseStore.currentExercise === exercise}" v-on:click="pickedExerciseStore.changeExerciseRWAPI(this.exercise)" class="my-component" v-bind:class="{isOpen: isOpen}">
    {{exercise.name}}
  </div>
</template>

<style scoped>

.my-component {
  display: none;
  cursor: pointer
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

.clicked {
  background-color: #803101;
}

</style>
