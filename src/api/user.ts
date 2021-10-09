import axios, { ResponseData } from './index'
import { AxiosPromise } from 'axios'

interface LoginReqArguInterface {
  username: string
  password: number | string
}
export const loginReq = (data: LoginReqArguInterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/api/user/login',
    data,
    method: 'POST'
  })
}
