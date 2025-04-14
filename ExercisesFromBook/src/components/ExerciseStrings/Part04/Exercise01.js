import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'


const App = "<script setup>\n" +
"import Greeting from './Greeting.vue'\n" +
"</script>\n" +
"<template>\n" +
"  <div id=\"app\">\n" +
"    <Greeting greeting=\"Hi\" who=\"everyone\"/>\n" +
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


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,

        components: {

          [App_Name]: {
            name: App_Name,
            path: "Part04/Exercise01/App.vue",
            resetCode: App
            },

            "Greeting.vue": {
            name: "Greeting.vue",
            path: "Part04/Exercise01/Greeting.vue",
            resetCode: Greeting
            },

        }

    }

    export default Exercise01
