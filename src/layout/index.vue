<script setup>
import { ref } from 'vue'

/**
 * 组件
 * */
import HeaderCom from './components/header-com.vue'
import SideBar from './components/side-bar.vue'
import ContentCom from './components/content-com.vue'

const collapsed = ref(false)

const onCollapse = (val, type) => {
  collapsed.value = val
}
</script>

<template>
  <div class="layout-container">
    <a-layout class="layout-box">
      <!-- breakpoint="lg" -->
      <a-layout-sider :width="200" collapsible :collapsed="collapsed" @collapse="onCollapse">
        <div class="logo" />

        <SideBar />
      </a-layout-sider>

      <a-layout style="overflow: hidden">
        <a-layout-header>
          <HeaderCom />
        </a-layout-header>

        <a-layout>
          <a-layout-content>
            <ContentCom />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  width: 100vw;
  height: 100vh;

  .layout-box {
    width: 100%;
    height: 100%;

    .logo {
      height: 48px;
      background-color: #ccc;
    }
  }
}

.arco-layout-content {
  background-color: #f6f3f3;
  // background-color: #232324;
}
</style>
