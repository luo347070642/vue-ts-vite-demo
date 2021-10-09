import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import common from './modules'
import { createRouterGuards } from './router-guards'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashboard',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    meta: {
      title: '首页'
    },
    children: [...common]
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes
})
export function setupRouter(app: App) {
  app.use(router)
  createRouterGuards(router)
}

export default router
