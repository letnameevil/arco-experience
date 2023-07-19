<script setup>
import { ref, reactive, toRefs } from 'vue'

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
    title: '字典类型',
    dataIndex: 'name',
    align: 'center',
    ellipsis: true,
    tooltip: { position: 'top' },
  },
  {
    title: '字典类型名称',
    dataIndex: 'salary',
    align: 'center',
    ellipsis: true,
    tooltip: { position: 'top' },
  },
  {
    title: '状态',
    dataIndex: 'address',
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
 * 点击了新增按钮
 **/
const handleAdd = () => {
  modalVisible.value = true
}

/**
 * 弹出层相关
 **/
const modalVisible = ref(false)
const modalFormData = reactive({
  status: 0,
})
const modalFormRules = reactive({
  name: [{ required: true, message: '字典类型名称为必填字段' }],
  type: [{ required: true, message: '字典类型为必填字段' }],
})
const handleCancel = (v1, v2) => {
  console.log('modalVisible.value', modalVisible.value)
}

/**
 * 表单实例
 * */
const formRef = ref()


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

/**
 * 弹窗关闭后的回调
 * */
const modalClose = () => {
  resetForm()
}
</script>

<template>
  <a-card title="数据字典">
    <a-card>
      <a-form :model="formData" layout="inline">
        <a-form-item field="name" label="关键字">
          <a-input v-model="formData.name" placeholder="字典类型名称" allow-clear style="width: 150px" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="console.log(modalVisible)">
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
      <a-button type="primary" @click="handleAdd">
        <template #icon> <icon-plus /> </template>
        新增
      </a-button>
    </a-card>
    <a-card>
      <div class="table-container">
        <a-table
          :scroll="{ x: 420, y: '100%' }"
          :scrollbar="true"
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

<style scoped lang="scss">
.table-container {
  height: calc(100vh - 264px);
}

.arco-form-item-layout-inline {
  margin-right: 10px;
}
</style>
