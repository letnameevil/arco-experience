<script setup name="production-page">
import { h } from 'vue'
import { IconDriveFile, IconDown, IconStar } from '@arco-design/web-vue/es/icon'
import MainContent from './components/main-content.vue'

const treeData = [
  {
    title: 'A部门',
    key: 'A',
    children: [
      {
        title: '员工一',
        key: '001',
      },
      {
        title: '员工二',
        key: '002',
      },
      {
        title: '员工三',
        key: '003',
      },
    ],
  },
  {
    title: 'B部门',
    key: 'B',
  },
  {
    title: 'C部门',
    key: 'C',
    children: [
      {
        title: '员工四',
        key: '004',
      },
    ],
  },
]
</script>

<template>
  <div class="production-page">
    <a-card :style="{ width: '320px' }">
      <a-card>
        <a-space>
          <a-button type="outline" status="success">
            <template #icon> <icon-plus /> </template>
            新增
          </a-button>

          <a-button type="outline" status="warning">
            <template #icon> <icon-edit /></template>
            编辑
          </a-button>
          <a-button type="outline" status="danger">
            <template #icon> <icon-delete /></template>
            删除
          </a-button>
        </a-space>
        <a-input-search style="margin-top: 10px" placeholder="请输入关键字" search-button />
      </a-card>
      <a-scrollbar style="height: calc(100vh - 176px); overflow: auto">
        <a-tree :data="treeData" showLine :default-expand-all="false">
          <template #switcher-icon="node, { isLeaf }">
            <icon-plus v-if="!isLeaf" />
            <icon-record v-if="isLeaf" />
          </template>
        </a-tree>
      </a-scrollbar>
    </a-card>
    <div class="right-plane">
      <MainContent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.production-page {
  display: flex;
}

.right-plane {
  flex: 1;
  margin-left: 10px;
}
</style>
