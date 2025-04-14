import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <component :is=\"layout\">\n" +
"    <router-view v-slot=\"{ Component }\">\n" +
"      <transition :name=\"route.meta.transition || transition\" :mode=\"mode\">\n" +
"        <component\n" +
"          :is=\"Component\"\n" +
"          :list=\"messages\"\n" +
"          @update:currentLayout=\"(newLayout) => (layout = newLayout)\"\n" +
"        />\n" +
"      </transition>\n" +
"    </router-view>\n" +
"  </component>\n" +
"</template>\n" +
"<script setup>\n" +
"import { RouterView } from \"vue-router\";\n" +
"import Default from \"./default.vue\";\n" +
"import { shallowRef } from \"vue\";\n" +
"import { useRoute } from \"vue-router\";\n" +
"const route = useRoute();\n" +
"\n" +
"const layout = shallowRef(Default);\n" +
"const transition = \"fade\";\n" +
"const mode = \"out-in\";\n" +
"\n" +
"const messages = route.meta.messages;\n" +
"</script>\n" +
"\n" +
"<style>\n" +
".fade-enter-active,\n" +
".fade-leave-active {\n" +
"  transition: opacity 2s, transform 3s;\n" +
"}\n" +
".fade-enter,\n" +
".fade-leave-to {\n" +
"  opacity: 0;\n" +
"  transform: translateX(-20%);\n" +
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


const default_ = "<template>\n" +
"  <div class=\"default\">\n" +
"    <h1>Messages section</h1>\n" +
"    <main>\n" +
"      <slot/>\n" +
"    </main>\n" +
"  </div>\n" +
"</template>\n"


const indexRouter = "import { createRouter, createWebHistory } from \"vue-router\";\n" +
"\n" +
"const messages = [\"hello how are you\", \"test me\"];\n" +
"\n" +
"export const routes = [\n" +
"  {\n" +
"    path: \"/\",\n" +
"    name: \"messages\",\n" +
"    component: () => import(\"./Messages.vue\"),\n" +
"    beforeEnter(to, from, next) {\n" +
"      to.meta.messages = messages;\n" +
"      next();\n" +
"    },\n" +
"    children: [\n" +
"      {\n" +
"        path: \"list\",\n" +
"        name: \"list\",\n" +
"        component: () => import(\"./MessageList.vue\"),\n" +
"      },\n" +
"      {\n" +
"        path: \"editor\",\n" +
"        name: \"editor\",\n" +
"        component: () => import(\"./MessageEditor.vue\"),\n" +
"        props: true,\n" +
"      },\n" +
"    ],\n" +
"  },\n" +
"  {\n" +
"    path: \"/message/:id\",\n" +
"    name: \"message\",\n" +
"    component: () => import(\"./Message.vue\"),\n" +
"    props: true,\n" +
"    beforeEnter(to, from, next) {\n" +
"      if (to.params && to.params.id) {\n" +
"        const id = to.params.id;\n" +
"\n" +
"        if (messages && messages.length > 0 && id < messages.length) {\n" +
"          to.params.content = messages[id];\n" +
"        }\n" +
"      }\n" +
"\n" +
"      to.params.from = from;\n" +
"      next();\n" +
"    },\n" +
"  },\n" +
"];\n" +
"\n" +
"const router = createRouter({\n" +
"  history: createWebHistory(import.meta.env.BASE_URL),\n" +
"  routes,\n" +
"});\n" +
"\n" +
"export default router;\n"


const Message = "<template>\n" +
"  <div>\n" +
"    <p>{{content}}</p>\n" +
"    <router-view/>\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import MessageLayout from './messageLayout.vue';\n" +
"\n" +
"const props = defineProps({\n" +
"  content: {\n" +
"    type: String,\n" +
"    default: ''\n" +
"  },\n" +
"  currentLayout: {\n" +
"    type: Object,\n" +
"    default: () => MessageLayout\n" +
"  }\n" +
"});\n" +
"\n" +
"const emits = defineEmits(['update:currentLayout']);\n" +
"\n" +
"emits('update:currentLayout', MessageLayout);\n" +
"</script>\n"


const MessageEditor = "<template>\n" +
"  <div>\n" +
"    <textarea v-model=\"message\"> </textarea>\n" +
"    <button @click=\"onSendClick()\">Submit</button>\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import { ref } from \"vue\";\n" +
"import { onBeforeRouteLeave } from \"vue-router\";\n" +
"\n" +
"const props = defineProps({\n" +
"  list: {\n" +
"    type: Array,\n" +
"    default: () => [],\n" +
"  },\n" +
"});\n" +
"\n" +
"const emits = defineEmits([\"list:update\"]);\n" +
"\n" +
"const message = ref('')\n" +
"\n" +
"const onSendClick = () => {\n" +
"  if (!message.value) return;\n" +
"  emits(\"list:update\", message.value);\n" +
"  message.value = \"\";\n" +
"};\n" +
"\n" +
"onBeforeRouteLeave((to, from, next) => {\n" +
"  if (message.value !== \"\") {\n" +
"    const ans = window.confirm(\n" +
"      \"You have an unsaved message.  Are you sure you want to navigate away?\"\n" +
"    );\n" +
"\n" +
"    next(!!ans);\n" +
"  } else {\n" +
"    next();\n" +
"  }\n" +
"});\n" +
"</script>\n"


