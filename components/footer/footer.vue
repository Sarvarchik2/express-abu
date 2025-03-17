

<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-top-item">
        <img :src="Phone" alt="asd">
        <h2>
          {{ $t("contact_contact") }}
          <p>+998(95)955-05-55</p>
        </h2>
      </div>
      <div class="footer-top-item">
        <img :src="Mail" alt="asd">
        <h2>
          {{ $t("footer_gmail") }}

          <p>abuexpressl@gmail.com</p>
        </h2>
      </div>
      <div class="footer-top-item">
        <img :src="Point" alt="asd">
        <h2>
          {{ $t("footer_location") }}
          <p>Абу Сулеймана Банакоти 225A, Ташкент, Узбекистан, </p>
        </h2>
      </div>
      <div class="footer-top-item">
        <img :src="Time" alt="asd">
        <h2>
          {{ $t("footer_working_hours") }}
          <p>24/7</p>
        </h2>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <img :src="Logo" alt="asd">

        <p>
          {{ $t("footer_slogan") }}

        </p>

        <div class="footer-bottom-left-item">
          <NuxtLink>
            <img :src="Facebook" alt="ad">
          </NuxtLink>
          <NuxtLink>
            <img :src="Instagram" alt="ad">
          </NuxtLink>

        </div>
      </div>

      <div class="footer-bottom-right">

        <div class="footer-bottom-item">
          <h2>
            {{ $t("footer_about") }}

          </h2>
          <ul>
            <li><img :src="Arrow" alt="asd">
              {{ $t("footer_rates") }}

              </li>
            <li><img :src="Arrow" alt="asd">
              {{ $t("footer_services") }}

              </li>
            <li><img :src="Arrow" alt="asd">
              {{ $t("footer_team") }}

              </li>
            <li><img :src="Arrow" alt="asd">
              {{ $t("footer_for_customers") }}

              </li>
            <li><img :src="Arrow" alt="asd">
              {{ $t("footer_useful") }}

              </li>
          </ul>
        </div>

        <div class="footer-bottom-item">
          <h2>
            Покупателям
          </h2>
          <ul>
            <li><img :src="Arrow" alt="asd"> Тарифы</li>
            <li><img :src="Arrow" alt="asd"> Наши услуги</li>
            <li><img :src="Arrow" alt="asd"> Наша команта</li>
            <li><img :src="Arrow" alt="asd"> Отзывы клиентов</li>
            <li><img :src="Arrow" alt="asd"> Контакты</li>
          </ul>
        </div>

        <div class="footer-bottom-item">
          <h2>
            Полезное
          </h2>
          <ul>
            <li><img :src="Arrow" alt="asd"> Тарифы</li>
            <li><img :src="Arrow" alt="asd"> Наши услуги</li>
            <li><img :src="Arrow" alt="asd"> Наша команта</li>
            <li><img :src="Arrow" alt="asd"> Отзывы клиентов</li>
            <li><img :src="Arrow" alt="asd"> Контакты</li>
          </ul>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
import Time from "@/assets/footer/time.png";
import Point from "@/assets/footer/point.png";
import Mail from "@/assets/footer/mail.png";
import Phone from "@/assets/footer/phone.png";
import Facebook from "@/assets/footer/color.png";
import Instagram from "@/assets/footer/color copy.png";
import Arrow from '@/assets/footer/arrow.png';
import Logo from '@/assets/logo.png';

export default {
  data() {
    return {
      Logo,
      Arrow,
      Facebook,
      Instagram,
      Phone,
      Mail,
      Point,
      Time,
    };
  }
};
</script>

<style>
@import './footer.css';
</style>
