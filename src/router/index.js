import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页'
        },
        redirect: '/welcome',
        children: [
            {
                path: 'welcome',
                name: 'Welcome',
                component: () => import('@/views/Welcome.vue'),
                meta: {
                    title: '欢迎页'
                }
            },
            {
                path: '/system/user',
                name: 'user',
                component: () => import('@/views/User.vue'),
                meta: {
                    title: '用户管理'
                },
                children: [
                    {
                        path: 'info',
                        name: 'info',
                        component: () => import('@/views/Welcome.vue'),
                        meta: {
                            title: '用户详情'
                        }
                    }
                ]
            },

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
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
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
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