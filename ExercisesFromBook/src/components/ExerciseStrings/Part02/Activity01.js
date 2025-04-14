import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const appCode = "<template>\n" +
  "  <div id=\"app\">\n" +
  "    <div v-if=\"name\" class=\"author\">\n" +
  "      <h2>\n" +
  "        {{ name }}\n" +
  "      </h2>\n" +
  "      <h3 v-if=\"title\">{{ title }}</h3>\n" +
  "      <p v-if=\"bio\">{{ bio }}</p>\n" +
  "    </div>\n" +
  "    <div class=\"articles\">\n" +
  "      <hr />\n" +
  "      <h2>Articles</h2>\n" +
  "      <section v-if=\"posts\" class=\"articles-list\">\n" +
  "        <article v-for=\"(post, i) in posts\" :key=\"i\">\n" +
  "          <img\n" +
  "            v-if=\"post.fields.heroImage\"\n" +
  "            class=\"thumbnail\"\n" +
  "            :src=\"`${post.fields.heroImage.fields.file.url}?fit=scale&w=350&h=196`\"\n" +
  "          />\n" +
  "          <div class=\"article-text\">\n" +
  "            <div class=\"date\">\n" +
  "              {{ new Date(post.fields.publishDate).toDateString() }}\n" +
  "            </div>\n" +
  "            <h4>{{ post.fields.title }}</h4>\n" +
  "            <p>{{ post.fields.description }}</p>\n" +
  "          </div>\n" +
  "        </article>\n" +
  "      </section>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import { createClient } from \"contentful\";\n" +
  "\n" +
  "const client = createClient({\n" +
  "  space: \"hpr0uushokd4\",\n" +
  "  accessToken: \"jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U\",\n" +
  "});\n" +
  "\n" +
  "export default {\n" +
  "  name: \"app\",\n" +
  "  data() {\n" +
  "    return {\n" +
  "      authors: [],\n" +
  "      posts: {},\n" +
  "    };\n" +
  "  },\n" +
  "  computed: {\n" +
  "    name() {\n" +
  "      return this.authors[0] && this.authors[0].fields.name;\n" +
  "    },\n" +
  "    title() {\n" +
  "      return this.authors[0] && this.authors[0].fields.title;\n" +
  "    },\n" +
  "    bio() {\n" +
  "      return this.authors[0] && this.authors[0].fields.shortBio;\n" +
  "    },\n" +
  "  },\n" +
  "  async created() {\n" +
  "    this.authors = await this.getPeople();\n" +
  "    this.posts = await this.getBlogPosts();\n" +
  "  },\n" +
  "  methods: {\n" +
  "    async getPeople() {\n" +
  "      const entries = await client.getEntries({ content_type: \"person\" });\n" +
  "      return entries.items;\n" +
  "    },\n" +
  "    async getBlogPosts() {\n" +
  "      const entries = await client.getEntries({\n" +
  "        content_type: \"blogPost\",\n" +
  "        order: \"-fields.publishDate\",\n" +
  "      });\n" +
  "      return entries.items;\n" +
  "    },\n" +
  "  },\n" +
  "};\n" +
  "</script>\n" +
  "\n" +
  "<style>\n" +
  "#app {\n" +
  "  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n" +
  "  -webkit-font-smoothing: antialiased;\n" +
  "  -moz-osx-font-smoothing: grayscale;\n" +
  "  text-align: center;\n" +
  "  color: #2c3e50;\n" +
  "  margin: 60px auto 0;\n" +
  "  max-width: 800px;\n" +
  "}\n" +
  "\n" +
  ".articles-list > article {\n" +
  "  display: flex;\n" +
  "  text-align: left;\n" +
  "  padding-bottom: 15px;\n" +
  "}\n" +
  "\n" +
  ".article-text {\n" +
  "  padding: 15px 0;\n" +
  "}\n" +
  "\n" +
  ".thumbnail {\n" +
  "  margin-right: 30px;\n" +
  "}\n" +
  "\n" +
  ".date {\n" +
  "  font-size: 12px;\n" +
  "  font-weight: bold;\n" +
  "  text-transform: uppercase;\n" +
  "}\n" +
  "</style>\n"

const Activity01 = {


  name: "Activity01",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part02/Activity01/App.vue",
      resetCode: appCode
    },

  }


}

export default Activity01;
