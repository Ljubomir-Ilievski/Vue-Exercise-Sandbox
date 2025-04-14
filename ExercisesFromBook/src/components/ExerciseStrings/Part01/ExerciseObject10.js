import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-10.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<template>\n" +
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
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      list: [\n" +
  "        \"Apex Legends\",\n" +
  "        \"A Plague Tale: Innocence\",\n" +
  "        \"ART SQOOL\",\n" +
  "        \"Baba Is You\",\n" +
  "        \"Devil May Cry 5\",\n" +
  "        \"The Division 2\",\n" +
  "        \"Hypnospace Outlaw\",\n" +
  "        \"Katana ZERO\",\n" +
  "      ],\n" +
  "    };\n" +
  "  },\n" +
  "  methods: {\n" +
  "    deleteItem(value) {\n" +
  "      this.list = this.list.filter((item) => item !== value);\n" +
  "    },\n" +
  "  },\n" +
  "\n" +
  "  beforeCreate() {\n" +
  "    alert(\"beforeCreate: data is static, thats it\");\n" +
  "  },\n" +
  "  created() {\n" +
  "    alert(\"created: data and events ready, but no DOM\");\n" +
  "  },\n" +
  "  beforeMount() {\n" +
  "    alert(\"beforeMount: $el not ready\");\n" +
  "  },\n" +
  "  mounted() {\n" +
  "    alert(\"mounted: DOM ready to use\");\n" +
  "  },\n" +
  "  beforeUpdate() {\n" +
  "    alert(\n" +
  "      \"beforeUpdate: we know an update is about to happen, and have the data\"\n" +
  "    );\n" +
  "  },\n" +
  "  updated() {\n" +
  "    alert(\"updated: virtual DOM will update after you click OK\");\n" +
  "  },\n" +
  "  beforeUnmount() {\n" +
  "    alert(\"beforeDestroy: about to blow up this component\");\n" +
  "  },\n" +
  "  unmounted() {\n" +
  "    alert(\"destroyed: this component has been destroyed\");\n" +
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

const ExerciseObject10 = {


  name: "Exercise10",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise10/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise10/Exercise1-10.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject10;
