import Pinia from '@/stores'
import { useSideBarStore } from '@/stores/side-bar-store'


import asyncRoutes from '@/router/async-routes'

const sideBarStore = useSideBarStore(Pinia)

sideBarStore.handleMenuList(asyncRoutes)

console.log('sideBarStore', sideBarStore.menuList)


