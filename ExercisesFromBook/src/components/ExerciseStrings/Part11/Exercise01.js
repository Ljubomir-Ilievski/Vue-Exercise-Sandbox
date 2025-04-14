import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import NewsletterBanner from './NewsletterBanner.vue';\n" +
"import CookieBanner from './CookieBanner.vue';\n" +
"import SearchForm from './SearchForm.vue';\n" +
"import { ref, computed } from 'vue';\n" +
"import { useRoute } from 'vue-router';\n" +
"\n" +
"const route = useRoute();\n" +
"\n" +
"const posts = ref([\n" +
"      {\n" +
"        slug: 'vue-react',\n" +
"        title: 'Vue.js for React developers',\n" +
"        description: 'React has massive popularity here are the key benefits of Vue.js over it.',\n" +
"        content:'This is the content of the Vue.js for React developers post.',\n" +
"        tags: ['vue', 'react'],\n" +
"      },\n" +
"      {\n" +
"        slug: 'vue-angularjs',\n" +
"        title: 'Migrating an AngularJS app to Vue.js',\n" +
"        description: 'With many breaking changes, AngularJS developers have found it easier to retrain to Vue.js than Angular 2',\n" +
"        content: 'This is the content of the Vue.js for AngularJS developers post.',\n" +
"        tags: ['vue', 'angularjs']\n" +
"      }\n" +
"    ]\n" +
")\n" +
"\n" +
"\n" +
"const relevantPosts = computed(() => {\n" +
"  if(!route) return posts;\n" +
"  const { q } = route.query;\n" +
"  if(!q) return posts.value;\n" +
"  return posts.value.filter(\n" +
"    p => p.title.toLowerCase().includes(q.toLowerCase())\n" +
"  )\n" +
"})\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"\n" +
"  <NewsletterBanner />\n" +
"\n" +
"  <SearchForm />\n" +
"\n" +
"  <header>\n" +
"  <h1>The Vue.js Workshop Blog</h1>\n" +
"  </header>\n" +
"\n" +
"  <router-view :posts=\"relevantPosts\"></router-view>\n" +
"\n" +
"  <CookieBanner />\n" +
"</template>\n" +
"\n" +
"\n"


const CookieBanner = "<script setup>\n" +
"import { computed } from 'vue';\n" +
"\n" +
"import { userPreferencesStore } from './store.js';\n" +
"\n" +
"const store = userPreferencesStore();\n" +
"\n" +
"const acceptedCookie = computed(() => { \n" +
"	return store.acceptedCookie;\n" +
"})\n" +
"</script>\n" +
"\n" +
"\n" +
"<template>\n" +
"	<div v-if=\"!acceptedCookie\">\n" +
"		<strong>Cookies Disclaimer</strong> \n" +
"		We use cookies to improve our experience.\n" +
"		<button @click=\"store.acceptCookie\">I agree</button>\n" +
"	</div>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
"div {\n" +
"	background-color: green;\n" +
"	size: 100%;\n" +
"	padding: 10px;\n" +
"	margin-top: 50px;\n" +
"}\n" +
"\n" +
"div button {\n" +
"	float: right;\n" +
"}\n" +
"</style>\n"


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





const indexRouter = "import { createRouter, createWebHistory } from 'vue-router';\n" +
"import PostList from './PostList.vue';\n" +
"import SinglePost from './SinglePost.vue';\n" +
"import TagPage from './TagPage.vue';\n" +
"\n" +
"const routes = [\n" +
"	{\n" +
"		path: '/',\n" +
"		component: PostList\n" +
"	},\n" +
"	{\n" +
"		path: '/:postId', \n" +
"		component: SinglePost\n" +
"	},\n" +
"	{\n" +
"		path:'/tags/:tagName',\n" +
"		component: TagPage\n" +
"	}\n" +
"];\n" +
"\n" +
"const router = createRouter({\n" +
"  history: createWebHistory(), \n" +
"  routes\n" +
"});\n" +
"\n" +
"export default router;\n"


