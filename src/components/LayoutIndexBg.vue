<template>
  <section class="w-[100vw] h-[100vh] relative">
    <div class="absolute inset-0 -z-10 bg-gray-600 global-background"></div>
    <div class="absolute inset-0 flex flex-col"><slot name="default"></slot></div>
  </section>
</template>

<script>
export default {
  name: 'LayoutIndexBg',
  components: {},
  props: {},
  inject: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="css" scoped>
.global-background {
  background-image: url('~@/assets/images/model-bg.png');
}
</style>
