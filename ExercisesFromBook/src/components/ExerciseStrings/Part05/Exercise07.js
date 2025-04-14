import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<template>\n" +
"  <Movies />\n" +
"</template>\n" +
"\n" +
"<script setup>\n" +
"import Movies from \"./Movies.vue\";\n" +
"</script>\n"


const Movies = "<template>\n" +
"    <h1>Movies</h1>\n" +
"    <div v-if=\"isLoading\">\n" +
"        <p>Loading...</p>\n" +
"    </div>\n" +
"    <div v-else-if=\"error\">\n" +
"        <p>{{ error }}</p>\n" +
"    </div>\n" +
"    <div v-else>\n" +
"        <div>\n" +
"            <label for=\"search\">Search:</label>\n" +
"            <input type=\"text\" id=\"search\" v-model=\"searchTerm\" />\n" +
"        </div>\n" +
"        <ul>\n" +
"            <li v-for=\"movie in filteredMovies\" :key=\"movie.id\">\n" +
"                <article>\n" +
"                    <h3>{{ movie.title }}</h3>\n" +
"                    <h4>Released on: {{ movie.release_date }}</h4>\n" +
"                    <h5>Directed by: {{ movie.director }}</h5>\n" +
"                    <p>{{ movie.opening_crawl }}</p>\n" +
"                </article>\n" +
"            </li>\n" +
"        </ul>\n" +
"    </div>\n" +
"</template>\n" +
"<script setup>\n" +
"import { useMovies } from './useMovies.js'\n" +
"import { useSearch } from './useSearch.js'\n" +
"\n" +
"const { movies, error, isLoading } = useMovies();\n" +
"const { searchTerm, filteredItems: filteredMovies } = useSearch(movies);\n" +
"</script>\n"


const useMovies = "import { ref, onBeforeMount } from 'vue';\n" +
"\n" +
"export const useMovies = () => {\n" +
"  const movies = ref([]);\n" +
"  const isLoading = ref(false);\n" +
"  const error = ref(null);\n" +
"\n" +
"  const getMovies = async () => {\n" +
"    isLoading.value = true;\n" +
"    error.value = null;\n" +
"\n" +
"    try {\n" +
"      const response = await fetch(\"https://swapi.dev/api/films\");\n" +
"\n" +
"      if (!response.ok) {\n" +
"        throw new Error(\"Failed to fetch movies\");\n" +
"      }\n" +
"\n" +
"      const data = await response.json();\n" +
"      movies.value = data.results;\n" +
"    } catch (err) {\n" +
"      error.value = err;\n" +
"    } finally {\n" +
"      isLoading.value = false;\n" +
"    }\n" +
"  };\n" +
"\n" +
"  onBeforeMount(getMovies);\n" +
"\n" +
"  return {\n" +
"    movies,\n" +
"    isLoading,\n" +
"    error,\n" +
"  };\n" +
"};\n"


const useSearch = "import { ref, computed } from 'vue';\n" +
"\n" +
"export const useSearch = (items, filters = ['title']) => {\n" +
"  const searchTerm = ref('');\n" +
"  const filteredItems = computed(() => {\n" +
"    return items.value.filter(item => {\n" +
"      return filters.some(filter => {\n" +
"        return item[filter].toLowerCase().includes(searchTerm.value.toLowerCase());\n" +
"      });\n" +
"    });\n" +
"  });\n" +
"\n" +
"  return {\n" +
"    searchTerm,\n" +
"    filteredItems,\n" +
"  }\n" +
"}\n"


const Exercise07 = {

        name: "Exercise07",
        // AppComponent: App,

        components: {

            [App_Name]: {
            name: App_Name,
            path: "Part05/Exercise07/App.vue",
            resetCode: App
            },

            "Movies.vue": {
            name: "Movies.vue",
            path: "Part05/Exercise07/Movies.vue",
            resetCode: Movies
            },

            "useMovies.js": {
            name: "useMovies.js",
            path: "Part05/Exercise07/useMovies.js",
            resetCode: useMovies
            },

            "useSearch.js": {
            name: "useSearch.js",
            path: "Part05/Exercise07/useSearch.js",
            resetCode: useSearch
            },

        }

    }

    export default Exercise07
