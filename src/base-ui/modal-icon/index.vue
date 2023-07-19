<script setup>
import { ref } from 'vue'
import IconCom from './icon-data/index.jsx'

const modalVisible = ref(false)

const emit = defineEmits(['iconEmit'])

/**
 * 搜索关键字
 **/
const keyWord = ref('')

/*
 * 点击了确认按钮
 */
const handleBeforeOk = (done, v1) => {
  done()
}

const handleCancel = (v1, v2) => {
  console.log('modalVisible.value', modalVisible.value)
}

/**
 * 弹窗关闭后的回调
 * */
const modalClose = () => {}

const iconEmit = payload => {
  // 关闭当前弹窗
  modalVisible.value = false
  emit('iconEmit', payload)
}

defineExpose({
  modalVisible,
})
</script>

<template>
  <a-modal
    v-model:visible="modalVisible"
    title="图标选择(双击选择对应图标)"
    width="50%"
    :mask-closable="false"
    @close="modalClose"
    @cancel="handleCancel"
    :on-before-ok="handleBeforeOk"
    draggable
    :footer="false"
  >
    <a-input-search placeholder="请输入图标名称" v-model="keyWord" allow-clear></a-input-search>
    <a-card class="icon-card">
      <a-scrollbar style="height: 180px; width: 100%; overflow: auto">
        <IconCom @iconEmit="iconEmit" :key-word="keyWord" />
      </a-scrollbar>
    </a-card>
  </a-modal>
</template>

<style scoped lang="scss">
:deep(.icon-box:hover) {
  background-color: #cccccc70;
  cursor: pointer;
}
</style>