const NewsletterBanner = "<script setup>\n" +
"import { computed } from 'vue';\n" +
"\n" +
"import { userPreferencesStore } from './store.js';\n" +
"\n" +
"const store = userPreferencesStore();\n" +
"\n" +
"const showBanner = computed(() => { \n" +
"	return !store.dismissedSubscriberBanner;\n" +
"})\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"	<div v-if=\"showBanner\">\n" +
"		<strong>Subscribe to the newsletter</strong>\n" +
"\n" +
"		<button @click=\"store.dismissSubscriberBanner()\">Close</button>\n" +
"	</div>\n" +
"</template>\n" +
"\n" +
"<style scoped>\n" +
"div {\n" +
"	background-color: #c0c0c0;\n" +
"	size: 100%;\n" +
"	padding: 10px;\n" +
"}\n" +
"\n" +
"div button {\n" +
"	float: right;\n" +
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
"		:slug=\"post.slug\"\n" +
"		/>\n" +
"	</div>\n" +
"</template>\n"


const PostListItem = "<script setup>\n" +
"import { computed } from 'vue';\n" +
"\n" +
"const props = defineProps({\n" +
"  title: {\n" +
"    type: String\n" +
"  },\n" +
"  description: {\n" +
"  	type: String\n" +
"  },\n" +
"  tags: {\n" +
"    type: Array, \n" +
"    default: () => []\n" +
"  },\n" +
"  slug: {\n" +
"    type: String\n" +
"  }\n" +
"})\n" +
"\n" +
"const truncated = computed(() => {\n" +
"  return props.description && props.description.slice(0,8)\n" +
"})\n" +
"\n" +
"const ellipsis = computed(() => {\n" +
"  return props.description && props.description.length > 50 ? \n" +
"          `${props.description.slice(0,50)}...` : props.description;\n" +
"})\n" +
"\n" +
"defineExpose({ truncated, ellipsis })\n" +
"\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"	<div>\n" +
"  <router-link \n" +
"    :to=\"`/${slug}`\">\n" +
"	<h3>{{ title }}</h3>\n" +
"  </router-link>\n" +
"	<p>\n" +
"		{{ ellipsis }}\n" +
"	</p>\n" +
"\n" +
"\n" +
"  <router-link :to=\"`/tags/${tag}`\"\n" +
"  v-for=\"tag in tags\" :key=\"tags\">\n" +
"  #{{ tag }}\n" +
"  </router-link>\n" +
"  \n" +
"	</div>\n" +
"</template>\n" +
"\n"


const SearchForm = "<template>\n" +
"	<div>\n" +
"		<form @submit.prevent=\"onSubmit()\">\n" +
"			<input v-model=\"searchTerm\" placeholder=\"Search\" type=\"text\"> \n" +
"			<button type=\"submit\" id=\"search\">Search</button>\n" +
"		</form>\n" +
"	</div>\n" +
"</template>\n" +
"\n" +
"<script>\n" +
"export default {\n" +
"	data() {\n" +
"		return {\n" +
"			searchTerm: this.$route.query.q || ''\n" +
"		}\n" +
"	},\n" +
"	methods: {\n" +
"		onSubmit() {\n" +
"			if(this.searchTerm === '') return;\n" +
"			this.$router.push({ \n" +
"				path:'/',\n" +
"				query: {\n" +
"					q: this.searchTerm\n" +
"				}\n" +
"			});\n" +
"		}\n" +
"	}\n" +
"}\n" +
"</script>\n" +
"\n" +
"<style scoped>\n" +
"div {\n" +
"	margin-top: 10px;\n" +
"	margin-bottom: 10px;\n" +
"}\n" +
"</style>\n"


