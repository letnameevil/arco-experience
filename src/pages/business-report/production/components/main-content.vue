<script setup name="production-page">
import { h, reactive, toRefs } from 'vue'

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

const pageSizeConfig = reactive({
  current: 1,
  pageSize: 10,
  total: 30,
})

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    align: 'center',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    align: 'center',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    align: 'center',
    ellipsis: true,
    tooltip: { position: 'top' },
  },
]

const handleCurrentChange = v1 => {
  pageSizeConfig.current = v1
}

const handleSizeChange = v1 => {
  pageSizeConfig.pageSize = v1
}

const { formData, tableData } = toRefs(state)
</script>

<template>
  <a-card>
    <a-form :model="formData" layout="inline">
      <a-form-item field="name" label="名称">
        <a-input v-model="formData.name" placeholder="请输入名称" allow-clear style="width: 200px" />
      </a-form-item>
      <a-form-item field="code" label="编码">
        <a-input v-model="formData.code" placeholder="请输入编码" allow-clear style="width: 200px" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary">
          <template #icon>
            <icon-search />
          </template>
          搜索
        </a-button>
      </a-form-item>
      <a-form-item>
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
    <a-card>
      <a-button type="primary">
        <template #icon> <icon-plus /> </template>
        新增
      </a-button>
    </a-card>
    <a-card>
      <div class="table-container">
        <a-table
          :scroll="{ y: '100%' }"
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
        />
      </div>
    </a-card>
  </a-card>
</template>

<style scoped lang="scss">
.table-container {
  height: calc(100vh - 224px);
}
</style>
