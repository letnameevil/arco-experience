<script setup>
import { useRouter } from 'vue-router'

const Router = useRouter()
defineProps({
  title: {
    type: String,
    default: '标题插槽',
  },
})

const goBack = () => {
  Router.go(-1)
}
</script>

<template>
  <a-page-header :title="title" @back="goBack">
    <template #extra>
      <a-space>
        <slot name="btn"> </slot>
      </a-space>
    </template>
    <a-scrollbar style="height: calc(100vh - 80px); overflow: auto">
      <div style="width: 100%">
        <slot></slot>
      </div>
    </a-scrollbar>
  </a-page-header>
</template>

<style scoped>
:deep(.arco-page-header-content) {
  padding: 10px;
  height: calc(100vh - 80px);
}
</style>
