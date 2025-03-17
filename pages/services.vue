
<template>
  <div class="services">
    <div class="services-item">
      <h2>{{ $t("services_air_sea_title") }}</h2>
      <p>{{ $t("services_air_sea_desc") }}</p>

      <NuxtLink>
        {{ $t("tarif_registration") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Услуги — Abu Express",
  meta: [
    { name: "description", content: "Быстрая авиадоставка (7-10 дней) и экономичные морские перевозки (до 45 дней) от Abu Express. Выберите удобный способ доставки в Узбекистан!" },
    { name: "keywords", content: "авиадоставка, морские перевозки, грузоперевозки, доставка в Узбекистан, логистика" },
    { property: "og:title", content: "Услуги — Abu Express" },
    { property: "og:description", content: "Надежные грузоперевозки в Узбекистан: авиадоставка (7-10 дней) и морская доставка (до 45 дней)." },
    { property: "og:image", content: "/assets/services-preview.png" },
    { property: "og:url", content: "https://abu-express-nuxt.netlify.app/services" }
  ]
});
</script>

<style>
@import 'services.css';
</style>
