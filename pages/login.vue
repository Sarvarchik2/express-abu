<!--<template>-->
<!--  <div class="login">-->
<!--    <div class="logo">-->
<!--      <img :src="logo" alt="logo">-->
<!--    </div>-->
<!--    <form class="login-wrapper">-->
<!--      <h2>Войти</h2>-->
<!--      <p>Войти чтобы использовать все возможности сисетмы</p>-->

<!--      <input type="email" placeholder="Gmail">-->
<!--      <input type="password" placeholder="Password" />-->

<!--      <div class="login-wrapper-btn">-->
<!--        <button >Забыли пароль?</button>-->
<!--        <button type="submit">Войти</button>-->
<!--      </div>-->

<!--    </form>-->
<!--      <NuxtLink to="/registration">-->
<!--        У вас еще нет аккаунта? Зарегестрируйтесь!-->
<!--      </NuxtLink>-->

<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import logo from '@/assets/logo2.png'-->
<!--</script>-->

<!--<style scoped>-->
<!--.login-wrapper input{-->
<!--  width: 100%;-->
<!--  padding: 10px;-->
<!--  border: 1px solid #fff;-->
<!--  border-radius: 20px;-->
<!--  color: #fff;-->
<!--  background: transparent;-->
<!--  outline: none;-->
<!--}-->
<!--.login-wrapper input:focus{-->
<!--  border: 1px solid #FFEE00;-->

<!--}-->
<!--.login .logo{-->
<!--  width: 250px;-->
<!--  margin-bottom: 30px;-->
<!--}-->
<!--.login {-->
<!--  width: 100%;-->
<!--  height: 100vh;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->
<!--.login-wrapper h2{-->
<!--  font-size: 30px;-->
<!--  text-align: center;-->
<!--}-->
<!--.login-wrapper p{-->
<!--  font-size: 18px;-->
<!--  text-align: center;-->
<!--}-->
<!--.login-wrapper {-->
<!--  background: #0A0A0A;-->
<!--  gap: 20px;-->
<!--  border-radius: 30px;-->
<!--  padding: 30px 50px;-->
<!--  width: 600px;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->

<!--}-->
<!--.login a{-->
<!--  color: #fff;-->

<!--}-->
<!--.login-wrapper-btn{-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  gap: 20px;-->
<!--}-->
<!--.login-wrapper button{-->
<!--  width: 49%;-->
<!--  background: transparent;-->
<!--  padding: 10px;-->
<!--  border-radius: 30px;-->
<!--  border: 1px solid #FFEE00;-->
<!--  color: #fff;-->

<!--}-->
<!--.login-wrapper button:nth-child(2){-->
<!--  background: #FFEE00;-->
<!--  color: #000;-->
<!--}-->
<!--@media (max-width: 769px) {-->
<!--  .login-wrapper{-->
<!--    width: 100%;-->
<!--    padding: 30px 20px;-->
<!--  }-->
<!--  .login-wrapper h2{-->
<!--    font-size: 24px;-->
<!--  }-->
<!--  .login-wrapper p{-->
<!--    font-size: 14px;-->
<!--  }-->
<!--  .login a{-->
<!--      width: 100%;-->
<!--    text-align: center;-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
  <div class="login">
    <div class="logo">
      <img :src="logo" alt="logo">
    </div>

    <form class="login-wrapper" @submit.prevent="handleLogin">
      <h2>Войти</h2>
      <p>Войти чтобы использовать все возможности системы</p>

      <input v-model="form.email" type="email" placeholder="Gmail" required />
      <input v-model="form.password" type="password" placeholder="Password" required />

      <div class="login-wrapper-btn">
        <button type="button">Забыли пароль?</button>
        <button type="submit">Войти</button>
      </div>

      <p v-if="message" class="message">{{ message }}</p>
    </form>

    <NuxtLink to="/registration">
      У вас еще нет аккаунта? Зарегистрируйтесь!
    </NuxtLink>
  </div>
</template>

<script setup>
import logo from '@/assets/logo2.png'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const form = ref({
  email: '',
  password: ''
})

const message = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await axios.post('https://abuexpresslogisticscargo.com/api/token/', {
      email: form.value.email,
      password: form.value.password
    })

    localStorage.setItem('access_token', res.data.access)
    localStorage.setItem('refresh_token', res.data.refresh)

    // Получаем имя пользователя (если есть отдельный /me или профайл — тут можно заменить)
    const name = form.value.email.split('@')[0]
    localStorage.setItem('full_name', name)

    message.value = ''
    router.push('/profile')
  } catch (error) {
    console.error('Ошибка логина:', error.response?.data || error)
    message.value = 'Неверный email или пароль'
  }
}
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
</style>
