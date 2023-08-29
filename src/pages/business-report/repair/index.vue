<script setup name="repair-page">
import { ref, reactive, toRefs, watch } from 'vue'

const state = reactive({
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

const defaultActiveKey = ref(1)

// const handleClick = v1 => {
//   console.log('defaultActiveKey.value', defaultActiveKey.value)
//   // defaultActiveKey.value += 1
// }

watch(defaultActiveKey, newValue => {
  console.log('newValue', newValue)
})

const handTabChange = (v1) => {
  defaultActiveKey.value = v1
}


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

const { tableData } = toRefs(state)

const tabList = [
  {
    key: 1,
    title: '测试一',
  },
  {
    key: 2,
    title: '测试二',
  },
  {
    key: 3,
    title: '测试三',
  },
]
</script>

<template>
  <div class="repair-page">
    <a-card>
      <!-- <button @click="handleClick">+1</button> -->
      <a-tabs :active-key="defaultActiveKey" @change="handTabChange">
        <a-tab-pane :key="it.key" :title="it.title" v-for="it in tabList"></a-tab-pane>
      </a-tabs>
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
  </div>
</template>

<style scoped>
:deep(.arco-tabs-content) {
  display: none;
}
</style>
