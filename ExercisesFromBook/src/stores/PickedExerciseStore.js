//import { app, exercise01 } from '@/components/ExerciseStrings/Part01_raw_compiling/Exercise01.js'
import { defineStore } from 'pinia'
import  wholeExerciseObject01 from '@/components/ExerciseStrings/Part02/ExerciseObject01.js'
import { compileVueComponent2 } from '@/components/ExerciseStrings/compileVueComponent.js'
import { fetchFileCode, writeFileCode } from '@/MethodsRW/RWMethods.js'
import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'
import { parse } from '@vue/compiler-sfc'
import { warn } from 'vue'
//import compileVueComponent from '@/components/ExerciseStrings/compileVueComponent.js'

//import {readCodeFromExercise, writeCodeToExercise} from "@/components/ExerciseStrings/ReadWriteAPIS.js"


export const PickedExerciseStore = defineStore("PickedExerciseStore", {
  state() {
    const pickedExerciseObject = wholeExerciseObject01



    return {
      /*currentExercise: wholeExerciseObject01,
      appcode: wholeExerciseObject01.components.App.code,
      compiledComponent: compileVueComponent2(pickedExerciseObject.components.App),
      currentActiveFile: 'App'*/

      currentExercise: wholeExerciseObject01,
      appcode: null,
      currentActiveFile: App_Name,
      compiledComponent: pickedExerciseObject.AppComponent,
      ipExerciseServer: "http://localhost:5173"
    }
  },
  actions: {
    changeExercise(exercise) {
     this.currentExercise = exercise
     this.appcode = exercise.components.App.code
     this.compiledComponent = compileVueComponent2(exercise.components.App)
    },
    changeFileCode(file) {
      this.currentActiveFile = file.name
      this.appcode = file.code
    },
    compileComponent() {
      this.currentExercise.components[this.currentActiveFile].code = this.appcode;
      this.compiledComponent = compileVueComponent2(this.currentExercise.components.App);
    },

    changeFileCodeRWAPI(file) {
      localStorage.setItem("activeFilePath", file.path);
      this.currentActiveFile = file.name
      fetchFileCode(file.path).then(result => this.appcode = result)
    },

    compileComponentRWAPI() {
      try {
        let {descriptor, errors} = parse(this.appcode)

        if (errors.length > 0) {
          alert(errors)
        }
        else {
          let currentActiveFilePath =  this.currentExercise.components[this.currentActiveFile].path
          //  writeCodeToExercise(currentActiveFilePath, this.appcode);
          writeFileCode(currentActiveFilePath, this.appcode).then(r => r)
          document.getElementById("iframeExerciseApp").contentWindow.postMessage({action: "UpdateExercise"}, this.ipExerciseServer)
        }
      }
      catch(err) {
        warn("There Was An Error! while compiling" + err.message)
      }

    },
    resetComponentCode(){
      let resetCode = this.currentExercise.components[this.currentActiveFile].resetCode
      let currentActiveFilePath =  this.currentExercise.components[this.currentActiveFile].path
      writeFileCode(currentActiveFilePath, resetCode).then(r => r)
      document.getElementById("iframeExerciseApp").contentWindow.postMessage({action: "UpdateExercise"}, this.ipExerciseServer)
      this.appcode = resetCode
    },


    changeExerciseRWAPI(exercise) {
      localStorage.setItem("activeFilePath", exercise.components[App_Name].path);
      localStorage.setItem("Exercise", JSON.stringify(exercise));
      let routerPath = exercise.routerPath ? exercise.routerPath : null
      console.log("ROUTER PATH WHILE CHANGING", routerPath)
      document.getElementById("iframeExerciseApp").contentWindow.postMessage({action: "ChangeExercise", exercisePath: exercise.components[App_Name].path,
                                                                                                  routerPath: routerPath}, this.ipExerciseServer)
      this.currentExercise = exercise
     // this.appcode = readCodeFromExercise(exercise.components.App.path);
      fetchFileCode(exercise.components[App_Name].path).then(result => this.appcode = result)
      this.currentActiveFile = App_Name
     // this.compiledComponent = exercise.AppComponent;
    },

  }
})
