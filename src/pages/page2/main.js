import { CreateVueApp, CreateRouter } from '@/main/index.js';
import Vue from 'vue';
import App from './App.vue';
import { routes } from './router';


let Router = void 0;
export function GetRouter() {
  return Router;
}

CreateRouter({ routes })
  .then((router) => {
    Router = router;
    return CreateVueApp(Vue, {
      router,
      render: (h) => h(App),
    });
  })
  .then((_vue) => {
    _vue.$mount('#app');
  });
