import { compileVueComponent2 } from '@/components/ExerciseStrings/compileVueComponent.js'


let exercise = "<template>\n" +
  "  <div>\n" +
  "    <h1 v-show=\"true\" v-once v-text=\"text\" />\n" +
  "    <h2 v-show=\"false\" v-html=\"html\" />\n" +
  "    <a\n" +
  "      :href=\"link.url\"\n" +
  "      :target=\"link.target\"\n" +
  "      :tabindex=\"link.tabindex\"\n" +
  "      v-text=\"link.title\"\n" +
  "    />\n" +
  "    <!-- <h1 v-if=\"false\" v-once v-text=\"text\" />\n" +
  "    <h2 v-else-if=\"false\" v-html=\"html\" /> -->\n" +
  "    <!-- <a\n" +
  "      v-else\n" +
  "      :href=\"link.url\"\n" +
  "      :target=\"link.target\"\n" +
  "      :tabindex=\"link.tabindex\"\n" +
  "      v-text=\"link.title\"\n" +
  "    /> -->\n" +
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
  "</style>"


let app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "//import Exercise from \"./components/Exercise1-03.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>"



const wholeExerciseObject03 = {

  name: "Exercise03",

  components: {
    Exercise: {
      name: "Exercise",
      code: exercise,

    },
    App: {
      name: "App",
      code: app,
      dependencies() {

        return [compileVueComponent2(this.parent.components.Exercise)];

      } ,
      stringDependencies: ["Exercise"],

    }
  }


}

wholeExerciseObject03.components.App.parent = wholeExerciseObject03

export default wholeExerciseObject03;

