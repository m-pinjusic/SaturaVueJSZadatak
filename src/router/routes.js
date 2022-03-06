const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/users",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        name: "About",
        meta: { requiresAuth: true },
      },
      {
        path: "admin",
        component: () => import("pages/Admin.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
