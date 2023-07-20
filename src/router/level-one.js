export default [
  {
    path: '/level-one',
    component: () => import('@/pages/level-one/index.vue'),
    name: 'level-one',
    meta: {
      title: '配置页面',
    },
  },
]
