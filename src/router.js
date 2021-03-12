import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/index'),
    redirect: '/record',
    children: [
      { path: 'record', name: 'record', component: () => import('@/views/records') },
      { path: 'user', name: 'user', component: () => import('@/views/user') }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
