<script>

import ExerciseComponent from '@/components/ExerciseComponent.vue'

export default {
  components: {
    ExerciseComponent
  },
  data(){
    return {
        isOpen: false
    }
  },
  methods: {
    toggleOpen(){
      this.isOpen = !this.isOpen
    }
  },
  props: {
    lecture: {
      required: true,
    }
  }
}

</script>

<template>

  <div class="component" v-on:click="toggleOpen">
    {{lecture.name}}
  </div>
    <ExerciseComponent v-for="exercise in lecture.exercises" :key="exercise" :exercise="exercise" v-bind:isOpen="isOpen"></ExerciseComponent>


</template>

<style scoped>

.component{
  width: 100%;
  height: 6%;
  background-color: #F78764;
  border-width: 1px;
  border-color: navajowhite;
  color: white;
}


</style>
