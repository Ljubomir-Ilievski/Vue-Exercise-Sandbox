import { compileVueComponent2 } from '@/components/ExerciseStrings/compileVueComponent.js'
import { exercise01 } from '@/components/ExerciseStrings/Part01_raw_compiling/Exercise01.js'


let exercise = "<template>\n" +
  "  <div>\n" +
  "    <h1>{{ isUppercase ? title.toUpperCase() : title }}</h1>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      title: \"My first component!\",\n" +
  "      isUppercase: false,\n" +
  "    };\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "//<script setup>\n" +
  "// const title ='My first component!';\n" +
  "// const isUppercase = true;\n" +
  "// </script>\n" +
  "<style>\n" +
  "h1 {\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "  text-align: center;\n" +
  "  color: #2c3e50;\n" +
  "  margin-top: 60px;\n" +
  "}\n" +
  "</style>"

let app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "//import Exercise from \"./components/Exercise1-02.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>"


const wholeExerciseObject02 = {

  name: "Exercise02",

  components: {
    "Exercise.vue": {
      name: "Exercise.vue",
      code: exercise,

    },
    App: {
      name: "App",
      code: app,
      dependencies() {

        return [compileVueComponent2(this.parent.components.Exercise)];

      } ,
      stringDependencies: ["Exercise"],

    }
  }


}
wholeExerciseObject02.components.App.parent = wholeExerciseObject02

export default wholeExerciseObject02;
