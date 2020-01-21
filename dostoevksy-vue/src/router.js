import Home from "./pages/Home.vue";
import Charachters from "./pages/Charachters.vue";
import Biography from "./pages/Biography.vue";

export const routes = [
  { path: "/home", component: Home },
  { path: "/biography", component: Biography },
  { path: "/characters", component: Charachters },
  { path: "*", redirect: "/home" }
];
