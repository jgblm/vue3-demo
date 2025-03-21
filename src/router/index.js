import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from "../components/Welcome.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
        meta: {
          title: '欢迎页'
        }
      },

    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login.vue'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于页'
    }
  }
  // 添加更多路由配置
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router