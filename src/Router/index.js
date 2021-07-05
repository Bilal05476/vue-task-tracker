import { createRouter, createWebHistory } from "vue-router";

import about from "../Views/about.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
