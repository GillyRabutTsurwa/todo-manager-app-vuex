import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const mutations = {
  setTodos: (state, todosPayload) => (state.todos = todosPayload),
};

const actions = {
  async fetchAllTodos(context) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response);

    const data = response.data;
    console.log(data);
    // set our state.todos to be the data from this axios get request by calling our setTodos mutation
    context.commit("setTodos", data);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
