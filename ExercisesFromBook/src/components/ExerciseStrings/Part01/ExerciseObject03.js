import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-03.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div>\n" +
  "   <h1 v-show=\"true\" v-once v-text=\"text\" />\n" +
  "    <h2 v-show=\"false\" v-html=\"html\" />\n" +
  "    <a\n" +
  "      :href=\"link.url\"\n" +
  "      :target=\"link.target\"\n" +
  "      :tabindex=\"link.tabindex\"\n" +
  "      v-text=\"link.title\"\n" +
  "    />  \n" +
  "     <h1 v-if=\"false\" v-once v-text=\"text\" />\n" +
  "   <!-- <h2 v-else-if=\"false\" v-html=\"html\" /> \n" +
  "     <a\n" +
  "      v-else\n" +
  "      :href=\"link.url\"\n" +
  "      :target=\"link.target\"\n" +
  "      :tabindex=\"link.tabindex\"\n" +
  "      v-text=\"link.title\"\n" +
  "    />  -->\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      // v-text\n" +
  "      text: \"Directive text\",\n" +
  "      // v-html\n" +
  "      html: \"Stylise</br>HTML in<br/><b>your data</b>\",\n" +
  "      // v-bind\n" +
  "      link: {\n" +
  "        url: \"https://google.com\",\n" +
  "        target: \"_blank\",\n" +
  "        tabindex: \"0\",\n" +
  "        title: \"Go to Google\",\n" +
  "      },\n" +
  "    };\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style scoped>\n" +
  "h2 {\n" +
  "  margin: 40px 0 0;\n" +
  "  font-weight: normal;\n" +
  "}\n" +
  "a {\n" +
  "  display: block;\n" +
  "  margin-top: 40px;\n" +
  "}\n" +
  "</style>\n"

const ExerciseObject03 = {


  name: "Exercise03",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise03/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise03/Exercise1-03.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject03;
