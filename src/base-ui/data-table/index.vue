<template>
  <a-table :data="data" :bordered="{ cell: true }" :scroll="{ x: '100%', y: '100%' }">
    <template #columns>
      <a-table-column title="菜单名称" data-index="menuName" align="center" :width="200"> </a-table-column>
      <a-table-column title="图标" align="center" :width="50">
        <template #cell="{ record }">
          <SvgIcon :name="record.menuIcon" v-bind="{ width: '1em', height: '1em' }" />
        </template>
      </a-table-column>
      <a-table-column title="排序" data-index="sort" align="center" :width="50"> </a-table-column>
      <a-table-column title="权限标识" data-index="comLogo" align="center" :width="200"> </a-table-column>
      <a-table-column title="组件路径" data-index="comRoute" align="center" :width="200" ellipsis tooltip> </a-table-column>
      <a-table-column title="状态" data-index="status" align="center" :width="50">
        <template #cell="{ record }">
          <a-badge status="success" v-if="record.status == 1" />
          <a-badge status="danger" v-else />
        </template>
      </a-table-column>
      <a-table-column title="创建时间" data-index="createTime" align="center" :width="200"> </a-table-column>
      <a-table-column title="操作" align="center" fixed="right" :width="180">
        <template #cell="{ record }">
          <a-button type="text" status="success" size="mini" @click="handleChange">修改</a-button>
          <a-button type="text" size="mini" @click="handleAdd">新增</a-button>
          <a-button type="text" status="danger" size="mini">删除</a-button>
        </template>
      </a-table-column>
    </template>
  </a-table>
  <ModalInput ref="modalInputRef" />
</template>

<script setup>
import { ref, reactive } from 'vue'
import ModalInput from '@/base-ui/modal-input/index.vue'
const modalInputRef = ref()
const handleChange = () => {}

const handleAdd = () => {
  modalInputRef.value.modalVisible = true
}

const data = reactive([
  {
    menuName: '系统管理',
    menuIcon: 'config',
    key: 1,
    sort: 1,
    status: 0,
    createTime: '2023-04-23 12:22:22',
    comRoute: '这是一封离别信件，写下我该离开的原因反对反对反对',
    children: [
      {
        menuName: '用户管理',
        sort: 1,
        createTime: '2023-04-23 12:22:22',
      },
      {
        menuName: '角色管理',
        sort: 2,
        createTime: '2023-04-23 12:22:22',
      },
    ],
  },
  {
    menuName: '系统监控',
    menuIcon: 'function',
    key: 2,
    sort: 2,
    status: 0,
    createTime: '2023-04-23 12:22:22',
    children: [
      {
        menuName: '在线用户',
        sort: 1,
        createTime: '2023-04-23 12:22:22',
      },
      {
        menuName: '定时任务',
        sort: 2,
        createTime: '2023-04-23 12:22:22',
      },
    ],
  },
  {
    menuName: '系统工具',
    menuIcon: 'destoke',
    key: 3,
    sort: 3,
    status: 1,
    createTime: '2023-04-23 12:22:22',
    children: [
      {
        menuName: '在线用户',
        sort: 1,
        createTime: '2023-04-23 12:22:22',
      },
      {
        menuName: '定时任务',
        sort: 2,
        createTime: '2023-04-23 12:22:22',
      },
    ],
  },
])
</script>

<style lang="scss" scoped>
:deep(.arco-badge-status-dot) {
  width: 11px;
  height: 11px;
}
</style>
