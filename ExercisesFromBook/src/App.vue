<template>
  <Nav_Bar></Nav_Bar>
  <div class="flex justify-between">
  <ExercisePicker></ExercisePicker>
    <div style="margin-left: auto; margin-right: auto; flex-grow: 1; min-width: 350px; height: 90vh;">
      <iframe
        id="iframeExerciseApp"
        v-bind:src="ipExercisesApp"
        width="100%"
        height="100%"
        style="border: none"
      ></iframe>
    </div>

    <div style="width: 40vw; height: 85vh;">
      <div class="flex" style="overflow: auto; width: 100%;">
        <FileComponent v-for="file in pickedExerciseStore.currentExercise.components" :key="file" v-bind:file="file" />
      </div>
    <MonacoEditor style="border-top: 2px solid #F78764;"
      :options="this.editorOptions"
      v-model:value="pickedExerciseStore.appcode"
    ></MonacoEditor>

    </div>

  </div>
</template>

<script>

import Nav_Bar from '@/components/Nav_Bar.vue'
import ExercisePicker from '@/components/ExercisePicker.vue'
import { PickedExerciseStore } from '@/stores/PickedExerciseStore.js'
import FileComponent  from '@/components/FileComponent.vue'
import { fetchFileCode } from '@/MethodsRW/RWMethods.js'
import  MonacoEditor  from 'monaco-editor-vue3';



export default {
  components: { Nav_Bar, ExercisePicker, MonacoEditor, FileComponent},
  data() {


    const editorOptions = {
      language: "html",
      theme: "vs-dark",
      automaticLayout: true,

    };
    return {
      pickedExerciseStore: PickedExerciseStore(),
      ipExercisesApp: "http://localhost:5173",
      editorOptions: editorOptions

    }
  },

  beforeMount() {
    fetchFileCode(this.pickedExerciseStore.currentExercise.components[this.pickedExerciseStore.currentActiveFile].path)
      .then(text => this.pickedExerciseStore.appcode = text)
  },

};
</script>

<style>


</style>
