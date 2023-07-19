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
      },
    ],
  },
]
