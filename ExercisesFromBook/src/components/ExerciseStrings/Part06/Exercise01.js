import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <div id=\"app\">\n" +
"    <pre>{{ debug(myObj) }}</pre>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"import debug from \"./debug.js\";\n" +
"\n" +
"export default {\n" +
"  mixins: [debug],\n" +
"  data() {\n" +
"    return {\n" +
"      myObj: {\n" +
"        some: \"data\",\n" +
"        other: \"values\",\n" +
"      },\n" +
"    };\n" +
"  },\n" +
"  created() {\n" +
"    console.log(this.debug(this.myObj));\n" +
"  },\n" +
"};\n" +
"</script>\n"


const debug = "export default {\n" +
"  methods: {\n" +
"    debug(obj) {\n" +
"      return JSON.stringify(obj, null, 2)\n" +
"    }\n" +
"  }\n" +
"}\n"


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part06/Exercise01/App.vue",
            resetCode: App
            },

            "debug.js": {
            name: "debug.js",
            path: "Part06/Exercise01/debug.js",
            resetCode: debug
            },

        }

    }

    export default Exercise01
