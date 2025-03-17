<template>
  <div class="parcels-page">
    <div class="tabs">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: selectedTab === tab.key }"
          @click="selectedTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="divider"></div>


<!--    <div v-if="orders.length === 0" class="empty-state">-->
<!--      <img :src="empty" alt="Нет заказов" class="empty-image" />-->
<!--      <p class="empty-text">Здесь пока нет ни одного получателя :( <br> Пожалуйста укажите адреса получателей ваших посылок</p>-->
<!--      <button @click="showPopup = true">+ Новый адрес</button>-->
<!--    </div>-->

    <div v-if="orders.length === 0" class="empty-state">
      <div v-if="recipientAdded" class="recipient-card">
        <div class="recipient-info">
          <h3>{{ recipient.name }} {{ recipient.surname }}</h3>
          <p>Регион: {{ recipient.address }}</p>
          <p>Район: {{ recipient.phone }}</p>
          <p>Улица: {{ recipient.address }}</p>
          <p>Паспорт: {{ recipient.address }}</p>
          <p>Номер: {{ recipient.address }}</p>
          <p>Дом: {{ recipient.address }}</p>
          <p>Квартира: {{ recipient.address }}</p>
          <p>ZIP-код: {{ recipient.address }}</p>
        </div>

      </div>
      <img :src="empty" alt="Нет заказов" class="empty-image" />
      <p class="empty-text">Здесь пока нет ни одного получателя :( <br> Пожалуйста укажите адреса получателей ваших посылок</p>
      <button @click="showPopup = true">+ Новый адрес</button>
    </div>




    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <h2>Добавить получателя</h2>
        <form @submit.prevent="addRecipient">
          <div class="popup-overlay-item-wrapper">
            <div class="popup-overlay-item">
              <h4>Данные</h4>

              <div class="form-group">
                <input type="text" placeholder="Имя" v-model="recipient.name" required />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Фамилия" v-model="recipient.surname" required />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Серия и номер паспорта" v-model="recipient.passport" required />
              </div>
              <div class="form-group">
                <input type="number" v-model="recipient.phone" placeholder="+998" />
              </div>
              <div class="form-group">
                <input type="number" v-model="recipient.phone_second" placeholder="+998" />
              </div>
              <div class="form-group">
                <input type="email" placeholder="E-mail" v-model="recipient.email" />
              </div>

              <h5>Передняя часть паспорта</h5>
              <img :src="photo" alt="photo">

            </div>
            <div class="popup-overlay-item">
              <h4>Адрес</h4>
              <div class="form-group">
                <input type="text" placeholder="Адрес" v-model="recipient.address" required />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Апартамент" v-model="recipient.apartament" required />
              </div>
              <div class="form-group">
                  <input type="text" placeholder="Регион" v-model="recipient.region" required />
              </div>
              <div class="form-group">
                <input type="text" v-model="recipient.city" placeholder="Город / Район" />
              </div>
              <div class="form-group">
                <input type="text" v-model="recipient.ofice" placeholder="Квартира / Офис " />
              </div>
              <div class="form-group">
                <input type="number" placeholder="ZIP-код" v-model="recipient.zip" />
              </div>

              <h5>Задняя часть паспорта</h5>
              <img :src="photo" alt="photo">
            </div>


          </div>

          <div class="popup-actions">
            <button type="button" @click="showPopup = false">Отменить</button>
            <button type="submit">Продолжить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import empty from "@/assets/profile/empty2.png";
import photo from "@/assets/profile/photo.png"
import { ref, computed, onMounted } from "vue";


const recipientAdded = ref(false);
const recipient = ref({
  name: "",
  surname: "",
  passport: "",
  phone: "",
  phone_second: "",
  email: "",
  address: "",
  zip: "",
  apartament: "",
  ofice: "",
  city: "",
});

const addRecipient = () => {
  recipientAdded.value = true;
  localStorage.setItem("recipient", JSON.stringify(recipient.value));
  localStorage.setItem("recipientAdded", "true");
  showPopup.value = false;
};

onMounted(() => {
  const savedRecipient = localStorage.getItem("recipient");
  if (savedRecipient) {
    recipient.value = JSON.parse(savedRecipient);
    recipientAdded.value = localStorage.getItem("recipientAdded") === "true";
  }
});


const tabs = ref([
  { key: "parcels", label: "Получатель", filters: ["В процессе", "Доставленные", "Ожидание оплаты"] },
  { key: "purchase_help", label: "Отправитель", filters: ["В процессе", "Приобретенные покупки", "Подтвержденные покупки", "Одобренные товары"] },
]);

const selectedTab = ref("parcels");
const selectedFilter = ref("");

const currentFilters = computed(() => {
  const tab = tabs.value.find(t => t.key === selectedTab.value);
  return tab ? tab.filters : [];
});

const orders = computed(() => {
  return [];
});
const showPopup = ref(false);

// const addRecipient = () => {
//   console.log("Добавлен получатель: ", recipient.value);
//   showPopup.value = false;
// };
</script>

<style scoped>
.parcels-page {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background: #0A0A0A;
  border-radius: 30px;
  color: #fff;
  padding: 20px;
  width: 100%;
}

.tabs {
  display: flex;
  width: max-content;
  justify-content: start;

  gap: 10px;
  margin-bottom: 20px;
  border: 1px solid #fff;
  border-radius: 30px;

}

.tabs button {
  padding: 12px 20px;
  border-radius: 25px;
  background: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
}

.tabs button.active {
  background: #FFD700;
  color: #000;
}

.divider {
  width: 100%;
  height: 1px;
  background: #fff;
  margin-bottom: 20px;
}
.popup-overlay-item{
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
}
.sub-tabs {
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.popup-overlay-item h4{
  font-size: 20px;
  margin-bottom: 10px;

}
.popup h2{
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  gap: 25px;
}
.empty-state button {
  padding: 10px 20px;
  border-radius: 25px;
  color: #fff;
  background: transparent;
  transition: all 0.3s;
  z-index: 1;
  border: 1px solid #FFD700;
}
.empty-state button:hover {
  background: #FFD700;
  cursor: pointer;
  color: #000;
}
.empty-image {
  width: 40px;
  height: 45px;
  opacity: 0.7;
}

.empty-text {
  font-size: 18px;
  color: #ccc;
  margin-top: 10px;

}


.popup-overlay-item-wrapper{
  width: 100%;
  display: flex;
  gap: 15px;
}
.popup-overlay {
  position: fixed;
  top: 0;
  backdrop-filter: blur(10px);
  z-index: 99;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  background: #0A0A0A;
  padding: 33px;
  border-radius: 30px;
  width: 770px;
  color: white;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border-radius: 25px;
  border: 1px solid #fff;
  background: black;
  color: white;
}

.popup-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.popup-actions button {
  padding: 10px 15px;
  border-radius: 25px;
  cursor: pointer;
}
.popup-overlay-item img{
  width: 60px;
  height: 67px;

}

.popup-actions button:first-child {
  background: transparent;
  border: 1px solid #FFEE00;
  color: #FFD700;
}

.popup-actions button:last-child {
  background: #FFD700;
  color: black;
  border: none;
}
.recipient-info{
  width: 580px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border: 3px solid #FFEE00;
  border-radius: 30px;
}
@media(max-width: 600px) {
  .tabs button {
    padding: 10px 10px;
    font-size: 14px;
  }
  .tabs {
    width: 100%;
    justify-content: space-between;
  }
}
@media(max-width: 375px) {
  .tabs button {
    padding: 9px 6px;
  }
}
</style>
