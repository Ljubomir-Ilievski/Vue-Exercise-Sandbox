import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'

async function beforeEnterMessage(to, from, next) {
  const id = to.params.id;
  const module = await import ('./messages.js');
  const messages = module.default;
  if (messages && messages.length > 0 && id < messages.length) {
    to.params.message = messages[id];
  }

  next()
}

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
    component: () => import('./MessageFeed.vue'),
    props: true,
    async beforeEnter(to, from, next) {
      if (!to.params || !to.params.messages) {
        const module = await import ('./messages.js');

        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = messages;
        }
      }

      next()
    }
  },{
    path: '/message/:id',
    name: 'message',
    component: () => import('./Message.vue'),
    beforeEnter: beforeEnterMessage,
    props: true,
    children: [{
      path: 'author',
      name: 'messageAuthor',
      props: true,
      component: () => import('./MessageAuthor.vue'),
      beforeEnter: beforeEnterMessage
    }, {
      path: 'info',
      props: true,
      name: 'messageInfo',
      component: () => import('./MessageInfo.vue'),
      beforeEnter: beforeEnterMessage
    }]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
