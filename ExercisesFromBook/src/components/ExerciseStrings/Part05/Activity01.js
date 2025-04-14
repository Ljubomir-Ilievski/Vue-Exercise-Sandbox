import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
  "  <BlogView />\n" +
  "</template>\n" +
  "\n" +
  "<script setup>\n" +
  "import BlogView from \"./BlogView.vue\";\n" +
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
  "input {\n" +
  "  padding: 6px;\n" +
  "}\n" +
  "</style>\n"


const blogView = "<template>\n" +
  "    <div>\n" +
  "        <button @click=\"showEditor = !showEditor\" v-if=\"!showEditor\">Add new blog</button>\n" +
  "        <BlogEditor v-else @addNewItem=\"addItem\"/>\n" +
  "        <Blogs :blogs=\"blogs\" :is-loading=\"isLoading\" :error=\"error\" @deleteBlog=\"deleteItem\"/>\n" +
  "    </div>\n" +
  "</template>\n" +
  "<script setup>\n" +
  "import BlogEditor from './BlogEditor.vue';\n" +
  "import Blogs from './Blogs.vue';\n" +
  "import { useBlogs } from './useBlogs.js';\n" +
  "import { ref } from 'vue';\n" +
  "\n" +
  "const { blogs, isLoading, error, addItem, deleteItem } = useBlogs();\n" +
  "const showEditor = ref(false);\n" +
  "</script>"


const blogs = "<template>\n" +
  "  <div>\n" +
  "    <h1>Blogs</h1>\n" +
  "    <div v-if=\"isLoading\">\n" +
  "      <p>Loading...</p>\n" +
  "    </div>\n" +
  "    <div v-else-if=\"error\">\n" +
  "      <p>{{ error }}</p>\n" +
  "    </div>\n" +
  "    <section v-else>\n" +
  "      <div class=\"search\">\n" +
  "        <label for=\"search\">Search:</label>\n" +
  "        <input type=\"text\" id=\"search\" v-model=\"searchTerm\" />\n" +
  "      </div>\n" +
  "      <fieldset>\n" +
  "        <div>Filter by: </div>\n" +
  "        <input type=\"checkbox\" id=\"title\" value=\"title\" v-model=\"filters\" />\n" +
  "        <label for=\"title\">By Title</label>\n" +
  "        <input\n" +
  "          type=\"checkbox\"\n" +
  "          id=\"content\"\n" +
  "          value=\"description\"\n" +
  "          v-model=\"filters\"\n" +
  "        />\n" +
  "        <label for=\"content\">By Content</label>\n" +
  "      </fieldset>\n" +
  "      <ul class=\"articles-list\">\n" +
  "        <li>\n" +
  "          <article v-for=\"(blog, i) in filteredBlogs\" :key=\"i\">\n" +
  "            <div class=\"article-item-info\">\n" +
  "                <img\n" +
  "                v-if=\"blog.heroImage\"\n" +
  "                class=\"thumbnail\"\n" +
  "                :src=\"`${blog.heroImage.fields.file.url}?fit=scale&w=350&h=196`\"\n" +
  "                />\n" +
  "                <div class=\"article-text\">\n" +
  "                <div class=\"date\">\n" +
  "                    {{ new Date(blog.publishDate).toDateString() }}\n" +
  "                </div>\n" +
  "                <h4>{{ blog.title }}</h4>\n" +
  "                <p>{{ blog.description }}</p>\n" +
  "                </div>\n" +
  "            </div>            \n" +
  "            <button @click=\"emits('deleteBlog', blog.id)\">Delete</button>\n" +
  "          </article>\n" +
  "        </li>\n" +
  "      </ul>\n" +
  "    </section>\n" +
  "  </div>\n" +
  "</template>\n" +
  "<script setup>\n" +
  "import { defineProps, defineEmits, ref, watch } from \"vue\";\n" +
  "import { useSearch } from \"./useSearch.js\";\n" +
  "\n" +
  "const props = defineProps({\n" +
  "  blogs: {\n" +
  "    type: Array,\n" +
  "    required: true,\n" +
  "  },\n" +
  "  isLoading: {\n" +
  "    type: Boolean,\n" +
  "    required: true,\n" +
  "  },\n" +
  "  error: {\n" +
  "    type: String,\n" +
  "    required: true,\n" +
  "  },\n" +
  "});\n" +
  "\n" +
  "const emits = defineEmits([\"deleteBlog\"]);\n" +
  "const blogs = ref(props.blogs);\n" +
  "\n" +
  "watch(\n" +
  "  () => props.blogs,\n" +
  "  (newBlogs) => {\n" +
  "    blogs.value = newBlogs;\n" +
  "  }\n" +
  ");\n" +
  "\n" +
  "const {\n" +
  "  searchTerm,\n" +
  "  filters,\n" +
  "  filteredItems: filteredBlogs,\n" +
  "} = useSearch(blogs);\n" +
  "</script>\n" +
  "\n" +
  "<style scoped>\n" +
  ".articles-list article{\n" +
  "  display: flex;\n" +
  "  flex-direction: column;\n" +
  "  padding: 0;\n" +
  "  gap: 10px;\n" +
  "  border: 1px solid gray;\n" +
  "  align-items: center;\n" +
  "  margin-block: 20px;\n" +
  "}\n" +
  "button {\n" +
  "    margin-bottom: 10px;\n" +
  "}\n" +
  "\n" +
  ".article-item-info {\n" +
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
  "li {\n" +
  "    list-style: none;\n" +
  "}\n" +
  "\n" +
  "fieldset {\n" +
  "    display: flex;\n" +
  "    gap: 10px;\n" +
  "    margin-block: 20px;\n" +
  "}\n" +
  "</style>"


