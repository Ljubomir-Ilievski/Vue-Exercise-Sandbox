import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <div id=\"app\">\n" +
"    Layout: <select v-model=\"layout\">\n" +
"      <option \n" +
"        v-for=\"(option, index) in layoutOptions\"\n" +
"        :key=\"index\"\n" +
"        :value=\"option.component\"\n" +
"      >{{option.name}}</option>\n" +
"    </select>\n" +
"    <div class=\"grid\" :class=\"{ 'grid-column': layout === List }\">\n" +
"      <component\n" +
"        v-for=\"item in items\"\n" +
"        :key=\"item.id\"\n" +
"        :is=\"layout\"\n" +
"        :title=\"item.title\"\n" +
"        :description=\"item.description\"\n" +
"        :url=\"item.url\"\n" +
"      />\n" +
"    </div>\n" +
"  </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import Rich from './Rich.vue'\n" +
"import Compressed from './Compressed.vue'\n" +
"import List from './List.vue'\n" +
"import { shallowRef } from 'vue'\n" +
"\n" +
"const layout = shallowRef(Rich)\n" +
"const layoutOptions = [ {\n" +
"  name: 'Rich',\n" +
"  component: Rich\n" +
"}, {\n" +
"  name: 'List',\n" +
"  component: List\n" +
"}, {\n" +
"  name: 'Compressed',\n" +
"  component: Compressed\n" +
"}]\n" +
"const items = [\n" +
"  {\n" +
"    id: '10',\n" +
"    title: 'Forest Shot',\n" +
"    description: 'Recent shot of a forest overlooking a lake',\n" +
"    url: 'https://picsum.photos/id/10/1000/750.jpg',\n" +
"  },\n" +
"  {\n" +
"    id: '1000',\n" +
"    title: 'Cold cross',\n" +
"    description: 'Mountaintop cross with snowfall from Jan 2018',\n" +
"    url: 'https://picsum.photos/id/1000/1000/750.jpg',\n" +
"  },\n" +
"]\n" +
"</script>\n" +
"<style scoped>\n" +
".grid {\n" +
"  display: flex;\n" +
"}\n" +
".grid-column {\n" +
"  flex-direction: column;\n" +
"}\n" +
"</style>\n"


const Compressed = "<template>\n" +
"  <div class=\"card\">\n" +
"    <h3>{{ title }}</h3>\n" +
"    <p>{{ description }}</p>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import { defineProps } from 'vue'\n" +
"\n" +
"const { title, description } = defineProps(['title', 'description'])\n" +
"</script>\n" +
"\n" +
"<style scoped>\n" +
".card {\n" +
"  display: flex;\n" +
"  flex-direction: column;\n" +
"  min-width: 200px;\n" +
"}\n" +
"h3 {\n" +
"  font-weight: normal;\n" +
"  padding-bottom: 0;\n" +
"}\n" +
"p {\n" +
"  margin: 0;\n" +
"}\n" +
"</style>\n"


const HelloWorld_spec = "import { describe, it, expect } from 'vitest'\n" +
"\n" +
"import { mount } from '@vue/test-utils'\n" +
"import HelloWorld from '../HelloWorld.vue'\n" +
"\n" +
"describe('HelloWorld', () => {\n" +
"  it('renders properly', () => {\n" +
"    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })\n" +
"    expect(wrapper.text()).toContain('Hello Vitest')\n" +
"  })\n" +
"})\n"


const List = "<template>\n" +
"  <h3>{{ title }}</h3>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"const { title } = defineProps(['title'])\n" +
"</script>\n" +
"\n" +
"<style scoped>\n" +
"h3 {\n" +
"  width: 100%;\n" +
"  font-weight: normal;\n" +
"}\n" +
"</style>\n"


const Rich = "<template>\n" +
"  <div class=\"card\">\n" +
"    <img :src=\"url\" width=\"200\" />\n" +
"    <h3>{{ title }}</h3>\n" +
"    <p>{{ description }}</p>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import { defineProps } from 'vue'\n" +
"\n" +
"const { url, title, description } = defineProps(['url', 'title', 'description'])\n" +
"</script>\n" +
"\n" +
"<style scoped>\n" +
".card {\n" +
"  display: flex;\n" +
"  flex-direction: column;\n" +
"  max-width: 200px;\n" +
"}\n" +
"h3 {\n" +
"  font-weight: normal;\n" +
"  margin-bottom: 0;\n" +
"  padding-bottom: 0;\n" +
"}\n" +
"</style>\n"


const Exercise03 = {

        name: "Exercise03",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part06/Exercise03/App.vue",
            resetCode: App
            },

            "Compressed.vue": {
            name: "Compressed.vue",
            path: "Part06/Exercise03/Compressed.vue",
            resetCode: Compressed
            },

            "HelloWorld.spec.js": {
            name: "HelloWorld.spec.js",
            path: "Part06/Exercise03/HelloWorld.spec.js",
            resetCode: HelloWorld_spec
            },

            "List.vue": {
            name: "List.vue",
            path: "Part06/Exercise03/List.vue",
            resetCode: List
            },

            "Rich.vue": {
            name: "Rich.vue",
            path: "Part06/Exercise03/Rich.vue",
            resetCode: Rich
            },

        }

    }

    export default Exercise03
