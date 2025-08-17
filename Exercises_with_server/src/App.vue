<script>
import App from './components/ExerciseStrings/Part02/Exercise01/App.vue'

export default {

  data(){
    return {
      compiledComponent: null
    }
  },

  beforeMount() {

    let exercisePath = localStorage.getItem("exercisePath")
    if (exercisePath != null) {
      import(exercisePath)
        .then(promise => this.compiledComponent = promise.default)
        .catch(e => console.log(e))
    }
    else {
      this.compiledComponent = App   //Inicialise to The First Lecture Exercise
    }

    window.addEventListener('message', (e) => {
        if (e.data.action === 'ChangeExercise') {
          let exercisePath = e.data["exercisePath"]
          exercisePath = "./components/ExerciseStrings/" + exercisePath
          localStorage.setItem('exercisePath', exercisePath)
             import(exercisePath)
            .then(promise => this.compiledComponent = promise.default)
               .catch(e => console.log(e))
          if (e.data.routerPath !== null){
            console.log( "ROUTERPATH","./components/ExerciseStrings/" + e.data.routerPath)
            localStorage.setItem("routerPath", "./components/ExerciseStrings/" + e.data.routerPath)
          }
          location.reload()
        }
        if (e.data.action === 'UpdateExercise') {
            location.reload()
        }


    })

  },
}
</script>

<template>
  <component :is="this.compiledComponent"></component>
</template>

<style scoped></style>
