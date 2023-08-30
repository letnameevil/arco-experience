import axios from 'axios'
import { useGlobalLoading } from '@/stores/global-loading'

const globalLoadingStore = useGlobalLoading()

console.log('globalLoadingStore', globalLoadingStore.globalLoading)

class EvRequest {
  constructor(configOptions) {
    this.requestInstance = axios.create({
      ...configOptions,
    })

    this.requestInstance.interceptors.request.use(
      config => {
        console.log('config', config)
        return config
      },
      err => {
        globalLoadingStore.globalLoading = false
        console.log('err', err)
      },
    )

    this.requestInstance.interceptors.response.use(
      response => {
        console.log(response)
        globalLoadingStore.globalLoading = false
        return response.data
      },
      err => {
        globalLoadingStore.globalLoading = false
        console.log('err', err)
      },
    )
  }

  request(options, method = 'GET') {
    this.requestInstance.interceptors.request.use(config => {
      console.log('config1', config)
      if (config.isLoading) globalLoadingStore.globalLoading = true
      return config
    })
    return this.requestInstance({
      method,
      ...options,
    })
  }

  get(options) {
    return this.request(options, 'GET')
  }

  post() {
    return this.request(options, 'POST')
  }

  del() {}

  put() {}
}

export default EvRequest
