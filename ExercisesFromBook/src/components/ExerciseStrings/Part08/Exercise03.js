import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import Exercise from \"./Exercise8-02.vue\";\n" +
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
"  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  -moz-osx-font-smoothing: grayscale;\n" +
"  text-align: center;\n" +
"  color: #2c3e50;\n" +
"  margin-top: 60px;\n" +
"}\n" +
"</style>\n"


const Exercise802 = "<template>\n" +
"  <div>\n" +
"    <button @click=\"sorting()\">Sort A-Z</button>\n" +
"    <button @click=\"sorting(true)\">Sort Z-A</button>\n" +
"    <button @click=\"shuffle()\">Shuffle</button>\n" +
"    <transition-group name=\"flip\" tag=\"div\">\n" +
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
"        \"Sorry, I didn't know you called\",\n" +
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
".flip-enter-from,\n" +
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


const Exercise03 = {

        name: "Exercise03",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part08/Exercise03/App.vue",
            resetCode: App
            },

            "Exercise8-02.vue": {
            name: "Exercise8-02.vue",
            path: "Part08/Exercise03/Exercise8-02.vue",
            resetCode: Exercise802
            },

        }

    }

    export default Exercise03
