
<template>
  <div class="profile-page">
    <div class="profile-top">
      <button
          v-for="country in countries"
          :key="country.name"
          :class="{ 'profile-button-active': selectedCountry === country.name }"
          @click="selectCountry(country)"
      >
        {{ country.name }}
      </button>
    </div>

    <div
        v-for="country in countries"
        :key="country.name"
        v-show="selectedCountry === country.name"
        class="profile-bottom"
    >
      <div class="profile-bottom-title">
        <div class="profile-bottom-title-logo">
          <img :src="selectedCountryFlag" alt="Flag" />
        </div>
        <h2>
          Ваш адрес в {{ country.name }}
          <p>
            Укажите ваш адрес в {{ country.name }} как адрес для доставки при
            покупке online
          </p>
        </h2>
      </div>

      <span class="profile-bottom-span"></span>
      <div class="profile-bottom-name">
        <h2>
          {{ fullName }}
          <p>Получатель</p>
        </h2>
        <button @click="copyToClipboard(country.name2)">
          <img :src="copy" alt="copy" />
        </button>
      </div>

      <span class="profile-bottom-span"></span>
      <div class="profile-bottom-address">
        <ul>
          <li v-for="(field, idx) in country.addressFields" :key="idx">
            <h2>{{ field.label }}</h2>
            <p>{{ field.value }}</p>
            <button class="copy-btn" @click="copyToClipboard(field.value)">
              <img :src="copy" alt="copy" />
            </button>
          </li>
        </ul>
      </div>

      <span class="profile-bottom-span"></span>
      <div class="profile-bottom-chart">
        <h2>График работы</h2>
        <h3>
          <p>09:00 - 17:00 | Понедельник - Пятница</p>
          <p>09:00 - 14:00 | Суббота</p>
        </h3>
      </div>
      <span class="profile-bottom-span"></span>
      <div class="accordion-container">
        <div
            class="accordion-item"
            v-for="(item, index) in accordionItems"
            :key="index"
        >
          <button @click="toggleAccordion(index)" class="accordion-title">
            {{ item.question }}
            <span class="plus-icon">+</span>
          </button>
          <div
              class="accordion-content"
              v-show="activeAccordion === index"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="copyMessage" class="copy-popup">✅ {{ copyMessage }}</div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import copy from "@/assets/profile/copy.png";

// Флаги стран
import usaFlag from "@/assets/profile/profile.png";
import turkeyFlag from "@/assets/profile/turkey.png";
import chinaFlag from "@/assets/profile/china.png";
const fullName = ref('')

onMounted(() => {
  if (process.client) {
    fullName.value = localStorage.getItem('full_name') || 'Имя не указано'
  }
})


const countries = ref([
  {
    name: "США",
    flag: usaFlag,
    addressFields: [
      { label: "Адрес 1", value: "606 Interchange Blvd" },
      { label: "Адрес 2", value: "ID 19046" },
      { label: "Город", value: "Newark" },
      { label: "Штат", value: "DE" },
      { label: "ZIP-код", value: "19711" },
      { label: "Страна", value: "USA" },
      { label: "Номер", value: "+1 (929) 244-0000" },
    ],
  },
  {
    name: "Турция",
    flag: turkeyFlag,
    addressFields: [
      { label: "Адрес 1", value: "Taksim Square, Istiklal St. 12" },
      { label: "Адрес 2", value: "ID 45789" },
      { label: "Город", value: "Стамбул" },
      { label: "Штат", value: "Marmara" },
      { label: "ZIP-код", value: "34435" },
      { label: "Страна", value: "Turkey" },
      { label: "Номер", value: "+90 (532) 456-7890" },
    ],
  },
  {
    name: "Китай",
    flag: chinaFlag,
    addressFields: [
      { label: "Адрес 1", value: "123 Beijing Road" },
      { label: "Адрес 2", value: "ID 78542" },
      { label: "Город", value: "Пекин" },
      { label: "Штат", value: "Beijing Municipality" },
      { label: "ZIP-код", value: "100000" },
      { label: "Страна", value: "China" },
      { label: "Номер", value: "+86 (10) 8765-4321" },
    ],
  },
]);

const accordionItems = ref([
  { question: "Как создать личный кабинет?", answer: "Зарегистрируйтесь на сайте и подтвердите email." },
  { question: "Как зарегистрировать интернет заказ?", answer: "Выберите товары и перейдите к оформлению заказа." },
  { question: "Будет ли склад в безналоговом штате?", answer: "Да, склад есть в безналоговом штате Делавэр (DE)." },
]);

const selectedCountry = ref(countries.value[0].name);
const selectedCountryFlag = ref(countries.value[0].flag);
const copyMessage = ref("");
const activeAccordion = ref(null);

const selectCountry = (country) => {
  selectedCountry.value = country.name;
  selectedCountryFlag.value = country.flag;
};

const toggleAccordion = (index) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    copyMessage.value = `Скопировано: ${text}`;
    setTimeout(() => (copyMessage.value = ""), 2000);
  });
};
</script>

<style scoped>
@import "profile.css";

.copy-popup {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: #FFD700;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  width: max-content;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
