import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
  "  <div id=\"app\">\n" +
  "    <TodoList :todos=\"todos\">\n" +
  "      <template #todo=\"{ todo }\">\n" +
  "        <TodoEntry\n" +
  "          :id=\"todo.id\"\n" +
  "          :title=\"todo.title\"\n" +
  "          :completed=\"todo.completed\"\n" +
  "          @completeChange=\"handleCompleteChange(todo.id, $event)\"\n" +
  "        />\n" +
  "      </template>\n" +
  "    </TodoList>\n" +
  "  </div>\n" +
  "</template>\n" +
  "<script>\n" +
  "import TodoList from \"./TodoList.vue\";\n" +
  "import TodoEntry from \"./TodoEntry.vue\";\n" +
  "export default {\n" +
  "  components: {\n" +
  "    TodoList,\n" +
  "    TodoEntry,\n" +
  "  },\n" +
  "  inject: ['axios'],\n" +
  "  async mounted() {\n" +
  "    const { data: todos } = await this.axios.get(`${this.$baseUrl}/todos`);\n" +
  "    this.todos = todos;\n" +
  "  },\n" +
  "  data() {\n" +
  "    return { todos: [] };\n" +
  "  },\n" +
  "  methods: {\n" +
  "    handleCompleteChange(id, newCompleted) {\n" +
  "      this.todos = this.todos.map((t) =>\n" +
  "        t.id === id ? { ...t, completed: newCompleted } : t\n" +
  "      );\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"


const TodoEntry = "<template>\n" +
  "  <div>\n" +
  "    <label>{{ title }}</label>\n" +
  "    <input type=\"checkbox\" :checked=\"completed\" @change=\"toggleCompletion()\" />\n" +
  "  </div>\n" +
  "</template>\n" +
  "<script>\n" +
  "export default {\n" +
  "  props: {\n" +
  "    id: {\n" +
  "      type: Number,\n" +
  "      required: true,\n" +
  "    },\n" +
  "    title: {\n" +
  "      type: String,\n" +
  "      required: true,\n" +
  "    },\n" +
  "    completed: {\n" +
  "      type: Boolean,\n" +
  "      default: false,\n" +
  "    },\n" +
  "  },\n" +
  "  inject: ['axios'],\n" +
  "  methods: {\n" +
  "    toggleCompletion() {\n" +
  "      const newCompleted = !this.completed;\n" +
  "      this.$emit(\"completeChange\", newCompleted);\n" +
  "      this.axios.patch(`${this.$baseUrl}/todos/${this.id}`, {\n" +
  "        completed: newCompleted,\n" +
  "      });\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"


const TodoList = "<template>\n" +
  "  <ul>\n" +
  "    <li v-for=\"todo in props.todos\" :key=\"todo.id\">\n" +
  "      <slot name=\"todo\" :todo=\"todo\" />\n" +
  "    </li>\n" +
  "  </ul>\n" +
  "</template>\n" +
  "<script setup>\n" +
  "const props = defineProps({\n" +
  "  todos: {\n" +
  "    type: Array,\n" +
  "    required: true\n" +
  "  }\n" +
  "})\n" +
  "</script>\n"



const Activity01 = {

  name: "Activity01",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part06/Activity01/App.vue",
      resetCode: App
    },

    "TodoEntry.vue": {
      name: "TodoEntry.vue",
      path: "Part06/Activity01/TodoEntry.vue",
      resetCode: TodoEntry
    },

    "TodoList.vue": {
      name: "TodoList.vue",
      path: "Part06/Activity01/TodoList.vue",
      resetCode: TodoList
    },


  }

}

export default Activity01
