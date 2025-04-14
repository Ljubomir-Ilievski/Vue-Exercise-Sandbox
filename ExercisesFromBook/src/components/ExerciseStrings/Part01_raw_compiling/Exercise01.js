//import compileVueComponent from '@/components/ExerciseStrings/compileVueComponent.js'
import { compileVueComponent2 } from '@/components/ExerciseStrings/compileVueComponent.js'


export const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "//import Exercise from \"./components/Exercise1-01.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>"


export const exercise01 = "<template>\n" +
  "  <h1>My first component!!!!!!</h1>\n" +
  "</template>\n" +
  "<script>\n" +
  "export default {};\n" +
  "</script>\n" +
  "<style>\n" +
  "h1 {\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "  text-align: center;\n" +
  "  color: #2c3e50;\n" +
  "  margin-top: 60px;\n" +
  "}\n" +
  "</style>"

const wholeExerciseObject = {

  name: "Exercise01",

  components: {
    Exercise: {
    name: "Exercise",
    code: exercise01,

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
wholeExerciseObject.components.App.parent = wholeExerciseObject

export default wholeExerciseObject;
