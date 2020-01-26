import Vue from "vue";
// import Vue from "vue/dist/vue.esm.js";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./router.js";
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    return { x: 0, y: 0 };

    // if (to.path == "/books") {
    //   return { x: 0, y: 0 };
    // }
    // console.log(to.path, to.hash);
    // if (to.path == "/facts") {
    //   return savedPosition;
    // } else {
    //   return { x: 0, y: 0 };
    // }
  }
});

router.beforeEach((to, from, next) => {
  // document.getElementById("loader").style.display = "flex";
  // setTimeout(function() {
  //   document.getElementById("loader").style.display = "none";
  // }, 2000);

  next();
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
