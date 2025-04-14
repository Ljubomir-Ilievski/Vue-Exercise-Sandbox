<script>
import { h } from 'vue';


export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  render() {
    const r = {
      components: {

      },
      template: `<div class="content">${this.content || ''}</div>`,
      methods: {
        hello() {
          // method "hello" is also available here
        },
      },
    };
    return h(r);
  },
};
</script>
