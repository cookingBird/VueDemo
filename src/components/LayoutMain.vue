<template>
  <div class="absolute inset-0 bg-opacity-50 bg-gray-500 flex">
    <div
      ref="left"
      class="flex-grow-0 flex-shrink-0 w-80"
    >
      <slot name="left"></slot>
    </div>
    <div class="flex-1 border-l border-r">
      <slot name="main"></slot>
    </div>
    <div
      ref="right"
      class="flex-grow-0 flex-shrink-0 w-80"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutMain',
  /**模板依赖*/
  components: {},
  provide: {},
  inject: {},
  /**属性接口*/
  props: {
    leftWidth: {
      type: [String, Number],
    },
    rightWidth: {
      type: [String, Number],
    },
  },
  async mounted() {
    await this.$nextTick();
    this.setWidth();
  },
  methods: {
    setWidth() {
      let width;
      if (typeof this.leftWidth == 'number') {
        this.$refs.left.setAttribute('style', `width:${this.leftWidth}px`);
      } else {
        width = String.prototype.replaceAll.call(this.leftWidth, 'px', '');
        this.$refs.left.setAttribute('style', `width:${width}px`);
      }
      if (typeof this.rightWidth == 'number') {
        this.$refs.right.setAttribute('style', `width:${this.rightWidth}px`);
      } else {
        width = String.prototype.replaceAll.call(this.rightWidth, 'px', '');
        this.$refs.right.setAttribute('style', `width:${width}px`);
      }
    },
  },
};
</script>
