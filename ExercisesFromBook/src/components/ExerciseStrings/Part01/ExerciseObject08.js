import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-08.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div>\n" +
  "    <h1>Triggering Vue Methods</h1>\n" +
  "    <ul>\n" +
  "      <li v-for=\"n in 5\" :key=\"n\">\n" +
  "        <button @click=\"triggerAlert(n)\">Trigger {{ n }}</button>\n" +
  "      </li>\n" +
  "    </ul>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  methods: {\n" +
  "    triggerAlert(n) {\n" +
  "      alert(`${n} has been clicked`);\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style scoped>\n" +
  "ul {\n" +
  "  padding-left: 0;\n" +
  "}\n" +
  "li {\n" +
  "  display: block;\n" +
  "  list-style: none;\n" +
  "}\n" +
  "\n" +
  "li + li {\n" +
  "  margin-top: 10px;\n" +
  "}\n" +
  "\n" +
  "button {\n" +
  "  display: inline-block;\n" +
  "  background: #4fc08d;\n" +
  "  border-radius: 10px;\n" +
  "  color: white;\n" +
  "  padding: 10px 20px;\n" +
  "  text-decoration: none;\n" +
  "}\n" +
  "</style>\n"

const ExerciseObject08 = {


  name: "Exercise08",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise08/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise08/Exercise1-08.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject08;
