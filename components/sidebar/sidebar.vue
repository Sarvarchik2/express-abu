
<template>
  <div>
    <!-- Гамбургер-меню для мобильных -->
    <button 
      class="hamburger" 
      @click="toggleMenu"
      :class="{ 'active': isOpen }"
      v-if="isMobile"
    >
      <!-- <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span> -->
      Навигация по профилю
    </button>

    <!-- Сайдбар -->
    <div class="sidebar" :class="{ 'mobile-open': isOpen }">
      <!-- Верхняя секция меню -->
      <ul class="menu">
        <li>
          <NuxtLink to="/profile" active-class="active" @click="handleMobileClick">
            <User class="icon" />
            Профиль
          </NuxtLink>
        </li>
        <span class="divider"></span>
        <li>
          <NuxtLink to="/parcels" active-class="active" @click="handleMobileClick">
            <Package class="icon" />
            Посылки
          </NuxtLink>
        </li>
        <span class="divider"></span>
        <li>
          <NuxtLink to="/address" active-class="active" @click="handleMobileClick">
            <MapPin class="icon" />
            Адреса
          </NuxtLink>
        </li>
        <span class="divider"></span>
        <!-- <li>
          <NuxtLink to="/claims" active-class="active" @click="handleMobileClick">
            <AlertCircle class="icon" />
            Претензии
          </NuxtLink>
        </li> -->
      </ul>

      <!-- Нижняя секция меню -->
      <ul class="menu">
        <li>
          <NuxtLink to="/profile" active-class="active" @click="handleMobileClick">
            <Settings class="icon" />
            Настройки
          </NuxtLink>
        </li>
        <span class="divider"></span>
        <li>
          <button class="logout-btn" @click="logout">
            <LogOut class="icon" />
            Выйти
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { User, Package, MapPin, AlertCircle, Settings, LogOut } from 'lucide-vue-next'

const router = useRouter()
const isOpen = ref(false)
const isMobile = ref(false)

// Проверка мобильного устройства
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600
}

// Переключение меню
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Закрытие меню на мобильных
const handleMobileClick = () => {
  if (isMobile.value) {
    isOpen.value = false
  }
}

// Выход из системы
const logout = () => {
  if (process.client) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('full_name')
  }
  handleMobileClick()
  router.push('/registration')
}

// Обработчики изменения размера
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
/* Базовые стили */
.sidebar {
  width: 250px;
  min-height: 60vh;
  background-color: #0A0A0A;
  padding: 20px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu li a,
.logout-btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  padding: 12px;
  transition: all 0.3s ease;
}

.menu li a:hover,
.logout-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFEE00;
}

.menu li a.active {
  color: #FFEE00;
  font-weight: bold;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: inherit;
}

.divider {
  display: block;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 0;
}

.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Мобильные стили */
@media (max-width: 600px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    z-index: 1000;
    transition: left 0.3s ease;
    padding-top: 70px;
  }

  .sidebar.mobile-open {
    left: 0;
  }

  .hamburger {
    position: fixed;
        top: 90px;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
        color: #fff;
        border: navajowhite;
        border-radius: 20px;
        padding: 10px;
        background: rgba(255, 255, 255, 0.1);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.2);
}

  .hamburger .line {
    display: block;
    width: 25px;
    height: 2px;
    background: #fff;
    margin: 5px 0;
    transition: 0.3s;
  }

  .hamburger.active .line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active .line:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

/* Десктопные стили */
@media (min-width: 601px) {
  .hamburger {
    display: none;
  }
}
</style>