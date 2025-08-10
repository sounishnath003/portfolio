import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "./pages/home/Home.vue";
import About from "./pages/page-router/pages/about/About.vue";
import NotFound from "./pages/not-found/NotFound.vue";
import PageRouter from "./pages/page-router/PageRouter.vue";
import Projects from "./pages/page-router/pages/projects/Projects.vue";
import Blogs from "./pages/page-router/pages/blogs/Blogs.vue";
import Resume from "./pages/page-router/pages/resume/Resume.vue";
import Uses from "./pages/page-router/pages/uses/Uses.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  {
    path: "/pages",
    component: PageRouter,
    children: [
      { path: "about", component: About },
      { path: "projects", component: Projects },
      { path: "blogs", component: Blogs },
      { path: "resume", component: Resume },
      { path: "uses", component: Uses },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
