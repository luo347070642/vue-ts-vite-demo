import { ActionContext } from 'vuex'
import { IUserState } from './state'
import { IStore } from '@/store/types'

export const actions = {
  // 登录
  async login({ commit }: ActionContext<IUserState, IStore>, userInfo: any) {},

  // 获取用户信息
  getUserInfo({ commit }: ActionContext<IUserState, IStore>) {},

  // 登出
  async logout({ commit }: ActionContext<IUserState, IStore>) {}
}
