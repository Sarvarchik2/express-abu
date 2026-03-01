
<template>
  <div class="register">
    <div class="logo">
      <img :src="logo" alt="logo" />
    </div>

    <transition name="fade">
      <form v-if="!otpSent" class="register-wrapper" @submit.prevent="handleSubmit">
        <h2>{{ $t('registration.title') }}</h2>
        <input v-model="form.email" type="email" :placeholder="$t('registration.email_placeholder')" required />
        <input v-model="form.first_name" type="text" :placeholder="$t('registration.first_name_placeholder')" @input="form.first_name = form.first_name.replace(/[^a-zA-Z\s\-']/g, '')" required />
        <input v-model="form.last_name" type="text" :placeholder="$t('registration.last_name_placeholder')" @input="form.last_name = form.last_name.replace(/[^a-zA-Z\s\-']/g, '')" required />
        <input v-model="form.phone_number" type="tel" :placeholder="$t('registration.phone_placeholder')" @input="form.phone_number = form.phone_number.replace(/[^0-9+]/g, '')" required />
        <input v-model="form.date_of_birth" type="date" :placeholder="$t('registration.dob_placeholder')" required />
        <input v-model="form.card_number" type="text" :placeholder="$t('registration.card_placeholder')" @input="formatPassport" required />
        <input v-model="form.personal_number" type="text" :placeholder="$t('registration.pinfl_placeholder')" @input="form.personal_number = form.personal_number.replace(/[^0-9]/g, '')" maxlength="14" required />
        <input v-model="form.password" type="password" :placeholder="$t('registration.password_placeholder')" minlength="6" required />

        <button type="submit">{{ $t('registration.submit_btn') }}</button>
        <p v-if="message" class="message">{{ message }}</p>
      </form>
    </transition>

    <transition name="fade">
      <div v-if="otpSent && !otpVerified" class="register-wrapper">
        <h2>{{ $t('registration.otp_title') }}</h2>
        <p>{{ $t('registration.otp_subtitle') }} <b>{{ form.email }}</b></p>

        <div class="otp-inputs">
          <input
              v-for="(digit, index) in otpArray"
              :key="index"
              v-model="otpArray[index]"
              maxlength="1"
              @input="focusNext(index, $event)"
          />
        </div>

        <button @click="verifyOtp">{{ $t('registration.otp_confirm_btn') }}</button>
        <p v-if="message" class="message">{{ message }}</p>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="otpVerified" class="register-wrapper">
        <h2>{{ $t('registration.success_title') }}</h2>
        <p>{{ $t('registration.success_subtitle') }}</p>
      </div>
    </transition>
    <NuxtLink :to="localePath('/login')">
      {{ $t('registration.already_have_account') }}
    </NuxtLink>
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
  full_name: '',
  first_name: '',
  last_name: '',
  phone_number: '',
  date_of_birth: '',
  card_number: '',
  personal_number: '',
  password: ''
})

const otpSent = ref(false)
const otpVerified = ref(false)
const message = ref('')
const otpArray = ref(['', '', '', '', '', ''])

const handleSubmit = async () => {
  try {
    // Generate full_name from first_name and last_name
    form.value.full_name = `${form.value.first_name} ${form.value.last_name}`.trim()

    // Additional validations
    if (!form.value.first_name || !form.value.last_name || !form.value.phone_number || !form.value.password || !form.value.card_number || !form.value.personal_number) {
      message.value = 'Пожалуйста, заполните все обязательные поля'
      return
    }

    if (form.value.password.length < 6) {
      message.value = 'Пароль должен содержать минимум 6 символов'
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.value.email)) {
      message.value = t('registration.invalid_email')
      return
    }

    const res = await axios.post('https://abuexpresslogisticscargo.com/api/send-otp/', {
      email: form.value.email
    })

    if (res.status === 200) {
      otpSent.value = true
      message.value = t('registration.code_sent')
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

const formatPassport = () => {
  let val = form.value.card_number.toUpperCase()
  let series = val.slice(0, 2).replace(/[^A-ZА-ЯЁ]/g, '') // Поддержка латиницы и кириллицы
  let number = val.slice(series.length).replace(/[^0-9]/g, '').slice(0, 7) // Только цифры, макс 7
  form.value.card_number = series + number
}

const verifyOtp = async () => {
  try {
    const code = otpArray.value.join('')

    const verifyRes = await axios.post('https://abuexpresslogisticscargo.com/api/verify-otp/', {
      email: form.value.email,
      otp: code
    })

    message.value = t('registration.otp_confirmed')

    const payload = {
      email: form.value.email,
      full_name: form.value.full_name,
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      phone_number: form.value.phone_number,
      date_of_birth: form.value.date_of_birth,
      card_number: form.value.card_number,
      personal_number: form.value.personal_number,
      password: form.value.password,
    }

    const registerRes = await axios.post('https://abuexpresslogisticscargo.com/api/register/', payload)

    const regData = registerRes.data?.data
    if (regData && regData.access) {
      localStorage.setItem('access_token', regData.access)
      localStorage.setItem('refresh_token', regData.refresh)
      localStorage.setItem('full_name', regData.full_name || form.value.full_name)

      otpVerified.value = true
      message.value = ''
      router.push(localePath('/profile'))
    } else {
      otpVerified.value = true
      message.value = ''
      router.push(localePath('/login'))
    }
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error)
    const errData = error.response?.data
    let errMsg = t('registration.otp_verify_error')

    if (errData && Object.keys(errData).length === 0 && error.response.status === 400) {
      errMsg = 'Недействительный или просроченный код'
    } else if (errData) {
      const errStr = JSON.stringify(errData).toLowerCase()
      if (errStr.includes('already exists') || errStr.includes('уже существует')) {
        errMsg = t('registration.email_exists')
      } else if (errData.detail) {
        errMsg = errData.detail
      } else if (typeof errData.error === 'string' && !errData.error.includes('exists')) {
        errMsg = errData.error
      } else if (errData.message && typeof errData.message === 'string') {
        errMsg = errData.message
      }
    }

    message.value = errMsg
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

/* Анимация появления */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
