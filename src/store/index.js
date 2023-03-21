import Vuex from 'vuex';
import Vue from 'vue';
import test from './modules/test';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    test,
  },
});

export { store };
