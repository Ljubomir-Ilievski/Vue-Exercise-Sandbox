import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <div>\n" +
"    <div id=\"nav\">\n" +
"      <nav>\n" +
"        <RouterLink to=\"/\">Home</RouterLink> |\n" +
"        <RouterLink to=\"/messages\">Messages</RouterLink>\n" +
"      </nav>\n" +
"    </div>\n" +
"    <router-view v-slot=\"{ Component, route }\">\n" +
"      <transition :name=\"route.meta.transition || transition\" :mode=\"mode\">\n" +
"        <component :is=\"Component\" />\n" +
"      </transition>\n" +
"    </router-view>\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import { RouterLink, RouterView } from \"vue-router\";\n" +
"\n" +
"const transition = \"fade\";\n" +
"const mode = \"out-in\";\n" +
"</script>\n" +
"\n" +
"<style>\n" +
".fade-enter,\n" +
".fade-leave-to {\n" +
"  opacity: 0;\n" +
"}\n" +
"\n" +
".fade-enter-active,\n" +
".fade-leave-active {\n" +
"  transition: opacity 5s ease-in;\n" +
"}\n" +
"\n" +
"/**Zoom animation */\n" +
".zoom-enter-active,\n" +
".zoom-leave-active {\n" +
"  animation-duration: 5.5s;\n" +
"  animation-fill-mode: both;\n" +
"  animation-name: zoom;\n" +
"}\n" +
"\n" +
".zoom-leave-active {\n" +
"  animation-direction: reverse;\n" +
"}\n" +
"\n" +
"@keyframes zoom {\n" +
"  from {\n" +
"    opacity: 0;\n" +
"    transform: scale3d(0.4, 0.4, 0.4);\n" +
"  }\n" +
"\n" +
"  100% {\n" +
"    opacity: 1;\n" +
"  }\n" +
"}\n" +
"\n" +
"#app {\n" +
"  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  text-align: center;\n" +
"  color: #2c3e50;\n" +
"}\n" +
"\n" +
"#nav {\n" +
"  padding: 30px;\n" +
"}\n" +
"\n" +
"#nav a {\n" +
"  font-weight: bold;\n" +
"  color: #2c3e50;\n" +
"}\n" +
"\n" +
"#nav a.router-link-exact-active {\n" +
"  color: #42b983;\n" +
"}\n" +
"</style>\n"


const Home = "<template>\n" +
"  <div class=\"home\">\n" +
"    <h3>This is homepage</h3>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<script>\n" +
"// @ is an alias to /src\n" +
"\n" +
"export default {\n" +
"  name: \"HomeView\",\n" +
"  components: {},\n" +
"};\n" +
"</script>\n"


const indexRouter = "import { createRouter, createWebHistory } from \"vue-router\";\n" +
"import HomeView from \"./Home.vue\";\n" +
"\n" +
"const router = createRouter({\n" +
"  history: createWebHistory(import.meta.env.BASE_URL),\n" +
"  routes: [\n" +
"    {\n" +
"      path: \"/\",\n" +
"      name: \"home\",\n" +
"      component: HomeView,\n" +
"    },\n" +
"    {\n" +
"      path: \"/messages\",\n" +
"      name: \"messages\",\n" +
"      meta: {\n" +
"        transition: \"zoom\",\n" +
"      },\n" +
"      component: () => import(\"./Messages.vue\"),\n" +
"    },\n" +
"  ],\n" +
"});\n" +
"\n" +
"export default router;\n"


const Messages = "<template>\n" +
"  <div>\n" +
"    <button @click=\"sorting()\">Sort A-Z</button>\n" +
"    <button @click=\"sorting(true)\">Sort Z-A</button>\n" +
"    <button @click=\"shuffle()\">Sort Z-A</button>\n" +
"    <transition-group appear name=\"flip\" tag=\"div\">\n" +
"      <p v-for=\"message in messages\" :key=\"message\" class=\"message--item\">\n" +
"        {{ message }}\n" +
"      </p>\n" +
"    </transition-group>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  data() {\n" +
"    return {\n" +
"      messages: [\n" +
"        \"Hello, how are you?\",\n" +
"        \"The weather is nice\",\n" +
"        \"This is the message feed\",\n" +
"        \"And I am the fourth message\",\n" +
"        \"Chapter 8 is fun\",\n" +
"        \"Animation is super awesome\",\n" +
"        `Sorry, I didn't know you called`,\n" +
"        \"Be patient, animation comes right up\",\n" +
"      ],\n" +
"      show: false,\n" +
"    };\n" +
"  },\n" +
"  methods: {\n" +
"    sorting(isDescending) {\n" +
"      this.messages.sort();\n" +
"\n" +
"      if (isDescending) {\n" +
"        this.messages.reverse();\n" +
"      }\n" +
"    },\n" +
"    shuffle() {\n" +
"      this.messages.sort(() => Math.random() - 0.5);\n" +
"    },\n" +
"  },\n" +
"};\n" +
"</script>\n" +
"<style scoped>\n" +
".message--item {\n" +
"  transition: all 2s;\n" +
"}\n" +
"\n" +
".flip-enter,\n" +
".flip-leave-to {\n" +
"  opacity: 0;\n" +
"  transform: translateY(20px);\n" +
"}\n" +
"\n" +
".flip-leave-active {\n" +
"  position: absolute;\n" +
"}\n" +
"\n" +
".flip-move {\n" +
"  transition: transform 1s;\n" +
"}\n" +
"</style>\n"


const Exercise04 = {

        name: "Exercise04",
        // AppComponent: App,
        routerPath: "Part08/Exercise04/indexRouter.js",

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part08/Exercise04/App.vue",
            resetCode: App
            },

            "indexRouter.js": {
                name: "indexRouter.js",
                path: "Part08/Exercise04/indexRouter.js",
                resetCode: indexRouter
            },

            "Home.vue": {
            name: "Home.vue",
            path: "Part08/Exercise04/Home.vue",
            resetCode: Home
            },

            "Messages.vue": {
            name: "Messages.vue",
            path: "Part08/Exercise04/Messages.vue",
            resetCode: Messages
            },

        }

    }

    export default Exercise04
