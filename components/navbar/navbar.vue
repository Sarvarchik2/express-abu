
<template>
  <nav class="navbar">
    <div class="navbar-left">
      <div class="logo">
        <img :src="Logo" alt="abu express logo">
      </div>
      <ul>
        <li><NuxtLink to="/">{{ $t("main") }}</NuxtLink></li>
        <li><NuxtLink to="/tarif">{{ $t("tarif") }}</NuxtLink></li>
        <li><NuxtLink to="/markets">{{ $t("markets") }}</NuxtLink></li>
        <li><NuxtLink to="/services">{{ $t("services") }}</NuxtLink></li>
        <li><NuxtLink to="/">{{ $t("about") }}</NuxtLink></li>
        <li><NuxtLink to="/contact">{{ $t("contact") }}</NuxtLink></li>
        <li><NuxtLink to="/help">{{ $t("help") }}</NuxtLink></li>
      </ul>
    </div>

    <div class="navbar-right">
      <div class="navbar-calck-btn" @click="toggleCalculator">
        <img :src="Calc" alt="calc">
      </div>

      <div class="navbar-lang-btn">
        <img :src="Lang" alt="lang" @click="showDropdown = !showDropdown">
        <ul v-if="showDropdown" class="navbar-lang-btn-wrapper">
          <li @click="changeLanguage('uz')"><img :src="Uz" alt=""> </li>
          <li @click="changeLanguage('ru')"><img :src="Ru" alt=""> </li>
          <li @click="changeLanguage('en')"><img :src="En" alt=""> </li>
        </ul>
      </div>
      <button class="navbar-lang-btn" @click="goToProfileOrRegister">
        <img :src="Profile" alt="profile">
      </button>
      <img class="nav-menu-btn" :src="Menu" alt="menu" @click="toggleMenu">
    </div>

    <div class="navbar-mobile" :class="{ 'navbar-mobile-active': isMenuOpen }">
      <img class="navbar-mobile-img" :src="Exit" alt="exit" @click="closeMenu">
      <ul>
        <li><NuxtLink @click="closeMenu"  to="/">{{ $t("main") }}</NuxtLink></li>

        <li><NuxtLink @click="closeMenu" to="/tarif">{{ $t("tarif") }}</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/markets">{{ $t("markets") }}</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/services">{{ $t("services") }}</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/">{{ $t("about") }}</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/contact">{{ $t("contact") }}</NuxtLink></li>
        <li><NuxtLink @click="closeMenu" to="/help">{{ $t("help") }}</NuxtLink></li>
      </ul>
      <div class="navbar-link">
        <NuxtLink>{{ $t("tarif_registration") }}</NuxtLink>
        <NuxtLink>{{ $t("tarif_login") }}</NuxtLink>
      </div>
    </div>

    <div class="calculator" v-if="showCalculator">
      <div class="calculator-wrapper">
        <div class="calculator-wrapper-title">
          <h2>
            {{ $t("tarif_calculator") }}
          </h2>
          <img :src="Exit" alt="close" @click="toggleCalculator">
        </div>

        <div class="calculator-wrapper-bottom">
          <div class="calculator-wrapper-item-wrapper">
            <div class="calculator-wrapper-item">
              <label for="from">
                {{ $t("calculator_from") }}
                </label>
              <select v-model="from" id="from">
                <option value="USA">
                  {{ $t("calculator_us") }}
                  </option>
                <option value="China">
                  {{ $t("calculator_china") }}
                  </option>
                <option value="Turkey">
                  {{ $t("calculator_turkey") }}

                  </option>
              </select>
            </div>

            <div class="calculator-wrapper-item">
              <label for="to">

                {{ $t("calculator_where") }}

              </label>
              <select v-model="to" id="to">
                <option value="UZB">UZB</option>
              </select>
            </div>
          </div>

          <div class="calculator-wrapper-item">
            <label for="weight">
              {{ $t("calculator_weight") }}

              </label>
            <input type="number" id="weight" v-model="weight" min="0" placeholder="0">
            <select v-model="unit">
              <option value="KG">KG</option>
              <option value="LB">LB</option>
            </select>
          </div>

          <button class="calculate-btn" @click="calculatePrice">
            {{ $t("calculator_calculate") }}

            </button>
          <h3>
            {{ $t("calculator_total") }}

             {{ total }}$</h3>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

import Exit from "@/assets/exit.png";
import Logo from '../../assets/logo.png';
import Calc from '../../assets/calc.png';
import Lang from '../../assets/lang.png';
import Menu from '../../assets/menu.png';
import Profile from '../../assets/profile-user.png';
import En from '../../assets/flag/united-states.png';
import Uz from '../../assets/flag/uzbekistan.png';
import Ru from '../../assets/flag/russia.png';

import { useRouter } from 'vue-router'
const router = useRouter()

const goToProfileOrRegister = () => {
  if (process.client) {
    const token = localStorage.getItem('access_token')
    if (token) {
      router.push('/profile')
    } else {
      router.push('/registration')
    }
  }
}


const showCalculator = ref(false);
const isMenuOpen = ref(false);


import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCookie } from '#app';

const { locale, setLocaleMessage } = useI18n();
const langCookie = useCookie('i18n_redirected');
const showDropdown = ref(false);

const changeLanguage = async (lang) => {
  // Загружаем JSON-файл перевода
  const response = await fetch(`/locales/${lang}.json`);
  const messages = await response.json();
  setLocaleMessage(lang, messages);

  // Меняем язык и сохраняем в куки
  locale.value = lang;
  langCookie.value = lang;

  showDropdown.value = false;
};

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;
const toggleCalculator = () => showCalculator.value = !showCalculator.value;

const from = ref("USA");
const to = ref("UZB");
const weight = ref(0);
const unit = ref("KG");
const total = ref(0);

const calculatePrice = () => {
  let pricePerKg = {
    USA: { UZB: 10, KAZ: 12, RUS: 15 },
    China: { UZB: 8, KAZ: 10, RUS: 12 },
    Turkey: { UZB: 6, KAZ: 8, RUS: 10 }
  };
  let weightInKg = unit.value === "KG" ? weight.value : weight.value * 0.45;
  let rate = pricePerKg[from.value][to.value] || 0;
  total.value = weightInKg * rate;
};
</script>

<style scoped>
@import 'navbar.css';

.calculator-wrapper-item input {
  width: 100px;
  padding: 5px;
  border: 1px solid #ff0;
  background: #000;
  color: white;
  text-align: center;
}

.calculator-wrapper-select {
  padding: 5px;
  border: 1px solid #ff0;
  background: #000;
  color: white;
}
</style>
