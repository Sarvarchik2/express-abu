


<!--<template>-->
<!--  <div class="product-component">-->
<!--    <div class="product-component-search">-->
<!--      <input type="text" placeholder="Введите номер товара" v-model="searchQuery" />-->
<!--      <img :src="Search" alt="search" @click="handleSearch" />-->
<!--    </div>-->

<!--    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>-->

<!--    <div class="product-component-search-out" v-if="shipment">-->
<!--      <div class="product-component-search-out-top">-->
<!--        <span></span>-->
<!--        <div-->
<!--            v-for="(status, index) in statuses"-->
<!--            :key="index"-->
<!--            class="product-component-search-out-top-item status-item"-->
<!--            :class="{-->
<!--            'active': isStatusActive(status.key),-->
<!--            'completed': isStatusCompleted(status.key)-->
<!--          }"-->
<!--        >-->

<!--          <img :src="getStatusIcon(status.key)" :alt="status.title" />-->
<!--          <h2>{{ status.title }}</h2>-->
<!--          <p>{{ status.description }}</p>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="product-component-search-out-center">-->
<!--        <span></span>-->
<!--        <div class="product-component-search-out-center-item">-->
<!--          <img :src="Circle" alt="circle" />-->
<!--          <h2>Дата отправки: {{ shipment.departure_time }}</h2>-->
<!--        </div>-->

<!--        <div class="product-component-search-out-center-item">-->
<!--          <img :src="Circle" alt="circle" />-->
<!--          <h2>Дата прибытия: {{ shipment.arrival_time }}</h2>-->
<!--        </div>-->

<!--        <div class="product-component-search-out-center-item">-->
<!--          <img :src="Done" alt="done" />-->
<!--          <h2>Дата получения: в ожидании</h2>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div class="product-component">
    <div class="product-component-search">
      <input type="text" :placeholder="$t('tracking.search_placeholder')" v-model="searchQuery" />
      <img :src="Search" alt="search" @click="handleSearch" />
    </div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <div class="product-component-search-out" v-if="shipment">
      <div class="product-component-search-out-top">
        <span></span>
        <div
            v-for="(status, index) in statuses"
            :key="index"
            class="product-component-search-out-top-item status-item"
            :class="{
            'active': isStatusActive(status.key),
            'completed': isStatusCompleted(status.key)
          }"
        >
          <img :src="getStatusIcon(status.key)" :alt="$t(`tracking.status.${status.key}.title`)" />
          <h2>{{ $t(`tracking.status.${status.key}.title`) }}</h2>
          <p>{{ $t(`tracking.status.${status.key}.description`) }}</p>
        </div>
      </div>

      <div class="product-component-search-out-center">
        <span></span>
        <div class="product-component-search-out-center-item">
          <img :src="Circle" alt="circle" />
          <h2>{{ $t('tracking.departure_time') }}: {{ shipment.departure_time }}</h2>
        </div>

        <div class="product-component-search-out-center-item">
          <img :src="Circle" alt="circle" />
          <h2>{{ $t('tracking.arrival_time') }}: {{ shipment.arrival_time }}</h2>
        </div>

        <div class="product-component-search-out-center-item">
          <img :src="Circle" alt="Circle" />
          <h2>{{ $t('tracking.received_time') }}: {{ shipment.is_delivered ? '2025-03-25' : $t('tracking.pending') }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import Search from "@/assets/searchb.webp";
import Circle from "@/assets/circle.png";
import Arrow from "@/assets/arrow.webp";
import Done from "@/assets/done.webp";

export default {
  setup() {
    const searchQuery = ref("");
    const shipment = ref(null);
    const errorMessage = ref("");

    const statuses = [
      { key: "waiting", title: "В ожидании", description: "В США", icon: Arrow },
      { key: "sent", title: "Отправлено", description: "Отправлено из США", icon: Arrow },
      { key: "customs", title: "На таможенном складе", description: "На проверке в УЗБ", icon: Arrow },
      { key: "arrived", title: "Прибыл", description: "Посылка прибыла в УЗБ", icon: Arrow },
      { key: "delivered", title: "Доставлен", description: "Доставлен получателю", icon: Arrow }
    ];

    // Определяем текущий статус на основе данных из shipment
    const currentStatus = computed(() => {
      if (!shipment.value) return "waiting";
      if (shipment.value.is_delivered) return "delivered";
      if (shipment.value.is_arrived) return "arrived";
      if (shipment.value.is_in_warehouse) return "customs";
      if (shipment.value.is_shipped) return "sent";
      return "waiting";
    });

    // Проверяем, активен ли статус
    const isStatusActive = (statusKey) => {
      return currentStatus.value === statusKey;
    };

    // Проверяем, завершен ли статус
    const isStatusCompleted = (statusKey) => {
      const statusOrder = statuses.findIndex(s => s.key === statusKey);
      const currentOrder = statuses.findIndex(s => s.key === currentStatus.value);
      return statusOrder < currentOrder;
    };

    // Получаем правильную иконку для статуса
    const getStatusIcon = (statusKey) => {
      const status = statuses.find(s => s.key === statusKey);
      return isStatusCompleted(statusKey) || isStatusActive(statusKey) ? Done : status.icon;
    };

    const handleSearch = async () => {
      if (!searchQuery.value) return;

      try {
        // Для примера используем ваш JSON
        const response = await fetch(`https://abuexpresslogisticscargo.com/api/shipment/${searchQuery.value}/`);
        if (!response.ok) throw new Error("Товар не найден");
        shipment.value = await response.json();
        errorMessage.value = "";
      } catch (error) {
        shipment.value = null;
        errorMessage.value = error.message;
      }
    };

    return {
      Search,
      Circle,
      Done,
      searchQuery,
      shipment,
      errorMessage,
      statuses,
      handleSearch,
      isStatusActive,
      isStatusCompleted,
      getStatusIcon
    };
  }
};
</script>

<style>
@import './product.css';

</style>