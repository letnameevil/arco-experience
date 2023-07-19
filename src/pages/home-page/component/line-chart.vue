<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

let myChart = null

var option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct'],
  },
  toolbox: {
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
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
  const chartDom = document.getElementById('line-chart-container')
  initChart(chartDom)
  obDom(chartDom)
})
</script>

<template>
  <div id="line-chart-container"></div>
</template>

<style scoped lang="scss">
#line-chart-container {
  width: 100%;
  height: 240px;
}
</style>
