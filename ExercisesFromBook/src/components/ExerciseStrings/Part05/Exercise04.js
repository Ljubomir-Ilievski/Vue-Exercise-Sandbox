import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <UserInput />\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import UserInput from \"./UserInput.vue\";\n" +
"</script>\n"


const UserInput = "<template>\n" +
"  <div class=\"container\">\n" +
"    <input v-model=\"firstName\" placeholder=\"First name\" />\n" +
"    <input v-model=\"lastName\" placeholder=\"Last name\" />\n" +
"    <input placeholder=\"Add a language\" @keyup.enter=\"addToLanguageList\" />\n" +
"    <h3 class=\"output\">{{ fullName }}</h3>\n" +
"    <p>Languages({{ numberOfLanguages }}): {{ languages.toString() }}</p>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import { ref, computed, reactive } from 'vue'\n" +
"\n" +
"const firstName = ref('')\n" +
"const lastName = ref('')\n" +
"const languages = reactive([]);\n" +
"const fullName = computed(() => `${firstName.value} ${lastName.value}`);\n" +
"const numberOfLanguages = computed(() => languages.length);\n" +
"const addToLanguageList = (event) => {\n" +
"  if (!event.target.value) return;\n" +
"  \n" +
"  languages.push(event.target.value);\n" +
"  event.target.value = '';\n" +
"};\n" +
"</script>\n" +
"\n" +
"<style scoped>\n" +
".container {\n" +
"  margin: 0 auto;\n" +
"  padding: 30px;\n" +
"  max-width: 600px;\n" +
"}\n" +
"input {\n" +
"  padding: 10px 6px;\n" +
"  margin: 20px 10px 10px 0;\n" +
"}\n" +
".output {\n" +
"  font-size: 16px;\n" +
"}\n" +
"</style>\n"


const Exercise04 = {

        name: "Exercise04",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part05/Exercise04/App.vue",
            resetCode: App
            },

            "UserInput.vue": {
            name: "UserInput.vue",
            path: "Part05/Exercise04/UserInput.vue",
            resetCode: UserInput
            },

        }

    }

    export default Exercise04
