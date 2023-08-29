/**
 * 获取随机字符串
 **/
export const getRandomStr = (originStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', randomStrLength = 6) => {
  let randomStr = ''
  for (let i = 0; i < randomStrLength; i++) {
    randomStr += originStr[Math.floor(Math.random() * originStr.length)]
  }
  return randomStr
}

/**
 * 获取随机颜色
 **/
export const getRandomColor = () => {
  return Math.floor(Math.random() * 255) + 1
}

/**
 * 当天时间
 **/
export const getCurrentTime = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const date_d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return `${year}-${month}-${date_d} ${hours}:${minutes}:${seconds}`
}
