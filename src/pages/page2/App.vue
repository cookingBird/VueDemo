<template>
  <div id="app" class="w-full h-full">
    <layout-row class="w-full h-full">
      <template #top>
        <nav>
          <router-link to="/">Home</router-link>
          |
          <router-link to="/about">About</router-link>
        </nav>
      </template>
      <template #bottom>
        <router-view />
      </template>
    </layout-row>
  </div>
</template>
<script>
import { LayoutRow } from '../../components/Functional/Layout';
export default {
  components: {
    LayoutRow,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
