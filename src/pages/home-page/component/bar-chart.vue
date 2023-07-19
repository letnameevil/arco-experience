<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

let myChart = null

var option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [150, 212, 201, 154, 190, 330, 410],
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
  const chartDom = document.getElementById('bar-chart-container')
  initChart(chartDom)
  obDom(chartDom)
})
</script>

<template>
  <div id="bar-chart-container"></div>
</template>

<style scoped lang="scss">
#bar-chart-container {
  width: 100%;
  height: 240px;
}
</style>
