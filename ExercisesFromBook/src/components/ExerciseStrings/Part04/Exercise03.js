import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <main>\n" +
"    <Repeat :config=\"{ times: 3, content: 'Repeat me.' }\" />\n" +
"  </main>\n" +
"</template>\n" +
"<script>\n" +
"import Repeat from './Repeat.vue'\n" +
"\n" +
"export default {\n" +
"  components: {\n" +
"    Repeat \n" +
"  }\n" +
"}\n" +
"</script>\n"


const Repeat = "<template>\n" +
"  <div>\n" +
"    <span v-for=\"r in repetitions\" :key=\"r\">\n" +
"      {{ config.content }}\n" +
"    </span>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  props: {\n" +
"    config: {\n" +
"      type: Object,\n" +
"      validator(value) {\n" +
"        return typeof value.times === 'number' &&\n" +
"          typeof value.content === 'string'\n" +
"      }\n" +
"    }\n" +
"  },\n" +
"  computed: {\n" +
"    repetitions() {\n" +
"      return Array.from({ length: this.config.times })\n" +
"    }\n" +
"  }\n" +
"}\n" +
"</script>\n"


const Exercise03 = {

        name: "Exercise03",
        // AppComponent: App,

        components: {

          [App_Name]: {
            name: App_Name,
            path: "Part04/Exercise03/App.vue",
            resetCode: App
            },

            "Repeat.vue": {
            name: "Repeat.vue",
            path: "Part04/Exercise03/Repeat.vue",
            resetCode: Repeat
            },

        }

    }

    export default Exercise03
