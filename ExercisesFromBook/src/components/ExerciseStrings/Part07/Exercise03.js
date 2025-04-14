import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const AboutView = "<template>\n" +
"  <div class=\"about\">\n" +
"    <h1>This is an about page</h1>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<style>\n" +
"@media (min-width: 1024px) {\n" +
"  .about {\n" +
"    min-height: 100vh;\n" +
"    display: flex;\n" +
"    align-items: center;\n" +
"  }\n" +
"}\n" +
"</style>\n"


const App = "<script setup>\n" +
"import { RouterLink, RouterView } from 'vue-router'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <header>\n" +
"    <nav>\n" +
"      <RouterLink to=\"/\">Home</RouterLink>\n" +
"      <RouterLink to=\"/about\">About</RouterLink>\n" +
"      <RouterLink :to=\"{ name: 'messageFeed' }\">Message Feed</RouterLink>\n" +
"    </nav>\n" +
"  </header>\n" +
"  <RouterView />\n" +
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


const HelloWorld = "<script setup>\n" +
"defineProps({\n" +
"  msg: {\n" +
"    type: String,\n" +
"    required: true\n" +
"  }\n" +
"})\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <div class=\"greetings\">\n" +
"    <h1 class=\"green\">{{ msg }}</h1>\n" +
"    <h3>\n" +
"      You’ve successfully created a project with\n" +
"      <a target=\"_blank\" href=\"https://vitejs.dev/\">Vite</a> +\n" +
"      <a target=\"_blank\" href=\"https://vuejs.org/\">Vue 3</a>.\n" +
"    </h3>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
"h1 {\n" +
"  font-weight: 500;\n" +
"  font-size: 2.6rem;\n" +
"  top: -10px;\n" +
"}\n" +
"\n" +
"h3 {\n" +
"  font-size: 1.2rem;\n" +
"}\n" +
"\n" +
".greetings h1,\n" +
".greetings h3 {\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
"@media (min-width: 1024px) {\n" +
"  .greetings h1,\n" +
"  .greetings h3 {\n" +
"    text-align: left;\n" +
"  }\n" +
"}\n" +
"</style>\n"


const HomeView = "<script setup>\n" +
"import TheWelcome from '@/components/ExerciseStrings/Part07/Exercise03/TheWelcome.vue'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <main>\n" +
"    <TheWelcome />\n" +
"  </main>\n" +
"</template>\n"


const IconCommunity = "<template>\n" +
"  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\">\n" +
"    <path\n" +
"      d=\"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z\"\n" +
"    />\n" +
"  </svg>\n" +
"</template>\n"


const IconDocumentation = "<template>\n" +
"  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" fill=\"currentColor\">\n" +
"    <path\n" +
"      d=\"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z\"\n" +
"    />\n" +
"  </svg>\n" +
"</template>\n"


const IconEcosystem = "<template>\n" +
"  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"20\" fill=\"currentColor\">\n" +
"    <path\n" +
"      d=\"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z\"\n" +
"    />\n" +
"  </svg>\n" +
"</template>\n"


const IconSupport = "<template>\n" +
"  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\">\n" +
"    <path\n" +
"      d=\"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z\"\n" +
"    />\n" +
"  </svg>\n" +
"</template>\n"


const IconTooling = "<!-- This icon is from <https://github.com/Templarian/MaterialDesign>, distributed under Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0) license-->\n" +
"<template>\n" +
"  <svg\n" +
"    xmlns=\"http://www.w3.org/2000/svg\"\n" +
"    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
"    aria-hidden=\"true\"\n" +
"    role=\"img\"\n" +
"    class=\"iconify iconify--mdi\"\n" +
"    width=\"24\"\n" +
"    height=\"24\"\n" +
"    preserveAspectRatio=\"xMidYMid meet\"\n" +
"    viewBox=\"0 0 24 24\"\n" +
"  >\n" +
"    <path\n" +
"      d=\"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z\"\n" +
"      fill=\"currentColor\"\n" +
"    ></path>\n" +
"  </svg>\n" +
"</template>\n"


const indexRouter = "import { createRouter, createWebHistory } from 'vue-router'\n" +
"import HomeView from './HomeView.vue'\n" +
"\n" +
"const routes = [\n" +
"  {\n" +
"    path: '/',\n" +
"    name: 'home',\n" +
"    component: HomeView\n" +
"  },\n" +
"  {\n" +
"    path: '/about',\n" +
"    name: 'about',\n" +
"    component: () => import('./AboutView.vue'),\n" +
"  },\n" +
"  {\n" +
"    path: '/messagesFeed',\n" +
"    name: 'messageFeed',\n" +
"    component: () => import('./MessageFeed.vue')\n" +
"  }\n" +
"]\n" +
"\n" +
"const router = createRouter({\n" +
"  history: createWebHistory(import.meta.env.BASE_URL),\n" +
"  routes\n" +
"})\n" +
"\n" +
"export default router\n"


