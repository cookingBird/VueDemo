export default {
  state: {
    testValue: 0,
  },
  getters: {
    getValue: (state) => state.testValue,
  },
  mutations: {
    SET_VALUE: (state, payload) => {
      state.testValue = payload;
    },
  },
  actions: {
    BEGIN: ({ commit }) => {
      commit('SET_VALUE', Math.ceil(Math.random() * 10));
    },
  },
};
