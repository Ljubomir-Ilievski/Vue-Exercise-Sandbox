import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <div id=\"app\">\n" +
"    <div v-for=\"todo in todos\" :key=\"todo.id\">\n" +
"      <ul>\n" +
"        <li>Title: {{ todo.title }}</li>\n" +
"        <li>Status: {{ todo.completed ? \"Completed\" : \"Not Completed\" }}</li>\n" +
"      </ul>\n" +
"    </div>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  async mounted() {\n" +
"    const { data: todos } = await this.$axios(\n" +
"      \"https://jsonplaceholder.typicode.com/todos\"\n" +
"    );\n" +
"    this.todos = todos;\n" +
"  },\n" +
"  data() {\n" +
"    return { todos: [] };\n" +
"  },\n" +
"};\n" +
"</script>\n"


const axios = "import axios from 'axios'\n" +
"export default {\n" +
"  install(app) {\n" +
"    app.config.globalProperties.$axios = axios\n" +
"    app.provide('axios', axios)\n" +
"  }\n" +
"}\n"


const main = "// import { createApp } from 'vue'\n" +
"// import App from './App.vue'\n" +
"// import axiosPlugin from './axios.js'\n" +
"//\n" +
"// import './assets/main.css'\n" +
"//\n" +
"// const app = createApp(App)\n" +
"// app.use(axiosPlugin)\n" +
"// app.mount('#app')\n"


const Exercise02 = {

        name: "Exercise02",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part06/Exercise02/App.vue",
            resetCode: App
            },

            "axios.js": {
            name: "axios.js",
            path: "Part06/Exercise02/axios.js",
            resetCode: axios
            },

            "main.js": {
            name: "main.js",
            path: "Part06/Exercise02/main.js",
            resetCode: main
            },

        }

    }

    export default Exercise02
