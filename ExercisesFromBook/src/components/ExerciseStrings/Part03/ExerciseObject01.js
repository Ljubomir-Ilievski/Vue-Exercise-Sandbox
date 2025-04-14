import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const app = "<script setup>\n" +
  "import HelloWorld from './HelloWorld.vue'\n" +
  "import TheWelcome from './TheWelcome.vue'\n" +
  "</script>\n" +
  "\n" +
  "<template>\n" +
  "  <header>\n" +
  "    <img alt=\"Vue logo\" class=\"logo\" src=\"src/assets/logo.svg\" width=\"125\" height=\"125\" />\n" +
  "\n" +
  "    <div class=\"wrapper\">\n" +
  "      <HelloWorld msg=\"You did it!\" />\n" +
  "    </div>\n" +
  "  </header>\n" +
  "\n" +
  "  <main>\n" +
  "    <TheWelcome />\n" +
  "  </main>\n" +
  "</template>\n" +
  "\n" +
  "<style scoped>\n" +
  "header {\n" +
  "  line-height: 1.5;\n" +
  "}\n" +
  "\n" +
  ".logo {\n" +
  "  display: block;\n" +
  "  margin: 0 auto 2rem;\n" +
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
  "      <a href=\"https://vitejs.dev/\" target=\"_blank\" rel=\"noopener\">Vite</a> +\n" +
  "      <a href=\"https://vuejs.org/\" target=\"_blank\" rel=\"noopener\">Vue 3</a>.\n" +
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

const theWelcome = "<script setup>\n" +
  "import WelcomeItem from './WelcomeItem.vue'\n" +
  "import DocumentationIcon from '@/components/icons/IconDocumentation.vue'\n" +
  "import ToolingIcon from '@/components/icons/IconTooling.vue'\n" +
  "import EcosystemIcon from '@/components/icons/IconEcosystem.vue'\n" +
  "import CommunityIcon from '@/components/icons/IconCommunity.vue'\n" +
  "import SupportIcon from '@/components/icons/IconSupport.vue'\n" +
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
  "    <a href=\"https://vuejs.org/\" target=\"_blank\" rel=\"noopener\">official documentation</a>\n" +
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
  "    <a href=\"https://vitejs.dev/guide/features.html\" target=\"_blank\" rel=\"noopener\">Vite</a>. The\n" +
  "    recommended IDE setup is\n" +
  "    <a href=\"https://code.visualstudio.com/\" target=\"_blank\" rel=\"noopener\">VSCode</a> +\n" +
  "    <a href=\"https://github.com/johnsoncodehk/volar\" target=\"_blank\" rel=\"noopener\">Volar</a>. If\n" +
  "    you need to test your components and web pages, check out\n" +
  "    <a href=\"https://www.cypress.io/\" target=\"_blank\" rel=\"noopener\">Cypress</a> and\n" +
  "    <a href=\"https://on.cypress.io/component\" target=\"_blank\">Cypress Component Testing</a>.\n" +
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
  "    <a href=\"https://pinia.vuejs.org/\" target=\"_blank\" rel=\"noopener\">Pinia</a>,\n" +
  "    <a href=\"https://router.vuejs.org/\" target=\"_blank\" rel=\"noopener\">Vue Router</a>,\n" +
  "    <a href=\"https://test-utils.vuejs.org/\" target=\"_blank\" rel=\"noopener\">Vue Test Utils</a>, and\n" +
  "    <a href=\"https://github.com/vuejs/devtools\" target=\"_blank\" rel=\"noopener\">Vue Dev Tools</a>. If\n" +
  "    you need more resources, we suggest paying\n" +
  "    <a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\">Awesome Vue</a>\n" +
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
  "    <a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\">Vue Land</a>, our official\n" +
  "    Discord server, or\n" +
  "    <a href=\"https://stackoverflow.com/questions/tagged/vue.js\" target=\"_blank\" rel=\"noopener\"\n" +
  "      >StackOverflow</a\n" +
  "    >. You should also subscribe to\n" +
  "    <a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\">our mailing list</a> and follow\n" +
  "    the official\n" +
  "    <a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\">@vuejs</a>\n" +
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
  "    <a href=\"https://vuejs.org/sponsor/\" target=\"_blank\" rel=\"noopener\">becoming a sponsor</a>.\n" +
  "  </WelcomeItem>\n" +
  "</template>\n"


const welcomeItem = "<template>\n" +
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

const ExerciseObject01 = {


  name: "Exercise01",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part03/Exercise01/App.vue",
      resetCode: app
    },

    "HelloWorld.vue": {
      name: "HelloWorld.vue",
      path: "Part03/Exercise01/HelloWorld.vue",
      resetCode: HelloWorld
    },
    "TheWelcome.vue": {
      name: "TheWelcome.vue",
      path: "Part03/Exercise01/TheWelcome.vue",
      resetCode: theWelcome
    },
    "WelcomeItem.vue": {
      name: "WelcomeItem.vue",
      path: "Part03/Exercise01/WelcomeItem.vue",
      resetCode: welcomeItem
    },

  }


}

export default ExerciseObject01;
