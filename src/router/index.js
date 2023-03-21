import Vue from 'vue';
/**vue-router 全局配置 */
import VueRouter from 'vue-router';
import mergeRouterConfig from './utils';

import defaultConfiguration from './configurations';
import Plugins from './plugins';

/**
 * @param config { <RouterConfig> }
 * 配置参考:https://v3.router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9
 */
function CreateRouter(config = {}) {
  let resultConfig = mergeRouterConfig(defaultConfiguration, config);
  return Promise.resolve(Vue.use(VueRouter))
    .then(() => new VueRouter(resultConfig))
    .then((router) => {
      Plugins.install(router);
      return router;
    });
}

function ResetRouter(vue) {
  const router = vue.$options.router;
  // 重置路由 比如用于身份验证失败，需要重新登录时 先清空当前的路有权限
  const newRouter = CreateRouter();
  router.matcher = newRouter.matcher; // reset router
}

export { CreateRouter, ResetRouter };
