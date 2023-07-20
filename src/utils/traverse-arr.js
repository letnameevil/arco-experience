/**
 * 处理动态路由为菜单需要的形式
 **/
export function traverseArr(arr) {
  const tempArr = []
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (el.meta && el.meta.hidden) continue
    tempArr.push({
      link: el?.meta?.isLink ? el.meta.linkUrl : el.name || `该菜单为父菜单-${+new Date()}-${Math.random()}`,
      title: el.meta.title,
      svgName: el.meta.svgName,
      isLink: el.meta.isLink,
      linkUrl: el.meta.linkUrl,
      children: el.children && el.children.length > 0 ? traverseArr(el.children) : [],
    })
  }
  return tempArr
}
