import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const appCode = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-01.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exerciseCode = "<template>\n" +
  "  <h1>My first component!!!!!</h1>\n" +
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
  "</style>\n"

const ExerciseObject01 = {


  name: "Exercise01",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise01/App.vue",
      resetCode: appCode
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise01/Exercise1-01.vue",
      resetCode: exerciseCode
    },

  }


}

export default ExerciseObject01;
