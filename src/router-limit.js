import NProgress from 'nprogress' //
import router from '@/router'
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from) => {
  NProgress.start()
  console.log('to', to)
  console.log('from', from)
  return true
})

router.afterEach((to, from) => {
  NProgress.done()
})
