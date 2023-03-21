<template>
  <layout-main
    :leftWidth="400"
    :rightWidth="400"
  >
    <template #left>
      <section class="px-1 py-2 w-full h-full space-y-1">
        <bar-chart class="h-1/4 bg-white bg-opacity-75"></bar-chart>
        <bar-chart-trend class="h-1/4 bg-white bg-opacity-75">
        </bar-chart-trend>
      </section>
    </template>
    <template #main>
      <section share>
        <div class="home">
          <img
            alt="Vue logo"
            src="~@/assets/logo.png"
          />
          <HelloWorld msg="Welcome to Your Vue.js App" />
          <test-world
            msg="Welcome to my test"
            :value="doubleTest"
          >
            <template #content="{ name, use }">
              <div>content slot</div>
              <div>{{ name }}</div>
              <div>{{ use }}</div>
            </template>
          </test-world>
          <auth-test :isShow="true">show auth test</auth-test>
        </div>
      </section>
    </template>
    <template #right>
      <el-tree
        :data="data"
        icon-class="el-icon-arrow-up"
        :props="defaultProps"
        @node-click="handleNodeClick"
        class="el-tree-bg"
      ></el-tree>
    </template>
  </layout-main>
</template>

<script>
// @ is an alias to /src
import { HelloWorld,TestWorld } from '../components/WorldTest';
import BarChart from '@/pages/index/components/Chart/BarChart';
import BarChartTrend from '@/pages/index/components/Chart/BarChartTrend';
import { AuthTest } from '@/components/Functional/test';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TestWorld,
    BarChart,
    BarChartTrend,
    AuthTest,
  },
  data () {
    return {
      test: 0,
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      },{
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        },{
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      },{
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        },{
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  computed: {
    ...mapGetters(['getValue']),
    doubleTest () {
      return this.getValue * 2;
    },
  },
  created () {
    this.timer1 = setInterval(() => {
      this.$store.dispatch('BEGIN');
    },5000);
  },
  methods: {
    handleClick () {
      console.log('hello,world!');
    },
    handleNodeClick (data) {
      console.log(data);
    }
  },
};
</script>
<style lang="less">
.el-tree-bg {
  /*wrapper style*/
  background-color: transparent;
  color: #fff;

  /*wrapper hover style*/
  &:hover,
  &:focus {
    background-color: transparent
  }

  /*tree node hover style*/
  .el-tree-node__content:hover,
  .el-tree-node__content:focus {
    background-color: #000fff;
  }

  /*tree node select style*/
  .el-tree-node.is-current>.el-tree-node__content {
    background-color: yellow;
  }
}
</style>
