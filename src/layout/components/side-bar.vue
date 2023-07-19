<script setup name="side-bar">
import { watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSideBarStore } from '@/stores/side-bar-store'
import SideBarItem from './side-bar-item.vue'

const Router = useRouter()
const Route = useRoute()

const currentKey = ref('')

watch(
  () => Route.name,
  (newValue, oldValue) => {
    // console.log('newValue,oldValue', newValue, oldValue)
    currentKey.value = newValue
  },
  {
    immediate: true,
  },
)

const sideBarStore = useSideBarStore()

const onClickMenuItem = key => {
  Router.push({
    name: key,
  })
}
</script>

<template>
  <a-scrollbar style="height: calc(100vh - 96px); overflow: auto">
    <a-menu :defaultOpenKeys="[currentKey]" :defaultSelectedKeys="[currentKey]" auto-open-selected @menuItemClick="onClickMenuItem">
      <SideBarItem :menuList="sideBarStore.menuList" />
    </a-menu>
  </a-scrollbar>
</template>
