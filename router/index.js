// import { createRouter, createWebHistory } from 'vue-router'
// import Register from '@/pages/registration.vue'
// import Profile from '@/pages/profile.vue'
//
// const routes = [
//     { path: '/register', component: Register },
//     {
//         path: '/profile',
//         component: Profile,
//         meta: { requiresAuth: true },
//     },
// ]
//
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// })
//
// router.beforeEach((to, from, next) => {
//     const isAuthenticated = localStorage.getItem('access_token');
//
//     if (to.meta.requiresAuth && !isAuthenticated) {
//         next('/login');
//     } else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
//         next('/profile');
//     } else {
//         next();
//     }
// });
//
// export default router
import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/pages/registration.vue'
import Profile from '@/pages/profile.vue'
import Login from '@/pages/login.vue'
import Parcel from '@/pages/parcel.vue'
import Settings from '@/pages/settings.vue'
import Address from '@/pages/address.vue'
import Home from '@/pages/home.vue' // Добавьте этот компонент

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: Register,
        meta: { requiresGuest: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { requiresGuest: true }
    },
    {
        path: '/profile',
        component: Profile,
        meta: { requiresAuth: true },
    },
    {
        path: '/parcel',
        component: Parcel,
        meta: {
            requiresAuth: true,
            requiresRole: 'delivery'
        },
    },
    {
        path: '/settings',
        component: Settings,
        meta: { requiresAuth: true },
    },
    {
        path: '/address',
        component: Address,
        meta: { requiresAuth: true },
    },
    {
        path: '/:pathMatch(.*)*', // Ловим все несуществующие пути
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    console.log('Navigation to:', to.path)
    const isAuthenticated = localStorage.getItem('access_token')
    console.log('Is authenticated:', !!isAuthenticated)

    let user = null
    if (isAuthenticated) {
        try {
            console.log('Fetching user data...')
            const response = await fetch('https://abuexpresslogisticscargo.com/api/get-me/', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            console.log('API response status:', response.status)

            if (!response.ok) {
                // Если токен невалидный, очищаем его
                if (response.status === 401) {
                    localStorage.removeItem('access_token')
                }
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            console.log('User data:', data)

            if (data.success) {
                user = data.data
                console.log('User role:', user?.role)
            }
        } catch (error) {
            console.error('Error fetching user data:', error)
            // Если ошибка аутентификации, перенаправляем на логин
            if (error.message.includes('401')) {
                localStorage.removeItem('access_token')
                next('/login')
                return
            }
        }
    }

    // Проверка для гостевых роутов (логин/регистрация)
    if (to.meta.requiresGuest && isAuthenticated) {
        console.log('Redirecting to profile (guest route accessed while authenticated)')
        next('/profile')
        return
    }

    // Проверка для защищенных роутов
    if (to.meta.requiresAuth) {
        if (!isAuthenticated) {
            console.log('Redirecting to login (auth required but not authenticated)')
            next('/login')
            return
        }

        // Проверка роли
        if (to.meta.requiresRole && (!user || user.role !== to.meta.requiresRole)) {
            console.log(`Redirecting to home (role required: ${to.meta.requiresRole}, current role: ${user?.role})`)
            next('/')
            return
        }
    }

    console.log('Allowing navigation to', to.path)
    next()
})

export default router