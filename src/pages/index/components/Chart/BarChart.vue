<template>
  <div ref="bar-chart"></div>
</template>

<script>
import { Chart } from '@antv/g2';

const data = [
  { type: '未知', value: 654, percent: 0.02 },
  { type: '17 岁以下', value: 654, percent: 0.02 },
  { type: '18-24 岁', value: 4400, percent: 0.2 },
  { type: '25-29 岁', value: 5300, percent: 0.24 },
  { type: '30-39 岁', value: 6200, percent: 0.28 },
  { type: '40-49 岁', value: 3300, percent: 0.14 },
  { type: '50 岁以上', value: 1500, percent: 0.06 },
];

export default {
  name: 'BarChart',
  components: {},
  props: {},
  inject: {},
  data() {
    return {};
  },
  async mounted() {
    await this.$nextTick();
    const chart = new Chart({
      container: this.$refs['bar-chart'],
      autoFit: true,
      padding: [30, 20, 30, 20],
    });
    chart.data(data);
    chart.scale('value', {
      alias: '销售额(万)',
    });

    chart.axis('type', {
      tickLine: {
        alignTick: false,
      },
    });
    chart.axis('value', false);

    chart.tooltip({
      showMarkers: false,
    });
    chart.interval().position('type*value');
    chart.interaction('element-active');

    // 添加文本标注
    data.forEach((item) => {
      chart
        .annotation()
        .text({
          position: [item.type, item.value],
          content: item.value,
          style: {
            textAlign: 'center',
          },
          offsetY: -30,
        })
        .text({
          position: [item.type, item.value],
          content: (item.percent * 100).toFixed(0) + '%',
          style: {
            textAlign: 'center',
          },
          offsetY: -12,
        });
    });
    setTimeout(() => {
      chart.render();
    });
  },
  methods: {
    printStyle(el) {
      var element = !(el instanceof Element) ? document.getElementById(el) : el;
      var out = '';
      var elementStyle = element.style;
      var computedStyle = window.getComputedStyle(element, null);
      for (let prop in elementStyle) {
        if (Object.prototype.hasOwnProperty.call(elementStyle, prop)) {
          out +=
            '  ' +
            prop +
            " = '" +
            elementStyle[prop] +
            "' > '" +
            computedStyle[prop] +
            "'\n";
        }
      }
      console.log(out);
      return computedStyle;
    },
  },
};
</script>
