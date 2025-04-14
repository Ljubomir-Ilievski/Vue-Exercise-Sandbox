<template>
  <div>
    <div ref="editor" class="editor"></div>
    <button @click="updatePreview">Run Code</button>
<!--    <iframe ref="preview" class="preview"></iframe>-->
    <div id="test" class="container flex justify-center space-x-5 mx-auto bg-orange-500">
      <span  class="bg-black max-w-md">First</span>
      <span class="text-5xl hover:bg-black bg-green-500">Second</span>
      <span>Third</span>
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editor, {
      value: "<html>\n  <body>\n    <h1 style='color: rgb(125, 125, 125);'>Hello World</h1>\n  </body>\n</html>",
      language: 'html',
    });
  },
  methods: {
    updatePreview() {
      const code = this.editor.getValue();
      const iframe = this.$refs.preview;
      iframe.srcdoc = code; // Render the code in the iframe
    },
  },
};
</script>

<style>
#test span{
  /*display: flex;
  justify-content: center;*/
  /*gap: 3vw;*/
  width: 20%;
  border-radius: 12px;
 /* height: 15vh;*/

}
.editor {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}
.preview {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
</style>