const MessageFeed = "<template>\n" +
"  <div>\n" +
"    <h2> Message Feed </h2>\n" +
"    <p v-for=\"(m, i) in messages\" :key=\"i\">\n" +
"    {{ m }}\n" +
"    </p>\n" +
"</div>\n" +
"</template>\n" +
"<script setup>\n" +
"const messages = [\n" +
"    'Hello, how are you?',\n" +
"    'The weather is nice',\n" +
"    'This is the message feed',\n" +
"    'And I am the fourth message'\n" +
"  ]\n" +
"</script>\n"


const TheWelcome = "<script setup>\n" +
"import WelcomeItem from './WelcomeItem.vue'\n" +
"import DocumentationIcon from './IconDocumentation.vue'\n" +
"import ToolingIcon from './IconTooling.vue'\n" +
"import EcosystemIcon from './IconEcosystem.vue'\n" +
"import CommunityIcon from './IconCommunity.vue'\n" +
"import SupportIcon from './IconSupport.vue'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <WelcomeItem>\n" +
"    <template #icon>\n" +
"      <DocumentationIcon />\n" +
"    </template>\n" +
"    <template #heading>Documentation</template>\n" +
"\n" +
"    Vue’s\n" +
"    <a target=\"_blank\" href=\"https://vuejs.org/\">official documentation</a>\n" +
"    provides you with all information you need to get started.\n" +
"  </WelcomeItem>\n" +
"\n" +
"  <WelcomeItem>\n" +
"    <template #icon>\n" +
"      <ToolingIcon />\n" +
"    </template>\n" +
"    <template #heading>Tooling</template>\n" +
"\n" +
"    This project is served and bundled with\n" +
"    <a href=\"https://vitejs.dev/guide/features.html\" target=\"_blank\">Vite</a>. The recommended IDE\n" +
"    setup is <a href=\"https://code.visualstudio.com/\" target=\"_blank\">VSCode</a> +\n" +
"    <a href=\"https://github.com/johnsoncodehk/volar\" target=\"_blank\">Volar</a>. If you need to test\n" +
"    your components and web pages, check out\n" +
"    <a href=\"https://www.cypress.io/\" target=\"_blank\">Cypress</a> and\n" +
"    <a href=\"https://on.cypress.io/component\" target=\"_blank\"\n" +
"      >Cypress Component Testing</a\n" +
"    >.\n" +
"\n" +
"    <br />\n" +
"\n" +
"    More instructions are available in <code>README.md</code>.\n" +
"  </WelcomeItem>\n" +
"\n" +
"  <WelcomeItem>\n" +
"    <template #icon>\n" +
"      <EcosystemIcon />\n" +
"    </template>\n" +
"    <template #heading>Ecosystem</template>\n" +
"\n" +
"    Get official tools and libraries for your project:\n" +
"    <a target=\"_blank\" href=\"https://pinia.vuejs.org/\">Pinia</a>,\n" +
"    <a target=\"_blank\" href=\"https://router.vuejs.org/\">Vue Router</a>,\n" +
"    <a target=\"_blank\" href=\"https://test-utils.vuejs.org/\">Vue Test Utils</a>, and\n" +
"    <a target=\"_blank\" href=\"https://github.com/vuejs/devtools\">Vue Dev Tools</a>. If you need more\n" +
"    resources, we suggest paying\n" +
"    <a target=\"_blank\" href=\"https://github.com/vuejs/awesome-vue\">Awesome Vue</a>\n" +
"    a visit.\n" +
"  </WelcomeItem>\n" +
"\n" +
"  <WelcomeItem>\n" +
"    <template #icon>\n" +
"      <CommunityIcon />\n" +
"    </template>\n" +
"    <template #heading>Community</template>\n" +
"\n" +
"    Got stuck? Ask your question on\n" +
"    <a target=\"_blank\" href=\"https://chat.vuejs.org\">Vue Land</a>, our official Discord server, or\n" +
"    <a target=\"_blank\" href=\"https://stackoverflow.com/questions/tagged/vue.js\">StackOverflow</a>.\n" +
"    You should also subscribe to\n" +
"    <a target=\"_blank\" href=\"https://news.vuejs.org\">our mailing list</a> and follow the official\n" +
"    <a target=\"_blank\" href=\"https://twitter.com/vuejs\">@vuejs</a>\n" +
"    twitter account for latest news in the Vue world.\n" +
"  </WelcomeItem>\n" +
"\n" +
"  <WelcomeItem>\n" +
"    <template #icon>\n" +
"      <SupportIcon />\n" +
"    </template>\n" +
"    <template #heading>Support Vue</template>\n" +
"\n" +
"    As an independent project, Vue relies on community backing for its sustainability. You can help\n" +
"    us by\n" +
"    <a target=\"_blank\" href=\"https://vuejs.org/sponsor/\">becoming a sponsor</a>.\n" +
"  </WelcomeItem>\n" +
"</template>\n"


