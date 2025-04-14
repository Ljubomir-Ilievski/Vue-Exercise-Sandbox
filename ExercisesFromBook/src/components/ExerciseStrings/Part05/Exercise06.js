import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <Exercise />\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import Exercise from \"./Exercise5-06.vue\";\n" +
"</script>\n"


const Exercise506 = "<template>\n" +
"  <div>\n" +
"    <h1>Vue Lifecycle hooks</h1>\n" +
"    <ul>\n" +
"      <li v-for=\"(item, n) in list\" :key=\"n\">\n" +
"        {{ item }}\n" +
"        <button @click=\"deleteItem(item)\">Delete</button>\n" +
"      </li>\n" +
"    </ul>\n" +
"\n" +
"    <strong\n" +
"      >Add a new item in the list array and save while running localhost to\n" +
"      preview the destroy hooks</strong\n" +
"    >\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import {\n" +
"  ref,\n" +
"  onMounted,\n" +
"  onBeforeMount,\n" +
"  onUpdated,\n" +
"  onBeforeUpdate,\n" +
"  onUnmounted,\n" +
"  onBeforeUnmount,\n" +
"} from \"vue\";\n" +
"\n" +
"const list = ref([\n" +
"  \"Apex Legends\",\n" +
"  \"A Plague Tale: Innocence\",\n" +
"  \"ART SQOOL\",\n" +
"  \"Baba Is You\",\n" +
"  \"Devil May Cry 5\",\n" +
"  \"The Division 2\",\n" +
"  \"Hypnospace Outlaw\",\n" +
"  \"Katana ZERO\",\n" +
"]);\n" +
"\n" +
"const deleteItem = (value) => {\n" +
"  list.value = list.value.filter((item) => item !== value);\n" +
"};\n" +
"\n" +
"onMounted(() => {\n" +
"  alert(\"mounted: DOM ready to use\");\n" +
"});\n" +
"\n" +
"onBeforeMount(() => {\n" +
"  alert(\"beforeMount: DOM not ready to use\");\n" +
"});\n" +
"\n" +
"onUpdated(() => {\n" +
"  alert(\"updated: virtual DOM will update after you click OK\");\n" +
"});\n" +
"\n" +
"onBeforeUpdate(() => {\n" +
"  alert(\n" +
"    \"beforeUpdate: we know an update is about to happen, and have the data\"\n" +
"  );\n" +
"});\n" +
"\n" +
"onUnmounted(() => {\n" +
"  alert(\"unmouted: this component has been destroyed\");\n" +
"});\n" +
"\n" +
"onBeforeUnmount(() => {\n" +
"  alert(\"beforeUnmount: about to blow up this component\");\n" +
"});\n" +
"</script>\n" +
"\n" +
"<style scoped>\n" +
"ul {\n" +
"  padding-left: 0;\n" +
"}\n" +
"li {\n" +
"  display: block;\n" +
"  list-style: none;\n" +
"  margin-top: 10px;\n" +
"}\n" +
"\n" +
"button {\n" +
"  display: inline-block;\n" +
"  background: rgb(235, 50, 50);\n" +
"  padding: 5px 10px;\n" +
"  border-radius: 10px;\n" +
"  font-size: 10px;\n" +
"  color: white;\n" +
"  text-transform: uppercase;\n" +
"  text-decoration: none;\n" +
"}\n" +
"</style>\n"


const Exercise06 = {

        name: "Exercise06",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part05/Exercise06/App.vue",
            resetCode: App
            },

            "Exercise5-06.vue": {
            name: "Exercise5-06.vue",
            path: "Part05/Exercise06/Exercise5-06.vue",
            resetCode: Exercise506
            },

        }

    }

    export default Exercise06
