import { createStore } from "vuex";
import todos from "./modules/todos";

export default createStore({
  //NOTE: instead of using writing the meat of my store here, i'm importing it from another file and using the module system. so instead of:
  // state: {},
  // mutations: {},
  // actions: {},
  // modules: {},
  // i put them in a separtate file, importing them to this file (line 2), and doing:
  modules: {
    todos: todos,
  },
});