const WelcomeItem = "<template>\n" +
"  <div class=\"item\">\n" +
"    <i>\n" +
"      <slot name=\"icon\"></slot>\n" +
"    </i>\n" +
"    <div class=\"details\">\n" +
"      <h3>\n" +
"        <slot name=\"heading\"></slot>\n" +
"      </h3>\n" +
"      <slot></slot>\n" +
"    </div>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
".item {\n" +
"  margin-top: 2rem;\n" +
"  display: flex;\n" +
"}\n" +
"\n" +
".details {\n" +
"  flex: 1;\n" +
"  margin-left: 1rem;\n" +
"}\n" +
"\n" +
"i {\n" +
"  display: flex;\n" +
"  place-items: center;\n" +
"  place-content: center;\n" +
"  width: 32px;\n" +
"  height: 32px;\n" +
"\n" +
"  color: var(--color-text);\n" +
"}\n" +
"\n" +
"h3 {\n" +
"  font-size: 1.2rem;\n" +
"  font-weight: 500;\n" +
"  margin-bottom: 0.4rem;\n" +
"  color: var(--color-heading);\n" +
"}\n" +
"\n" +
"@media (min-width: 1024px) {\n" +
"  .item {\n" +
"    margin-top: 0;\n" +
"    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);\n" +
"  }\n" +
"\n" +
"  i {\n" +
"    top: calc(50% - 25px);\n" +
"    left: -26px;\n" +
"    position: absolute;\n" +
"    border: 1px solid var(--color-border);\n" +
"    background: var(--color-background);\n" +
"    border-radius: 8px;\n" +
"    width: 50px;\n" +
"    height: 50px;\n" +
"  }\n" +
"\n" +
"  .item:before {\n" +
"    content: ' ';\n" +
"    border-left: 1px solid var(--color-border);\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    bottom: calc(50% + 25px);\n" +
"    height: calc(50% - 25px);\n" +
"  }\n" +
"\n" +
"  .item:after {\n" +
"    content: ' ';\n" +
"    border-left: 1px solid var(--color-border);\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    top: calc(50% + 25px);\n" +
"    height: calc(50% - 25px);\n" +
"  }\n" +
"\n" +
"  .item:first-of-type:before {\n" +
"    display: none;\n" +
"  }\n" +
"\n" +
"  .item:last-of-type:after {\n" +
"    display: none;\n" +
"  }\n" +
"}\n" +
"</style>\n"


const Exercise03 = {

        name: "Exercise03",
        // AppComponent: App,
        routerPath: "Part07/Exercise03/indexRouter.js",

        components: {

          "App.vue": {
            name: "App.vue",
            path: "Part07/Exercise03/App.vue",
            resetCode: App
          },

          "indexRouter.js": {
            name: "indexRouter.js",
            path: "Part07/Exercise03/indexRouter.js",
            resetCode: indexRouter
          },

            "AboutView.vue": {
            name: "AboutView.vue",
            path: "Part07/Exercise03/AboutView.vue",
            resetCode: AboutView
            },

          "MessageFeed.vue": {
            name: "MessageFeed.vue",
            path: "Part07/Exercise03/MessageFeed.vue",
            resetCode: MessageFeed
          },

          "HomeView.vue": {
            name: "HomeView.vue",
            path: "Part07/Exercise03/HomeView.vue",
            resetCode: HomeView
          },

          "TheWelcome.vue": {
            name: "TheWelcome.vue",
            path: "Part07/Exercise03/TheWelcome.vue",
            resetCode: TheWelcome
          },

          "WelcomeItem.vue": {
            name: "WelcomeItem.vue",
            path: "Part07/Exercise03/WelcomeItem.vue",
            resetCode: WelcomeItem
          },

            "HelloWorld.vue": {
            name: "HelloWorld.vue",
            path: "Part07/Exercise03/HelloWorld.vue",
            resetCode: HelloWorld
            },

            "IconCommunity.vue": {
            name: "IconCommunity.vue",
            path: "Part07/Exercise03/IconCommunity.vue",
            resetCode: IconCommunity
            },

            "IconDocumentation.vue": {
            name: "IconDocumentation.vue",
            path: "Part07/Exercise03/IconDocumentation.vue",
            resetCode: IconDocumentation
            },

            "IconEcosystem.vue": {
            name: "IconEcosystem.vue",
            path: "Part07/Exercise03/IconEcosystem.vue",
            resetCode: IconEcosystem
            },

            "IconSupport.vue": {
            name: "IconSupport.vue",
            path: "Part07/Exercise03/IconSupport.vue",
            resetCode: IconSupport
            },

            "IconTooling.vue": {
            name: "IconTooling.vue",
            path: "Part07/Exercise03/IconTooling.vue",
            resetCode: IconTooling
            },

        }

    }

    export default Exercise03
