<script setup>
import { h, ref, reactive } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import ModalIcon from '@/base-ui/modal-icon/index.vue'

const formRef = ref()

const showIcon = ref()

showIcon.value = h('span')

const modalVisible = ref(false)

const modalIconRef = ref()

const modalFormData = reactive({
  type: 0,
  isLink: 1,
  showStatus: 1,
  menuStatus: 1,
})

const modalFormRules = reactive({})

/*
 * 点击了确认按钮
 */
const handleBeforeOk = (done, v1) => {
  formRef.value.validate(err => {
    if (!err) {
      // 发请求,拿数据
      setTimeout(() => {
        done()
      }, 2000)
    } else {
      done(false)
    }
  })
}

/**
 * 清空表单方法
 **/
const resetForm = () => {
  formRef.value.resetFields()
  formRef.value.clearValidate()
}

const handleCancel = (v1, v2) => {
  console.log('modalVisible.value', modalVisible.value)
}

/**
 * 弹窗关闭后的回调
 * */
const modalClose = () => {
  resetForm()
}

/**
 *  上级菜单数据
 *
 * */
const treeData = [
  {
    key: 'key1',
    title: '系统管理',
    icon: () =>
      h(SvgIcon, {
        name: 'config',
        width: '1em',
        height: '1em',
      }),
    children: [
      {
        key: 'key1-1',
        title: '用户管理',
      },
      {
        key: 'key1-2',
        title: '角色管理',
      },
    ],
  },
  {
    key: 'key2',
    title: '系统监控',
    icon: () =>
      h(SvgIcon, {
        name: 'function',
        width: '1em',
        height: '1em',
      }),
    children: [
      {
        key: 'key2-1',
        title: '在线用户',
      },
      {
        key: 'key2-2',
        title: '定时任务',
      },
    ],
  },
  {
    key: 'key3',
    title: '系统工具',
    icon: () =>
      h(SvgIcon, {
        name: 'destoke',
        width: '1em',
        height: '1em',
      }),
    children: [
      {
        key: 'key3-1',
        title: '在线用户',
      },
      {
        key: 'key3-2',
        title: '定时任务',
      },
    ],
  },
]

/**
 * 点击了选择图标菜单按钮
 **/
const selectIcon = () => {
  modalIconRef.value.modalVisible = true
}

const iconEmit = payload => {
  modalFormData.menuIcon = payload.iconName
  showIcon.value = payload.component
}

defineExpose({
  modalVisible,
})
</script>

<template>
  <a-modal
    v-model:visible="modalVisible"
    title="菜单"
    :mask-closable="false"
    @close="modalClose"
    @cancel="handleCancel"
    :on-before-ok="handleBeforeOk"
    draggable
  >
    <a-form ref="formRef" :model="modalFormData" :rules="modalFormRules" auto-label-width>
      <a-form-item field="pMenu" label="上级菜单">
        <a-tree-select
          :data="treeData"
          v-model="modalFormData.pMenu"
          :tree-props="{ 'default-expand-all': false }"
          placeholder="请选择上级菜单"
        ></a-tree-select>
      </a-form-item>
      <a-form-item field="type" label="菜单类型">
        <a-radio-group v-model="modalFormData.type">
          <a-radio :value="0">目录</a-radio>
          <a-radio :value="1">菜单</a-radio>
          <a-radio :value="2">按钮</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item field="menuIcon" label="菜单图标">
        <a-input-search placeholder="请选择菜单图标" search-button readonly v-model="modalFormData.menuIcon">
          <template #prefix>
            <!-- <icon-user /> -->
            <showIcon />
          </template>
          <template #button-icon>
            <icon-search @click="selectIcon" />
          </template>
        </a-input-search>
      </a-form-item>

      <a-row :gutter="20">
        <a-col :span="14">
          <a-form-item field="menuName" label="菜单名称">
            <a-input v-model="modalFormData.menuName" allow-clear placeholder="请输入菜单名称"> </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <a-form-item field="sort" label="显示排序">
            <a-input-number placeholder="排序" v-model="modalFormData.sort" mode="button" :min="1" :default-value="1" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="20">
        <a-col :span="12">
          <a-form-item field="isLink" label="是否外链">
            <a-radio-group v-model="modalFormData.isLink">
              <a-radio :value="1">是</a-radio>
              <a-radio :value="0">否</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="linkAddress" label="路由地址">
            <a-input v-model="modalFormData.linkAddress" allow-clear placeholder="请输入路由地址"> </a-input>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="20">
        <a-col :span="12">
          <a-form-item field="showStatus" label="显示状态">
            <a-radio-group v-model="modalFormData.showStatus">
              <a-radio :value="1">显示</a-radio>
              <a-radio :value="0">隐藏</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item field="menuStatus" label="菜单状态">
            <a-radio-group v-model="modalFormData.menuStatus">
              <a-radio :value="1">正常</a-radio>
              <a-radio :value="0">停用</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
  <ModalIcon ref="modalIconRef" @iconEmit="iconEmit" />
</template>

<style scoped lang="scss">
:deep(.icon-card .arco-card-body) {
  padding: 5px;
}
</style>
