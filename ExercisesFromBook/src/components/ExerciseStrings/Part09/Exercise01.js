import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import AppHeader from './AppHeader.vue'\n" +
"import AppProfileDisplay from './AppProfileDisplay.vue'\n" +
"import AppProfileForm from './AppProfileForm.vue'\n" +
"\n" +
"import { reactive } from 'vue'\n" +
"\n" +
"const formData = reactive({\n" +
"  name:'', occupation:'', \n" +
"  organization:'', email:'', phonenumber:''\n" +
"});\n" +
"\n" +
"function update(e) {\n" +
"  formData.name = e.name;\n" +
"  formData.occupation = e.occupation;\n" +
"  formData.organization = e.organization;\n" +
"  formData.email = e.email;\n" +
"  formData.phonenumber = e.phonenumber;\n" +
"}\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <div id=\"app\">\n" +
"    <AppHeader/>\n" +
"    <div class=\"flex flex-col md:flex-row\">\n" +
"      <AppProfileForm @submit=\"update($event)\" />\n" +
"      <AppProfileDisplay :form-data=\"formData\" />\n" +
"    </div>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<script>\n" +
"export default {\n" +
"  data() {\n" +
"    return {\n" +
"      formData: {}\n" +
"    }\n" +
"  },\n" +
"  methods: {\n" +
"    update(formData) {\n" +
"      this.formData = formData;\n" +
"    }\n" +
"  }\n" +
"}\n" +
"</script>\n"


const AppHeader = "<script setup>\n" +
"import { store } from '@/components/ExerciseStrings/Part09/Exercise01/store.js'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<header class=\"w-full block p-4 border-b bg-blue-300 \n" +
"    border-gray-700\">\n" +
"    <h2 class=\"text-xl text-gray-800\">Profile Card Generator</h2>\n" +
"    <button class=\"flex ml-auto text-gray-800 items-center\" @click=\"store.clear()\">\n" +
"      Reset\n" +
"    </button>\n" +
"  </header>\n" +
"</template>\n" +
"\n"


const AppProfileDisplay = "<template>\n" +
"  <section class=\"md:w-1/3 flex flex-col p-12\">\n" +
"  <!-- Profile Card -->\n" +
"  <h3 class=\"font-bold font-lg\">{{ store.name }}</h3>\n" +
"  <p class=\"mt-2\">{{ store.occupation }} \n" +
"    <span v-if=\"store.organization\">\n" +
"    at {{ store.organization }}\n" +
"    </span>\n" +
"  </p>\n" +
"  <p class=\"mt-2\" v-if=\"store.email\">Email: {{ store.email }}</p>\n" +
"  <p class=\"mt-2\" v-if=\"store.phonenumber\">Phone Number: {{ store.phonenumber }}</p>\n" +
"  </section>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import { store } from './store.js';\n" +
"</script>\n" +
"\n"


const AppProfileForm = "<template>\n" +
"  <section class=\"md:w-2/3 flex flex-col p-12 items-center\">\n" +
"\n" +
"  	<!-- Inputs -->\n" +
"    <div class=\"flex flex-col\">\n" +
"      <label class=\"flex text-gray-800 mb-2\" for=\"name\">Name\n" +
"      </label>\n" +
"      <input\n" +
"        id=\"name\"\n" +
"        type=\"text\"\n" +
"        name=\"name\"\n" +
"        class=\"border-2 border-solid border-blue-200 rounded \n" +
"          px-2 py-1\"\n" +
"        v-model=\"store.name\"\n" +
"      />\n" +
"    </div>\n" +
"\n" +
"    <div class=\"flex flex-col mt-2\">\n" +
"      <label class=\"flex text-gray-800 mb-2\" for=\"occupation\">Occupation</label>\n" +
"      <input\n" +
"        id=\"occupation\"\n" +
"        type=\"text\"\n" +
"        name=\"occupation\"\n" +
"        v-model=\"store.occupation\"\n" +
"        class=\"border-2 border-solid border-blue-200 rounded \n" +
"          px-2 py-1\"\n" +
"      />\n" +
"    </div>\n" +
"\n" +
"    <div class=\"flex flex-col mt-2\">\n" +
"      <label class=\"flex text-gray-800 mb-2\" for=\"occupation\">Organization</label>\n" +
"      <input\n" +
"        id=\"organization\"\n" +
"        type=\"text\"\n" +
"        name=\"organization\"\n" +
"        v-model=\"store.organization\"\n" +
"        class=\"border-2 border-solid border-blue-200 rounded \n" +
"          px-2 py-1\"\n" +
"      />\n" +
"    </div>\n" +
"\n" +
"    <div class=\"flex flex-col mt-2\">\n" +
"      <label class=\"flex text-gray-800 mb-2\" for=\"occupation\">Email</label>\n" +
"      <input\n" +
"        id=\"email\"\n" +
"        type=\"text\"\n" +
"        name=\"email\"\n" +
"        v-model=\"store.email\"\n" +
"        class=\"border-2 border-solid border-blue-200 rounded \n" +
"          px-2 py-1\"\n" +
"      />\n" +
"    </div>\n" +
"\n" +
"    <div class=\"flex flex-col mt-2\">\n" +
"      <label class=\"flex text-gray-800 mb-2\" for=\"occupation\">Phone Number</label>\n" +
"      <input\n" +
"        id=\"phonenumber\"\n" +
"        type=\"tel\"\n" +
"        name=\"phonenumber\"\n" +
"        v-model=\"store.phonenumber\"\n" +
"        class=\"border-2 border-solid border-blue-200 rounded \n" +
"          px-2 py-1\"\n" +
"      />\n" +
"    </div>\n" +
"\n" +
"    <div class=\"w-1/2 flex md:flex-row mt-12\">\n" +
"      <button\n" +
"        class=\"flex md:w-1/2 justify-center\"\n" +
"        type=\"submit\"\n" +
"        @click=\"submitForm()\"\n" +
"      >\n" +
"        Submit\n" +
"      </button>\n" +
"    </div>\n" +
"\n" +
"\n" +
"  </section>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import { store } from './store.js';\n" +
"\n" +
"// do nothing\n" +
"function submitForm() { }\n" +
"</script>\n" +
"\n"


const store = "import { reactive } from 'vue';\n" +
"\n" +
"export const store = reactive({\n" +
"	name:'',\n" +
"	occupation:'',\n" +
"	organization: '',\n" +
"	email: '',\n" +
"	phonenumber: '',\n" +
"	clear() {\n" +
"		this.name = '';\n" +
"		this.occupation = '';\n" +
"		this.organization = '';\n" +
"		this.email = '';\n" +
"		this.phonenumber = '';\n" +
"	}\n" +
"});\n"


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part09/Exercise01/App.vue",
            resetCode: App
            },

            "AppHeader.vue": {
            name: "AppHeader.vue",
            path: "Part09/Exercise01/AppHeader.vue",
            resetCode: AppHeader
            },

            "AppProfileDisplay.vue": {
            name: "AppProfileDisplay.vue",
            path: "Part09/Exercise01/AppProfileDisplay.vue",
            resetCode: AppProfileDisplay
            },

            "AppProfileForm.vue": {
            name: "AppProfileForm.vue",
            path: "Part09/Exercise01/AppProfileForm.vue",
            resetCode: AppProfileForm
            },

            "store.js": {
            name: "store.js",
            path: "Part09/Exercise01/store.js",
            resetCode: store
            },

        }

    }

    export default Exercise01
