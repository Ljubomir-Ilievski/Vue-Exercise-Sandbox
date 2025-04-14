import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-07.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<script setup>\n" +
  "const information = {\n" +
  "  title: \"My list component information\",\n" +
  "  subtitle: \"Vue JS basics\",\n" +
  "  items: [\"Looping\", \"Data\", \"Methods\"],\n" +
  "};\n" +
  "</script>\n" +
  "<template>\n" +
  "  <div>\n" +
  "    <div v-for=\"(value, key) in information\" :key=\"key\">\n" +
  "      {{ key }}: {{ value.toString() }}\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n"

const ExerciseObject07 = {


  name: "Exercise07",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise07/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise07/Exercise1-07.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject07;
