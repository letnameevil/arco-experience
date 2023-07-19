<script setup>
import { ref, reactive } from 'vue'

const modalVisible = ref(false)
</script>

<template>
  <a-modal
    v-model:visible="modalVisible"
    title="数据字典"
    :mask-closable="false"
    @close="modalClose"
    @cancel="handleCancel"
    :on-before-ok="handleBeforeOk"
    draggable
  >
    <a-form ref="formRef" :model="modalFormData" :rules="modalFormRules" auto-label-width>
      <a-form-item field="name" label="字典类型名称" validate-trigger="blur" feedback>
        <a-input v-model="modalFormData.name" placeholder="请输入字典类型名称" allow-clear />
      </a-form-item>
      <a-form-item field="type" label="字典类型" validate-trigger="blur" feedback>
        <a-input v-model="modalFormData.type" placeholder="请输入字典类型" allow-clear feedback />
      </a-form-item>
      <a-form-item field="status" label="状态">
        <a-radio-group v-model="modalFormData.status">
          <a-radio :value="0">正常</a-radio>
          <a-radio :value="1">停用</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item field="remark" label="备注">
        <a-textarea v-model="modalFormData.remark" placeholder="请输入备注" :max-length="200" allow-clear show-word-limit />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
