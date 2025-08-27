<script>

import { ExercisePickerToggleStore } from '@/stores/ExercisePickerToggle.js'
import { PickedExerciseStore } from '@/stores/PickedExerciseStore.js'

export default {
  data() {
    return {
      ExercisePickerToggleStore_: ExercisePickerToggleStore(),
      pickedExercise: PickedExerciseStore()
    }
  }
}

</script>

<template>
  <div id="navbar" class="w-full flex items-center justify-center">
    <div class="navbar-base flex justify-between w-7/10 mx-auto">
<!--      <select class="bg-coral rounded-full">
        <option value="Test"
                >TEST</option>
      </select>-->


      <button @click="ExercisePickerToggleStore_.toggleOpen()" class="hamburger">
        <span :class="{ open: ExercisePickerToggleStore_.isOpen }"></span>
        <span :class="{ open: ExercisePickerToggleStore_.isOpen }"></span>
        <span :class="{ open: ExercisePickerToggleStore_.isOpen }"></span>
      </button>

      <div class="flex">
      <button style="cursor: pointer" @click="pickedExercise.compileComponentRWAPI()" class="bg-coral rounded-full p-1 px-3 text-white">Compile</button>
        <button style="cursor: pointer" v-on:click="pickedExercise.resetComponentCode()" class="bg-coral rounded-full p-1 px-3 text-white ml-2">Reset Code</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  background-color: #F78764;
  height: 10vh;
}
.bg-coral {
  background-color: #803101;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 30px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  border-width: 2px;
  border-color: #803101;
  justify-content: center;
  align-items: center;
}

.navbar-base {
  height: 100%;
  display: flex;
  align-items: center;
}

.hamburger span {
  width: 70%;
  height: 4px;
  background-color: #803101;
  transition: 0.3s;

}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg);
  position: relative;
  top: 25%;

}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  bottom: 25%;

}



</style>
