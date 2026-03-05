<template>
  <div class="register">
    <div class="logo">
      <img :src="logo" alt="logo" />
    </div>

    <!-- Step 1: Request OTP -->
    <transition name="fade">
      <form v-if="!otpSent" class="register-wrapper" @submit.prevent="handleRequestOtp">
        <h2>{{ $t('forgot_password.title') }}</h2>
        <p>{{ $t('forgot_password.subtitle') }}</p>

        <input v-model="form.email" type="email" :placeholder="$t('forgot_password.email_placeholder')" required />

        <button type="submit">{{ $t('forgot_password.submit_btn') }}</button>
        <p v-if="message" class="message">{{ message }}</p>
        
        <NuxtLink :to="localePath('/login')" class="back-link">
          {{ $t('forgot_password.back_to_login') }}
        </NuxtLink>
      </form>
    </transition>

    <!-- Step 2: Enter OTP -->
    <transition name="fade">
      <div v-if="otpSent && !otpVerified" class="register-wrapper">
        <h2>{{ $t('forgot_password.otp_title') }}</h2>
        <p>{{ $t('forgot_password.otp_subtitle') }} <b>{{ form.email }}</b></p>

        <div class="otp-inputs">
          <input
              v-for="(digit, index) in otpArray"
              :key="index"
              v-model="otpArray[index]"
              maxlength="1"
              @input="focusNext(index, $event)"
          />
        </div>

        <button @click="verifyOtp">{{ $t('forgot_password.otp_confirm_btn') }}</button>
        <p v-if="message" class="message">{{ message }}</p>
      </div>
    </transition>

    <!-- Step 3: Set New Password -->
    <transition name="fade">
      <form v-if="otpVerified && !passwordReset" class="register-wrapper" @submit.prevent="handleResetPassword">
        <h2>{{ $t('forgot_password.new_pass_title') }}</h2>
        <p>{{ $t('forgot_password.new_pass_subtitle') }}</p>

        <input v-model="form.new_password" type="password" :placeholder="$t('forgot_password.new_password_placeholder')" minlength="6" required />

        <button type="submit">{{ $t('forgot_password.reset_btn') }}</button>
        <p v-if="message" class="message">{{ message }}</p>
      </form>
    </transition>

    <!-- Step 4: Success Message -->
    <transition name="fade">
      <div v-if="passwordReset" class="register-wrapper">
        <h2>{{ $t('forgot_password.success_title') }}</h2>
        <p>{{ $t('forgot_password.success_subtitle') }}</p>
        
        <button style="margin-top:20px" @click="router.push(localePath('/login'))">
          {{ $t('forgot_password.back_to_login') }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import logo from '@/assets/logo2.png'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

const form = ref({
  email: '',
  new_password: ''
})

const otpSent = ref(false)
const otpVerified = ref(false)
const passwordReset = ref(false)
const message = ref('')
const otpArray = ref(['', '', '', '', '', ''])

const handleRequestOtp = async () => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      message.value = t('registration.invalid_email')
      return
    }

    const res = await axios.post('https://abuexpresslogisticscargo.com/api/reset-otp/', {
      email: form.value.email
    })

    if (res.status === 200 || res.status === 201) {
      otpSent.value = true
      message.value = ''
    }
  } catch (error) {
    message.value = error.response?.data?.error || t('registration.otp_send_error')
  }
}

const focusNext = (index, event) => {
  const input = event.target
  if (input.value && index < otpArray.value.length - 1) {
    input.nextElementSibling?.focus()
  }
}

const verifyOtp = async () => {
  try {
    const code = otpArray.value.join('')

    // We assume verify-otp is the same endpoint for both registration and reset
    await axios.post('https://abuexpresslogisticscargo.com/api/verify-otp/', {
      email: form.value.email,
      otp: code
    })

    otpVerified.value = true
    message.value = ''
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error)
    message.value = t('forgot_password.error_otp')
  }
}

const handleResetPassword = async () => {
  try {
    if (form.value.new_password.length < 6) {
      message.value = 'Пароль должен содержать минимум 6 символов'
      return
    }

    const res = await axios.post('https://abuexpresslogisticscargo.com/api/reset-password/', {
      email: form.value.email,
      new_password: form.value.new_password
    })

    if (res.status === 200 || res.status === 201) {
      passwordReset.value = true
      message.value = ''
    }
  } catch (error) {
    message.value = error.response?.data?.error || 'Ошибка сброса пароля'
  }
}

</script>

<style scoped>
.register {
  width: 100%;
  height: 100vh;
  background: #000;
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

.back-link {
  color: #ccc;
  font-size: 14px;
  text-decoration: underline;
  margin-top: 5px;
}

/* Анимация появления */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
