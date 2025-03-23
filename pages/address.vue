
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

    <div v-if="addresses.length === 0" class="empty-state">
      <img :src="empty" alt="Нет заказов" class="empty-image" />
      <p class="empty-text">
        Здесь пока нет ни одного получателя :( <br>
        Пожалуйста укажите адреса получателей ваших посылок
      </p>
      <button @click="openAddForm">+ Новый адрес</button>
    </div>

    <div v-else class="recipient-list">
      <div v-for="addr in addresses" :key="addr.id" class="recipient-card">
        <div class="recipient-info">
          <h3> <span> {{ addr.first_name }} {{ addr.last_name }}</span></h3>
          <p>Паспорт: <span>{{ addr.passport_number }}</span> </p>
          <p>Номер: <span> {{ addr.phone_number }} </span></p>
          <p>Email:  <span>{{ addr.email }} </span></p>
          <p>Адрес:  <span> {{ addr.address }}, {{ addr.apartment }}, {{ addr.district }}, {{ addr.city }}</span></p>
          <p>ZIP-код:  <span> {{ addr.postal_code }}</span></p>
          <button @click="editRecipient(addr)">Изменить</button>
          <button @click="deleteRecipient(addr.id)">Удалить</button>
        </div>

      </div>
      <button class="recipient-list-btn" @click="openAddForm">+ Добавить ещё</button>
    </div>

    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <h2>{{ isEditing ? 'Изменить' : 'Добавить' }} получателя</h2>
        <form @submit.prevent="isEditing ? updateRecipient() : addRecipient()">
          <div class="popup-overlay-item-wrapper">
            <div class="popup-overlay-item">
              <h4>Данные</h4>
              <input type="text" placeholder="Имя" v-model="form.name" required />
              <input type="text" placeholder="Фамилия" v-model="form.surname" required />
              <input type="text" placeholder="Паспорт" v-model="form.passport" required />
              <input type="text" placeholder="Телефон" v-model="form.phone" required />
              <input type="text" placeholder="Доп. Телефон" v-model="form.phone_second" />
              <input type="email" placeholder="Email" v-model="form.email" required />
            </div>
            <div class="popup-overlay-item">
              <h4>Адрес</h4>
              <input type="text" placeholder="Адрес" v-model="form.address" required />
              <input type="text" placeholder="Апартамент" v-model="form.apartament" required />
              <input type="text" placeholder="Регион" v-model="form.region" required />
              <input type="text" placeholder="Город" v-model="form.city" required />
              <input type="text" placeholder="Офис" v-model="form.ofice" />
              <input type="text" placeholder="ZIP-код" v-model="form.zip" required />
            </div>
          </div>
          <div class="popup-actions">
            <button type="button" @click="closePopup">Отменить</button>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import empty from '@/assets/profile/empty2.png';

const addresses = ref([]);
const showPopup = ref(false);
const selectedTab = ref('parcels');
const isEditing = ref(false);
const editingId = ref(null);

const form = ref({
  name: '',
  surname: '',
  passport: '',
  phone: '',
  phone_second: '',
  email: '',
  address: '',
  apartament: '',
  region: '',
  city: '',
  ofice: '',
  zip: ''
});

const tabs = ref([
  { key: 'parcels', label: 'Получатель' },
]);

const fetchAddresses = async () => {
  try {
    const token = localStorage.getItem('access_token');
    const res = await axios.get('https://abuexpresslogisticscargo.com/api/addresses/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    addresses.value = res.data;
  } catch (err) {
    console.error('Ошибка получения адресов', err);
  }
};

const openAddForm = () => {
  resetForm();
  isEditing.value = false;
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

const resetForm = () => {
  form.value = {
    name: '',
    surname: '',
    passport: '',
    phone: '',
    phone_second: '',
    email: '',
    address: '',
    apartament: '',
    region: '',
    city: '',
    ofice: '',
    zip: ''
  };
};

const addRecipient = async () => {
  try {
    const payload = buildPayload();
    const token = localStorage.getItem('access_token');
    await axios.post('https://abuexpresslogisticscargo.com/api/addresses/', payload, {
      headers: { Authorization: `Bearer ${token}` }
    });
    showPopup.value = false;
    await fetchAddresses();
  } catch (err) {
    console.error('Ошибка создания адреса', err);
    alert('Ошибка при создании адреса');
  }
};

const editRecipient = (addr) => {
  form.value = {
    name: addr.first_name,
    surname: addr.last_name,
    passport: addr.passport_number,
    phone: addr.phone_number,
    phone_second: addr.phone_number2,
    email: addr.email,
    address: addr.address,
    apartament: addr.apartment,
    region: addr.district,
    city: addr.city,
    ofice: addr.office_number,
    zip: addr.postal_code
  };
  editingId.value = addr.id;
  isEditing.value = true;
  showPopup.value = true;
};

const updateRecipient = async () => {
  try {
    const payload = buildPayload();
    const token = localStorage.getItem('access_token');
    await axios.patch(`https://abuexpresslogisticscargo.com/api/addresses/${editingId.value}/`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    });
    showPopup.value = false;
    await fetchAddresses();
  } catch (err) {
    console.error('Ошибка обновления адреса', err);
    alert('Ошибка при обновлении адреса');
  }
};

const deleteRecipient = async (id) => {
  try {
    const token = localStorage.getItem('access_token');
    await axios.delete(`https://abuexpresslogisticscargo.com/api/addresses/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    await fetchAddresses();
  } catch (err) {
    console.error('Ошибка удаления адреса', err);
    alert('Не удалось удалить адрес');
  }
};

const buildPayload = () => ({
  first_name: form.value.name,
  last_name: form.value.surname,
  passport_number: form.value.passport,
  phone_number: form.value.phone,
  phone_number2: form.value.phone_second || null,
  email: form.value.email,
  apartment: form.value.apartament,
  address: form.value.address,
  country: 'Uzbekistan',
  city: form.value.city,
  district: form.value.region,
  office_number: form.value.ofice || null,
  postal_code: form.value.zip
});

onMounted(fetchAddresses);
</script>

<style scoped>
.recipient-list-btn {
   padding: 10px 20px;
   border-radius: 25px;
   color: #fff;
   background: transparent;
   transition: all 0.3s;
   z-index: 1;
   border: 1px solid #FFD700;
  margin-top: 20px;
 }
.recipient-list-btn:hover {
  background: #FFD700;
  cursor: pointer;
  color: #000;
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
.popup-overlay-item input{
  background: transparent;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #fff;
  color: #fff;
}
.popup-overlay-item input:focus{
  outline: 1px solid #FFEE00;

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
  gap: 20px;
  border-radius: 30px;

}
.recipient-info p{
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #BAAFAF;
  font-size: 20px;
}
.recipient-info p span{
  color: #fff;
}
.recipient-info button{
  background: transparent;
  border: 1px solid #FFD700;
  border-radius: 30px;
  width: 100%;
  color: #fff;
  height: 40px;
  transition: all 300ms;
}
.recipient-info button:hover{
  background: #FFD700;
  cursor: pointer;
  color: #000;
}
.recipient-card h3{
    width: 100%;
}
@media (max-width:769px) {
  .recipient-info{
    width: 500px;
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
  .recipient-card{
    width: 100%;
  }
  .recipient-list{
    width: 100%;
  }
  .recipient-info{
    width: 100%;
  }
  .recipient-info p{
    font-size: 16px;
  }
}
@media(max-width: 375px) {
  .tabs button {
    padding: 9px 6px;
  }
}
</style>