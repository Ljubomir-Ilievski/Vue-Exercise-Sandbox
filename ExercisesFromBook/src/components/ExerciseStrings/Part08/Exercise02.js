import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import Exercise from './Exercise8-01.vue'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <div id=\"app\">\n" +
"    <Exercise />\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<style>\n" +
"#app {\n" +
"  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  text-align: center;\n" +
"  color: #2c3e50;\n" +
"  margin-top: 60px;\n" +
"}\n" +
"</style>\n"


const Exercise801 = "<template>\n" +
"  <div>\n" +
"    <div class=\"editor--wrapper\">\n" +
"      <textarea ref=\"textArea\" class=\"editor\" />\n" +
"      <button @click=\"onSendClick()\" class=\"editor--submit\">Submit</button>\n" +
"    </div>\n" +
"    <transition\n" +
"      name=\"slide-right\"\n" +
"      enter-active-class=\"slide-right\"\n" +
"      leave-active-class=\"slide-left\"\n" +
"    >\n" +
"      <section v-if=\"message\" class=\"message--display\">\n" +
"        <h4>Your saved message:</h4>\n" +
"        <span>{{ message }}</span>\n" +
"      </section>\n" +
"    </transition>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  data() {\n" +
"    return {\n" +
"      message: \"\",\n" +
"    };\n" +
"  },\n" +
"  methods: {\n" +
"    onSendClick() {\n" +
"      const message = this.$refs.textArea.value;\n" +
"      this.message = message;\n" +
"      this.$refs.textArea.value = \"\";\n" +
"    },\n" +
"  },\n" +
"};\n" +
"</script>\n" +
"<style scoped>\n" +
"@keyframes slide-right {\n" +
"  100% {\n" +
"    transform: translateX(0);\n" +
"  }\n" +
"}\n" +
"\n" +
".slide-right-enter {\n" +
"  border-top: 0;\n" +
"}\n" +
"\n" +
".slide-right {\n" +
"  animation: 5s slide-right 5s forwards;\n" +
"  transform: translateX(-100%);\n" +
"  transition: border-top 2s ease;\n" +
"}\n" +
"\n" +
".slide-left {\n" +
"  animation: 5s slide-right 5s reverse;\n" +
"  transform: translateX(-100%);\n" +
"}\n" +
"</style>\n" +
"<style scoped>\n" +
".editor--wrapper {\n" +
"  display: flex;\n" +
"  flex-direction: column;\n" +
"}\n" +
"\n" +
".editor {\n" +
"  align-self: center;\n" +
"  width: 200px;\n" +
"}\n" +
"\n" +
".editor--submit {\n" +
"  margin: 0.5rem auto;\n" +
"  align-self: center;\n" +
"}\n" +
"\n" +
".message--display {\n" +
"  margin-top: 1rem;\n" +
"  border-top: 1px solid lightgray;\n" +
"}\n" +
"</style>\n"


const Exercise02 = {

        name: "Exercise02",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part08/Exercise02/App.vue",
            resetCode: App
            },

            "Exercise8-01.vue": {
            name: "Exercise8-01.vue",
            path: "Part08/Exercise02/Exercise8-01.vue",
            resetCode: Exercise801
            },

        }

    }

    export default Exercise02
