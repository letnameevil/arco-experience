let baseConfig = {}

if (import.meta.env.DEV) {
  baseConfig = {
    baseApiUrl: '/api',
  }
} else {
  baseConfig = {
    baseApiUrl: 'https://www.baidu.com',
  }
}

export default baseConfig
