import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-11.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "<style lang=\"scss\">\n" +
  "@import './global.scss';\n" +
  "</style>\n" +
  "\n"

const exercise = "<template>\n" +
  "  <div>\n" +
  "    <h1>{{ title }}</h1>\n" +
  "    <h2>{{ subtitle }}</h2>\n" +
  "    <ul>\n" +
  "      <li>{{ items[0] }}</li>\n" +
  "      <li>{{ items[1] }}</li>\n" +
  "      <li>{{ items[2] }}</li>\n" +
  "    </ul>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      title: \"My list component!\",\n" +
  "      subtitle: \"Vue JS basics\",\n" +
  "      items: [\"Item 1\", \"Item 2\", \"Item 3\"],\n" +
  "    };\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style scoped lang=\"scss\">\n" +
  "@import './typography.scss';\n" +
  "\n" +
  "h1 {\n" +
  "  font-size: 50px;\n" +
  "  color: $color-blue; // Use variables from imported stylesheets\n" +
  "}\n" +
  "</style>\n"

const globalscss = "body {\n" +
  "    font-family: 'Avenir', Helvetica, Arial, sans-serif;\n" +
  "    margin: 0;\n" +
  "}\n"

const typographyscss = "/* typography.scss */\n" +
  "$color-green: #4fc08d;\n" +
  "$color-grey: #2c3e50;\n" +
  "$color-blue: #003366;\n" +
  "h1 {\n" +
  "  margin-top: 60px;\n" +
  "  text-align: center;\n" +
  "  color: $color-grey;\n" +
  "\n" +
  "  + h2 {\n" +
  "    text-align: center;\n" +
  "    color: $color-green;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  "ul {\n" +
  "  display: block;\n" +
  "  margin: 0 auto;\n" +
  "  max-width: 400px;\n" +
  "  padding: 30px;\n" +
  "  border: 1px solid rgba(0,0,0,0.25);\n" +
  "\n" +
  "  > li {\n" +
  "    color: $color-grey;\n" +
  "    margin-bottom: 4px;\n" +
  "  }\n" +
  "}\n"

const ExerciseObject11 = {


  name: "Exercise11",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise11/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise11/Exercise1-11.vue",
      resetCode: exercise
    },
    "global.scss": {
      name: "global.scss",
      path: "Part01/Exercise11/global.scss",
      resetCode: globalscss
    },
    "typography.scss": {
      name: "typography.scss",
      path: "Part01/Exercise11/typography.scss",
      resetCode: typographyscss
    },

  }


}

export default ExerciseObject11;
