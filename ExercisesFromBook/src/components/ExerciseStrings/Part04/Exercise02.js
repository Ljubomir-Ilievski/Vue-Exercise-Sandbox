import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script>\n" +
"import Greeting from \"./Greeting.vue\";\n" +
"export default {\n" +
"  components: {\n" +
"    Greeting,\n" +
"  },\n" +
"  data() {\n" +
"    return {\n" +
"      greeting: \"Hello\",\n" +
"      who: \"Vue.js\",\n" +
"    };\n" +
"  },\n" +
"};\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <div id=\"app\">\n" +
"    <input placeholder=\"What is your name\" v-model=\"who\" />\n" +
"    <Greeting greeting=\"Hi\" :who=\"who\" />\n" +
"  </div>\n" +
"</template>\n"


const Greeting = "<template>\n" +
"  <div>{{ greeting }} {{ who }}</div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  props: [\"greeting\", \"who\"],\n" +
"};\n" +
"</script>\n"


const Exercise02 = {

        name: "Exercise02",
        // AppComponent: App,

        components: {

          [App_Name]: {
            name: App_Name,
            path: "Part04/Exercise02/App.vue",
            resetCode: App
            },

            "Greeting.vue": {
            name: "Greeting.vue",
            path: "Part04/Exercise02/Greeting.vue",
            resetCode: Greeting
            },

        }

    }

    export default Exercise02
