import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-02.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
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
  "</style>\n"


const ExerciseObject02 = {


  name: "Exercise02",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise02/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise02/Exercise1-02.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject02;
