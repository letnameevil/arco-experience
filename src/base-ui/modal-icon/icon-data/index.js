import { h } from 'vue'
import * as iconList from '@arco-design/web-vue/es/icon'
const iconListArr = []
for (const key in iconList) {
  if (key === 'default') continue
  iconListArr.push({
    id: key,
    iconName: key,
    component: h(iconList[key]),
  })
}
export default iconListArr
