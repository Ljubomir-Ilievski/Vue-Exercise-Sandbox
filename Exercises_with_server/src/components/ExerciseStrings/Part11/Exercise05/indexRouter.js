import { createRouter, createWebHistory } from 'vue-router';
import PostList from './PostList.vue';
import SinglePost from './SinglePost.vue';
import TagPage from './TagPage.vue';

const routes = [
	{
		path: '/',
		component: PostList
	},
	{
		path: '/:postId', 
		component: SinglePost
	},
	{
		path:'/tags/:tagName',
		component: TagPage
	}
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;