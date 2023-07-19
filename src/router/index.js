import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 路由引入
 **/
import constRoutes from './const-routes'
import asyncRoutes from './async-routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constRoutes, ...asyncRoutes],
})

export default router
