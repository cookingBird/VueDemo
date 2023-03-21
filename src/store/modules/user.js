import { setStore, getStore } from '@/util/Auth/localStore';

export const USER_LOG = {
  LOGIN_BY_NAME: 'LOGIN_BY_NAME',
  LOGIN_BY_PHONE: 'LOGIN_BY_PHONE',
  LOGOUT: 'LOGOUT',
};

export const USER_AUTH = {
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  GET_TOKEN: 'GET_TOKEN',
};

export default {
  state: {},
  mutations: {},
  actions: {
    [USER_LOG.LOGIN_BY_NAME]: function ({ commit, dispatch }, payload) {},
    [USER_LOG.LOGIN_BY_PHONE]: function ({ commit, dispatch }, payload) {},
    [USER_LOG.LOGOUT]: function ({ commit, dispatch }, payload) {},
    [USER_AUTH.GET_TOKEN]: function ({ commit, dispatch }, payload) {},
    [USER_AUTH.REFRESH_TOKEN]: function ({ commit, dispatch }, payload) {},
  },
};
