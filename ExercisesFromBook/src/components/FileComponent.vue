<script>
import { PickedExerciseStore } from '@/stores/PickedExerciseStore.js'

export default {
  props: ['file'],
  beforeMount() {
    console.log(this.file);
  },
  data (){
    return {
      pickedExercise: PickedExerciseStore()
    }
  }
}
</script>

<template>
<div @click="pickedExercise.changeFileCodeRWAPI(file)" class="component w-auto h-auto p-2">
  {{file.name}}
</div>
</template>

<style scoped>

.component {
  border: 1px solid #F78764;
}

</style>
