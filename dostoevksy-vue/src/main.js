import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./router.js";
import vueSmoothScroll from "vue2-smooth-scroll";
import { store } from "./store/store.js";
import { mixin } from "./store/mixin.js";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

Vue.use(vueSmoothScroll);
Vue.component("kinesis-container", KinesisContainer);
Vue.component("kinesis-element", KinesisElement);

Vue.use(VueRouter);
window.history.scrollRestoration = "manual";
const router = new VueRouter({
  routes,
  mode: "history",

  scrollBehavior(to, from, savedPosition) {
    window.history.scrollRestoration = "manual";
    // return { x: 0, y: 0 };
    // console.log(to, from);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 100);
    });
  }
});

router.beforeEach((to, from, next) => {
  // if (document.getElementById("loader")) {
  //   document.getElementById("loader").style.display = "flex";
  // }
  // setTimeout(function() {
  //   document.getElementById("loader").style.display = "none";
  // }, 300);

  next();
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  mixins: [mixin]
});

// class Scrooth {
//   constructor({
//     element = window,
//     strength = 20,
//     acceleration = 1.4,
//     deceleration = 0.93
//   } = {}) {
//     this.element = element;
//     this.distance = strength;
//     this.acceleration = acceleration;
//     this.deceleration = deceleration;
//     this.running = false;

//     this.element.addEventListener("wheel", this.scrollHandler.bind(this));
//     this.element.addEventListener("mousewheel", this.scrollHandler.bind(this));
//     this.scroll = this.scroll.bind(this);
//   }

//   scrollHandler(e) {
//     // e.preventDefault();

//     if (!this.running) {
//       this.top = this.element.pageYOffset || this.element.scrollTop || 0;
//       this.running = true;
//       this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
//       this.isDistanceAsc = true;
//       this.scroll();
//     } else {
//       this.isDistanceAsc = false;
//       this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
//     }
//   }

//   scroll() {
//     if (this.running) {
//       this.currentDistance *=
//         this.isDistanceAsc === true ? this.acceleration : this.deceleration;
//       Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false
//         ? (this.running = false)
//         : 1;
//       Math.abs(this.currentDistance) >= Math.abs(this.distance)
//         ? (this.isDistanceAsc = false)
//         : 1;

//       this.top += this.currentDistance;
//       this.element.scrollTo(0, this.top);

//       requestAnimationFrame(this.scroll);
//     }
//   }
// }

// let body = new Scrooth();
