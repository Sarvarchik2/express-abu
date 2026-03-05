import { m as executeAsync } from '../nitro/nitro.mjs';
import { defineStore } from 'pinia';
import { n as navigateTo, d as defineNuxtRouteMiddleware } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue';
import 'vue-router';
import 'vue/server-renderer';
import 'lucide-vue-next';

const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    email: "",
    full_name: "",
    role: "",
    token: "",
    isAuthenticated: false
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await $fetch("https://abuexpresslogisticscargo.com/api/token/", {
          method: "POST",
          body: { email, password }
        });
        this.token = response.access;
        this.isAuthenticated = true;
        await this.fetchUserData();
        return true;
      } catch (error) {
        console.error("Login failed:", error);
        return false;
      }
    },
    async fetchUserData() {
      try {
        const data = await $fetch("https://abuexpresslogisticscargo.com/api/get-me/", {
          headers: {
            "Authorization": `Bearer ${this.token}`
          }
        });
        this.id = data.id;
        this.email = data.email;
        this.full_name = data.full_name;
        this.role = data.role;
        return data;
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        this.logout();
        throw error;
      }
    },
    logout() {
      this.$reset();
      navigateTo("/login");
    },
    // Проверка роли
    hasRole(requiredRole) {
      return this.role === requiredRole;
    }
  },
  persist: true
  // Опционально: для сохранения состояния
});

const auth = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const userStore = useUserStore();
  if (!userStore.isAuthenticated && localStorage.getItem("token")) {
    [__temp, __restore] = executeAsync(() => userStore.fetchUserData()), await __temp, __restore();
  }
  if (to.meta.forGuests && userStore.isAuthenticated) {
    return navigateTo(userStore.hasRole("delivery") ? "/deliver" : "/profile");
  }
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return navigateTo("/login");
  }
  if (to.meta.requiredRole && !userStore.hasRole(to.meta.requiredRole)) {
    return navigateTo("/access-denied");
  }
});

export { auth as default };
//# sourceMappingURL=auth.mjs.map
