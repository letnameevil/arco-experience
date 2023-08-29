<script setup name="user-info-page">
import { ref } from 'vue'
import Son from './son.vue'

const showData = ref({
  obj: {},
  info: {},
})

const changeObj = () => {
  showData.value = {
    obj1: {},
    info1: {},
  }
}

const changeP = () => {
  showData.value.obj.name = 'cheng'
}
</script>

<template>
  <div class="user-info page">
    <button @click="changeObj">点击改变对象的值</button>
    <button @click="changeP">点击改变对象属性的值</button>
    <Son :showData="showData" />
  </div>
</template>
