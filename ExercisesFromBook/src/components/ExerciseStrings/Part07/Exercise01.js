import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import { RouterView } from 'vue-router'\n" +
"import Default from './default.vue'\n" +
"import { shallowRef } from 'vue'\n" +
"\n" +
"const layout = shallowRef(Default)\n" +
"\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <component :is=\"layout\">\n" +
"    <RouterView \n" +
"      :currentLayout=\"layout\" \n" +
"      @update:currentLayout=\"newLayout => layout = newLayout\" \n" +
"    />\n" +
"  </component>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
"header {\n" +
"  line-height: 1.5;\n" +
"  max-height: 100vh;\n" +
"}\n" +
"\n" +
".logo {\n" +
"  display: block;\n" +
"  margin: 0 auto 2rem;\n" +
"}\n" +
"\n" +
"nav {\n" +
"  width: 100%;\n" +
"  font-size: 12px;\n" +
"  text-align: center;\n" +
"  margin-top: 2rem;\n" +
"}\n" +
"\n" +
"nav a.router-link-exact-active {\n" +
"  color: var(--color-text);\n" +
"}\n" +
"\n" +
"nav a.router-link-exact-active:hover {\n" +
"  background-color: transparent;\n" +
"}\n" +
"\n" +
"nav a {\n" +
"  display: inline-block;\n" +
"  padding: 0 1rem;\n" +
"  border-left: 1px solid var(--color-border);\n" +
"}\n" +
"\n" +
"nav a:first-of-type {\n" +
"  border: 0;\n" +
"}\n" +
"\n" +
"@media (min-width: 1024px) {\n" +
"  header {\n" +
"    display: flex;\n" +
"    place-items: center;\n" +
"    padding-right: calc(var(--section-gap) / 2);\n" +
"  }\n" +
"\n" +
"  .logo {\n" +
"    margin: 0 2rem 0 0;\n" +
"  }\n" +
"\n" +
"  header .wrapper {\n" +
"    display: flex;\n" +
"    place-items: flex-start;\n" +
"    flex-wrap: wrap;\n" +
"  }\n" +
"\n" +
"  nav {\n" +
"    text-align: left;\n" +
"    margin-left: -1rem;\n" +
"    font-size: 1rem;\n" +
"\n" +
"    padding: 1rem 0;\n" +
"    margin-top: 1rem;\n" +
"  }\n" +
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


const indexRouter = "import { createRouter, createWebHistory } from 'vue-router'\n" +
"import Messages from './Messages.vue';\n" +
"const messages = ['hello']\n" +
"\n" +
"export const routes = [\n" +
"  {\n" +
"    path: '/',\n" +
"    name: 'messages',\n" +
"    component: Messages,\n" +
"    beforeEnter(to, from, next) {\n" +
"      to.meta.messages = messages;\n" +
"      next();\n" +
"    },\n" +
"    children: [{\n" +
"      path: 'list',\n" +
"      name: 'list',\n" +
"      component: () => import('./MessageList.vue'),\n" +
"      props: true,\n" +
"    }, {\n" +
"      path: 'editor',\n" +
"      name: 'editor',\n" +
"      component: () => import('./MessageEditor.vue'),\n" +
"      props: true,\n" +
"    }]\n" +
"  },\n" +
"  {\n" +
"    path: '/message/:id',\n" +
"    name: 'message',\n" +
"    component: () => import('./Message.vue'),\n" +
"    props:true,\n" +
"    beforeEnter(to, from, next) {\n" +
"      if (to.params && to.params.id) {\n" +
"        const id = to.params.id;\n" +
"        \n" +
"        if (messages && messages.length > 0 && id < messages.length) {\n" +
"          to.params.content = messages[id];\n" +
"        }\n" +
"      }\n" +
"\n" +
"      to.params.from = from;\n" +
"      next()\n" +
"    },\n" +
"  }\n" +
"]\n" +
"\n" +
"export const router = createRouter({\n" +
"  history: createWebHistory(import.meta.env.BASE_URL),\n" +
"  routes\n" +
"})\n" +
"\n" +
"export default router\n"


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
"    <div v-for=\"(m, i) in list\" :key=\"i\" >\n" +
"      <router-link :to=\"`/message/${i}`\">\n" +
"        {{ i }}\n" +
"      </router-link>\n" +
"    </div>\n" +
"</div>\n" +
"</template>\n" +
"<script setup>\n" +
"const props = defineProps({\n" +
"  list: {\n" +
"    type: Array,\n" +
"    default: () => [],\n" +
"  },\n" +
"});\n" +
"</script>\n"


const Messages = "<template>\n" +
"  <div>\n" +
"    <router-link :to=\"{ name: 'list' }\">List</router-link> |\n" +
"    <router-link :to=\"{ name: 'editor' }\">Editor</router-link>\n" +
"    <router-view v-slot=\"{ Component }\">\n" +
"      <component\n" +
"        :is=\"Component\"\n" +
"        :list=\"messages\"\n" +
"        @list:update=\"addMessage\"\n" +
"      />\n" +
"    </router-view>\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import DefaultLayout from './default.vue';\n" +
"import { useRoute } from \"vue-router\";\n" +
"import { reactive } from \"vue\";\n" +
"\n" +
"const route = useRoute();\n" +
"const props = defineProps({\n" +
"  currentLayout: {\n" +
"    type: Object,\n" +
"    default: () => DefaultLayout,\n" +
"  },\n" +
"});\n" +
"const messages = reactive(route.meta.messages || []);\n" +
"\n" +
"const emits = defineEmits([\"update:currentLayout\"]);\n" +
"emits('update:currentLayout', DefaultLayout);\n" +
"\n" +
"const addMessage = (message) => {\n" +
"  messages.push(message);\n" +
"};\n" +
"</script>\n"


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,
        routerPath: "Part07/Exercise01/indexRouter.js",

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part07/Exercise01/App.vue",
            resetCode: App
            },

          "indexRouter.js": {
            name: "indexRouter.js",
            path: "Part07/Exercise01/indexRouter.js",
            resetCode: indexRouter
          },

            "default.vue": {
            name: "default.vue",
            path: "Part07/Exercise01/default.vue",
            resetCode: default_
            },

            "Message.vue": {
            name: "Message.vue",
            path: "Part07/Exercise01/Message.vue",
            resetCode: Message
            },

            "MessageEditor.vue": {
            name: "MessageEditor.vue",
            path: "Part07/Exercise01/MessageEditor.vue",
            resetCode: MessageEditor
            },

            "messageLayout.vue": {
            name: "messageLayout.vue",
            path: "Part07/Exercise01/messageLayout.vue",
            resetCode: messageLayout
            },

            "MessageList.vue": {
            name: "MessageList.vue",
            path: "Part07/Exercise01/MessageList.vue",
            resetCode: MessageList
            },

            "Messages.vue": {
            name: "Messages.vue",
            path: "Part07/Exercise01/Messages.vue",
            resetCode: Messages
            },

        }

    }

    export default Exercise01
