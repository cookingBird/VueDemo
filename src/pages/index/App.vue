<template>
  <LayoutIndex>
    <template #header></template>
    <template #main>
      <router-view></router-view>
    </template>
  </LayoutIndex>
</template>

<script>
import LayoutIndex from '@/pages/index/components/LayoutIndex';
export default {
  components: {
    LayoutIndex,
  },
};
</script>

<style></style>
