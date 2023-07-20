import axios from 'axios'
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
        console.log('err', err)
      },
    )

    this.requestInstance.interceptors.response.use(
      response => {
        console.log(response)
        return response.data
      },
      err => {
        console.log('err', err)
      },
    )
  }

  request(options, method = 'GET') {
    this.requestInstance.interceptors.request.use(config => {
      console.log('config1', config)
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