const messageLayout = "<template>\n" +
"  <div class=\"message\">\n" +
"    <h2>Message content:</h2>\n" +
"    <main>\n" +
"      <slot/>\n" +
"    </main>\n" +
"    <button @click=\"goBack\">Back</button>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  methods: {\n" +
"    goBack() {\n" +
"      if (this.$route.params.from) {\n" +
"        this.$router.go(-1)\n" +
"      }\n" +
"      else {\n" +
"        this.$router.push({\n" +
"          name: 'messages'\n" +
"        })\n" +
"      }\n" +
"    }\n" +
"  }\n" +
"}\n" +
"</script>\n" +
"    \n"


const MessageList = "<template>\n" +
"  <div>\n" +
"    <h2> Message Feed </h2>\n" +
"    <transition-group @appear=\"enter\" tag=\"div\" appear move-class=\"flip\" :css=\"false\">\n" +
"      <div v-for=\"(m, i) in list\" :key=\"m\">\n" +
"        <router-link :to=\"`/message/${i}`\">\n" +
"          {{ i }}\n" +
"        </router-link>\n" +
"      </div>\n" +
"    </transition-group>\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import gsap from 'gsap';\n" +
"\n" +
"const props = defineProps({\n" +
"  list: {\n" +
"    type: Array,\n" +
"    default: () => [],\n" +
"  },\n" +
"});\n" +
"\n" +
"const enter = (el, done) => {\n" +
"  console.log('reacting to appear', el);\n" +
"  const tl = gsap.timeline({\n" +
"    onComplete: done,\n" +
"    stagger: 1.2,\n" +
"    duration: 2,\n" +
"  });\n" +
"\n" +
"  console.log('reacting to appear', el);\n" +
"  tl.fromTo(el, { opacity: 0 }, { opacity: 1 })\n" +
"    .to(el, { rotation: -270, duration: 1, ease: 'bounce' })\n" +
"    .to(el, { rotation: -360 })\n" +
"    .to(el, { rotation: -180, opacity: 0 })\n" +
"    .to(el, { rotation: 0, opacity: 1 });\n" +
"};\n" +
"</script>\n" +
"<style>\n" +
".flip-move {\n" +
"  transition: transform 1s;\n" +
"}\n" +
"</style>\n"


const Messages = "<template>\n" +
"  <div>\n" +
"    <router-link :to=\"{ name: 'list' }\">List</router-link> |\n" +
"    <router-link :to=\"{ name: 'editor' }\">Editor</router-link>\n" +
"    <router-view v-slot=\"{ Component }\">\n" +
"      <transition name=\"fade\" enter-active-class=\"zoom-in\">\n" +
"        <component\n" +
"          :is=\"Component\"\n" +
"          :list=\"messages\"\n" +
"          @list:update=\"addMessage\"\n" +
"        />\n" +
"      </transition>\n" +
"    </router-view>\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import DefaultLayout from './default.vue';\n" +
"import { reactive } from \"vue\";\n" +
"import { useRoute } from \"vue-router\";\n" +
"const route = useRoute();\n" +
"\n" +
"const props = defineProps({\n" +
"  list: {\n" +
"    type: Array,\n" +
"    default: () => [],\n" +
"  },\n" +
"  currentLayout: {\n" +
"    type: Object,\n" +
"    default: () => DefaultLayout,\n" +
"  },\n" +
"});\n" +
"\n" +
"const emits = defineEmits([\"update:currentLayout\"]);\n" +
"emits('update:currentLayout', DefaultLayout);\n" +
"\n" +
"const messages = reactive(route.meta.messages || []);\n" +
"const addMessage = (message) => {\n" +
"  messages.push(message);\n" +
"};\n" +
"</script>\n" +
"<style>\n" +
".zoom-in {\n" +
"  animation-duration: 0.3s;\n" +
"  animation-fill-mode: both;\n" +
"  animation-name: zoom;\n" +
"}\n" +
"\n" +
".fade-enter-active {\n" +
"  transition: opacity 2s, transform 3s;\n" +
"}\n" +
".fade-enter {\n" +
"  opacity: 0;\n" +
"  transform: translateX(-20%);\n" +
"}\n" +
"</style>\n"


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,
        routerPath: "Part08/Exercise01/indexRouter.js",
        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part08/Exercise01/App.vue",
            resetCode: App
            },

          "indexRouter.js": {
            name: "indexRouter.js",
            path: "Part08/Exercise01/indexRouter.js",
            resetCode: indexRouter
          },

          "MessageEditor.vue": {
            name: "MessageEditor.vue",
            path: "Part08/Exercise01/MessageEditor.vue",
            resetCode: MessageEditor
          },

            "default.vue": {
            name: "default.vue",
            path: "Part08/Exercise01/default.vue",
            resetCode: default_
            },

            "Message.vue": {
            name: "Message.vue",
            path: "Part08/Exercise01/Message.vue",
            resetCode: Message
            },

            "messageLayout.vue": {
            name: "messageLayout.vue",
            path: "Part08/Exercise01/messageLayout.vue",
            resetCode: messageLayout
            },

            "MessageList.vue": {
            name: "MessageList.vue",
            path: "Part08/Exercise01/MessageList.vue",
            resetCode: MessageList
            },

            "Messages.vue": {
            name: "Messages.vue",
            path: "Part08/Exercise01/Messages.vue",
            resetCode: Messages
            },

        }

    }

    export default Exercise01
