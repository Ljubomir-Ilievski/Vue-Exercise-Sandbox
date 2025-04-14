import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const appCode = "<template>\n" +
  "  <div class=\"container\">\n" +
  "    <h2>Shopping list</h2>\n" +
  "    <div class=\"user-input\">\n" +
  "      <input\n" +
  "        placeholder=\"Press enter to add new item\"\n" +
  "        v-model=\"input\"\n" +
  "        @keyup.enter=\"addItem\"\n" +
  "        ref=\"input\"\n" +
  "      />\n" +
  "      <button @click=\"addItem\">Add item</button>\n" +
  "    </div>\n" +
  "\n" +
  "    <ul v-if=\"shoppingList\">\n" +
  "      <li v-for=\"(item, i) in shoppingList\" :key=\"i\" class=\"item\">\n" +
  "        <span>{{ item }}</span>\n" +
  "        <button class=\"button--remove\" @click=\"deleteItem(i)\">Remove</button>\n" +
  "      </li>\n" +
  "    </ul>\n" +
  "    <br />\n" +
  "    <button class=\"button--delete\" @click=\"deleteAll()\">Delete all</button>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "export default {\n" +
  "  data() {\n" +
  "    return {\n" +
  "      input: \"\",\n" +
  "      shoppingList: [],\n" +
  "    };\n" +
  "  },\n" +
  "  methods: {\n" +
  "    addItem() {\n" +
  "      // Don't allow adding to the list if empty\n" +
  "      if (!this.input) return;\n" +
  "      this.shoppingList.push(this.input);\n" +
  "      // Clear the input after adding\n" +
  "      this.input = \"\";\n" +
  "      // Focus the input element again for quick typing!\n" +
  "      this.$refs.input.focus();\n" +
  "    },\n" +
  "    deleteItem(i) {\n" +
  "      if (i < 0 || i > this.shoppingList.length) return;\n" +
  "\n" +
  "      this.shoppingList = this.shoppingList.filter(\n" +
  "        (item, index) => index !== i\n" +
  "      );\n" +
  "    },\n" +
  "    deleteAll() {\n" +
  "      this.shoppingList = [];\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style>\n" +
  ".container {\n" +
  "  max-width: 600px;\n" +
  "  margin: 80px auto;\n" +
  "}\n" +
  "\n" +
  ".item {\n" +
  "  display: flex;\n" +
  "  justify-content: space-between;\n" +
  "}\n" +
  "\n" +
  "// Type\n" +
  ".h2 {\n" +
  "  font-size: 21px;\n" +
  "}\n" +
  "\n" +
  ".user-input {\n" +
  "  display: flex;\n" +
  "  align-items: center;\n" +
  "  padding-bottom: 20px;\n" +
  "  input {\n" +
  "    width: 100%;\n" +
  "    padding: 10px 6px;\n" +
  "    margin-right: 10px;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  ".item {\n" +
  "  display: flex;\n" +
  "  align-items: center;\n" +
  "}\n" +
  "\n" +
  "// Buttons\n" +
  "button {\n" +
  "  appearance: none;\n" +
  "  padding: 10px;\n" +
  "\n" +
  "  font-weight: bold;\n" +
  "  border-radius: 10px;\n" +
  "  border: none;\n" +
  "  background: $color-grey;\n" +
  "  color: white;\n" +
  "  white-space: nowrap;\n" +
  "\n" +
  "  + button {\n" +
  "    margin-left: 10px;\n" +
  "  }\n" +
  "}\n" +
  "\n" +
  ".button--delete {\n" +
  "  display: block;\n" +
  "  margin: 0 auto;\n" +
  "  background: red;\n" +
  "}\n" +
  "\n" +
  ".button--remove {\n" +
  "  background: none;\n" +
  "  color: red;\n" +
  "  text-transform: uppercase;\n" +
  "  font-size: 11px;\n" +
  "  align-self: flex-end;\n" +
  "}\n" +
  "\n" +
  "ul {\n" +
  "  display: block;\n" +
  "  margin: 0 auto;\n" +
  "  padding: 30px;\n" +
  "  border: 1px solid rgba(0, 0, 0, 0.25);\n" +
  "\n" +
  "  > li {\n" +
  "    color: $color-grey;\n" +
  "    margin-bottom: 4px;\n" +
  "  }\n" +
  "}\n" +
  "</style>\n"

const Activity01 = {


  name: "Activity01",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Activity01/App.vue",
      resetCode: appCode
    },

  }


}

export default Activity01;
