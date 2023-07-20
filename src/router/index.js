import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 路由引入
 **/
import constRoutes from './const-routes'
import asyncRoutes from './async-routes'

// 一级路由新增修改页面（涉及到路由传参）
import levelOneRoutes from './level-one'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constRoutes, ...levelOneRoutes, ...asyncRoutes],
})

export default router
