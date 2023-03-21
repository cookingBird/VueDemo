<template>
  <div class="about">
    <h1>This is an about page</h1>
    <auth-test show="true">this is auth test</auth-test>
  </div>
</template>
<script>
import { authTest } from '@/components/Functional/test';

export default {
  components: {
    authTest,
  },
};
</script>
