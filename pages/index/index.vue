
<template>
  <div class="abu-express">
    <swiper
        class="abu-express-swiper"
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{
          clickable: true,
          type: 'progressbar'
        }"
        :navigation="true"
    >
      <swiper-slide
          v-for="(banner, idx) in banners"
          :key="idx"
          class="abu-express-swiper-slide"
      >
        <picture>
          <source :srcset="banner.mobile_image_url" media="(max-width: 768px)" />
          <img :src="banner.desktop_image_url" alt="Slide" class="slide-img" />
        </picture>
<!--        <h2>{{ banner.title }}</h2>-->
<!--        <NuxtLink to="/tarif">{{ $t("hero_button") }}</NuxtLink>-->
      </swiper-slide>
    </swiper>

    <section class="abu-express-time">
      <h2 class="abu-express-time-title">{{ $t("time_header") }}</h2>
      <p class="abu-express-time-text">{{ $t("time_subheader") }}</p>
      <swiper
          class="abu-express-time-swiper"
          :modules="[Navigation, Autoplay]"
          :slides-per-view="1"
          :space-between="200"
          :autoplay="{ delay: 3500, disableOnInteraction: false }"
          :navigation="true"
      >
        <swiper-slide
            class="abu-express-time-slide"
            v-for="(timer, index) in timers"
            :key="index"
        >
          <h3>{{ timer.country }}</h3>
          <div class="abu-express-time-item">
            <h5>{{ timer.days }} <span>{{ $t("days") }}</span></h5>
            <h5>{{ timer.hours }} <span>{{ $t("hours") }}</span></h5>
            <h5>{{ timer.minutes }} <span>{{ $t("minutes") }}</span></h5>
            <h5>{{ timer.seconds }} <span>{{ $t("seconds") }}</span></h5>
          </div>
          <router-link to="/">{{ $t("time_send") }}</router-link>
        </swiper-slide>
      </swiper>
    </section>

    <section class="abu-express-how-works">
      <div class="abu-express-how-works-main">
        <h2>{{ $t("how_title") }}</h2>
        <div class="abu-express-how-works-wrapper">
          <div class="abu-express-how-works-left">
            <ul>
              <li>{{ $t("how_step1") }}</li>
              <li>{{ $t("how_step2") }}</li>
              <li>{{ $t("how_step3") }}</li>
            </ul>
            <button>{{ $t("how_button") }}</button>
          </div>
          <div class="abu-express-how-works-right">
            <iframe
                width="100%"
                src="https://www.youtube.com/embed/eOGyJPBHNCk?si=DiDvnXPtAfWpTURj"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <Search />

    <section class="abu-express-help">
      <div class="abu-express-help-img">
        <img :src="HelpImg" alt="help" />
      </div>
      <div class="abu-express-help-text">
        <h2>{{ $t("help_title") }}</h2>
        <p>{{ $t("help_desc") }}</p>
        <NuxtLink to="/help">{{ $t("help_btn") }}</NuxtLink>

      </div>
    </section>

    <section class="abu-express-facility">
      <h4>{{ $t("why_title") }}</h4>
      <div class="abu-express-facility-item">
        <img :src="Money" alt="feature" />
        <h2>{{ $t("tax_free") }}</h2>
        <p>{{ $t("tax_free_desc") }}</p>
      </div>
      <div class="abu-express-facility-item">
        <img :src="Cart" alt="feature" />
        <h2>{{ $t("best_rates") }}</h2>
        <p>{{ $t("best_rates_desc") }}</p>
      </div>
      <div class="abu-express-facility-item">
        <img :src="Box" alt="feature" />
        <h2>{{ $t("fast_delivery") }}</h2>
        <p>{{ $t("fast_delivery_desc") }}</p>
      </div>
      <div class="abu-express-facility-item">
        <img :src="Point" alt="feature" />
        <h2>{{ $t("security") }}</h2>
        <p>{{ $t("security_desc") }}</p>
      </div>
      <div class="abu-express-facility-item">
        <img :src="Time247" alt="feature" />
        <h2>{{ $t("security2") }}</h2>
        <p>{{ $t("security_desc2") }}</p>
      </div>
      <div class="abu-express-facility-item">
        <img :src="Safe" alt="feature" />
        <h2>{{ $t("security3") }}</h2>
        <p>{{ $t("security_desc3") }}</p>
      </div>
    </section>

    <section class="abu-express-help abu-express-help-about">
      <div class="abu-express-help-img">
        <img :src="Help2Img" alt="help" />
      </div>
      <div class="abu-express-help-text">
        <h2>{{ $t("about_title") }}</h2>
        <p>{{ $t("about_desc") }}</p>
        <button>{{ $t("about_btn") }}</button>
      </div>
    </section>

    <section class="abu-express-statistic">
      <h2>{{ $t("statistic_title") }}</h2>
      <div class="abu-express-statistic-item">
        <img :src="S1" alt="stat" />
        <h3>{{ $t("stat1_count") }}</h3>
        <p>{{ $t("stat1_text") }}</p>
      </div>
      <div class="abu-express-statistic-item">
        <img :src="S2" alt="stat" />
        <h3>{{ $t("stat2_count") }}</h3>
        <p>{{ $t("stat2_text") }}</p>
      </div>
      <div class="abu-express-statistic-item">
        <img :src="S3" alt="stat" />
        <h3>{{ $t("stat3_count") }}</h3>
        <p>{{ $t("stat3_text") }}</p>
      </div>
      <div class="abu-express-statistic-item">
        <img :src="S4" alt="stat" />
        <h3>{{ $t("stat4_count") }}</h3>
        <p>{{ $t("stat4_text") }}</p>
      </div>
    </section>

    <section class="abu-express-help">
      <div class="abu-express-help-img">
        <img :src="Bgh" alt="help" />
      </div>
      <div class="abu-express-help-text">
        <h2>{{ $t("final_help_title") }}</h2>
        <p>{{ $t("final_help_desc") }}</p>
        <NuxtLink to="/help">{{ $t("final_help_btn") }}</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useI18n } from "vue-i18n";
