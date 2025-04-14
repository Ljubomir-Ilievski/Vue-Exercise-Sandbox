import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import Greeting from './Greeting.vue'\n" +
"</script>\n" +
"<template>\n" +
"  <div id=\"app\">\n" +
"    <Greeting />\n" +
"  </div>\n" +
"</template>\n"


const Greeting = "<template>\n" +
"  <div>{{ greeting }} {{ who }}</div>\n" +
"</template>\n" +
"<script setup>\n" +
"  const greeting = \"Hello\";\n" +
"  const who = \"John\";\n" +
"</script>\n" +
"\n"


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part05/Exercise01/App.vue",
            resetCode: App
            },

            "Greeting.vue": {
            name: "Greeting.vue",
            path: "Part05/Exercise01/Greeting.vue",
            resetCode: Greeting
            },

        }

    }

    export default Exercise01
