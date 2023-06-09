import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/FavoritesView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/movie/:id",
      name: "movie-detail",
      component: () => import("../views/MovieDetailView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta?.requiresAuth && !token) {
    next({
      name: "login",
    });
  } else {
    next();
  }
});

export default router;
