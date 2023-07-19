<script setup name="menu-admin-page">
import { ref } from 'vue'

import SearchForm from '@/base-ui/search-form/index.vue'
import DataTable from '@/base-ui/data-table/index.vue'


const searchFormRef = ref()

const handleSearch = () => {
  console.log('点击了搜索')
  console.log(searchFormRef.value.searchData)
}

const handleReset = () => {
  console.log('点击了重置')
}
</script>

<template>
  <div class="user-admin-page">
    <a-card>
      <SearchForm ref="searchFormRef" @handleSearch="handleSearch" @handleReset="handleReset" />
    </a-card>
    <a-card>
      <DataTable />
    </a-card>
   
  </div>
</template>
