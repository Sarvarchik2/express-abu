<template>
  <div class="contact-wrapper">
    <!-- Кнопки переключения стран -->
    <div class="tabs">
      <button
          v-for="(country, idx) in countries"
          :key="idx"
          :class="{ active: activeIndex === idx }"
          @click="activeIndex = idx"
      >
        {{ country.name }}
      </button>
    </div>

    <!-- Контент -->
    <div class="content">
      <div class="left-col">

        <div class="contacts-block">
          <h2>{{ $t("contact_contact") }}</h2>
          <p><img :src="Phone" alt="Mail"> {{ currentCountry.phone }}</p>
          <p><img :src="Mail" alt="Mail"> {{ currentCountry.email }}</p>
          <p><img :src="Point" alt="Mail"> {{ currentCountry.address }}</p>
        </div>


        <form @submit.prevent="submitForm" class="feedback-form">
          <h3>{{ $t("contact_link") }}</h3>
          <label >
            <input type="text" v-model="feedback.name" placeholder="Имя"/>
            <input type="text" v-model="feedback.surname" placeholder="Фамилия"/>
          </label>
          <label >
            <input type="text" v-model="feedback.phone" placeholder="+998"/>
            <input type="text" placeholder="gmail">
          </label>

          <textarea v-model="feedback.message" placeholder="Текст сообщения"></textarea>
          <button type="submit">{{ $t("contact_send") }}</button>
        </form>
      </div>

      <div class="right-col">
        <Map/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import Map from "@/components/map.vue";
import Mail from "@/assets/contact/mail.png"
import Point from '@/assets/contact/map.png'
import Phone from '@/assets/contact/phone.png'
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const countries = ref([
  {
    name: "Узбекистан",
    phone: "+998(95)955-05-55",
    email: "abuexpress@gmail.com",
    address: "Ташкент, Узбекистан, Абу Сулеймана Банакоти 225A\n",
    branches: [
      {name: "Ташкент", coords: [41.2995, 69.2401], address: "ул. Амира Темура 10", phone: "+998 90 123 45 67"},
      {name: "Самарканд", coords: [39.6547, 66.9753], address: "ул. Навои 15", phone: "+998 91 765 43 21"}
    ]
  },
  {
    name: "США",
    phone: "+19177718088",
    email: "abuexpress@gmail.com",
    address: "1954 Coney Island ave Brooklyn NY 11223",
    branches: [
      {name: "Нью-Йорк", coords: [40.5774, -73.9667], address: "1954 Coney Island ave Brooklyn NY 11223", phone: "+1 929 244 0000"}
    ]
  },
  {
    name: "Турция",
    phone: "+905013271111  \n" +
        "+905056012222",
    email: "abuexpress@gmail.com",
    address: "Стамбул, Турция, Ataturk Caddesi 113A | Havuzlu Hamam Sk.No:4/1",
    branches: [
      {name: "Стамбул", coords: [41.034153,28.893150], address: "Абу Сулеймана Банакоти 225A | Ataturk Caddesi 113A\n", phone: "+905013271111"}
    ]
  }
]);

const activeIndex = ref(0);
const currentCountry = computed(() => countries.value[activeIndex.value]);

const feedback = ref({
  name: "",
  surname: "",
  phone: "",
  message: ""
});

const submitForm = () => {
  console.log("Отправка формы:", feedback.value);
  feedback.value = {name: "", surname: "", phone: "", message: ""};
};
</script>

<style scoped>
@import './contact.css'
</style>
