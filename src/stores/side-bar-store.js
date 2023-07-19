import { ref } from 'vue'
import { defineStore } from 'pinia'
import { traverseArr } from '@/utils/traverse-arr'

export const useSideBarStore = defineStore('sideBar', () => {
  const menuList = ref([])

  const handleMenuList = routes => {
    menuList.value = [
      ...[
        {
          link: 'main',
          title: '首页',
          svgName: 'home',
        },
      ],
      ...traverseArr(routes),
    ]
  }

  return {
    menuList,
    handleMenuList,
  }
})
