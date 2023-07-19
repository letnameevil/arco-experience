import { h } from 'vue'
import * as iconList from '@arco-design/web-vue/es/icon'
const arr = []
for (const key in iconList) {
  if (key === 'default') continue
  arr.push({
    id: key,
    iconName: key,
    component: h(iconList[key]),
  })
}
export default arr
