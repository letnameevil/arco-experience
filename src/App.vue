<script setup>
import { useGlobalLoading } from '@/stores/global-loading'

const globalLoadingStore = useGlobalLoading()
</script>

<template>
  <a-config-provider :size="'small'">
    <a-spin :loading="globalLoadingStore.globalLoading" tip="loading...">
      <template #icon>
        <icon-sun />
      </template>
      <RouterView />
    </a-spin>
  </a-config-provider>
</template>
