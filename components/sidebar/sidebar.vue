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
        <NuxtLink to="/" active-class="active">
          <LogOut class="icon" />
          Выйти
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { User, Package, MapPin, Wallet, AlertCircle, Settings, LogOut } from 'lucide-vue-next';
</script>

<style scoped>
@import "sidebar.css";
</style>
