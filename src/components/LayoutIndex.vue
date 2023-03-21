<template>
  <LayoutIndexBg>
    <header class="relative flex-grow-0 z-10"><slot name="header"></slot></header>
    <main class="relative flex-grow z-0"><slot name="main"></slot></main>
    <footer class="relative flex-grow-0 z-10"><slot name="footer"></slot></footer>
  </LayoutIndexBg>
</template>

<script>
import LayoutIndexBg from '@/pages/index/components/LayoutIndexBg';
export default {
  name: 'LayoutIndex',
  /**模板依赖*/
  components: { LayoutIndexBg },
  provide: {},
  inject: {},
  /**属性接口*/
  props: {},
  /**本地状态*/
  data() {
    return {};
  },
  computed: {},
  /**事件 (通过响应式事件触发的回调)*/
  watch: {},
  /**LifeCyle Hooks*/
  //生命周期 - 创建完成（可以访问当前this实例，及其方法）
  //一般这里可以做一些对方法的防抖与节流操作
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //如果页面有keep-alive缓存功能，这个钩子会触发
  activated() {},
  /**非响应式的 property(不依赖响应性系统的实例 property)*/
  methods: {},
  /**渲染 (组件输出的声明式描述)*/
};
</script>
<style lang="css" scoped></style>
