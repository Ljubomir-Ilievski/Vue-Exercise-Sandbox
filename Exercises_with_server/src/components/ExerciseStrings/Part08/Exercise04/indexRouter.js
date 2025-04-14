import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/messages",
      name: "messages",
      meta: {
        transition: "zoom",
      },
      component: () => import("./Messages.vue"),
    },
  ],
});

export default router;