import Search from "../../components/product/product.vue";
// import imageSrc from "@/assets/us.png";
// import imageSrc2 from "@/assets/tur.png";
import HelpImg from "@/assets/help.webp";
import Help2Img from "@/assets/help2.webp";
import Money from "@/assets/money.webp";
import Cart from "@/assets/cart.webp";
import Box from "@/assets/box.webp";
import Safe from "@/assets/safe.webp";
import S1 from "@/assets/ss1.webp";
import S2 from "@/assets/ss2.webp";
import S3 from "@/assets/ss3.webp";
import S4 from "@/assets/ss4.webp";
import Bgh from "@/assets/bgh.webp";
import Time247 from '@/assets/24-7.webp'
import Point from '@/assets/point.png'

const { t } = useI18n();

const banners = ref([]);
const timers = ref([]);

const fetchBanners = async () => {
  try {
    const res = await axios.get('https://abuexpresslogisticscargo.com/api/banner-image/');
    banners.value = res.data;
  } catch (e) {
    console.error("Ошибка при загрузке баннеров", e);
  }
};

const fetchTimers = async () => {
  try {
    const res = await axios.get('https://abuexpresslogisticscargo.com/api/date-time/');
    const now = new Date();
    timers.value = res.data.map(entry => {
      const deadline = new Date(entry.departure_time);
      const diff = deadline - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      return {
        country: entry.country,
        days: days < 0 ? 0 : days,
        hours: hours < 0 ? 0 : hours,
        minutes: minutes < 0 ? 0 : minutes,
        seconds: seconds < 0 ? 0 : seconds,
      };
    });
  } catch (e) {
    console.error("Ошибка при загрузке таймеров", e);
  }
};

let timerInterval;

onMounted(() => {
  fetchBanners();
  fetchTimers();
  timerInterval = setInterval(fetchTimers, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<style>
@import "./index.css";

.swiper-pagination-progressbar {
  background: rgba(255, 255, 255, 0.2) !important;
  height: 6px !important;
  width: 100% !important;
  top: 99% !important;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 5 !important;
}

.swiper-pagination-progressbar-fill {
  background: #FFEE00 !important;
  height: 100% !important;
  transition: transform 0.3s ease-out !important;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #FFEE00 !important;
}

.swiper-button-prev,
.swiper-button-disabled,
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  display: none !important;
}

.slide-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
