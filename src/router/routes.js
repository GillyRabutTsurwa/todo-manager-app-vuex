import Home from "../pages/Home.vue";
import Todos from "../pages/Todos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
];

export default routes;
