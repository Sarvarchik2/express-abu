import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        id: null as number | null,
        email: '',
        full_name: '',
        role: '',
        token: '',
        isAuthenticated: false,
    }),

    actions: {
        async login(email: string, password: string) {
            try {
                const response = await $fetch('https://abuexpresslogisticscargo.com/api/token/', {
                    method: 'POST',
                    body: { email, password }
                })

                this.token = response.access
                this.isAuthenticated = true

                // Получаем данные пользователя
                await this.fetchUserData()

                return true
            } catch (error) {
                console.error('Login failed:', error)
                return false
            }
        },

        async fetchUserData() {
            try {
                const data = await $fetch('https://abuexpresslogisticscargo.com/api/get-me/', {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                })

                this.id = data.id
                this.email = data.email
                this.full_name = data.full_name
                this.role = data.role

                return data
            } catch (error) {
                console.error('Failed to fetch user data:', error)
                this.logout()
                throw error
            }
        },

        logout() {
            this.$reset()
            navigateTo('/login')
        },

        // Проверка роли
        hasRole(requiredRole: string) {
            return this.role === requiredRole
        }
    },

    persist: true // Опционально: для сохранения состояния
})