const SinglePost = "<script setup>\n" +
"import { computed } from 'vue';\n" +
"import { useRoute } from 'vue-router';\n" +
"\n" +
"const props = defineProps({\n" +
"  posts: {\n" +
"    type: Array,\n" +
"	default: () => []\n" +
"  }\n" +
"})\n" +
"\n" +
"const route = useRoute();\n" +
"\n" +
"const post = computed(() => {\n" +
"	const { postId } = route.params;\n" +
"	return props.posts.find(p => p.slug === postId);\n" +
"})\n" +
"\n" +
"const title = computed(() => { \n" +
"	return post && post.value.title;\n" +
"})\n" +
"\n" +
"\n" +
"const content = computed(() => { \n" +
"	return post && post.value.content;\n" +
"})\n" +
"\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"	<div>\n" +
"		<h2>\n" +
"		Post: {{ title }}\n" +
"		</h2>\n" +
"		<p>\n" +
"		{{ content }}\n" +
"		</p>\n" +
"	</div>\n" +
"</template>\n"


const store = "import { defineStore } from 'pinia'\n" +
"\n" +
"export const userPreferencesStore = defineStore(\"userPreferencesStore\",{\n" +
"  state: () => ({\n" +
"    dismissedSubscriberBanner: false,\n" +
"    acceptedCookie: false\n" +
"  }),\n" +
"  getters: {\n" +
"  },\n" +
"  actions: {\n" +
"    dismissSubscriberBanner() {\n" +
"      this.dismissedSubscriberBanner = true;\n" +
"    },\n" +
"    acceptCookie() {\n" +
"      this.acceptedCookie = true;\n" +
"    }\n" +
"  }\n" +
"})\n"


const TagPage = "<script setup>\n" +
"import PostList from './PostList.vue';\n" +
"import { computed } from 'vue';\n" +
"import { useRoute } from 'vue-router';\n" +
"\n" +
"const props = defineProps({\n" +
"  posts: {\n" +
"    type: Array,\n" +
"	default: () => []\n" +
"  }\n" +
"})\n" +
"\n" +
"const route = useRoute();\n" +
"\n" +
"const tagName = computed(() => {\n" +
"	return route.params.tagName;\n" +
"})\n" +
"\n" +
"const tagPosts = computed(() => {\n" +
"	return props.posts.filter(p => p.tags.includes(route.params.tagName));\n" +
"})\n" +
"\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"	<h3># {{ tagName }}</h3>\n" +
"	<PostList :posts=\"tagPosts\" />\n" +
"</template>\n"


const Exercise01 = {

        name: "Exercise01",
        // AppComponent: App,
        routerPath: "Part11/Exercise01/indexRouter.js",

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part11/Exercise01/App.vue",
            resetCode: App
            },

            "CookieBanner.vue": {
            name: "CookieBanner.vue",
            path: "Part11/Exercise01/CookieBanner.vue",
            resetCode: CookieBanner
            },

            "HelloWorld.vue": {
            name: "HelloWorld.vue",
            path: "Part11/Exercise01/HelloWorld.vue",
            resetCode: HelloWorld
            },

            "indexRouter.js": {
            name: "indexRouter.js",
            path: "Part11/Exercise01/indexRouter.js",
            resetCode: indexRouter
            },

            "NewsletterBanner.vue": {
            name: "NewsletterBanner.vue",
            path: "Part11/Exercise01/NewsletterBanner.vue",
            resetCode: NewsletterBanner
            },

            "PostList.vue": {
            name: "PostList.vue",
            path: "Part11/Exercise01/PostList.vue",
            resetCode: PostList
            },

            "PostListItem.vue": {
            name: "PostListItem.vue",
            path: "Part11/Exercise01/PostListItem.vue",
            resetCode: PostListItem
            },

            "SearchForm.vue": {
            name: "SearchForm.vue",
            path: "Part11/Exercise01/SearchForm.vue",
            resetCode: SearchForm
            },

            "SinglePost.vue": {
            name: "SinglePost.vue",
            path: "Part11/Exercise01/SinglePost.vue",
            resetCode: SinglePost
            },

            "store.js": {
            name: "store.js",
            path: "Part11/Exercise01/store.js",
            resetCode: store
            },

            "TagPage.vue": {
            name: "TagPage.vue",
            path: "Part11/Exercise01/TagPage.vue",
            resetCode: TagPage
            },

        }

    }

    export default Exercise01
