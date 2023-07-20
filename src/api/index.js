import EvRequest from './request'
import baseConfig from '@/config/base-config'

const $request = new EvRequest({
  baseURL: baseConfig.baseApiUrl,
  timeout: 5000,
})

export { $request }
