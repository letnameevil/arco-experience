import Layout from '@/layout/index.vue'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/main',
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/pages/home-page/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
    },
  },
  {
    path: '/redirect',
    component: () => import('@/pages/redirect-page/index.vue'),
    meta: {
      title: '路由跳转页面',
    },
    // children: [
    //   {
    //     path: '/:pathMatch(.*)',
    //     component: () => import('@/pages/redirect-page/index.vue'),
    //   },
    // ],
  },
  // 方法一：最后带 * 号和不带 * 的区别  /a/b  $route.params.pathMatch 解析为 a/b
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/err-page/404.vue'),
  },
  // 方法二:   /a/b  $route.params.pathMatch 解析为 [a,b]
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('../views/notFound.vue'),
  // },
]
