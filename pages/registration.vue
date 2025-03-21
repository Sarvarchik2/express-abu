<!-- <template>
  <div class="login">
    <div class="logo">
      <img :src="logo" alt="logo">
    </div>
    <form class="login-wrapper">
      <h2>Зарегестрироваться</h2>
      <p>Зарегестрируйтесь чтобы использовать все возможности сисетмы</p>

      <input type="email" placeholder="Gmail">
      <input type="password" placeholder="Password" />

      <div class="login-wrapper-btn">
        <button type="submit">Зарегестрироваться</button>
      </div>

    </form>
    <NuxtLink to="/login">
      У вас уже есть аккаунт? Войти!
    </NuxtLink>

  </div>
</template>

<script setup>
import logo from '@/assets/logo2.png'
</script>

<style scoped>
.login-wrapper input{
  width: 100%;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  background: transparent;
  outline: none;
}
.login-wrapper input:focus{
  border: 1px solid #FFEE00;

}
.login .logo{
  width: 250px;
  margin-bottom: 30px;
}
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-wrapper h2{
  font-size: 30px;
  text-align: center;
}
.login-wrapper p{
  font-size: 18px;
  text-align: center;
}
.login-wrapper {
  background: #0A0A0A;
  gap: 20px;
  border-radius: 30px;
  padding: 30px 50px;
  width: 600px;
  display: flex;
  flex-direction: column;

}
.login a{
  color: #fff;

}
.login-wrapper-btn{
  width: 100%;
  display: flex;
  gap: 20px;
}
.login-wrapper button{
  width: 49%;
  background: transparent;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid #FFEE00;
  color: #fff;

}
.login-wrapper button:nth-child(2){
  background: #FFEE00;
  color: #000;
}
@media (max-width: 769px) {
  .login-wrapper{
    width: 100%;
    padding: 30px 20px;
  }
  .login-wrapper h2{
    font-size: 24px;
  }
  .login-wrapper p{
    font-size: 14px;
  }
  .login a{
    width: 100%;
    text-align: center;
  }
}
</style> -->

<template>
  <div class="register">
    <div class="logo">
      <img :src="logo" alt="logo">
    </div>

    <form class="register-wrapper" @submit.prevent="handleSubmit">
      <h2>Регистрация</h2>
      <p v-if="!otpSent">Заполните данные для регистрации</p>
      <p v-else>Введите код из email</p>

      <input v-model="form.email" type="email" placeholder="Email" required>
      <input v-model="form.full_name" type="text" placeholder="ФИО" required>
      <input v-model="form.phone_number" type="text" placeholder="Телефон" required>
      <input v-model="form.password" type="password" placeholder="Пароль" required>

      <button type="submit" v-if="!otpSent">Отправить код</button>

      <div v-if="otpSent">
        <input v-model="otp" type="text" placeholder="Введите OTP" required>
        <button type="button" @click="verifyOtp">Подтвердить</button>
      </div>

      <p v-if="message" class="message">{{ message }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import logo from '@/assets/logo2.png';

const otpSent = ref(false);
const otpVerified = ref(false);
const form = ref({
  email: '',
  full_name: '',
  phone_number: '',
  password: ''
});
const otp = ref('');
const message = ref('');

const handleSubmit = async () => {
  try {
    console.log('Отправка OTP на email:', form.value.email);

    // Проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.value.email)) {
      message.value = "Некорректный формат email";
      return;
    }

    const response = await axios.post('https://abuexpresslogisticscargo.com/api/send-otp/', {
      email: form.value.email,
    });

    if (response.status === 200) {
      otpSent.value = true;
      message.value = "Код отправлен на ваш email!";
    }
  } catch (error) {
    console.error('Ошибка отправки OTP:', error.response?.data || error);
    message.value = error.response?.data?.error || 'Ошибка отправки OTP';
  }
};
const verifyOtp = async () => {
  try {
    console.log('Подтверждение OTP:', otp.value);
    
    // 2. Подтверждаем OTP
    await axios.post('https://abuexpresslogisticscargo.com/api/verify-otp/', {
      email: form.value.email,
      otp: otp.value
    });

    otpVerified.value = true;
    message.value = "OTP подтвержден! Завершаем регистрацию...";

    // 3. Регистрируем пользователя после верификации email
    const response = await axios.post('https://abuexpresslogisticscargo.com/api/register/', form.value);
    console.log("Успех регистрации:", response.data);

    // 4. Получаем токен после регистрации
    const tokenResponse = await axios.post('https://abuexpresslogisticscargo.com/api/token/', {
      email: form.value.email,
      password: form.value.password
    });

    // 5. Сохраняем токены
    localStorage.setItem('access_token', tokenResponse.data.access);
    localStorage.setItem('refresh_token', tokenResponse.data.refresh);

    message.value = 'Регистрация успешна!';
  } catch (error) {
    console.error('Ошибка подтверждения OTP или регистрации:', error.response?.data || error);
    message.value = 'Ошибка подтверждения OTP или регистрации';
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-wrapper {
  background: #0A0A0A;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input {
  padding: 10px;
  border-radius: 5px;
}
button {
  background: #FFEE00;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.message {
  color: #fff;
}
</style>
