import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/Layout',
    name: 'Layout',
    redirect: '/home',
    component: () => import('../Layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('../views/Home')
      },
      {
        path: '/test3',
        name: 'test3',
        component: () => import('../views/test3')
      },
      {
        path: '/department',
        name: 'department',
        meta: {
          title: '机构管理'
        },
        component: () => import('../views/department')
      },
      {
        path: '/userList',
        name: 'userList',
        meta: {
          title: '用户管理'
        },
        component: () => import('../views/userList')
      },
      {
        path: '/roleList',
        name: 'roleList',
        meta: {
          title: '角色管理'
        },
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
        meta: {
          title: '分类管理'
        },
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
        meta: {
          title: '接口文档'
        },
        component: () => import('../views/document')
      },
      {
        path: '/systemCode',
        name: 'systemCode',
        meta: {
          title: '日志管理'
        },
        component: () => import('../views/systemCode')
      },
      {
        path: '/menuList',
        name: 'menuList',
        meta: {
          title: '权限管理'
        },
        component: () => import('../views/menuList')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
