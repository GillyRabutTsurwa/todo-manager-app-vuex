const state = {
  // this data will be deleted, it is just to test that the store works
  testData: [
    {
      id: 1,
      name: "Gilbert",
      msg: "if this renders in the browser, it worked",
      success: true,
    },
    {
      id: 2,
      name: "Denisa",
      msg: "she suddenly has to learn react",
      success: true,
    },
  ],
};

const getters = {
  myData: (state) => state.testData,
};

const mutations = {};

const actions = {};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
