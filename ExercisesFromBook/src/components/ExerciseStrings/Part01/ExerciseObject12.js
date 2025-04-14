import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./components/Exercise1-12.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div>\n" +
  "    <h1 :class=\"$style.title\">{{ title }}</h1>\n" +
  "    <h2 :class=\"$style.subtitle\">{{ subtitle }}</h2>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      title: \"CSS module component!\",\n" +
  "      subtitle: \"The fourth exercise\",\n" +
  "    };\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style module>\n" +
  "h1,\n" +
  "h2 {\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "  text-align: center;\n" +
  "}\n" +
  ".title {\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "  color: #2c3e50;\n" +
  "  margin-top: 60px;\n" +
  "}\n" +
  ".subtitle {\n" +
  "  color: #4fc08d;\n" +
  "  font-style: italic;\n" +
  "}\n" +
  "</style>\n"

const ExerciseObject12 = {


  name: "Exercise12",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise12/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise12/Exercise1-12.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject12;
