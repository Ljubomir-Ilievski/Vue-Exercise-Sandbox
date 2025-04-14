<template>
  <Nav_Bar></Nav_Bar>
  <div class="flex justify-between">
  <ExercisePicker></ExercisePicker>
<!--   <dynamic-component :component="pickedExerciseStore.compiledComponent"></dynamic-component>-->
    <div>
      <iframe
        id="iframeExerciseApp"
        v-bind:src="ipExercisesApp"
        width="600px"
        height="500px"
        style="border: none"
      ></iframe>
    </div>
<!--    <CompileContent :content="appCode"></CompileContent>-->
    <div style="width: 500px">
      <div class="flex" style="overflow: auto; width: 100%;">
        <FileComponent v-for="file in pickedExerciseStore.currentExercise.components" :key="file" v-bind:file="file" />
      </div>
    <MonacoEditor style="border-top: 2px solid #F78764"
      :options="this.editorOptions"
      width="500"
      :height="400"
      v-model:value="pickedExerciseStore.appcode"
    ></MonacoEditor>
<!--      <Vue-monaco-editor
        v-model:value="pickedExerciseStore.appcode"
        theme="vs-dark"
        :width="500"
        :height="400"
        language="JavaScript"
      />-->
<!--      <Repl></Repl>-->

    </div>

  </div>
</template>

<script>

import Nav_Bar from '@/components/Nav_Bar.vue'
import ExercisePicker from '@/components/ExercisePicker.vue'
import { defineComponent } from 'vue'
import { compileScript, parse } from '@vue/compiler-sfc'
import { exercise01 } from '@/components/ExerciseStrings/Part01_raw_compiling/Exercise01.js'
import { app } from '@/components/ExerciseStrings/Part01_raw_compiling/Exercise01.js'
//import exercise01 from '@/components/exercise01.vue'
import CompileContent from '@/components/CompileContent.vue'
//import { sanitizeValueByType } from 'jsdom/lib/jsdom/living/helpers/form-controls.js'
import { PickedExerciseStore } from '@/stores/PickedExerciseStore.js'
import {compileVueComponent2} from '@/components/ExerciseStrings/compileVueComponent.js'
import DynamicComponent from '@/components/dynamicComponent.vue'
import FileComponent  from '@/components/FileComponent.vue'
import { fetchFileCode } from '@/MethodsRW/RWMethods.js'
import  MonacoEditor  from 'monaco-editor-vue3';
import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'
//import { VueMonacoEditor } from '@guolao/vue-monaco-editor'


export default {
  components: { Nav_Bar, ExercisePicker, MonacoEditor, FileComponent},
  data() {


    const editorOptions = {
      language: "html",
      theme: "vs-dark",

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
