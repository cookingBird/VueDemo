import Vue from 'vue';
import { store } from '@/store';

/**全局路由 */
export { CreateRouter, ResetRouter } from '@/router/index';

/**全局导入tailwindcss */
import 'tailwindcss/tailwind.css';

/**全局导入antD */
const AntD = require('ant-design-vue');
import 'ant-design-vue/dist/antd.min.css';
Vue.use(AntD);

/**全局导入Element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/**全局配置$http */
import Axios from '@/axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, Axios);

/**全局配置$event */
import EventBus from '@/main/plugins/events';
Vue.use(EventBus);

/**全局组件 */
import Components from '@/components';
Vue.use(Components);

/**全局配置 */
Vue.config.productionTip = false;

export function CreateVueApp(_Vue, options) {
  return Promise.resolve(
    new _Vue({
      store,
      ...options,
    }),
  );
}

export default Vue;
