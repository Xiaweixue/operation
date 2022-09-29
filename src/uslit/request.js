import axios from 'axios'
import { Message } from 'element-ui'
const instance = axios.create({
  baseURL: 'http://119.45.133.128:8089/api',
  timeout: 5000
})

axios.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('token')
    // 当token存在的时候，则将token通过请求头发送给后台
    if (token) config.headers.authorization = 'Bearer ' + token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    if (response.status >= 200 && response.status <= 400) {
      return response.data.data
    }
    if (response.status === 401) {
      return
    }
    _showError(response.data.code, response.data.msg)
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

const _showError = (errorCode, msg) => {
  let title
  title = exceptionMessage[errorCode] || msg || '发生未知错误'
  Message.error(title)
}
const services = (options) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || options.params
  }
  return instance(options)
}

export default services
