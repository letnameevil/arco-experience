<script setup>
import { watch, watchEffect, reactive } from 'vue'
const props = defineProps({
  showData: {
    type: Object,
    default: () => ({}),
  },
})

const testData = reactive({
  obj: {
    name: 'cheng',
    age: 22,
  },
  skill: {
    name: 'shi',
    age: 33,
  },
})

const handleClick = () => {
  testData.obj.name = 'good'
}

// watch(
//   () => testData.obj.name,
//   (v1, v2) => {
//     console.log('v1,v2', v1, v2)
//   },
// )

watchEffect(() => {
  console.log('testData', testData.obj.name)
})

watch(
  () => props.showData,
  (v1, v2) => {
    console.log('v1', v1)
    console.log('v2', v2)
  },
  {
    deep: true,
  },
)
</script>

<template>
  <div>这里是子组件--{{ showData }}</div>
  <button @click="handleClick">改变对象的值</button>
</template>
