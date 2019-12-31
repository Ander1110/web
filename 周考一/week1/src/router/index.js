import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect:'/home/tab1',
    children:[
      {
        path: 'tab1',
        name: 'tab1',
        component: () => import(/* webpackChunkName: "about" */ '../views/tab1.vue'),
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: () => import(/* webpackChunkName: "about" */ '../views/tab2.vue'),
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: () => import(/* webpackChunkName: "about" */ '../views/tab3.vue'),
      },
      {
        path: 'tab4',
        name: 'tab4',
        component: () => import(/* webpackChunkName: "about" */ '../views/tab4.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
