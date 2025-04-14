import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import AppHeader from './/AppHeader.vue'\n" +
"import AppProfileDisplay from './AppProfileDisplay.vue'\n" +
"import AppProfileForm from './AppProfileForm.vue'\n" +
"\n" +
"import { reactive } from 'vue'\n" +
"\n" +
"const formData = reactive({name:'', occupation:''});\n" +
"\n" +
"function update(e) {\n" +
"  formData.name = e.name;\n" +
"  formData.occupation = e.occupation;\n" +
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
"</template>\n"


const AppHeader = "<script setup>\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<header class=\"w-full block p-4 border-b bg-blue-300 \n" +
"    border-gray-700\">\n" +
"    <h2 class=\"text-xl text-gray-800\">Profile Card Generator</h2>\n" +
"  </header>\n" +
"</template>\n"


const AppProfileDisplay = "<template>\n" +
"  <section class=\"md:w-1/3 flex flex-col p-12\">\n" +
"  <!-- Profile Card -->\n" +
"  <h3 class=\"font-bold font-lg\">{{ formData.name }}</h3>\n" +
"  <p class=\"mt-2\">{{ formData.occupation }}</p>\n" +
"  </section>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"const props = defineProps({formData:Object});\n" +
"</script>\n"


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
"		v-model=\"name\"\n" +
"      />\n" +
"    </div>\n" +
"\n" +
"    <div class=\"flex flex-col mt-2\">\n" +
"      <label class=\"flex text-gray-800 mb-2\" for=\"occupation\">Occupation</label>\n" +
"      <input\n" +
"        id=\"occupation\"\n" +
"        type=\"text\"\n" +
"        name=\"occupation\"\n" +
"        v-model=\"occupation\"\n" +
"        class=\"border-2 border-solid border-blue-200 rounded \n" +
"          px-2 py-1\"\n" +
"      />\n" +
"    </div>\n" +
"\n" +
"    <div class=\"flex flex-row mt-12\">\n" +
"      <button type=\"submit\" @click=\"submitForm()\">Submit</button>\n" +
"    </div>\n" +
"\n" +
"  </section>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import { ref } from 'vue'\n" +
"const emit = defineEmits(['submit'])\n" +
"\n" +
"const name = ref('');\n" +
"const occupation = ref('');\n" +
"\n" +
"function submitForm() {\n" +
"  emit('submit', { \n" +
"    name: this.name, \n" +
"    occupation: this.occupation\n" +
"  });\n" +
"}\n" +
"</script>\n" +
"\n"


const Exercise02 = {

        name: "Exercise02",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part09/Exercise02/App.vue",
            resetCode: App
            },

            "AppHeader.vue": {
            name: "AppHeader.vue",
            path: "Part09/Exercise02/AppHeader.vue",
            resetCode: AppHeader
            },

            "AppProfileDisplay.vue": {
            name: "AppProfileDisplay.vue",
            path: "Part09/Exercise02/AppProfileDisplay.vue",
            resetCode: AppProfileDisplay
            },

            "AppProfileForm.vue": {
            name: "AppProfileForm.vue",
            path: "Part09/Exercise02/AppProfileForm.vue",
            resetCode: AppProfileForm
            },

        }

    }

    export default Exercise02
