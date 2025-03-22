<template>
  <div class="sidebar">
    <ul class="menu">
      <li>
        <NuxtLink to="/profile" active-class="active">
          <User class="icon" />
          Профиль
        </NuxtLink>
      </li>
      <span></span>
      <li>
        <NuxtLink to="/parcels" active-class="active">
          <Package class="icon" />
          Посылки
        </NuxtLink>
      </li>
      <span></span>
      <li>
        <NuxtLink to="/address" active-class="active">
          <MapPin class="icon" />
          Адреса
        </NuxtLink>
      </li>
      <span></span>
      <li>
        <NuxtLink to="/" active-class="active">
          <AlertCircle class="icon" />
          Претензии
        </NuxtLink>
      </li>
    </ul>

    <ul class="menu">
      <li>
        <NuxtLink to="/" active-class="active">
          <Settings class="icon" />
          Настройки
        </NuxtLink>
      </li>
      <span></span>
      <li>
        <button class="logout-btn" @click="logout">
          <LogOut class="icon" />
          Выйти
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { User, Package, MapPin, AlertCircle, Settings, LogOut } from 'lucide-vue-next'

const router = useRouter()

const logout = () => {
  if (process.client) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('full_name')
  }

  router.push('/registration')
}

</script>

<style scoped>
@import "sidebar.css";

.logout-btn {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0;
}
.logout-btn:hover {
  color: #f33;
}
</style>
