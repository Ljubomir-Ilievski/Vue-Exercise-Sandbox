import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import PostList from './PostList.vue'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <header>\n" +
"  <h1>The Vue.js Workshop Blog</h1>\n" +
"  </header>\n" +
"\n" +
"  <PostList :posts=\"posts\" />\n" +
"</template>\n" +
"\n" +
"<style>\n" +
"</style>\n" +
"\n" +
"<script>\n" +
"export default {\n" +
"  data() {\n" +
"    return {\n" +
"      posts: [\n" +
"        {\n" +
"          title: 'Vue.js for React developers',\n" +
"          description: 'React has massive popularity here are the key benefits of Vue.js over it.',\n" +
"          tags: ['vue', 'react'],\n" +
"        },\n" +
"        {\n" +
"          title: 'Migrating an AngularJS app to Vue.js',\n" +
"          description: 'With many breaking changes, AngularJS developers have found it easier to retrain to Vue.js than Angular 2',\n" +
"          tags: ['vue', 'angularjs']\n" +
"        }\n" +
"      ]\n" +
"    }\n" +
"  }\n" +
"\n" +
"}\n" +
"</script>\n" +
"\n"


const HelloWorld = "<script setup>\n" +
"defineProps({\n" +
"  msg: {\n" +
"    type: String,\n" +
"    required: true\n" +
"  }\n" +
"})\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"  <div class=\"greetings\">\n" +
"    <h1 class=\"green\">{{ msg }}</h1>\n" +
"    <h3>\n" +
"      You’ve successfully created a project with\n" +
"      <a target=\"_blank\" href=\"https://vitejs.dev/\">Vite</a> +\n" +
"      <a target=\"_blank\" href=\"https://vuejs.org/\">Vue 3</a>.\n" +
"    </h3>\n" +
"  </div>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
"h1 {\n" +
"  font-weight: 500;\n" +
"  font-size: 2.6rem;\n" +
"  top: -10px;\n" +
"}\n" +
"\n" +
"h3 {\n" +
"  font-size: 1.2rem;\n" +
"}\n" +
"\n" +
".greetings h1,\n" +
".greetings h3 {\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
"@media (min-width: 1024px) {\n" +
"  .greetings h1,\n" +
"  .greetings h3 {\n" +
"    text-align: left;\n" +
"  }\n" +
"}\n" +
"</style>\n"




const PostList = "<script setup>\n" +
"import PostListItem from './PostListItem.vue';\n" +
"\n" +
"defineProps({\n" +
"  posts: {\n" +
"    type: Array,\n" +
"	default: () => []\n" +
"  }\n" +
"})\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"	<div>\n" +
"		<PostListItem v-for=\"post in posts\"\n" +
"		:key=\"post.slug\"\n" +
"		:title=\"post.title\"\n" +
"		:description=\"post.description\"\n" +
"		:tags=\"post.tags\"\n" +
"		/>\n" +
"	</div>\n" +
"</template>\n"


const PostListItem = "<script setup>\n" +
"defineProps({\n" +
"  title: {\n" +
"    type: String\n" +
"  },\n" +
"  description: {\n" +
"	type: String\n" +
"  },\n" +
"  tags: {\n" +
"	type: Array, \n" +
"	default: () => []\n" +
"  }\n" +
"})\n" +
"\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"	<div>\n" +
"	<h3>{{ title }}</h3>\n" +
"	<p>\n" +
"		{{ description }}\n" +
"	</p>\n" +
"\n" +
"	<ul>\n" +
"      <li\n" +
"        v-for=\"tag in tags\"\n" +
"        :key=\"tag\"\n" +
"      >\n" +
"        #{{ tag }}\n" +
"      </li>\n" +
"    </ul>\n" +
"\n" +
"	</div>\n" +
"</template>\n"


const Exercise02 = {

        name: "Exercise02",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part11/Exercise02/App.vue",
            resetCode: App
            },

            "HelloWorld.vue": {
            name: "HelloWorld.vue",
            path: "Part11/Exercise02/HelloWorld.vue",
            resetCode: HelloWorld
            },

            "PostList.vue": {
            name: "PostList.vue",
            path: "Part11/Exercise02/PostList.vue",
            resetCode: PostList
            },

            "PostListItem.vue": {
            name: "PostListItem.vue",
            path: "Part11/Exercise02/PostListItem.vue",
            resetCode: PostListItem
            },

        }

    }

    export default Exercise02
