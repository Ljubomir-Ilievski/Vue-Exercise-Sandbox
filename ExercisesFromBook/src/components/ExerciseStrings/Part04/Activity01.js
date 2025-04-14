import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <div id=\"app\">\n" +
"    <MessageFeed :messages=\"messages\" />\n" +
"    <MessageEditor @send=\"onSend($event)\" />\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"import MessageEditor from './MessageEditor.vue'\n" +
"import MessageFeed from './MessageFeed.vue'\n" +
"export default {\n" +
"  components: {\n" +
"    MessageEditor,\n" +
"    MessageFeed\n" +
"  },\n" +
"  data() {\n" +
"    return { messages: [] }\n" +
"  },\n" +
"  methods: {\n" +
"    onSend(event) {\n" +
"      this.messages = [...this.messages, event]\n" +
"    }\n" +
"  }\n" +
"}\n" +
"</script>\n"


const MessageEditor = "<template>\n" +
"  <div>\n" +
"    <textarea\n" +
"      ref=\"textArea\"\n" +
"      @change=\"onChange($event)\"\n" +
"    >\n" +
"    </textarea>\n" +
"    <button @click=\"onSendClick()\">Send</button>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  data() {\n" +
"    return {\n" +
"      message: ''\n" +
"    }\n" +
"  },\n" +
"  methods: {\n" +
"    onChange(event) {\n" +
"      this.message = event.target.value\n" +
"    },\n" +
"    onSendClick() {\n" +
"      this.$emit('send', this.message)\n" +
"      this.message = ''\n" +
"      this.$refs.textArea.value = ''\n" +
"    }\n" +
"  }\n" +
"}\n" +
"</script>\n"


const MessageFeed = "<template>\n" +
"    <div>\n" +
"    <p v-for=\"(m, i) in messages\" :key=\"i\">\n" +
"      {{ m }}\n" +
"    </p>\n" +
"  </div>\n" +
"</template>\n" +
"<script>\n" +
"export default {\n" +
"  props: {\n" +
"    messages: {\n" +
"      type: Array,\n" +
"      required: true\n" +
"    }\n" +
"  }\n" +
"}\n" +
"</script>\n"


const Activity01 = {

        name: "Activity01",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part04/Activity01/App.vue",
            resetCode: App
            },

            "MessageEditor.vue": {
            name: "MessageEditor.vue",
            path: "Part04/Activity01/MessageEditor.vue",
            resetCode: MessageEditor
            },

            "MessageFeed.vue": {
            name: "MessageFeed.vue",
            path: "Part04/Activity01/MessageFeed.vue",
            resetCode: MessageFeed
            },

        }

    }

    export default Activity01
