import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import Greeting from './Greeting.vue'\n" +
"</script>\n" +
"<template>\n" +
"  <div id=\"app\">\n" +
"    <Greeting who=\"JavaScript\" />\n" +
"  </div>\n" +
"</template>\n"


const Greeting = "<template>\n" +
"  <div>{{ greeting }} {{ who }}</div>\n" +
"</template>\n" +
"<script>\n" +
"import { h } from \"vue\";\n" +
"export default {\n" +
"  props: [\"greeting\", \"who\"],\n" +
"  setup(props) {\n" +
"    const hasValue = props.greeting && props.who;\n" +
"    return () =>\n" +
"      hasValue\n" +
"        ? h(\"div\", `${props.greeting} ${props.who}`)\n" +
"        : h(\n" +
"            \"div\",\n" +
"            { style: { color: \"red\" } },\n" +
"            \"There is not enough information to display\"\n" +
"          );\n" +
"  },\n" +
"};\n" +
"</script>\n"


const Exercise02 = {

        name: "Exercise02",
        // AppComponent: App,

        components: {

          [App_Name]: {
            name: App_Name,
            path: "Part05/Exercise02/App.vue",
            resetCode: App
            },

            "Greeting.vue": {
            name: "Greeting.vue",
            path: "Part05/Exercise02/Greeting.vue",
            resetCode: Greeting
            },

        }

    }

    export default Exercise02
