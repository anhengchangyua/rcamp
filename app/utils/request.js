import axios from 'axios'

// axios.defaults.baseURL = process.env.REACT_APP_REQUEST_URL
// axios.defaults.baseURL = 'https://easy-mock.com/mock/5b627ab170818661082f1f9c/example';
axios.defaults.timeout = 5000
// 创建axios实例
const service = axios.create()

const codeMessage = {
  0: '网络异常',
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队(异步任务)',
  204: '删除数据成功',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户授权已过期,请重新登录',
  403: '用户得到授权，但是访问是被禁止的',
  404: '请求地址不存在，服务器没有进行操作',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除，且不会再得到的',
  422: '当创建一个对象时，发生一个验证错误',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
}

function checkStatus(response) {
  if (response) {
    if (response.status && response.status === 401) {
    }

    const errorText = codeMessage[response.status] || response.statusText

    return response
  }
}

// 请求完成后的拦截器
service.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    checkStatus(err.response)
    return Promise.reject(err)
  }
)

export default {
  get: (url, params) => {
    if (params === undefined) return service.get(url)
    else return service.get(url, { params: params })
  },
  post: (url, params) => {
    return service.post(url, params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
  },
  delete: (url, params) => {
    return service.delete(url, { data: params })
  },
  put: (url, params) => {
    return service.put(url, params)
  },
  upload: file => {
    console.log(file)
    let formData = new FormData()
    formData.append('files[]', file)
    return service.post('file/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
