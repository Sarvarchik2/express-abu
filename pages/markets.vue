<template>
  <div class="markets">
    <!-- Верхняя панель с поиском и сортировкой -->
    <div class="markets-top">
      <select class="market-top-left" v-model="selectedCategory">
        <option value="">Категории</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
<div class="market-top-center">
  <img :src="Search" alt="search">
  <input class="market-top-center" v-model="searchQuery" type="text" placeholder=" Поиск" />

</div>


      <select class="market-top-right" v-model="sortOption">
        <option value="default">Рейтинг</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>

    <!-- Список магазинов -->
    <div class="markets-list">
      <div
          v-for="market in filteredMarkets"
          :key="market.id"
          class="markets-list-item"
      >
        <img :src="market.logo" :alt="market.name" class="market-logo" />
        <div class="market-info">
          <h2>{{ market.name }}</h2>
          <p>{{ market.description }}</p>

          <!-- Текущий рейтинг -->
          <div class="rating-wrapper">
            <div class="rating">
              <span>Рейтинг</span>
              <span class="stars">⭐️⭐️⭐️⭐️</span>
              <span>{{ market.rating.toFixed(1) }}</span>
            </div>

            <!-- Добавить оценку -->
            <div class="user-rating">
              <span>Добавить оценку</span>
              <span
                  v-for="star in 5"
                  :key="star"
                  class="user-star"
                  :class="{ active: star <= market.userRating }"
                  @click="setUserRating(market.id, star)"
              >
              ★
            </span>
              <span>{{ market.userRating.toFixed(1) }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/assets/search.png';
import Target from '@/assets/market/target.png'
import Walmart from '@/assets/market/walmart.png'
import Nike from '@/assets/market/nike.png'
import Polo from '@/assets/market/polo.png'
export default {
  name: "Markets",
  data() {
    useHead({
      title: "Магазины — Abu Express",
      meta: [
        { name: "description", content: "Оцените популярные магазины, такие как Target, Walmart и Nike. Сравнивайте рейтинги и находите лучшие предложения с Abu Express!" },
        { name: "keywords", content: "магазины, рейтинг магазинов, Target, Walmart, Nike, шопинг, доставка, товары" },
        { property: "og:title", content: "Магазины — Abu Express" },
        { property: "og:description", content: "Сравнивайте рейтинги магазинов, находите лучшие предложения и делайте покупки с Abu Express." },
        { property: "og:image", content: "/assets/logo.png" },
        { property: "og:url", content: "https://abu-express-nuxt.netlify.app/markets" }
      ]
    });
    return {
      Search,
      searchQuery: "",
      sortOption: "default",
      selectedCategory: "",
      markets: [
        {
          id: 1,
          name: "Target",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4.0,
          userRating: 0,
          category: "Супермаркет",
          logo: Target,
        },
        {
          id: 2,
          name: "Walmart",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4.0,
          userRating: 0,
          category: "Супермаркет",
          logo: Walmart,
        },
        {
          id: 3,
          name: "Nike",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4.0,
          userRating: 0,
          category: "Одежда",
          logo: Nike,
        },
        {
          id: 4,
          name: "Polo Ralph Lauren",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4.0,
          userRating: 0,
          category: "Одежда",
          logo: Polo,
        },
      ],
    };
  },
  computed: {
    filteredMarkets() {
      let result = this.markets;

      // Фильтрация по названию
      if (this.searchQuery) {
        result = result.filter((market) =>
            market.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      // Фильтрация по категории
      if (this.selectedCategory) {
        result = result.filter((market) => market.category === this.selectedCategory);
      }

      // Сортировка по рейтингу
      if (this.sortOption === "asc") {
        result = result.sort((a, b) => a.rating - b.rating);
      } else if (this.sortOption === "desc") {
        result = result.sort((a, b) => b.rating - a.rating);
      }

      return result;
    },
    categories() {
      return [...new Set(this.markets.map((market) => market.category))];
    },
  },
  methods: {
    setUserRating(id, rating) {
      const market = this.markets.find((m) => m.id === id);
      if (market) {
        market.userRating = rating;
      }
    },
  },
};

</script>

<style>
@import 'markets.css';

</style>