const blogEditor = "<template>\n" +
  "    <div>\n" +
  "        <h1>Blog Editor</h1>\n" +
  "        <div class=\"field\">\n" +
  "            <label for=\"title\">Title</label>\n" +
  "            <input type=\"text\" id=\"title\" v-model=\"title\" />\n" +
  "        </div>\n" +
  "        <div class=\"field\">\n" +
  "            <label for=\"slug\">Blog id</label>\n" +
  "            <input type=\"text\" id=\"slug\" v-model=\"id\" />\n" +
  "        </div>\n" +
  "        <div class=\"field\">\n" +
  "            <label for=\"author\">Author</label>\n" +
  "            <input type=\"text\" id=\"author\" v-model=\"author\" />\n" +
  "        </div>\n" +
  "        <div class=\"field\">\n" +
  "            <label for=\"content\">Content</label>\n" +
  "            <textarea id=\"content\" v-model=\"content\"></textarea>\n" +
  "        </div>\n" +
  "        <div class=\"field\">\n" +
  "            <button @click=\"save\">Save</button>\n" +
  "        </div>\n" +
  "    </div>\n" +
  "</template>\n" +
  "<script setup>\n" +
  "import { ref } from 'vue';\n" +
  "\n" +
  "const title = ref('');\n" +
  "const author = ref('');\n" +
  "const content = ref('');\n" +
  "const id = ref('');\n" +
  "\n" +
  "const emits = defineEmits(['addNewItem']);\n" +
  "\n" +
  "const save = () => {\n" +
  "    emits('addNewItem', ({\n" +
  "        title: title.value,\n" +
  "        author: author.value,\n" +
  "        content: content.value,\n" +
  "        id: id.value\n" +
  "    }));\n" +
  "\n" +
  "    title.value = '';\n" +
  "    author.value = '';\n" +
  "    content.value = '';\n" +
  "    id.value = '';\n" +
  "};\n" +
  "</script>\n" +
  "<style scoped>\n" +
  ".field {\n" +
  "    margin-bottom: 1rem;\n" +
  "}\n" +
  "\n" +
  ".field label {\n" +
  "    margin-inline-end: 10px;\n" +
  "}\n" +
  "</style>"


