<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

let myChart = null

var option = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

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
  const chartDom = document.getElementById('pie-chart-container')
  initChart(chartDom)
  obDom(chartDom)
})
</script>

<template>
  <div id="pie-chart-container"></div>
</template>

<style scoped lang="scss">
#pie-chart-container {
  width: 100%;
  height: 240px;
}
</style>
