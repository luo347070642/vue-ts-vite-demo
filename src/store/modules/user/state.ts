import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'

export type IUserState = {
  token: unknown
  name: string
  welcome: string
  avatar: string
  roles: any[]
  info: any
}

export const state: IUserState = { token: localStorage.getItem(ACCESS_TOKEN), name: '', welcome: '', avatar: '', roles: [], info: localStorage.getItem(CURRENT_USER) }
