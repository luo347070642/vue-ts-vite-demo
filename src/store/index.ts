import { createStore, createLogger, Store } from 'vuex'
import { App, InjectionKey } from 'vue'
import modules from '@/store/modules'
import { IStore } from './types'

export const key: InjectionKey<Store<IStore>> = Symbol()
const plugins = import.meta.env.DEV
  ? [
      createLogger({
        filter(mutation, stateBefore, stateAfter) {
          // 若 mutation 需要被记录，就让它返回 true 即可
          // 顺便，`mutation` 是个 { type, payload } 对象
          const notNeedDebugs: string[] = ['lockscreen/setLockTime', 'lockscreen/setLock']
          return !notNeedDebugs.includes(mutation.type)
        }
      })
    ]
  : []

const store = createStore<IStore>({
  plugins,
  modules
})

export function setupStore(app: App) {
  app.use(store, key)
  console.log(store, 'vuex')
}

export default store
