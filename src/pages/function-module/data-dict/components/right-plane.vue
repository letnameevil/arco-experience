<script setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  formData: {},
  tableData: [
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },

    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
    {
      key: '53',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ],
})

const { formData, tableData } = toRefs(state)

const pageSizeConfig = reactive({
  current: 1,
  pageSize: 10,
  total: 30,
})

const columns = [
  {
    title: '字典编码',
    dataIndex: 'name',
    align: 'center',
    ellipsis: true,
    tooltip: { position: 'top' },
  },
  {
    title: '名称',
    dataIndex: 'salary',
    align: 'center',
    ellipsis: true,
    tooltip: { position: 'top' },
  },
  {
    title: '操作',
    dataIndex: 'opt',
    align: 'center',
    fixed: 'right',
    width: 160,
  },
]

const handleCurrentChange = v1 => {
  pageSizeConfig.current = v1
}

const handleSizeChange = v1 => {
  pageSizeConfig.pageSize = v1
}

/**
 * 表格拖拽事件
 **/
const handleTableChange = (v1) => {
  console.log(v1) // 拖拽后的事件
  tableData.value = v1
}


</script>

<template>
  <a-card title="字典数据项">
    <a-card>
      <a-form :model="formData" layout="inline">
        <a-form-item field="name" label="字典名称">
          <a-input v-model="formData.name" placeholder="请输入字典名称" allow-clear style="width: 140px" />
        </a-form-item>
        <a-form-item field="code" label="字典编码">
          <a-input v-model="formData.code" placeholder="请输入字典编码" allow-clear style="width: 140px" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary">
            <template #icon>
              <icon-search />
            </template>
            搜索
          </a-button>
        </a-form-item>
        <a-form-item style="margin-right: 0">
          <a-button>
            <template #icon>
              <icon-refresh />
            </template>
            重置
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card>
      <a-button type="primary">
        <template #icon> <icon-plus /> </template>
        新增
      </a-button>
    </a-card>
    <a-card>
      <div class="table-container">
        <a-table
          :scroll="{ x: 460, y: '100%' }"
          :scrollbar="true"
          :columns="columns"
          :data="tableData"
          stripe
          :bordered="{ cell: true }"
          :pagination="{
            total: pageSizeConfig.total,
            current: pageSizeConfig.current,
            pageSize: pageSizeConfig.pageSize,
            onChange: handleCurrentChange,
            onPageSizeChange: handleSizeChange,
            'show-total': true,
            'show-page-size': true,
          }"
          :draggable="{ type: 'handle', width: 40, title: '排序' }"
          @change="handleTableChange"
        >
          <template #columns>
            <a-table-column v-bind="item" v-for="item in columns" :key="item.dataIndex">
              <template #cell="{ record }" v-if="item.dataIndex === 'opt'">
                <a-button type="text">编辑</a-button>
                <a-button type="text" status="danger">删除</a-button>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </div>
    </a-card>
  </a-card>
</template>

<style scoped lang="scss">
.table-container {
  height: calc(100vh - 264px);
}

.arco-form-item-layout-inline {
  margin-right: 10px;
}
</style>