const useBlogs = "import { createClient } from \"contentful\";\n" +
  "import { useListActions } from \"./useListActions.js\";\n" +
  "import { ref, onBeforeMount } from \"vue\";\n" +
  "\n" +
  "const client = createClient({\n" +
  "  space: \"hpr0uushokd4\",\n" +
  "  accessToken: \"jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U\",\n" +
  "});\n" +
  "\n" +
  "export const useBlogs = () => {\n" +
  "  const blogs = ref([]);\n" +
  "  const isLoading = ref(false);\n" +
  "  const error = ref(null);\n" +
  "  const { addItem, deleteItem } = useListActions(blogs);\n" +
  "\n" +
  "  const getBlogs = async () => {\n" +
  "    isLoading.value = true;\n" +
  "    error.value = null;\n" +
  "\n" +
  "    try {\n" +
  "      const response = await client.getEntries({\n" +
  "        content_type: \"blogPost\",\n" +
  "        order: \"-fields.publishDate\",\n" +
  "      });\n" +
  "\n" +
  "      blogs.value = response.items.map((item) => ({\n" +
  "        ...item.fields,\n" +
  "        id: item.fields.slug,\n" +
  "      }));\n" +
  "    } catch (err) {\n" +
  "      error.value = err;\n" +
  "    } finally {\n" +
  "      isLoading.value = false;\n" +
  "    }\n" +
  "  };\n" +
  "\n" +
  "  onBeforeMount(getBlogs);\n" +
  "\n" +
  "  return {\n" +
  "    blogs,\n" +
  "    isLoading,\n" +
  "    error,\n" +
  "    addItem,\n" +
  "    deleteItem,\n" +
  "  };\n" +
  "}\n"


const useListActions = "export const useListActions = (items) => {\n" +
  "  const addItem = (item) => {\n" +
  "    items.value.push(item);\n" +
  "  };\n" +
  "  const deleteItem = (id) => {\n" +
  "    const index = items.value.findIndex((item) => item.id === id);\n" +
  "\n" +
  "    index >= 0 && items.value.splice(index, 1);\n" +
  "  };\n" +
  "\n" +
  "  return {\n" +
  "    addItem,\n" +
  "    deleteItem,\n" +
  "  };\n" +
  "}\n"


const useSearch = "import { ref, computed, reactive } from 'vue';\n" +
  "\n" +
  "export const useSearch = (items) => {\n" +
  "  const searchTerm = ref('');\n" +
  "  const filters = ref(['title'])\n" +
  "  const filteredItems = computed(() => {\n" +
  "    return items.value.filter(item => {\n" +
  "      return filters.value.some(filter => {\n" +
  "        return item[filter].toLowerCase().includes(searchTerm.value.toLowerCase());\n" +
  "      });\n" +
  "    });\n" +
  "  });\n" +
  "\n" +
  "  return {\n" +
  "    searchTerm,\n" +
  "    filteredItems,\n" +
  "    filters,\n" +
  "  }\n" +
  "}"

const Activity01 = {

  name: "Activity01",
  // AppComponent: App,

  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part05/Activity01/App.vue",
      resetCode: App
    },

    "Blogs.vue": {
      name: "Blogs.vue",
      path: "Part05/Activity01/Blogs.vue",
      resetCode: blogs
    },

    "BlogEditor.vue": {
      name: "BlogEditor.vue",
      path: "Part05/Activity01/BlogEditor.vue",
      resetCode: blogEditor
    },
    "BlogView.vue": {
      name: "BlogView.vue",
      path: "Part05/Activity01/BlogView.vue",
      resetCode: blogView
    },
    "useBlogs.js": {
      name: "useBlogs.js",
      path: "Part05/Activity01/useBlogs.js",
      resetCode: useBlogs
    },
    "useListActions.js": {
      name: "useListActions.js",
      path: "Part05/Activity01/useListActions.js",
      resetCode: useListActions
    },
    "useSearch.js": {
      name: "useSearch.js",
      path: "Part05/Activity01/useSearch.js",
      resetCode: useSearch
    },

  }

}

export default Activity01
