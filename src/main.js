import { createApp } from 'vue'
import router from './router'
import Pinia from '@/stores'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import SvgIcon from '@/components/SvgIcon/index.vue'
import App from './App.vue'

/**
 * 注册使用svg图标
 **/
import 'virtual:svg-icons-register'

/**
 * 样式
 **/
import '@arco-design/web-vue/dist/arco.css'
import '@/assets/styles/index.css'

/**
 * 动态路由处理
 **/
import './utils/handle-routes'
import './router-limit'
const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(ArcoVue).use(ArcoVueIcon).use(Pinia).use(router).mount('#app')
