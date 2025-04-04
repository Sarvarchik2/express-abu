import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)

    const login = async (credentials) => {
        const response = await axios.post('/api/login', credentials)

        // Предполагаем, что бэкенд возвращает роль
        user.value = {
            id: response.data.id,
            email: response.data.email,
            role: response.data.role // 'delivery', 'admin', 'client' и т.д.
        }
    }

    return { user, login }
})