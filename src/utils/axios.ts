import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios'
import config from '@/config' // @代表src一级目录，是我们在vue.config.js文件里配置的

const {
  api: { devApiBaseUrl, proApiBaseUrl }
} = config
const apiBaseUrl = import.meta.env.MODE === 'production' ? proApiBaseUrl : devApiBaseUrl

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export interface ResponseData {
  code: number
  data?: any
  msg: string
}

class HttpRequest {
  constructor(public baseURL: string = apiBaseUrl) {
    this.baseURL = baseURL
  }

  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create()
    options = this.mergeConfig(options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

  private interceptors(instance: AxiosInstance, url?: string): void {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 接口请求的所有配置，都在这个config对象中，他的类型是AxiosRequestConfig，你可以看到他有哪些字段
        // 如果你要修改接口请求配置，需要修改 axios.defaults 上的字段值
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Do something before response is sent
        return response
      },
      error => {
        // Do something with response error
        return Promise.reject(error)
      }
    )
  }

  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseURL: this.baseURL }, options)
  }
}
export default HttpRequest
