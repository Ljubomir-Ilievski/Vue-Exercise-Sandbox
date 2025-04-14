import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./AboutView.vue')
  },
  {
    path: '/messages',
    name: 'messageFeed',
    component: () => import('./MessageFeed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
