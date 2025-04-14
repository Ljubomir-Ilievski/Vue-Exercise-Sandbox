<script>

import Lectures_component from '@/components/Lectures_component.vue'
import { lectures } from '@/components/ExerciseStrings/Lectures/Lectures.js'
import { ExercisePickerToggleStore } from '@/stores/ExercisePickerToggle.js'

export default {
  methods: {

  },
  data(){
    return {
      lectures_component: lectures,
      exercisePicerToggle: ExercisePickerToggleStore()
    }
  },
  components:{
    Lectures_component
  },
  beforeMount(){
    console.log("LECTURES")
    console.log(lectures)
  }
}

</script>

<template>
  <div class="component"
        v-bind:class="{toggleOff: exercisePicerToggle.isOpen }">
    <Lectures_component v-for="lecture in this.lectures_component" :key="lecture.name" :lecture="lecture"></Lectures_component>
  </div>
</template>

<style scoped>

.component {
  width: 10vw;
  min-width: 150px;
  height: 90vh;
  border-color: #F78764;
  border-width: 2px;
  overflow: auto
}

.toggleOff {
  display: none;
}

</style>
