
<template>
  <div class="product-component">
    <div class="product-component-search">
      <!-- Привязываем значение к переменной searchQuery -->
      <input
          type="text"
          placeholder="Введите свой номер товара"
          v-model="searchQuery"
      />
      <!-- При клике на изображение вызываем handleSearch -->
      <img :src="Search" alt="search" @click="handleSearch" />
    </div>
    <!-- Отображаем блок только если showSearchOut === true -->
    <div class="product-component-search-out" v-if="showSearchOut">
      <div class="product-component-search-out-top">
        <span></span>
        <div class="product-component-search-out-top-item">
          <img :src="Arrow" alt="arrow" />
          <h2>В ожидании</h2>
          <p>В США</p>
        </div>
        <div class="product-component-search-out-top-item">
          <img :src="Arrow" alt="arrow" />
          <h2>Отправлено</h2>
          <p>Отправлена из США</p>
        </div>
        <div class="product-component-search-out-top-item">
          <img :src="Arrow" alt="arrow" />
          <h2>На таможенном складе</h2>
          <p>На таможенном размотре в УЗБ</p>
        </div>
        <div class="product-component-search-out-top-item">
          <img :src="Arrow" alt="arrow" />
          <h2>Прибыл</h2>
          <p>Посылка прибыла в УЗБ</p>
        </div>
        <div class="product-component-search-out-top-item">
          <img :src="Done" alt="done" />
          <h2>Доставлен</h2>
          <p>Доставлен получателю</p>
        </div>
      </div>

      <div class="product-component-search-out-center">
        <span></span>
        <div class="product-component-search-out-center-item">
          <img :src="Circle" alt="circle" />
          <h2>Дата отправки: 11/08/25, 18:25</h2>
        </div>
        <div class="product-component-search-out-center-item">
          <img :src="Circle" alt="circle" />
          <h2>Дата создания: 11/08/25, 18:25</h2>
        </div>
        <div class="product-component-search-out-center-item">
          <img :src="Circle" alt="circle" />
          <h2>Дата доставки: 11/08/25, 18:25</h2>
        </div>
        <div class="product-component-search-out-center-item">
          <img :src="Done" alt="done" />
          <h2>Дата получения: 11/08/25, 18:25</h2>
        </div>
      </div>

      <div class="product-component-search-out-bottom">
        <div class="product-component-search-out-bottom-item">
          <h3>Поставьте оценку</h3>
          <div class="product-component-search-out-bottom-item-rate">
            <div class="abu-express-stars">
              <span
                  v-for="star in 5"
                  :key="star"
                  class="abu-express-star"
                  :class="{ filled: star <= rating }"
                  @click="setRating(star)"
              >
                ★
              </span>
            </div>
          </div>
          <textarea placeholder="Оставьте отзыв" type="text"></textarea>
        </div>
        <div class="product-component-search-out-bottom-item">
          <h3>Фото</h3>
        </div>
        <div class="product-component-search-out-bottom-item-last">
          <div class="product-component-search-out-bottom-item-last-top">
            <h4>
              <p>Откуда</p>
              Филлиада, Пенсильвания, США
            </h4>
            <span></span>
            <h4>
              <p>Куда</p>
              Мирабад, Ташкент, Узбекистан
            </h4>
          </div>
          <div class="product-component-search-out-bottom-item-last-bottom">
            <router-link to="/">
              <img :src="Telegram" alt="telegram" />
              @abuexpres
            </router-link>
            <router-link to="/">
              +998(99)008-18-81
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Search from "@/assets/searchb.png";
import Arrow from "@/assets/arrow.png";
import Done from "@/assets/done.png";
import Circle from "@/assets/circle.png";
import Telegram from "assets/telegram.png";

export default {
  setup() {
    const rating = ref(0);
    const searchQuery = ref("");
    const showSearchOut = ref(false);

    const setRating = (value) => {
      rating.value = value;
    };

    const handleSearch = () => {
      // Если введено ровно 4 цифры, показываем блок
      if (/^\d{4}$/.test(searchQuery.value)) {
        showSearchOut.value = true;
      } else {
        showSearchOut.value = false;
      }
    };

    watch(searchQuery, (newVal) => {
      if (!/^\d{4}$/.test(newVal)) {
        showSearchOut.value = false;
      }
    });

    return {
      Search,
      Telegram,
      Done,
      Circle,
      Arrow,
      rating,
      setRating,
      searchQuery,
      handleSearch,
      showSearchOut,
    };
  },
};
</script>

<style>
@import "./product.css";
</style>
