import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Shop from "@/components/Shop"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    }, 
    {
      path: "/cat",
      name: "Shop",
      component: Shop,
      props: (route) => ({ name: route.query.name }) 
    }
  ]
});
