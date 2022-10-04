import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/test3',
    component: () => import('../home'),
    children: [
      {
        path: '/test3',
        name: 'test3',
        component: () => import('../views/test3')
      },
      {
        path: '/department',
        name: 'department',
        component: () => import('../views/department')
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/userList')
      },
      {
        path: '/roleList',
        name: 'roleList',
        component: () => import('../views/roleList')
      },
      {
        path: '/phone',
        name: 'phone',
        component: () => import('../views/phone')
      },
      {
        path: '/goodCategory',
        name: 'goodCategory',
        component: () => import('../views/goodCategory')
      },
      {
        path: '/cs2',
        name: 'cs2',
        component: () => import('../views/cs2')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../views/test')
      },
      {
        path: '/document',
        name: 'document',
        component: () => import('../views/document')
      },
      {
        path: '/systemCode',
        name: 'systemCode',
        component: () => import('../views/systemCode')
      }, {
        path: '/menuList',
        name: 'menuList',
        component: () => import('../views/menuList')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
