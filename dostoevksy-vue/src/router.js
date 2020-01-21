import Home from "./pages/Home.vue";
import Charachters from "./pages/Charachters.vue";
import Biography from "./pages/Biography.vue";
import Books from "./pages/Books.vue";
import Reviews from "./pages/Reviews.vue";
import Facts from "./pages/Facts.vue";
import Events from "./pages/Events.vue";

export const routes = [
  { path: "/home", component: Home },
  { path: "/biography", component: Biography },
  { path: "/characters", component: Charachters },
  { path: "/books", component: Books },
  { path: "/reviews", component: Reviews },
  { path: "/facts", component: Facts },
  { path: "/events", component: Events },
  { path: "*", redirect: "/home" }
];
