import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-04.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <section>\n" +
  "    <div class=\"form\">\n" +
  "      <label>\n" +
  "        Name\n" +
  "        <input type=\"text\" v-model=\"name\" />\n" +
  "      </label>\n" +
  "      <label>\n" +
  "        Preferred javascript style\n" +
  "        <select name=\"language\" v-model=\"language\">\n" +
  "          <option value=\"Javascript\">JavaScript</option>\n" +
  "          <option value=\"TypeScript\">TypeScript</option>\n" +
  "          <option value=\"CoffeeScript\">CoffeeScript</option>\n" +
  "          <option value=\"Dart\">Dart</option>\n" +
  "        </select>\n" +
  "      </label>\n" +
  "    </div>\n" +
  "    <ul class=\"overview\">\n" +
  "      <li><strong>Overview</strong></li>\n" +
  "      <li>Name: {{ name }}</li>\n" +
  "      <li>Preference: {{ language }}</li>\n" +
  "    </ul>\n" +
  "  </section>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      name: \"\",\n" +
  "      language: \"\",\n" +
  "    };\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style>\n" +
  ".form {\n" +
  "  display: flex;\n" +
  "  justify-content: space-evenly;\n" +
  "  max-width: 800px;\n" +
  "  padding: 40px 20px;\n" +
  "  border-radius: 10px;\n" +
  "  margin: 0 auto;\n" +
  "  background: #ececec;\n" +
  "}\n" +
  "\n" +
  ".overview {\n" +
  "  display: flex;\n" +
  "  flex-direction: column;\n" +
  "  justify-content: space-evenly;\n" +
  "  max-width: 300px;\n" +
  "  margin: 40px auto;\n" +
  "  padding: 40px 20px;\n" +
  "  border-radius: 10px;\n" +
  "  border: 1px solid #ececec;\n" +
  "}\n" +
  "\n" +
  ".overview > li {\n" +
  "  list-style: none;\n" +
  "}\n" +
  "\n" +
  ".overview + li {\n" +
  "  margin-top: 20px;\n" +
  "}\n" +
  "</style>\n"

const ExerciseObject04 = {


  name: "Exercise04",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise04/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise04/Exercise1-04.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject04;
