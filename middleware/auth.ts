// middleware/auth.ts
import {useUserStore} from "~/stores/user";

export default defineNuxtRouteMiddleware(async (to) => {
    const userStore = useUserStore()

    // Если данные не загружены, но есть токен
    if (!userStore.isAuthenticated && localStorage.getItem('token')) {
        await userStore.fetchUserData()
    }

    // Проверка для гостевых страниц
    if (to.meta.forGuests && userStore.isAuthenticated) {
        return navigateTo(userStore.hasRole('delivery') ? '/deliver' : '/profile')
    }

    // Проверка аутентификации
    if (to.meta.requiresAuth && !userStore.isAuthenticated) {
        return navigateTo('/login')
    }

    // Проверка ролей
    if (to.meta.requiredRole && !userStore.hasRole(to.meta.requiredRole)) {
        return navigateTo('/access-denied')
    }
})