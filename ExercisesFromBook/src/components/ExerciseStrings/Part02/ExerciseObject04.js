import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise2-04.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
  "  <div class=\"container\">\n" +
  "    <h1>Deep Watcher</h1>\n" +
  "    <div>\n" +
  "      <h4>{{ product.label }}</h4>\n" +
  "      <h5>${{ product.price }} (${{ discount }} Off)</h5>\n" +
  "    </div>\n" +
  "    <button @click=\"updatePrice\">Reduce Price!</button>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      discount: 0,\n" +
  "      product: {\n" +
  "        price: 25,\n" +
  "        label: \"Blue juice\",\n" +
  "      },\n" +
  "    };\n" +
  "  },\n" +
  "  methods: {\n" +
  "    updatePrice() {\n" +
  "      if (this.product.price < 1) return;\n" +
  "      this.product.price--;\n" +
  "    },\n" +
  "  },\n" +
  "  watch: {\n" +
  "    \"product.price\"() {\n" +
  "      this.discount++;\n" +
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
  "}\n" +
  "input {\n" +
  "  padding: 10px 6px;\n" +
  "  margin: 20px 10px 10px 0;\n" +
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


const wholeExerciseObject04 = {


  name: "Exercise04",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part02/Exercise04/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part02/Exercise04/Exercise2-04.vue",
      resetCode: exercise
    },

  }


}

export default wholeExerciseObject04;
