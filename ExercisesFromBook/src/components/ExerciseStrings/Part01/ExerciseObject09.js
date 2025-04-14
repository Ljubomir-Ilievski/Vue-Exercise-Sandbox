import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-09.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div>\n" +
  "    <h1>Returning Methods</h1>\n" +
  "\n" +
  "    <div>Cart({{ totalItems }}) {{ formatCurrency(totalCost) }}</div>\n" +
  "\n" +
  "    <ul>\n" +
  "      <li v-for=\"n in 5\" :key=\"n\">\n" +
  "        <button @click=\"addToCart(n)\">Add {{ formatCurrency(n) }}</button>\n" +
  "      </li>\n" +
  "    </ul>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      totalItems: 0,\n" +
  "      totalCost: 0,\n" +
  "    }\n" +
  "  },\n" +
  "  methods: {\n" +
  "    addToCart(n) {\n" +
  "      this.totalItems = this.totalItems + 1\n" +
  "      this.totalCost = this.totalCost + n\n" +
  "    },\n" +
  "    formatCurrency(val) {\n" +
  "      return `$${val.toFixed(2)}`\n" +
  "    },\n" +
  "  },\n" +
  "}\n" +
  "</script>\n" +
  "\n" +
  "<style scoped>\n" +
  "ul {\n" +
  "  padding-left: 0;\n" +
  "}\n" +
  "li {\n" +
  "  display: block;\n" +
  "  list-style: none;\n" +
  "  margin-block-start: 10px;\n" +
  "}\n" +
  "\n" +
  "button {\n" +
  "  display: inline-block;\n" +
  "  background: rgb(235, 50, 50);\n" +
  "  border-radius: 10px;\n" +
  "  font-size: 10px;\n" +
  "  color: white;\n" +
  "  padding: 5px 10px;\n" +
  "  text-decoration: none;\n" +
  "}\n" +
  "</style>\n"

const ExerciseObject09 = {


  name: "Exercise09",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise09/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise09/Exercise1-09.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject09;
