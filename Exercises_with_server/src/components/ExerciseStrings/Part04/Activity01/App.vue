<template>
  <div id="app">
    <MessageFeed :messages="messages" />
    <MessageEditor @send="onSend($event)" />
  </div>
</template>
<script>
import MessageEditor from './MessageEditor.vue'
import MessageFeed from './MessageFeed.vue'
export default {
  components: {
    MessageEditor,
    MessageFeed
  },
  data() {
    return { messages: [] }
  },
  methods: {
    onSend(event) {
      this.messages = [...this.messages, event]
    }
  }
}
</script>