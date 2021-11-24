<template>
  <div>
    <div id="main" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>



<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  LegendComponent,
} from "echarts/components";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  LegendComponent,
  RadarChart,
  CanvasRenderer,
]);

export default {
  name: "echartt",
  components: {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          type: "scroll",
          bottom: 10,
          data: (function () {
            var list = [];
            for (var i = 1; i <= 28; i++) {
              list.push(i + 2000 + "");
            }
            return list;
          })(),
        },
        visualMap: {
          top: "middle",
          right: 0,
          color: ["#f29701", "#0ac1c7"],
          calculable: true,
        },
        radar: {
          indicator: [
            { text: "A能力", max: 400 },
            { text: "B能力", max: 400 },
            { text: "C能力", max: 400 },
            { text: "D能力", max: 400 },
            { text: "E能力", max: 400 },
          ],
        },
        series: (function () {
          var series = [];
          for (var i = 1; i <= 28; i++) {
            series.push({
              type: "radar",
              symbol: "none",
              lineStyle: {
                width: 1,
              },
              emphasis: {
                areaStyle: {
                  color: "rgba(0,250,0,0.3)",
                },
              },
              data: [
                {
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    (i * i) / 2,
                  ],
                  name: i + 2000 + "",
                },
              ],
            });
          }
          return series;
        })(),
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
</style>