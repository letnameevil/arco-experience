/**
 * 处理动态路由为菜单需要的形式
 **/
export function traverseArr(arr) {
  const tempArr = []
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    tempArr.push({
      link: el.name || `该菜单为父菜单-${+new Date()}-${Math.random()}`,
      title: el.meta.title,
      svgName: el.meta.svgName,
      children: el.children && el.children.length > 0 ? traverseArr(el.children) : [],
    })
  }
  return tempArr
}
