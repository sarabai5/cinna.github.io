import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import FurGo from "../views/works/FurGo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Works",
    component: Home
  },
  {
    path: "/Works",
    name: "Works",
    component: Home
  },
  {
    path: "/works/FurGo",
    name: "FurGo",
    component: FurGo
  }

];

const router = new VueRouter({
  routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
