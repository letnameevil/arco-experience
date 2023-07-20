<script setup name="header-com">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ToolBar from './tool-bar.vue'
const breadcrumbList = ref([])
const Route = useRoute()
watchEffect(() => {
  breadcrumbList.value = Route.matched || []
  if (Route.matched[0].path === '/') breadcrumbList.value = []
})
</script>

<template>
  <div class="header-com-container">
    <a-breadcrumb :style="{ margin: '16px 0' }" :max-count="5">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <template v-for="it in breadcrumbList" :key="it.path">
        <a-breadcrumb-item v-if="!(it.meta && it.meta.hidden)">{{ it.meta.title }}</a-breadcrumb-item>
      </template>
    </a-breadcrumb>
    <!-- 工具栏 -->
    <ToolBar />
  </div>
</template>

<style scoped lang="scss">
.header-com-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding-left: 10px;
  padding-right: 14px;
  background-color: #ffffff;
}
</style>
