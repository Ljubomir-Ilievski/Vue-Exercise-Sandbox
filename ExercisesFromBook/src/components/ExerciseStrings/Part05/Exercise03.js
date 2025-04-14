import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <BlogGallery />\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import BlogGallery from \"./BlogGallery.vue\";\n" +
"</script>\n"


const BlogGallery = "<template>\n" +
"    <label>\n" +
"        What are you searching for?\n" +
"        <input type=\"text\" v-model=\"searchTerm\" placeholder=\"Search by blog's title\" />\n" +
"    </label>\n" +
"    <ul>\n" +
"        <li v-for=\"(blog, index) in getFilteredBlogs()\" :key=\"index\">\n" +
"            <article>\n" +
"                <h3>{{ blog.title }}</h3>\n" +
"                <h4>{{ blog.author }}</h4>\n" +
"                <p>{{ blog.description }}</p>\n" +
"                <button @click=\"toggleFavorite(index)\">\n" +
"                    {{ \n" +
"                        blog.isFavorite \n" +
"                        ? 'Remove from favorites' \n" +
"                        : 'Add to favorites' \n" +
"                    }}\n" +
"                </button>\n" +
"            </article>\n" +
"        </li>\n" +
"    </ul>\n" +
"</template>\n" +
"<script setup>\n" +
"import { ref, reactive } from 'vue';\n" +
"\n" +
"const searchTerm = ref('');\n" +
"const blogs = reactive([{\n" +
"    title: 'Vue 3',\n" +
"    description: 'Vue 3 is awesome',\n" +
"    author: 'John Doe',\n" +
"    isFavorite: false\n" +
"}, {\n" +
"    title: 'Vue 2',\n" +
"    description: 'Vue 2 is awesome',\n" +
"    author: 'John Doe',\n" +
"    isFavorite: false\n" +
"}, {\n" +
"    title: 'Pinia state management',\n" +
"    description: 'Pinia is awesome',\n" +
"    author: 'Jane Smith',\n" +
"    isFavorite: false\n" +
"}, {\n" +
"    title: 'Vue Router',\n" +
"    description: 'Vue Router is awesome',\n" +
"    author: 'Jane Smith',\n" +
"    isFavorite: false\n" +
"}, {\n" +
"    title: 'Testing with Playwright',\n" +
"    description: 'Playwright is awesome',\n" +
"    author: 'Minnie Mouse',\n" +
"    isFavorite: false\n" +
"}, {\n" +
"    title: 'Testing with Cypress',\n" +
"    description: 'Cypress is awesome',\n" +
"    author: 'Mickey Mouse',\n" +
"    isFavorite: false\n" +
"}]);\n" +
"\n" +
"const toggleFavorite = (index) => {\n" +
"    blogs[index].isFavorite = !blogs[index].isFavorite;\n" +
"}\n" +
"\n" +
"const getFilteredBlogs = () => {\n" +
"    return blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.value.toLowerCase()));\n" +
"};\n" +
"</script>\n" +
"<style scoped>\n" +
"label {\n" +
"    display: flex;\n" +
"    flex-direction: column;\n" +
"}\n" +
"\n" +
"li {\n" +
"    list-style: none;\n" +
"    gap: 10px;\n" +
"    width: 200px;\n" +
"}\n" +
"\n" +
"ul {\n" +
"    display: flex;\n" +
"    flex-wrap: wrap;\n" +
"    gap: 10px;\n" +
"    padding-inline-start: 0px;\n" +
"}\n" +
"</style>\n"


const Exercise03 = {

        name: "Exercise03",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part05/Exercise03/App.vue",
            resetCode: App
            },

            "BlogGallery.vue": {
            name: "BlogGallery.vue",
            path: "Part05/Exercise03/BlogGallery.vue",
            resetCode: BlogGallery
            },

        }

    }

    export default Exercise03
