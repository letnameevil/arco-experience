import { $request } from './index'

export const getText = () => {
  // https://zj.v.api.aa1.cn/api/xz/?code=654028207203
  return $request.get({
    url: 'https://v.api.aa1.cn/api/yiyan/index.php',
  })
}
