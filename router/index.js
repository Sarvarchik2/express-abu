import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/pages/registration.vue'
import Profile from '@/pages/profile.vue'

const routes = [
    { path: '/register', component: Register },
    {
        path: '/profile',
        component: Profile,
        meta: { requiresAuth: true },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('access_token')

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/register') // или `/login`, если есть логин
    } else {
        next()
    }
})

export default router
