<template>
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
<!--        <button >Забыли пароль?</button>-->
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
</style>
