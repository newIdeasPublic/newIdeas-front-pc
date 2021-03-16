import Vue from 'vue'
import VueRouter from 'vue-router'

// import LoginLayout from '@/views/layout/Login'
import MainLayout from '@/layout/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '/list',
        component: () => import('@/views/list')
      },
      {
        path: '/list1',
        component: () => import('@/views/list1')
      },
      {
        path: '/list2',
        component: () => import('@/views/list2')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
