import HomeView from '../views/HomeView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

function RoutesInstaller(router) {
  return Promise.resolve(
    routes.forEach((route) => {
      router.addRoute(route);
    }),
  ).then(() => router);
}

export { RoutesInstaller, routes };
