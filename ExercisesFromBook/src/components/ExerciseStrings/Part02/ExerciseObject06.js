import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise2-06.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div class=\"container\">\n" +
  "    <h1>Methods vs watchers vs computed props</h1>\n" +
  "\n" +
  "    <div class=\"col\">\n" +
  "      <input\n" +
  "        type=\"text\"\n" +
  "        placeholder=\"Search with method\"\n" +
  "        v-model=\"input\"\n" +
  "        @keyup=\"searchMethod\"\n" +
  "      />\n" +
  "\n" +
  "      <ul>\n" +
  "        <li v-for=\"(item, i) in methodFilterList\" :key=\"i\">{{ item }}</li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "\n" +
  "    <div class=\"col\">\n" +
  "      <input type=\"text\" placeholder=\"Search with computed\" v-model=\"input2\" />\n" +
  "\n" +
  "      <ul>\n" +
  "        <li v-for=\"(item, i) in computedList\" :key=\"i\">{{ item }}</li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "\n" +
  "    <div class=\"col\">\n" +
  "      <input type=\"text\" placeholder=\"Search with watcher\" v-model=\"input3\" />\n" +
  "\n" +
  "      <ul>\n" +
  "        <li v-for=\"(item, i) in watchFilterList\" :key=\"i\">{{ item }}</li>\n" +
  "      </ul>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      // Shared\n" +
  "      frameworkList: [\n" +
  "        \"Vue\",\n" +
  "        \"React\",\n" +
  "        \"Backbone\",\n" +
  "        \"Ember\",\n" +
  "        \"Knockout\",\n" +
  "        \"jQuery\",\n" +
  "        \"Angular\",\n" +
  "      ],\n" +
  "\n" +
  "      // Method\n" +
  "      input: \"\",\n" +
  "      methodFilterList: [],\n" +
  "      // Computed\n" +
  "      input2: \"\",\n" +
  "      // Watcher\n" +
  "      input3: \"\",\n" +
  "      watchFilterList: [],\n" +
  "    };\n" +
  "  },\n" +
  "  created() {\n" +
  "    this.searchMethod();\n" +
  "  },\n" +
  "  watch: {\n" +
  "    input3: {\n" +
  "      handler() {\n" +
  "        this.watchFilterList = this.frameworkList.filter((item) =>\n" +
  "          item.toLowerCase().includes(this.input3.toLowerCase())\n" +
  "        );\n" +
  "      },\n" +
  "      immediate: true,\n" +
  "    },\n" +
  "  },\n" +
  "  computed: {\n" +
  "    computedList() {\n" +
  "      return this.frameworkList.filter((item) => {\n" +
  "        return item.toLowerCase().includes(this.input2.toLowerCase());\n" +
  "      });\n" +
  "    },\n" +
  "  },\n" +
  "  methods: {\n" +
  "    searchMethod() {\n" +
  "      this.methodFilterList = this.frameworkList.filter((item) =>\n" +
  "        item.toLowerCase().includes(this.input.toLowerCase())\n" +
  "      );\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style scoped>\n" +
  ".container {\n" +
  "  margin: 0 auto;\n" +
  "  padding: 30px;\n" +
  "  max-width: 600px;\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "}\n" +
  ".col {\n" +
  "  width: 33%;\n" +
  "  height: 100%;\n" +
  "  float: left;\n" +
  "}\n" +
  "input {\n" +
  "  padding: 10px 6px;\n" +
  "  margin: 20px 10px 10px 0;\n" +
  "}\n" +
  "</style>\n"


const wholeExerciseObject06 = {


  name: "Exercise06",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part02/Exercise06/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part02/Exercise06/Exercise2-06.vue",
      resetCode: exercise
    },

  }


}

export default wholeExerciseObject06;
