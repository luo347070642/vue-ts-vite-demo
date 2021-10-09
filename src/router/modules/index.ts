export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/view/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue')
  }
]
