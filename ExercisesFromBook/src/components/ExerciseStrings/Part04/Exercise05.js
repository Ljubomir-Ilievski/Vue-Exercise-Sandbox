import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <div id=\"app\">\n" +
"    <TextEditorWithCount />\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import TextEditorWithCount from './TextEditorWithCount.vue'\n" +
"</script>\n"


const TextEditorWithCount = "<template>\n" +
"  <div>\n" +
"    <textarea\n" +
"      ref=\"textArea\"\n" +
"      cols=\"50\"\n" +
"      rows=\"7\"\n" +
"    >\n" +
"    </textarea>\n" +
"    <ul v-if=\"count\">\n" +
"      <li>Paragraphs: {{ count.paragraphs }}</li>\n" +
"      <li>Sentences: {{ count.sentences }}</li>\n" +
"      <li>Words: {{ count.words }}</li>\n" +
"    </ul>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"import * as Countable from 'countable'\n" +
"export default {\n" +
"  mounted() {\n" +
"    Countable.on(this.$refs.textArea, (count) => {\n" +
"      this.count = count\n" +
"    })\n" +
"  },\n" +
"  beforeUnmount() {\n" +
"    Countable.off(this.$refs.textArea)\n" +
"  },\n" +
"  data() {\n" +
"    return { count: null }\n" +
"  }\n" +
"}\n" +
"</script>\n"


const Exercise05 = {

        name: "Exercise05",
        // AppComponent: App,

        components: {

          [App_Name]: {
            name: App_Name,
            path: "Part04/Exercise05/App.vue",
            resetCode: App
            },

            "TextEditorWithCount.vue": {
            name: "TextEditorWithCount.vue",
            path: "Part04/Exercise05/TextEditorWithCount.vue",
            resetCode: TextEditorWithCount
            },

        }

    }

    export default Exercise05
