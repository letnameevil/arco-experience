<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import graph from './json/index.json'
let myChart = null

var option = (option = {
  tooltip: {},
  legend: [
    {
      data: graph.categories.map(function (a) {
        return a.name
      }),
    },
  ],
  series: [
    {
      name: 'Les Miserables',
      type: 'graph',
      layout: 'none',
      data: graph.nodes,
      links: graph.links,
      categories: graph.categories,
      roam: true,
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
      },
      labelLayout: {
        hideOverlap: true,
      },
      scaleLimit: {
        min: 0.4,
        max: 2,
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3,
      },
    },
  ],
})

/**
 * 处理容器大小改变
 * */
const obDom = chartDom => {
  // 每次容器改变都会该事件
  let ob = new ResizeObserver(() => {
    myChart.resize()
  })
  ob.observe(chartDom)
}

/**
 * 初始化echarts表格
 **/
const initChart = chartDom => {
  myChart = echarts.init(chartDom)
  myChart.setOption(option)
}

onMounted(() => {
  const chartDom = document.getElementById('hot-chart-container')
  initChart(chartDom)
  obDom(chartDom)
})
</script>

<template>
  <div id="hot-chart-container"></div>
</template>

<style scoped lang="scss">
#hot-chart-container {
  width: 100%;
  height: 100%;
}
</style>
