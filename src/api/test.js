import { $request } from './index'

export const getText = params => {
  // https://zj.v.api.aa1.cn/api/xz/?code=654028207203
  return $request.get({
    url: '/api/xz/',
    params,
    isLoading: true,
  })
}
