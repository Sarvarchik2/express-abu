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
    const isAuthenticated = localStorage.getItem('access_token');

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
        next('/profile');
    } else {
        next();
    }
});

export default router