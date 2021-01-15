const state = {
  todos: [
    {
      id: 1,
      title: "Aller au boulot",
      completed: true,
    },
    {
      id: 2,
      title: "Lire la documentation de Sass",
      completed: true,
    },
    {
      id: 3,
      title: "Finir mon app de Vuex",
      completed: false,
    },
    {
      id: 4,
      title: "Lire ma Bible",
      completed: false,
    },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const mutations = {};

const actions = {};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
