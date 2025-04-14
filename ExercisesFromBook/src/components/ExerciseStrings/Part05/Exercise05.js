import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <PizzaItem />\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import PizzaItem from \"./PizzaItem.vue\";\n" +
"</script>\n"


const PizzaItem = "<template>\n" +
"  <div class=\"container\">\n" +
"    <h1>{{ pizza.name }}</h1>\n" +
"    <div class=\"campaign-wrapper\">\n" +
"      Monday Special: {{ discount }}% off!\n" +
"      <strike>Was ${{ pizza.price }}</strike>\n" +
"      <strong> Now at ${{ newPrice }} ONLY</strong>\n" +
"    </div>\n" +
"    <button @click=\"updateDiscount\" class=\"decrease-btn\">Get a discount!</button>\n" +
"    <button @click=\"increasePrice\" class=\"increase-btn\">Increase the price!</button>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import { ref, reactive, watch } from \"vue\";\n" +
"\n" +
"const discount = ref(5);\n" +
"const pizza = reactive({\n" +
"  name: \"Pepperoni Pizza\",\n" +
"  price: 10,\n" +
"});\n" +
"const newPrice = ref(pizza.price);\n" +
"\n" +
"watch(\n" +
"  discount,\n" +
"  (newValue) => {\n" +
"    newPrice.value = pizza.price - (pizza.price * newValue) / 100;\n" +
"  },\n" +
"  { immediate: true\n" +
"  }\n" +
");\n" +
"\n" +
"const updateDiscount = () => {\n" +
"  discount.value = discount.value + 5;\n" +
"};\n" +
"\n" +
"const increasePrice = () => {\n" +
"  pizza.price = pizza.price + 5;\n" +
"};\n" +
"\n" +
"watch(\n" +
"  () => pizza.price,\n" +
"  (newValue) => {\n" +
"    newPrice.value = newValue - (newValue * discount.value) / 100;\n" +
"  }\n" +
");\n" +
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
".campaign-wrapper {\n" +
"  margin: 20px 0;\n" +
"  display: flex;\n" +
"  flex-direction: column;\n" +
"}\n" +
"\n" +
"button {\n" +
"  display: inline-block;\n" +
"  border-radius: 10px;\n" +
"  font-size: 14px;\n" +
"  color: white;\n" +
"  padding: 10px 20px;\n" +
"  text-decoration: none;\n" +
"  margin-inline-end: 10px;\n" +
"}\n" +
"\n" +
".increase-btn {\n" +
"  background: rgb(34, 100, 241);\n" +
"}\n" +
"\n" +
".decrease-btn {\n" +
"  background: rgb(241, 34, 34);\n" +
"}\n" +
"</style>\n"


const Exercise05 = {

        name: "Exercise05",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part05/Exercise05/App.vue",
            resetCode: App
            },

            "PizzaItem.vue": {
            name: "PizzaItem.vue",
            path: "Part05/Exercise05/PizzaItem.vue",
            resetCode: PizzaItem
            },

        }

    }

    export default Exercise05
