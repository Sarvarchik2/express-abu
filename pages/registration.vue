
<template>
  <div class="register">
    <div class="logo">
      <img :src="logo" alt="logo" />
    </div>

    <transition name="fade">
      <form v-if="!otpSent" class="register-wrapper" @submit.prevent="handleSubmit">
        <h2>Регистрация</h2>
        <p>Заполните данные для регистрации</p>

        <input v-model="form.email" type="email" placeholder="Email" required />
        <input v-model="form.full_name" type="text" placeholder="ФИО" required />
        <input v-model="form.phone_number" type="text" placeholder="Телефон" required />
        <input v-model="form.password" type="password" placeholder="Пароль" required />

        <button type="submit">Отправить код</button>
        <p v-if="message" class="message">{{ message }}</p>
      </form>
    </transition>

    <transition name="fade">
      <div v-if="otpSent && !otpVerified" class="register-wrapper">
        <h2>Подтверждение Email</h2>
        <p>Мы отправили код на <b>{{ form.email }}</b></p>

        <div class="otp-inputs">
          <input
              v-for="(digit, index) in otpArray"
              :key="index"
              v-model="otpArray[index]"
              maxlength="1"
              @input="focusNext(index, $event)"
          />
        </div>

        <button @click="verifyOtp">Подтвердить</button>
        <p v-if="message" class="message">{{ message }}</p>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="otpVerified" class="register-wrapper">
        <h2>Успешно!</h2>
        <p>Вы успешно зарегистрированы 🎉</p>
      </div>
    </transition>
    <NuxtLink to="/login">
      У вас уже есть аккаунта? Войдите!
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import logo from '@/assets/logo2.png'

const form = ref({
  email: '',
  full_name: '',
  phone_number: '',
  password: ''
})

const otpSent = ref(false)
const otpVerified = ref(false)
const message = ref('')
const otpArray = ref(['', '', '', '', '', ''])

const checkIfEmailExists = async () => {
  try {
    const res = await axios.post('https://abuexpresslogisticscargo.com/api/check-email/', {
      email: form.value.email
    })
    return res.data.exists
  } catch (e) {
    return false
  }
}


const handleSubmit = async () => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      message.value = 'Некорректный формат email'
      return
    }

    const res = await axios.post('https://abuexpresslogisticscargo.com/api/send-otp/', {
      email: form.value.email
    })
    const exists = await checkIfEmailExists()
    if (exists) {
      message.value = 'Этот email уже зарегистрирован'
      return
    }

    if (res.status === 200) {
      otpSent.value = true
      message.value = 'Код отправлен на ваш email!'
    }
  } catch (error) {
    message.value = error.response?.data?.error || 'Ошибка отправки OTP'
  }
}

const focusNext = (index, event) => {
  const input = event.target
  if (input.value && index < otpArray.value.length - 1) {
    input.nextElementSibling?.focus()
  }
}


import { useRouter } from 'vue-router'

const router = useRouter()

const verifyOtp = async () => {
  try {
    const code = otpArray.value.join('')

    const verifyRes = await axios.post('https://abuexpresslogisticscargo.com/api/verify-otp/', {
      email: form.value.email,
      otp: code
    })

    message.value = 'OTP подтвержден! Завершаем регистрацию...'

    form.value.otp = code




    const registerRes = await axios.post('https://abuexpresslogisticscargo.com/api/register/', form.value)

    const tokenRes = await axios.post('https://abuexpresslogisticscargo.com/api/token/', {
      email: form.value.email,
      password: form.value.password
    })

    localStorage.setItem('access_token', tokenRes.data.access)
    localStorage.setItem('refresh_token', tokenRes.data.refresh)
    localStorage.setItem('full_name', form.value.full_name)

    otpVerified.value = true
    message.value = ''
    router.push('/profile')
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error)
    message.value = error.response?.data?.error || 'Ошибка подтверждения или регистрации'
  }
}

</script>

<style scoped>
.register {
  width: 100%;
  height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 200px;
  margin-bottom: 20px;
}

.register-wrapper {
  background: #111;
  padding: 30px;
  border-radius: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #fff;
  text-align: center;
}

input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #444;
  background: transparent;
  color: white;
  font-size: 16px;
  outline: none;
}

input:focus {
  border-color: #ffee00;
}

button {
  padding: 10px;
  background: #ffee00;
  color: #000;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #e5d800;
}

.message {
  color: #ffee00;
  margin-top: 10px;
}

.otp-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.otp-inputs input {
  width: 50px;
  height: 60px;
  font-size: 28px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
  color: #000;
}

/* Анимация появления */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
