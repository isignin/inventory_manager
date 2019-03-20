import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hardware from './views/Hardware.vue'
import SysSettings from './views/SysSettings.vue'
import Software from './views/Software.vue'
import Users from './views/Users.vue'
import Depts from './views/Depts.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hardware',
      name: 'hardware',
      component: Hardware
    },
    {
      path: '/software',
      name: 'software',
      component: Software
    },
    {
      path: '/sys_settings',
      name: 'sys_settings',
      component: SysSettings
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/depts',
      name: 'depts',
      component: Depts
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/export',
      name: 'export',
      component: () => import(/* webpackChunkName: "export" */ './views/DataExport.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/changepwd',
      name: 'changepwd',
      component: () => import(/* webpackChunkName: "changepwd" */ './views/ChangePwd.vue')
    },
    {
      path: '/sys_settings',
      name: 'sys_settings',
      component: () => import(/* webpackChunkName: "sys_settings" */ './views/SysSettings.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ './views/Users.vue')
    }
  ]
})
