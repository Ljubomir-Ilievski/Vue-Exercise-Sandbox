import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const wholeExerciseObject01 = {


  name: "Exercise01",
 // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part02/Exercise01/App.vue",

    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part02/Exercise01/Exercise2-01.vue"
    },

  }


}

export default wholeExerciseObject01;
