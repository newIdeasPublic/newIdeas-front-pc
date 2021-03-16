import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',

  // 超时时间
  timeout: 3000,

  // 请求头
  headers: { 'Content-Type': 'application/json' }

})

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.status === 200) {
      return response.data
    } else {
      console.log('请求错误')
      return {}
    }
  },
  function (error) {
    // 对响应错误做点什么
    console.error('请求错误')
    return Promise.reject(error)
  }
)

export default instance
