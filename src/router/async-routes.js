import Layout from '@/layout/index.vue'

export const asyncRoutes = [
  // 后台配置
  {
    path: '/backend-config',
    component: Layout,
    meta: {
      title: '后台配置',
      svgName: 'config',
    },
    children: [
      {
        path: 'user-admin',
        name: 'user-admin',
        component: () => import('@/pages/backend-config/user-admin/index.vue'),
        meta: {
          title: '用户管理',
          keepAlive: true,
        },
      },
      {
        path: 'menu-admin',
        name: 'menu-admin',
        component: () => import('@/pages/backend-config/menu-admin/index.vue'),
        meta: {
          title: '菜单管理',
          keepAlive: true,
        },
      },
      {
        path: 'user-info',
        name: 'user-info',
        component: () => import('@/pages/backend-config/user-info/index.vue'),
        meta: {
          title: '用户信息',
        },
      },
    ],
  },
  // 业务报表
  {
    path: '/business-report',
    component: Layout,
    meta: {
      title: '业务报表',
      svgName: 'report',
    },
    children: [
      {
        path: 'production',
        name: 'production',
        component: () => import('@/pages/business-report/production/index.vue'),
        meta: {
          title: '生产',
        },
      },
      {
        path: 'quality',
        name: 'quality',
        component: () => import('@/pages/business-report/quality/index.vue'),
        meta: {
          title: '质量',
        },
      },
      {
        path: 'repair',
        name: 'repair',
        component: () => import('@/pages/business-report/repair/index.vue'),
        meta: {
          title: '维修',
        },
      },
    ],
  },
  // 功能模块
  {
    path: '/function-module',
    component: Layout,
    meta: {
      title: '功能模块',
      svgName: 'function',
    },
    children: [
      {
        path: 'data-config',
        name: 'data-config',
        component: () => import('@/pages/function-module/data-config/index.vue'),
        meta: {
          title: '数据配置',
        },
      },
      {
        path: 'data-dict',
        name: 'data-dict',
        component: () => import('@/pages/function-module/data-dict/index.vue'),
        meta: {
          title: '数据字典',
        },
      },
    ],
  },
  // 单菜单模式
  {
    path: '/aaa',
    name: 'aaa',
    component: Layout,
    redirect: '/aaa/b',
    meta: {
      title: '一级路由',
      svgName: 'menu',
    },
    children: [
      {
        path: 'b',
        name: 'b',
        component: () => import('@/pages/function-module/data-dict/index.vue'),
        meta: {
          title: '二级路由',
          hidden: true,
        },
      },
    ],
  },
  {
    path: '/bb',
    name: 'bb',
    meta: {
      linkUrl: 'http://www.baidu.com',
      isLink: true,
      title: '百度',
      svgName: 'link',
    },
  },
  // 新增配置页面
  {
    path: '/add-page',
    name: 'add-page',
    component: () => import('@/pages/add-page/index.vue'),
    meta: {
      title: '配置页面',
      hidden: true,
    },
  },
]

export default asyncRoutes
