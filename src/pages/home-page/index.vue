<script setup name="home-page">
import PieChart from './component/pie-chart.vue'
import LineChart from './component/line-chart.vue'
import BarChart from './component/bar-chart.vue'
import HotChart from './component/hot-chart.vue'
</script>

<template>
  <div class="home-page">
    <a-row :gutter="10">
      <a-col :span="8">
        <a-card hoverable>
          <PieChart />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable> <LineChart /> </a-card
      ></a-col>
      <a-col :span="8">
        <a-card hoverable> <BarChart /> </a-card
      ></a-col>
    </a-row>
    <a-row style="flex: 1">
      <a-col :span="24" style="width: 100%; height: 100%">
        <a-card class="bottom-card" hoverable style="width: 100%; height: 100%">
          <HotChart />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
}

:deep(.arco-card-body) {
  padding: 5px;
}

:deep(.bottom-card .arco-card-body) {
  width: 100%;
  height: 100%;
}
</style>
