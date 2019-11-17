import Vue from 'vue'
import VueRouter from 'vue-router'  // 引入插件
import Home from '@/views/Home.vue'
Vue.use(VueRouter)  // 安装插件  this.$router  this.$route

const routes = [  // 生成路由表
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({  // 生成路由
  routes
})

export default router
