import { IUserState } from './state'

export const mutations = {
  setToken: (state: IUserState, token: string) => {
    state.token = token
  },
  setAvatar: (state: IUserState, avatar: string) => {
    state.avatar = avatar
  },
  setRoles: (state: IUserState, roles: any) => {
    state.roles = roles
  },
  setUserInfo: (state: IUserState, info: any) => {
    state.info = info
  }
}
