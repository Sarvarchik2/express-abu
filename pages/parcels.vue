
<!--<template>-->
<!--  <div class="parcels-page">-->
<!--    <div class="tabs">-->
<!--      <button v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === tab.key }" @click="selectedTab = tab.key">-->
<!--        {{ tab.label }}-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="divider"></div>-->
<!--    <div class="sub-tabs">-->
<!--      <button v-for="(filter, index) in currentFilters" :key="index" class="sub-tab" :class="{ active: selectedFilter === filter }" @click="selectedFilter = filter">-->
<!--        {{ filter }} <span class="count">0</span>-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="parcels-btn">-->
<!--      <button @click="openPopup">+ Новый адрес</button>-->
<!--    </div>-->
<!--    <div v-if="orders.length === 0" class="empty-state">-->
<!--      <img :src="empty" alt="Нет заказов" class="empty-image" />-->
<!--      <p class="empty-text">Заказов не найдено</p>-->
<!--    </div>-->
<!--    <div v-if="isPopupOpen" class="parcels-add">-->
<!--      <div class="parcels-add-wrapper">-->
<!--        <div class="parcels-add-title">-->
<!--          <h2>Добавить заказ для выкупа</h2>-->
<!--          <img :src="close" alt="close" @click="closePopup">-->
<!--        </div>-->
<!--        <div class="parcels-add-progress">-->
<!--          <div class="parcels-add-progress-left">-->
<!--            <h3>1</h3>-->
<!--            <span></span>-->
<!--            <h3>2</h3>-->
<!--            <span></span>-->
<!--            <h3>3</h3>-->
<!--          </div>-->
<!--          <div class="parcels-add-progress-right">-->
<!--            <img :src="left" alt="left">-->
<!--            <img :src="right" alt="right">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="parcels-add-progress-declaration">-->
<!--          <div class="parcels-add-text">-->
<!--            <h2>Товары для покупки</h2>-->
<!--            <p>Пожалуйста дайте нам знать какие товары вы хотите чтобы мы вам купили.</p>-->
<!--          </div>-->
<!--          <div v-for="(parcel, index) in parcels" :key="index" class="parcels-add-progress-declaration-wrapper">-->
<!--            <h4>Декларация</h4>-->
<!--            <input type="text" v-model="parcel.link" placeholder="Ссылка на товар*">-->
<!--            <label>-->
<!--              <input type="text" v-model="parcel.name" placeholder="Название товара*">-->
<!--              <input type="text" v-model="parcel.price" placeholder="Цена за ед $*">-->
<!--              <input type="text" v-model="parcel.quantity" placeholder="Количество* шт">-->
<!--            </label>-->
<!--            <label>-->
<!--              <input type="text" v-model="parcel.color" placeholder="Цвет*">-->
<!--              <input type="text" v-model="parcel.size" placeholder="Размер*">-->
<!--            </label>-->
<!--            <textarea v-model="parcel.comment" placeholder="Комментарий для оператора"></textarea>-->
<!--          </div>-->
<!--          <div class="parcels-add-progress-declaration-total">-->
<!--            <h2>Итого: {{ totalPrice }}$</h2>-->
<!--            <button @click="addParcel">+ Добавить новый заказ</button>-->
<!--          </div>-->
<!--          <div class="parcels-add-btn-wrapper">-->
<!--            <button class="parcels-add-btn" @click="submitOrder">Продолжить</button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="parcels-add-address">-->
<!--          <div class="parcels-add-text">-->
<!--            <h2>Выбор получателя</h2>-->
<!--            <p>Вы можете выбрать адрес отправителя из сохранившеся адресов, либо добавить новый адрес.</p>-->
<!--          </div>-->
<!--          <div class="parcels-add-address-content">-->
<!--            <h2>dasd</h2>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, computed } from "vue";-->
<!--import empty from "@/assets/profile/empty.png";-->
<!--import close from '@/assets/exit.png';-->
<!--import left from "@/assets/left.png"-->
<!--import right from "@/assets/right.png"-->
<!--const isPopupOpen = ref(false);-->
<!--const parcels = ref([{ link: '', name: '', price: '', quantity: '', color: '', size: '', comment: '' }]);-->
<!--const selectedTab = ref("parcels");-->
<!--const selectedFilter = ref("");-->
<!--const tabs = ref([-->
<!--  { key: "parcels", label: "Посылки", filters: ["В процессе", "Доставленные", "Ожидание оплаты"] },-->
<!--  { key: "purchase_help", label: "Помощь в покупке", filters: ["В процессе", "Приобретенные покупки", "Подтвержденные покупки", "Одобренные товары"] },-->
<!--  { key: "your_purchases", label: "Ваши покупки", filters: ["В ожидании", "Одобренные товары"] },-->
<!--]);-->
<!--const orders = ref([]);-->
<!--const currentFilters = computed(() => {-->
<!--  return tabs.value.find(tab => tab.key === selectedTab.value)?.filters || [];-->
<!--});-->
<!--const totalPrice = computed(() => {-->
<!--  return parcels.value.reduce((sum, parcel) => sum + (parseFloat(parcel.price) || 0) * (parseInt(parcel.quantity) || 0), 0);-->
<!--});-->
<!--const openPopup = () => {-->
<!--  isPopupOpen.value = true;-->
<!--};-->
<!--const closePopup = () => {-->
<!--  isPopupOpen.value = false;-->
<!--  parcels.value = [{ link: '', name: '', price: '', quantity: '', color: '', size: '', comment: '' }];-->
<!--};-->
<!--const addParcel = () => {-->
<!--  parcels.value.push({ link: '', name: '', price: '', quantity: '', color: '', size: '', comment: '' });-->
<!--};-->
<!--const submitOrder = () => {-->
<!--  console.log("Заказ отправлен:", parcels.value);-->
<!--  closePopup();-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.parcels-add-text{-->
<!--  width: 100%;-->
<!--  margin-top: 40px;-->
<!--  gap: 20px;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->
<!--.parcels-add-text h2{-->
<!--  font-size: 20px;-->
<!--  font-weight: bold;-->
<!--}-->
<!--.parcels-add-btn-wrapper{-->
<!--  display: flex;-->
<!--  justify-content: end;-->
<!--}-->
<!--.parcels-add-text p{-->
<!--  font-size: 18px;-->
<!--  font-weight: 400;-->
<!--  color: #BAAFAF;-->
<!--}-->
<!--.parcels-add-progress-declaration-total{-->
<!--  margin-top: 20px;-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--}-->
<!--.parcels-add-progress-declaration-total h2{-->
<!--  font-size: 20px;-->
<!--  font-weight: bold;-->

<!--}-->
<!--.parcels-add-progress-declaration-total button{-->
<!--  border: 1px solid #FFEE00;-->
<!--  border-radius: 30px;-->
<!--  color: #fff;-->
<!--  background: transparent;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s;-->
<!--  padding: 10px 15px;-->
<!--}-->
<!--.parcels-add-btn{-->
<!--  border: 1px solid #FFEE00;-->
<!--  border-radius: 30px;-->
<!--  color: #fff;-->
<!--  background: transparent;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s;-->
<!--  padding: 10px 15px;-->
<!--  margin-top: 20px;-->
<!--}-->
<!--.parcels-add-progress-declaration-total button:hover{-->
<!--  background: #FFEE00;-->
<!--  color: #000;-->

<!--}-->
<!--.parcels-add-progress-declaration-wrapper{-->
<!--  width: 100%;-->
<!--  border: 3px solid #FFEE00;-->
<!--  border-radius: 25px;-->
<!--  margin-top: 40px;-->
<!--  padding: 20px;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  gap: 20px;-->
<!--}-->
<!--.parcels-add-progress-declaration-wrapper input{-->
<!--  border: 1px solid #BAAFAF;-->
<!--  border-radius: 30px;-->
<!--  padding: 10px;-->
<!--  width: 100%;-->
<!--  background: transparent;-->
<!--  color: #BAAFAF;-->
<!--}-->
<!--.parcels-add-progress-declaration-wrapper input:focus,.parcels-add-progress-declaration-wrapper textarea:focus{-->
<!--  outline: 1px solid #FFEE00;-->

<!--}-->
<!--.parcels-add-progress-declaration-wrapper label {-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  gap: 20px;-->
<!--}-->

<!--.parcels-add-progress-declaration-wrapper textarea {-->
<!--  border: 1px solid #BAAFAF;-->
<!--  border-radius: 20px;-->
<!--  padding: 10px;-->
<!--  width: 100%;-->
<!--  background: transparent;-->
<!--  color: #BAAFAF;-->
<!--  height: 70px;-->
<!--}-->
<!--.parcels-add-progress{-->

<!--  width: 100%;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: space-between;-->
<!--  margin-top: 40px;-->
<!--}-->
<!--.parcels-add-progress-left{-->
<!--  width: 90%;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: start;-->
<!--}-->
<!--.parcels-add-progress-left h3{-->
<!--  width: 35px;-->
<!--  height: 35px;-->
<!--  line-height:14px;-->
<!--  padding: 10px;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  color: #000;-->
<!--  border-radius: 50%;-->
<!--  background: #FFEE00;-->
<!--  font-size: 16px;-->
<!--}-->
<!--.parcels-add-progress-left span{-->
<!--  width: 40%;-->
<!--  height: 2px;-->
<!--  background: #fff;-->
<!--}-->
<!--.parcels-add-progress-right{-->
<!--  width: 10%;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  gap: 50px;-->
<!--  justify-content: end;-->
<!--}-->
<!--.parcels-add-progress-right img{-->
<!--  width: 25px;-->
<!--  cursor: pointer;-->
<!--  height: 25px;-->
<!--}-->
<!--.parcels-add-title{-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--}-->
<!--.parcels-add{-->
<!--  width: 100%;-->
<!--  height: 100vh;-->
<!--  background: rgba(10, 10, 10, 0.18);-->
<!--  backdrop-filter: blur(8px);-->
<!--  z-index: 991;-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->
<!--.parcels-add-wrapper {-->
<!--  background: #000;-->
<!--  width: 800px;-->
<!--  height: 800px;-->
<!--  padding: 30px;-->
<!--  border-radius: 30px;-->
<!--  overflow-y: scroll;-->
<!--}-->
<!--.parcels-page {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: start;-->
<!--  justify-content: start;-->
<!--  background: #0A0A0A;-->
<!--  border-radius: 30px;-->
<!--  color: #fff;-->
<!--  padding: 20px;-->
<!--  width: 100%;-->
<!--}-->
<!--.parcels-btn{-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  align-items: start;-->
<!--  justify-content: end;-->
<!--}-->
<!--.parcels-btn button {-->
<!--  border: 1px solid #FFEE00;-->
<!--  border-radius: 30px;-->
<!--  color: #fff;-->
<!--  background: transparent;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s;-->
<!--  padding: 10px 15px;-->
<!--}-->
<!--.parcels-btn button:hover {-->
<!--  background: #FFEE00;-->
<!--  color: #000;-->
<!--}-->
<!--.tabs {-->
<!--  display: flex;-->
<!--  width: max-content;-->
<!--  justify-content: start;-->

<!--  gap: 10px;-->
<!--  margin-bottom: 20px;-->
<!--  border: 1px solid #fff;-->
<!--  border-radius: 30px;-->

<!--}-->

<!--.tabs button {-->
<!--  padding: 12px 20px;-->
<!--  border-radius: 25px;-->
<!--  background: transparent;-->
<!--  color: #fff;-->
<!--  font-size: 16px;-->
<!--  font-weight: 500;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s;-->
<!--  border: none;-->
<!--}-->

<!--.tabs button.active {-->
<!--  background: #FFD700;-->
<!--  color: #000;-->
<!--}-->

<!--.divider {-->
<!--  width: 100%;-->
<!--  height: 1px;-->
<!--  background: #fff;-->
<!--  margin-bottom: 20px;-->
<!--}-->

<!--.sub-tabs {-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  justify-content: start;-->
<!--  gap: 10px;-->
<!--  margin-bottom: 20px;-->
<!--  flex-wrap: wrap;-->
<!--}-->

<!--.sub-tab {-->
<!--  padding: 8px 15px;-->
<!--  border: 1px solid #fff;-->
<!--  border-radius: 20px;-->
<!--  background: transparent;-->
<!--  color: #fff;-->
<!--  font-size: 14px;-->
<!--  cursor: pointer;-->
<!--  transition: all 0.3s;-->
<!--}-->

<!--.sub-tab.active, .sub-tab:hover {-->
<!--  background: transparent;-->
<!--  border: 1px solid #FFEE00;-->

<!--}-->

<!--.count {-->
<!--  color: #fff;-->
<!--  border-radius: 50%;-->
<!--  padding: 2px 8px;-->
<!--  margin-left: 5px;-->
<!--  font-weight: bold;-->
<!--}-->

<!--.empty-state {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  margin: auto;-->
<!--  margin-top: 50px;-->
<!--}-->

<!--.empty-image {-->
<!--  width: 40px;-->
<!--  height: 45px;-->
<!--  opacity: 0.7;-->
<!--}-->

<!--.empty-text {-->
<!--  font-size: 18px;-->
<!--  color: #ccc;-->
<!--  margin-top: 10px;-->
<!--}-->


<!--@media(max-width: 600px) {-->
<!--  .tabs button {-->
<!--    padding: 10px 10px;-->
<!--    font-size: 14px;-->
<!--  }-->

<!--  .tabs {-->
<!--    width: 100%;-->
<!--    justify-content: space-between;-->
<!--  }-->

<!--}-->
<!--@media(max-width: 375px) {-->

<!--  .tabs button {-->
<!--    padding: 9px 6px;-->
<!--  }-->

<!--}-->


<!--</style>-->






<template>
  <div class="parcels-page">
    <div class="tabs">
      <button v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === tab.key }" @click="selectedTab = tab.key">
        {{ tab.label }}
      </button>
    </div>
    <div class="divider"></div>
    <div class="sub-tabs">
      <button v-for="(filter, index) in currentFilters" :key="index" class="sub-tab" :class="{ active: selectedFilter === filter }" @click="selectedFilter = filter">
        {{ filter }} <span class="count">0</span>
      </button>
    </div>
    <div class="parcels-btn">
      <button @click="openPopup">+ Новый адрес</button>
    </div>
    <div v-if="orders.length === 0" class="empty-state">
      <img :src="empty" alt="Нет заказов" class="empty-image" />
      <p class="empty-text">Заказов не найдено</p>
    </div>

    <div v-if="isPopupOpen" class="parcels-add">
      <div class="parcels-add-wrapper">
        <div class="parcels-add-title">
          <h2 v-if="currentStep === 1">Добавить заказ</h2>
          <h2 v-if="currentStep === 2">Выбор получателя</h2>
          <h2 v-if="currentStep === 3">Подтверждение заказа</h2>
          <img :src="close" alt="close" @click="closePopup">
        </div>

        <div class="parcels-add-progress">
          <div class="parcels-add-progress-left">
            <h3 :class="{active: currentStep >= 1}">1</h3>
            <span></span>
            <h3 :class="{active: currentStep >= 2}">2</h3>
            <span></span>
            <h3 :class="{active: currentStep >= 3}">3</h3>
          </div>
          <div class="parcels-add-progress-right">
            <img :src="left" alt="left" @click="prevStep" v-if="currentStep > 1">
            <img :src="right" alt="right" @click="nextStep" v-if="currentStep < 3">
          </div>
        </div>

        <div v-if="currentStep === 1" class="parcels-add-progress-declaration">
          <div class="parcels-add-text">
            <h2>Товары для покупки</h2>
            <p>Введите данные товаров, которые хотите купить.</p>
          </div>
          <div v-for="(parcel, index) in parcels" :key="index" class="parcels-add-progress-declaration-wrapper">
            <h4>Декларация</h4>
            <input type="text" v-model="parcel.link" placeholder="Ссылка на товар*">
            <label>
              <input type="text" v-model="parcel.name" placeholder="Название товара*">
              <input type="text" v-model="parcel.price" placeholder="Цена за ед $*">
              <input type="text" v-model="parcel.quantity" placeholder="Количество* шт">
            </label>
            <label>
              <input type="text" v-model="parcel.color" placeholder="Цвет*">
              <input type="text" v-model="parcel.size" placeholder="Размер*">
            </label>
            <textarea v-model="parcel.comment" placeholder="Комментарий для оператора"></textarea>
          </div>
          <div class="parcels-add-progress-declaration-total">
            <h2>Итого: {{ totalPrice }}$</h2>
            <button @click="addParcel">+ Добавить товар</button>
          </div>
          <div class="parcels-add-btn-wrapper">
            <button class="parcels-add-btn" @click="nextStep">Продолжить</button>
          </div>
        </div>

        <div v-if="currentStep === 2" class="parcels-add-address">
          <div class="parcels-add-text">
            <h2>Выбор получателя</h2>
            <p>Выберите сохраненный адрес или добавьте новый.</p>
          </div>
          <div class="parcels-add-address-content">
            <h2>Список адресов</h2>
          </div>
          <div class="parcels-add-btn-wrapper">
            <button class="parcels-add-btn" @click="nextStep">Продолжить</button>
          </div>
        </div>

        <div v-if="currentStep === 3" class="parcels-add-confirmation">
          <div class="parcels-add-text">
            <h2>Подтверждение заказа</h2>
            <p>Проверьте все данные перед отправкой.</p>
          </div>
          <div class="parcels-add-btn-wrapper">
            <button class="parcels-add-btn" @click="submitOrder">Отправить заказ</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import empty from "@/assets/profile/empty.png";
import close from '@/assets/exit.png';
import left from "@/assets/left.png";
import right from "@/assets/right.png";

const isPopupOpen = ref(false);
const currentStep = ref(1);
const parcels = ref([{ link: '', name: '', price: '', quantity: '', color: '', size: '', comment: '' }]);
const selectedTab = ref("parcels");
const selectedFilter = ref("");

const tabs = ref([
  { key: "parcels", label: "Посылки", filters: ["В процессе", "Доставленные", "Ожидание оплаты"] },
  { key: "purchase_help", label: "Помощь в покупке", filters: ["В процессе", "Приобретенные покупки", "Подтвержденные покупки", "Одобренные товары"] },
  { key: "your_purchases", label: "Ваши покупки", filters: ["В ожидании", "Одобренные товары"] },
]);

const orders = ref([]);
const currentFilters = computed(() => {
  return tabs.value.find(tab => tab.key === selectedTab.value)?.filters || [];
});

const totalPrice = computed(() => {
  return parcels.value.reduce((sum, parcel) => sum + (parseFloat(parcel.price) || 0) * (parseInt(parcel.quantity) || 0), 0);
});

const openPopup = () => {
  isPopupOpen.value = true;
  currentStep.value = 1;
};

const closePopup = () => {
  isPopupOpen.value = false;
  parcels.value = [{ link: '', name: '', price: '', quantity: '', color: '', size: '', comment: '' }];
};

const addParcel = () => {
  parcels.value.push({ link: '', name: '', price: '', quantity: '', color: '', size: '', comment: '' });
};

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const submitOrder = () => {
  console.log("Заказ отправлен:", parcels.value);
  closePopup();
};
</script>


<style scoped>
.parcels-add-text{
  width: 100%;
  margin-top: 40px;
  gap: 20px;
  display: flex;
  flex-direction: column;
}
.parcels-add-text h2{
  font-size: 20px;
  font-weight: bold;
}
.parcels-add-btn-wrapper{
  display: flex;
  justify-content: end;
}
.parcels-add-text p{
  font-size: 18px;
  font-weight: 400;
  color: #BAAFAF;
}
.parcels-add-progress-declaration-total{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.parcels-add-progress-declaration-total h2{
  font-size: 20px;
  font-weight: bold;

}
.parcels-add-progress-declaration-total button{
  border: 1px solid #FFEE00;
  border-radius: 30px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px 15px;
}
.parcels-add-btn{
  border: 1px solid #FFEE00;
  border-radius: 30px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px 15px;
  margin-top: 20px;
}
.parcels-add-progress-declaration-total button:hover{
  background: #FFEE00;
  color: #000;

}
.parcels-add-progress-declaration-wrapper{
  width: 100%;
  border: 3px solid #FFEE00;
  border-radius: 25px;
  margin-top: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.parcels-add-progress-declaration-wrapper input{
  border: 1px solid #BAAFAF;
  border-radius: 30px;
  padding: 10px;
  width: 100%;
  background: transparent;
  color: #BAAFAF;
}
.parcels-add-progress-declaration-wrapper input:focus,.parcels-add-progress-declaration-wrapper textarea:focus{
  outline: 1px solid #FFEE00;

}
.parcels-add-progress-declaration-wrapper label {
  width: 100%;
  display: flex;
  gap: 20px;
}

.parcels-add-progress-declaration-wrapper textarea {
  border: 1px solid #BAAFAF;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  background: transparent;
  color: #BAAFAF;
  height: 70px;
}
.parcels-add-progress{

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.parcels-add-progress-left{
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: start;
}
.parcels-add-progress-left h3{
  width: 35px;
  height: 35px;
  line-height:14px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border-radius: 50%;
  background: #FFEE00;
  font-size: 16px;
}
.parcels-add-progress-left span{
  width: 40%;
  height: 2px;
  background: #fff;
}
.parcels-add-progress-right{
  width: 10%;
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: end;
}
.parcels-add-progress-right img{
  cursor: pointer;
  height: 25px;
}
.parcels-add-title{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.parcels-add{
  width: 100%;
  height: 100vh;
  background: rgba(10, 10, 10, 0.18);
  backdrop-filter: blur(8px);
  z-index: 991;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.parcels-add-wrapper {
  background: #000;
  width: 800px;
  height: 800px;
  padding: 30px;
  border-radius: 30px;
  overflow-y: scroll;
}
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
.parcels-btn{
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: end;
}
.parcels-btn button {
  border: 1px solid #FFEE00;
  border-radius: 30px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px 15px;
}
.parcels-btn button:hover {
  background: #FFEE00;
  color: #000;
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

.sub-tabs {
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.sub-tab {
  padding: 8px 15px;
  border: 1px solid #fff;
  border-radius: 20px;
  background: transparent;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.sub-tab.active, .sub-tab:hover {
  background: transparent;
  border: 1px solid #FFEE00;

}

.count {
  color: #fff;
  border-radius: 50%;
  padding: 2px 8px;
  margin-left: 5px;
  font-weight: bold;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
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

@media (max-width: 769px) {
  .parcels-add-wrapper{
    width: 95%;
    height: 95%;
  }

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