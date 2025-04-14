import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-05.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div>\n" +
  "    <h1>Looping through arrays</h1>\n" +
  "    <ul>\n" +
  "      <li v-for=\"(item, n) in interests\" :key=\"n\">\n" +
  "        {{ item }}\n" +
  "      </li>\n" +
  "    </ul>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      interests: [\"TV\", \"Games\", \"Sports\"],\n" +
  "    };\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style scoped>\n" +
  "li {\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "  color: #2c3e50;\n" +
  "  margin-top: 10px;\n" +
  "}\n" +
  "\n" +
  "h1 {\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "  color: #2c3e50;\n" +
  "  margin-top: 60px;\n" +
  "}\n" +
  "</style>\n"

const ExerciseObject05 = {


  name: "Exercise05",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise05/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise05/Exercise1-05.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject05;
