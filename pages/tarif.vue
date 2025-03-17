

<template>
  <div class="tarif">
    <div
        v-for="(tarif, index) in tarifs"
        :key="index"
        class="tarif-item"
    >
      <div v-if="tarif.isModalOpen" class="tarif-more-modal">
        <div class="tarif-more-modal-wrapper">
          <div class="tarif-more-modal-top">
            <h2>{{ $t("tarif_title") }}</h2>
            <img :src="Exit" alt="exit" @click="closeModal(index)">
          </div>
          <p>{{ tarif.description }}</p>
        </div>
      </div>

      <div class="tarif-item-left">
        <img :src="Traifleft" alt="tarif image">
        <div class="tarif-item-left-text">
          <h2>{{ $t(tarif.title) }}</h2>
          <h3>{{ $t("tarif_weight") }}</h3>
          <h3>{{ $t("tarif_smth") }}</h3>
          <h3>{{ $t("tarif_data") }}</h3>
          <h3>{{ $t(tarif.delivery) }}</h3>

          <button @click="openModal(index)">
            {{ $t("tarif_more") }}
            <img :src="Arrow" alt="more">
          </button>

<!--          <button>-->
<!--            {{ $t("tarif_registration") }}-->
<!--          </button>-->
        </div>
      </div>

      <div class="tarif-item-right">
        <h2>{{ tarif.price }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Traifleft from '@/assets/tarif/tarifleft.png';
import Arrow from '@/assets/tarif/arrow.png';
import Exit from '@/assets/exit.png';
import { useI18n } from "vue-i18n";

export default {
  name: "Tarif",

  setup() {
    const { t } = useI18n();

    useHead({
      title: "Тарифы — Abu Express",
      meta: [
        { name: "description", content: "Узнайте актуальные тарифы на экспресс-доставку (3-5 дней). Бесплатная консолидация и доставка в Ташкент и Самарканд." },
        { name: "keywords", content: "тарифы, доставка, экспресс-доставка, стоимость доставки, грузоперевозки" },
        { property: "og:title", content: "Тарифы — Abu Express" },
        { property: "og:description", content: "Тарифы на экспресс-доставку: минимальный вес 5 кг, доставка 3-5 дней, бесплатная консолидация." },
        { property: "og:image", content: "/assets/logo.png" },
      ]
    });

    return { t };
  },

  data() {
    return {
      Traifleft,
      Exit,
      Arrow,
      tarifs: [
        {
          title: "tarif_turk",
          description: "tarif_description",
          delivery: "tarif_delivery",
          price: "$5 / 1кг",
          isModalOpen: false
        },
        {
          title: "tarif_usa",
          description: "tarif_description",
          delivery: "tarif_delivery2",
          price: "$10 / 1кг",
          isModalOpen: false
        }
      ]
    };
  },

  methods: {
    openModal(index) {
      this.tarifs[index].isModalOpen = true;
    },
    closeModal(index) {
      this.tarifs[index].isModalOpen = false;
    }
  }
};
</script>

<style>
@import 'tarif.css';
</style>
