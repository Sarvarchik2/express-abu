
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
      <swiper-slide class="abu-express-swiper-slide">
        <img :src="imageSrc" alt="Slide" class="slide-img"/>
        <h2>{{ $t("hero_title") }}</h2>
        <h3>{{ $t("hero_subtitle") }}</h3>
        <NuxtLink to="/tarif">{{ $t("hero_button") }}</NuxtLink>
      </swiper-slide>
      <swiper-slide class="abu-express-swiper-slide">
        <img :src="imageSrc2" alt="Slide" class="slide-img"/>
        <h2>{{ $t("hero_title2") }}</h2>
        <h3>{{ $t("hero_subtitle2") }}</h3>
        <NuxtLink to="/tarif">{{ $t("hero_button2") }}</NuxtLink>
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
            <h5>
              {{ timer.days }} <span>{{ $t("days") }}</span>
            </h5>
            <h5>
              {{ timer.hours }} <span>{{ $t("hours") }}</span>
            </h5>
            <h5>
              {{ timer.minutes }} <span>{{ $t("minutes") }}</span>
            </h5>
            <h5>
              {{ timer.seconds }} <span>{{ $t("seconds") }}</span>
            </h5>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Search from "../../components/product/product.vue";
import imageSrc from "@/assets/us.png";
import imageSrc2 from "@/assets/tur.png";
import HelpImg from "@/assets/help.png";
import Help2Img from "@/assets/help2.png";
import Money from "@/assets/money.png";
import Cart from "@/assets/cart.png";
import Box from "@/assets/box.png";
import Safe from "@/assets/safe.png";
import S1 from "@/assets/ss1.png";
import S2 from "@/assets/ss2.png";
import S3 from "@/assets/ss3.png";
import S4 from "@/assets/ss4.png";
import Bgh from "@/assets/bgh.png";
import Time247 from '@/assets/24-7.png'
import Point from '@/assets/point.png'
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const deliveryTimes = [
  { country: "UZB", deadline: new Date("2025-03-31T12:00:00Z") },
  { country: "USA", deadline: new Date("2025-03-24T18:00:00Z") },
  { country: "TUR", deadline: new Date("2025-03-23T09:30:00Z") },
];

const timers = ref([]);

// Функция для расчёта оставшегося времени
const updateTimers = () => {
  const now = new Date();

  timers.value = deliveryTimes.map(({ country, deadline }) => {
    const timeDiff = deadline - now;
    if (timeDiff <= 0) {
      return { country, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    return { country, days, hours, minutes, seconds };
  });
};

let timerInterval = null;

onMounted(() => {
  updateTimers();
  timerInterval = setInterval(updateTimers, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});

useHead({
  title: "Доставка товаров из США, Турции и Китая – Abu Express",
  meta: [
    // Описание для SEO (максимально информативное)
    { 
      name: "description", 
      content: "Заказывайте товары из США, Турции и Китая с быстрой и надежной доставкой. Выгодные тарифы, удобные способы оплаты и гарантированная безопасность. Доставляем одежду, электронику, аксессуары и многое другое!" 
    },

    // Ключевые слова для поисковых систем (Google уже не учитывает, но Яндекс может)
    { 
      name: "keywords", 
      content: "доставка товаров из США, доставка из Турции, доставка из Китая, купить из США, купить из Турции, заказать из Китая, международная доставка, шоппинг за границей" 
    },

    // Open Graph (Facebook, Telegram, WhatsApp)
    { property: "og:title", content: "Доставка товаров из США, Турции и Китая – Abu Express" },
    { property: "og:description", content: "Быстрая и безопасная доставка товаров из США, Турции и Китая по выгодным тарифам. Легко заказывайте одежду, электронику и другие товары с надежной доставкой в ваш город!" },
    { property: "og:image", content: "https://abuexpressgroup.com/logo2.png" },
    { property: "og:url", content: "https://abuexpressgroup.com" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Abu Express" },
    { property: "og:locale", content: "ru_RU" }, // Русский язык

    // Twitter (X)
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Доставка товаров из США, Турции и Китая – Abu Express" },
    { name: "twitter:description", content: "Быстрая и безопасная доставка товаров из США, Турции и Китая. Экономьте на покупках за границей с лучшими условиями доставки!" },
    { name: "twitter:image", content: "https://abuexpressgroup.com/logo2.png" },

    // Канонический URL (если страницы дублируются)
    { rel: "canonical", href: "https://abuexpressgroup.com" },

    // Favicon
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
  ]
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
