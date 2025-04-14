import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise2-05.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div class=\"container\">\n" +
  "    <h1>Async fetch</h1>\n" +
  "\n" +
  "    <button @click=\"fetchAdvice()\">\n" +
  "      {{ loading ? \"Loading...\" : \"Learn something profound\" }}\n" +
  "    </button>\n" +
  "\n" +
  "    <blockquote v-if=\"quote\">{{ quote }}</blockquote>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import axios from \"axios\";\n" +
  "\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      loading: false,\n" +
  "      axiosResponse: {},\n" +
  "    };\n" +
  "  },\n" +
  "  computed: {\n" +
  "    quote() {\n" +
  "      return this.axiosResponse && this.axiosResponse.slip\n" +
  "        ? this.axiosResponse.slip.advice\n" +
  "        : null;\n" +
  "    },\n" +
  "  },\n" +
  "  methods: {\n" +
  "    async fetchAdvice() {\n" +
  "      this.loading = true;\n" +
  "      try {\n" +
  "        const response = await axios.get(\"https://api.adviceslip.com/advice\");\n" +
  "        this.axiosResponse = response.data;\n" +
  "      } catch (error) {\n" +
  "        console.log(error);\n" +
  "      } finally {\n" +
  "        setTimeout(() => {\n" +
  "          this.loading = false;\n" +
  "        }, 4000);\n" +
  "      }\n" +
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
  "blockquote {\n" +
  "  position: relative;\n" +
  "  width: 100%;\n" +
  "  margin: 50px auto;\n" +
  "  padding: 1.2em 30px 1.2em 30px;\n" +
  "  background: #ededed;\n" +
  "  border-left: 8px solid #78c0a8;\n" +
  "  font-size: 24px;\n" +
  "  color: #555555;\n" +
  "  line-height: 1.6;\n" +
  "}\n" +
  "</style>\n"


const wholeExerciseObject05 = {


  name: "Exercise05",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part02/Exercise05/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part02/Exercise05/Exercise2-05.vue",
      resetCode: exercise
    },

  }


}

export default wholeExerciseObject05;
