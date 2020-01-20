import Home from "./pages/Home.vue";
import Biography from "./pages/Biography.vue";

export const routes = [
  { path: "/home", component: Home },
  { path: "/biography", component: Biography },
  { path: "*", redirect: "/home" }
];
