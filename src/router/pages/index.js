const routes = [
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "page" */ './404.vue'),
    name: '404',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false,
    },
  },
  {
    path: '/403',
    component: () => import(/* webpackChunkName: "page" */ './403.vue'),
    name: '403',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false,
    },
  },
  {
    path: '/500',
    component: () => import(/* webpackChunkName: "page" */ './500.vue'),
    name: '500',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false,
    },
  },
  {
    path: '*',
    redirect: '/404',
  },
];
export default routes;
