<script setup>
import { ref } from 'vue'
const searchData = ref({})
const emits = defineEmits(['handleSearch', 'handleReset'])
const search = () => {
  emits('handleSearch')
}
const reset = () => {
  searchData.value = {}
  emits('handleReset')
}
defineExpose({
  searchData,
})
</script>

<template>
  <a-form :model="searchData" layout="inline">
    <a-form-item field="name" label="名称">
      <a-input v-model="searchData.name" placeholder="请输入名称" allow-clear style="width: 150px" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" @click="search">
        <template #icon>
          <icon-search />
        </template>
        搜索
      </a-button>
    </a-form-item>

    <a-form-item>
      <a-button @click="reset">
        <template #icon>
          <icon-refresh />
        </template>
        重置
      </a-button>
    </a-form-item>
  </a-form>
</template>
