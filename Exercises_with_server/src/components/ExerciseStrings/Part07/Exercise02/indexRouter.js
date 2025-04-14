import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./AboutView.vue'),
  },
  {
    path: '/messagesFeed',
    name: 'messageFeed',
    component: () => import('./MessageFeed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
