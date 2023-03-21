import LayoutMain from '@/components/LayoutMain';

const components = [LayoutMain];
export default {
  install(vue) {
    components.forEach((item) => {
      vue.component(item.name, item);
    });
  },
};
