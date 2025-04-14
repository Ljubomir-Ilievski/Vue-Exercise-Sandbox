import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <div id=\"app\">\n" +
"    <Card>\n" +
"      <template #image>\n" +
"        <img src=\"https://picsum.photos/id/1015/300\" />\n" +
"      </template>\n" +
"      <template #title>\n" +
"        <h2>My Holiday picture</h2>\n" +
"      </template>\n" +
"      <template #description>\n" +
"        <p>Here I can describe the contents of the picture.</p>\n" +
"        <p>For example what we can see in the photo is a nice landscape.</p>\n" +
"      </template>\n" +
"    </Card>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"import Card from './Card.vue'\n" +
"export default {\n" +
"  components: {\n" +
"    Card\n" +
"  }\n" +
"}\n" +
"</script>\n"


const Card = "<template>\n" +
"  <div>\n" +
"    <slot name=\"image\" />\n" +
"    <slot name=\"title\" />\n" +
"    <slot name=\"description\" />\n" +
"  </div>\n" +
"</template>\n"


const Exercise04 = {

        name: "Exercise04",
        // AppComponent: App,

        components: {

          [App_Name]: {
            name: App_Name,
            path: "Part04/Exercise04/App.vue",
            resetCode: App
            },

            "Card.vue": {
            name: "Card.vue",
            path: "Part04/Exercise04/Card.vue",
            resetCode: Card
            },

        }

    }

    export default Exercise04
