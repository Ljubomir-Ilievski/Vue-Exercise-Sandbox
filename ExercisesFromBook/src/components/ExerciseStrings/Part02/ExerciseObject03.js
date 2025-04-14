import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise2-03.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div class=\"container\">\n" +
  "    <h1>Shop Watcher</h1>\n" +
  "    <div>\n" +
  "      Black Friday sale\n" +
  "      <strike>Was {{ oldDiscount }}%</strike>\n" +
  "      <strong> Now {{ discount }}% OFF</strong>\n" +
  "    </div>\n" +
  "    <button @click=\"updateDiscount\">Increase Discount!</button>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      oldDiscount: 0,\n" +
  "      discount: 5,\n" +
  "    };\n" +
  "  },\n" +
  "  methods: {\n" +
  "    updateDiscount() {\n" +
  "      this.discount = this.discount + 5;\n" +
  "    },\n" +
  "  },\n" +
  "  watch: {\n" +
  "    discount(newValue, oldValue) {\n" +
  "      this.oldDiscount = oldValue;\n" +
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
  "  margin: 0;\n" +
  "}\n" +
  "button {\n" +
  "  display: inline-block;\n" +
  "  background: rgb(235, 50, 50);\n" +
  "  border-radius: 10px;\n" +
  "  font-size: 14px;\n" +
  "  color: white;\n" +
  "  padding: 10px 20px;\n" +
  "  text-decoration: none;\n" +
  "}\n" +
  "</style>\n"


const wholeExerciseObject03 = {


  name: "Exercise03",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part02/Exercise03/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part02/Exercise03/Exercise2-03.vue",
      resetCode: exercise
    },

  }


}

export default wholeExerciseObject03;
