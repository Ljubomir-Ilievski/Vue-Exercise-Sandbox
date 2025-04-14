import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise3-02.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div id=\"app\" class=\"container\">\n" +
  "    <h1>Vue devtools debugging</h1>\n" +
  "\n" +
  "    <input type=\"text\" placeholder=\"Filter list\" v-model=\n" +
  "      \"input\" />\n" +
  "\n" +
  "    <ul>\n" +
  "      <li v-for=\"(item, i) in computedList\" :key=\"i\">{{ item }}\n" +
  "      </li>\n" +
  "    </ul>\n" +
  "  </div>\n" +
  "</template>\n" +
  "<script>\n" +
  "export default {\n" +
  "  name: 'HelloWorld',\n" +
  "  data() {\n" +
  "    return {\n" +
  "      frameworks: [\n" +
  "        'Vue',\n" +
  "        'React',\n" +
  "        'Backbone',\n" +
  "        'Ember',\n" +
  "        'Knockout',\n" +
  "        'jQuery',\n" +
  "        'Angular',\n" +
  "      ],\n" +
  "      input: '',\n" +
  "    }\n" +
  "  },\n" +
  "  computed: {\n" +
  "    computedList() {\n" +
  "      return this.frameworks.filter(item => {\n" +
  "        return item.toLowerCase().includes(this.input.\n" +
  "          toLowerCase())\n" +
  "      })\n" +
  "    },\n" +
  "  },\n" +
  "}\n" +
  "</script>\n" +
  "<style>\n" +
  ".container {\n" +
  "  margin: 0 auto;\n" +
  "  padding: 30px;\n" +
  "  max-width: 600px;\n" +
  "}\n" +
  "/* input {\n" +
  "  padding: 10px 6px;\n" +
  "  margin: 20px 10px 10px 0;\n" +
  "} */\n" +
  "</style>\n"


const ExerciseObject02 = {


  name: "Exercise02",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part03/Exercise02/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part03/Exercise02/Exercise3-02.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject02;
