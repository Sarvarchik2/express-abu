

<template>
  <div class="notification-container" :class="{ 'show': showNotification }">
    <div class="notification" :class="notificationType">
      <span>{{ notificationMessage }}</span>
      <button @click="hideNotification">&times;</button>
    </div>
  </div>

  <!-- Language Switcher -->

  <div class="parcels-page">


    <div class="sub-tabs">
      <button
          v-for="(filter, index) in currentFilters"
          :key="index"
          class="sub-tab"
          :class="{ active: selectedFilter === filter }"
          @click="selectedFilter = filter"
      >
        {{ $t(`parcels.filters.${filter}`) }} <span class="count">{{ getFilterCount(filter) }}</span>
      </button>
    </div>

    <div class="parcels-btn">
      <button @click="openOrderOwnPopup">+ {{ $t('parcels.add_own_order') }}</button>
    </div>

    <div v-if="isLoading" class="loading-indicator">
      {{ $t('parcels.loading') }}
    </div>

    <div class="parcel-page-wrapper" v-else>
      <div v-if="filteredOrders.length === 0" class="empty-state">
        <img :src="empty" :alt="$t('parcels.no_orders')" class="empty-image" />
        <p class="empty-text">{{ $t('parcels.no_orders') }}</p>
      </div>

      <div v-else class="orders-list">
        <div v-for="order in filteredOrders" :key="order.id" class="order-item">
          <div class="order-header">
            <h3>{{ order.product_name || order.name }}</h3>
            <span class="order-status" :class="getStatusClass(order)">
              {{ getStatusText(order) }}
            </span>
          </div>
          <div class="order-details">
            <p v-if="order.location"><strong>{{ $t('parcels.own_order.location') || 'Склад' }}:</strong>&nbsp;{{ order.location }}</p>
            <p v-if="order.track_number"><strong>{{ $t('parcels.own_order.track_number') || 'Трек-номер' }}:</strong>&nbsp;{{ order.track_number }}</p>
            <p v-if="order.invoice_number"><strong>{{ $t('parcels.own_order.invoice_number') || 'Номер инвойса' }}:</strong>&nbsp;{{ order.invoice_number }}</p>
            <p v-if="order.market_name"><strong>{{ $t('parcels.own_order.market_name') || 'Магазин' }}:</strong>&nbsp;{{ order.market_name }}</p>
            <p><strong>{{ $t('parcels.product_details.price') }}:</strong>&nbsp;${{ order.product_price || order.price }}</p>
            <p><strong>{{ $t('parcels.product_details.quantity') }}:</strong>&nbsp;{{ order.product_quantity || order.quantity }} {{ $t('parcels.product_details.pcs') }}</p>
            <p v-if="order.product_weight || order.weight"><strong>{{ $t('parcels.product_details.weight') }}:</strong>&nbsp;{{ order.product_weight || order.weight }} kg</p>
            <p v-if="order.product_color || order.color"><strong>{{ $t('parcels.product_details.color') }}:</strong>&nbsp;{{ order.product_color || order.color }}</p>
            <p v-if="order.product_size || order.size"><strong>{{ $t('parcels.product_details.size') }}:</strong>&nbsp;{{ order.product_size || order.size }}</p>
            <p v-if="order.departure_date"><strong>Departure:</strong>&nbsp;{{ formatDate(order.departure_date) }}</p>
            <p v-if="order.arrival_date"><strong>Arrival:</strong>&nbsp;{{ formatDate(order.arrival_date) }}</p>
            <div class="product-links" style="display: flex; gap: 10px; margin-top: 10px;">
              <a v-if="order.url_product || order.link" :href="order.url_product || order.link" target="_blank" class="product-link">
                {{ $t('parcels.product_details.product_link') }}
              </a>
            </div>
          </div>
          <div class="order-footer">
            <small>{{ $t('parcels.product_details.creation_date') }}: {{ formatDate(order.created_at) }}</small>
          </div>
        </div>
      </div>
    </div>



    <!-- Popup for adding own order -->
    <div v-if="isOrderOwnPopupOpen" class="popup-overlay" @click.self="closeOrderOwnPopup">
      <div class="popup parcels-add-popup">
        <div class="popup-header">
          <h2>{{ $t('parcels.own_order.title') }}</h2>
          <svg @click="closeOrderOwnPopup" class="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="popup-scroll-content">
          <div class="parcels-add-progress">
            <div class="parcels-add-progress-left">
              <h3 class="active">1</h3>
              <h3 :class="{ active: currentOrderOwnStep >= 2 }">2</h3>
              <span></span>
            </div>

            <div class="parcels-add-progress-right">
              <svg v-if="currentOrderOwnStep > 1" @click="prevOrderOwnStep" class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-if="currentOrderOwnStep < 2" @click="nextOrderOwnStep" class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Step 1: Order information -->
          <div v-if="currentOrderOwnStep === 1" class="parcels-add-progress-declaration">
            <div class="parcels-add-text">
              <h2>{{ $t('parcels.steps.product_info') }}</h2>
            </div>

            <div class="parcels-add-progress-declaration-wrapper modernized-form">
              <select v-model="orderOwn.location" required class="modern-select">
                <option value="" disabled selected>{{ $t('parcels.own_order.select_location') || 'Выберите склад' }}</option>
                <option v-for="loc in availableLocations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
              
              <input type="text" v-model="orderOwn.track_number" :placeholder="$t('parcels.own_order.track_number')" required>
              
              <div class="input-row">
                <input type="text" v-model="orderOwn.market_name" :placeholder="$t('parcels.own_order.market_name')" required>
                <input type="text" v-model="orderOwn.url_product" :placeholder="$t('parcels.own_order.product_link')">
              </div>
              
              <!-- Invoice fields removed per user request -->

              <div class="input-row">
                <input type="text" v-model="orderOwn.product_name" :placeholder="$t('parcels.own_order.product_name')" required>
                <input type="text" v-model="orderOwn.product_price" :placeholder="$t('parcels.own_order.product_price')" inputmode="decimal" required>
              </div>

              <div class="input-row">
                <input type="number" v-model="orderOwn.product_quantity" :placeholder="$t('parcels.own_order.product_quantity')" required>
                <input type="text" v-model="orderOwn.product_weight" :placeholder="$t('parcels.own_order.product_weight')" inputmode="decimal">
              </div>

              <div class="input-row">
                <input type="text" v-model="orderOwn.product_color" :placeholder="$t('parcels.own_order.product_color')" required>
                <input type="text" v-model="orderOwn.product_size" :placeholder="$t('parcels.own_order.product_size')">
              </div>

              <textarea v-model="orderOwn.comment" :placeholder="$t('parcels.own_order.comment')"></textarea>
            </div>

            <div class="parcels-add-btn-wrapper">
              <button class="parcels-add-btn primary" @click="nextOrderOwnStep">{{ $t('parcels.form.continue') }}</button>
            </div>
          </div>

          <!-- Step 2: Address selection -->
          <div v-if="currentOrderOwnStep === 2" class="parcels-add-address">
            <div class="parcels-add-text">
              <h2>{{ $t('parcels.steps.recipient_selection') }}</h2>
            </div>

            <div class="parcels-add-address-content">
              <div v-if="addresses.length === 0" class="empty-address">
                <p>{{ $t('parcels.address.no_address') }}</p>
                <button @click="navigateToAddresses">{{ $t('parcels.address.add_address') }}</button>
              </div>

              <div v-else class="parcel-address-list">
                <div
                    v-for="addr in addresses"
                    :key="addr.id"
                    class="parcel-address-list-item"
                    :class="{ selected: selectedAddress === addr.id }"
                    @click="selectAddress(addr.id)"
                >
                  <div class="parcel-address-list-item-left">
                    <h2>{{ addr.first_name }} {{ addr.last_name }}</h2>
                    <h3>{{ addr.country }}, {{ addr.city }}, {{ addr.address }}</h3>
                  </div>
                  <div class="parcel-address-list-item-right">
                    <h2>{{ addr.phone_number }}</h2>
                  </div>
                </div>
                <button @click="navigateToAddresses" class="add-address-minor">{{ $t('parcels.address.add_address') }}</button>
              </div>
            </div>

            <div class="parcels-add-btn-wrapper">
              <button
                  class="parcels-add-btn primary"
                  @click="submitOrderOwn"
                  :disabled="isLoading || !selectedAddress"
              >
                {{ isLoading ? $t('parcels.form.submitting') : $t('parcels.form.submit_order') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref, computed, onMounted } from "vue";
import empty from "@/assets/profile/empty.png";
import close from '@/assets/exit.webp';
import left from "@/assets/left.webp";
import right from "@/assets/right.png";

const router = useRouter();

// Notification state
const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('success');

// States
const isPopupOpen = ref(false);
const isOrderOwnPopupOpen = ref(false);
const currentStep = ref(1);
const currentOrderOwnStep = ref(1);
const selectedTab = ref("parcels");
const selectedFilter = ref("all");
const selectedAddress = ref(null);
const isLoading = ref(false);


const addresses = ref([]);
const ownOrders = ref([]);
const availableLocations = ref([]);


import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const getFilterCount = (filter) => {
  const currentOrders = ownOrders.value;

  if (filter === 'all') return currentOrders.length;

  return currentOrders.filter(order => {
    switch(filter) {
      case 'accepted': return order.is_accepted;
      case 'rejected': return order.is_rejected;
      case 'shipped': return order.is_shipped;
      case 'arrived': return order.is_arrived;
      case 'delivered': return order.is_delivered;
      default: return true;
    }
  }).length;
};
// Data
const parcels = ref([{
  link: '',
  name: '',
  price: '',
  quantity: '',
  color: '',
  size: '',
  weight: '',
  comment: ''
}]);

const orderOwn = ref({
  location: '',
  track_number: '',
  market_name: '',
  url_product: '',
  invoice_number: null,
  invoice_id: '',
  product_name: '',
  product_price: '',
  product_quantity: 1,
  product_weight: null,
  product_color: '',
  product_size: '',
  comment: '',
  receiver_address: null
});


const tabs = ref([
  {
    key: "parcels",
    label: "parcels",
    filters: ["all", "accepted", "rejected", "shipped", "arrived", "delivered"]
  }
]);

// Methods

const getPopupTitle = () => {
  const titles = {
    1: t('parcels.steps.product_info'),
    2: t('parcels.steps.recipient_selection'),
    3: t('parcels.steps.confirmation')
  };
  return titles[currentStep.value] || '';
};

const getStatusClass = (order) => {
  if (order.is_delivered) return 'delivered';
  if (order.is_arrived) return 'arrived';
  if (order.is_shipped) return 'shipped';
  if (order.is_accepted) return 'accepted';
  if (order.is_rejected) return 'rejected';
  return 'pending';
};
const filteredOrders = computed(() => {
  const currentOrders = ownOrders.value;

  if (!selectedFilter.value || selectedFilter.value === 'all') return currentOrders;

  return currentOrders.filter(order => {
    switch(selectedFilter.value) {
      case 'accepted': return order.is_accepted;
      case 'rejected': return order.is_rejected;
      case 'shipped': return order.is_shipped;
      case 'arrived': return order.is_arrived;
      case 'delivered': return order.is_delivered;
      default: return true;
    }
  });
});
const getStatusText = (order) => {
  if (order.is_delivered) return t('parcels.status.delivered');
  if (order.is_arrived) return t('parcels.status.arrived');
  if (order.is_shipped) return t('parcels.status.shipped');
  if (order.is_accepted) return t('parcels.status.accepted');
  if (order.is_rejected) return t('parcels.status.rejected');
  return t('parcels.status.pending');
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString(locale.value, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

// Notification methods
const showNotificationMessage = (message, type = 'success') => {
  notificationMessage.value = message;
  notificationType.value = type;
  showNotification.value = true;

  setTimeout(() => {
    hideNotification();
  }, 5000);
};

const hideNotification = () => {
  showNotification.value = false;
};

// Computed properties
const currentFilters = computed(() => {
  return tabs.value.find(tab => tab.key === selectedTab.value)?.filters || [];
});

const totalPrice = computed(() => {
  return parcels.value.reduce((sum, parcel) => {
    return sum + (parseFloat(parcel.price) || 0) * (parseInt(parcel.quantity) || 0);
  }, 0);
});



const getSelectedAddress = () => {
  return addresses.value.find(addr => addr.id === selectedAddress.value) || {};
};

// Popup methods
const openPopup = () => {
  isPopupOpen.value = true;
  currentStep.value = 1;
  parcels.value = [{
    link: '',
    name: '',
    price: '',
    quantity: '',
    color: '',
    size: '',
    weight: '',
    comment: ''
  }];
  selectedAddress.value = null;
};

const closePopup = () => {
  isPopupOpen.value = false;
};

const openOrderOwnPopup = () => {
  isOrderOwnPopupOpen.value = true;
  currentOrderOwnStep.value = 1;
  orderOwn.value = {
    location: '',
    track_number: '',
    market_name: '',
    url_product: '',
    invoice_number: null,
    invoice_id: '',
    product_name: '',
    product_price: '',
    product_quantity: 1,
    product_weight: null,
    product_color: '',
    product_size: '',
    comment: '',
    receiver_address: null
  };
  selectedAddress.value = null;
};

const closeOrderOwnPopup = () => {
  isOrderOwnPopupOpen.value = false;
};

const nextStep = () => {
  if (currentStep.value === 1) {
    const isValid = parcels.value.every(parcel => {
      return parcel.link?.trim() &&
          parcel.name?.trim() &&
          !isNaN(parcel.price) &&
          !isNaN(parcel.quantity) &&
          parcel.color?.trim() &&
          parcel.size?.trim() &&
          !isNaN(parcel.weight);
    });

    if (!isValid) {
      showNotificationMessage('Пожалуйста, заполните все обязательные поля (помечены *) корректными значениями', 'error');
      return;
    }
  }
  currentStep.value < 3 && currentStep.value++;
};

const prevStep = () => currentStep.value > 1 && currentStep.value--;

const nextOrderOwnStep = () => {
  if (currentOrderOwnStep.value === 1) {
    const priceStr = String(orderOwn.value.product_price || '').replace(',', '.');
    const quantityStr = String(orderOwn.value.product_quantity || '');
    
    if (!orderOwn.value.location || !orderOwn.value.track_number || !orderOwn.value.market_name ||
        !orderOwn.value.product_name || !priceStr || isNaN(Number(priceStr)) ||
        !quantityStr || isNaN(Number(quantityStr)) || !orderOwn.value.product_color) {
      showNotificationMessage('Пожалуйста, заполните все обязательные поля (*)', 'error');
      return;
    }
  }
  currentOrderOwnStep.value < 2 && currentOrderOwnStep.value++;
};

const prevOrderOwnStep = () => currentOrderOwnStep.value > 1 && currentOrderOwnStep.value--;

const addParcel = () => {
  parcels.value.push({
    link: '',
    name: '',
    price: '',
    quantity: '',
    color: '',
    size: '',
    weight: '',
    comment: ''
  });
};

const selectAddress = (id) => {
  selectedAddress.value = id;
};

const navigateToAddresses = () => {
  router.push('/address');
  closePopup();
  closeOrderOwnPopup();
};

// API methods
const fetchAddresses = async () => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) throw new Error('Authentication token not found');

    const response = await axios.get(
        'https://abuexpresslogisticscargo.com/api/addresses/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json'
          }
        }
    );

    addresses.value = response.data || [];
  } catch (error) {
    console.error('Address loading error:', error);
    showNotificationMessage('Ошибка загрузки адресов: ' + (error.response?.data?.detail || error.message), 'error');
  }
};

const fetchOrders = async () => {
  try {
    isLoading.value = true;
    const token = localStorage.getItem('access_token');

    if (!token) throw new Error('Authentication token not found');

    const ownOrdersResponse = await axios.get('https://abuexpresslogisticscargo.com/api/order-own/', {
      headers: { Authorization: `Bearer ${token}` }
    });

    ownOrders.value = ownOrdersResponse.data || [];
  } catch (error) {
    console.error('Order loading error:', error);
    showNotificationMessage('Ошибка загрузки заказов: ' + (error.response?.data?.detail || error.message), 'error');
  } finally {
    isLoading.value = false;
  }
};

const submitOrder = async () => {
  try {
    isLoading.value = true;
    const token = localStorage.getItem('access_token');
    if (!token) throw new Error('Authentication token not found');

    if (!selectedAddress.value) {
      throw new Error('Please select an address');
    }

    // Transform the parcels data to match API expectations
    const orderData = {
      url_product: parcels.value[0].link, // Assuming single product for now
      product_name: parcels.value[0].name,
      product_price: Number(parcels.value[0].price),
      product_quantity: Number(parcels.value[0].quantity),
      product_color: parcels.value[0].color,
      product_size: parcels.value[0].size,
      product_weight: Number(parcels.value[0].weight),
      comment: parcels.value[0].comment,
      receiver_address: selectedAddress.value
    };

    // Remove empty fields
    Object.keys(orderData).forEach(key => {
      if (orderData[key] === null || orderData[key] === undefined || orderData[key] === '') {
        delete orderData[key];
      }
    });

    const response = await axios.post(
        'https://abuexpresslogisticscargo.com/api/order/',
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
    );

    await fetchOrders();
    closePopup();
    showNotificationMessage(t('parcels.notifications.order_success'), 'success');

  } catch (error) {
    console.error('Order submission error:', error);
    let errorMessage = t('parcels.notifications.order_error');

    if (error.response?.data) {
      // Handle validation errors
      if (typeof error.response.data === 'object') {
        errorMessage = Object.entries(error.response.data)
            .map(([field, errors]) => {
              // Handle both array errors and single error strings
              const errorText = Array.isArray(errors) ? errors.join(', ') : errors;
              return `${field}: ${errorText}`;
            })
            .join('; ');
      } else {
        errorMessage = error.response.data;
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    showNotificationMessage(errorMessage, 'error');
  } finally {
    isLoading.value = false;
  }
};
const submitOrderOwn = async () => {
  try {
    isLoading.value = true;
    const token = localStorage.getItem('access_token');
    if (!token) throw new Error('Authentication token not found');

    if (!selectedAddress.value) {
      throw new Error('Please select an address');
    }

    const postData = {
      ...orderOwn.value,
      receiver_address: selectedAddress.value,
      product_price: orderOwn.value.product_price ? Number(String(orderOwn.value.product_price).replace(',', '.')) : 0,
      product_quantity: Number(orderOwn.value.product_quantity),
      product_weight: orderOwn.value.product_weight ? Number(String(orderOwn.value.product_weight).replace(',', '.')) : null,
      invoice_number: orderOwn.value.invoice_number ? Number(orderOwn.value.invoice_number) : null
    };

    await axios.post(
        'https://abuexpresslogisticscargo.com/api/order-own/',
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
    );

    await fetchOrders();
    closeOrderOwnPopup();
    showNotificationMessage('Ваш заказ успешно добавлен!');
  } catch (error) {
    console.error('Order submission error:', error);
    let errorMessage = 'Ошибка при создании заказа';
    if (error.response?.data) {
      errorMessage = Object.entries(error.response.data)
          .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
          .join('; ');
    }
    showNotificationMessage(errorMessage, 'error');
  } finally {
    isLoading.value = false;
  }
};

const fetchLocations = async () => {
  try {
    const res = await axios.get('https://abuexpresslogisticscargo.com/api/office-address/');
    if (res.data && Array.isArray(res.data)) {
      const locs = res.data.map(item => item.location);
      availableLocations.value = [...new Set(locs)];
    }
  } catch(e) {
    console.warn("Failed to fetch office address for locations", e);
  }
}

// Lifecycle hooks
onMounted(async () => {
  try {
    await fetchLocations();
    await Promise.all([fetchAddresses(), fetchOrders()]);
    // Set default filter to first available
    if (currentFilters.value.length > 0) {
      selectedFilter.value = currentFilters.value[0];
    }
  } catch (error) {
    console.error('Initialization error:', error);
  }
});
</script>
<style scoped>
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 400px;
  width: 90%;
  transform: translateX(150%);
  transition: transform 0.3s ease;
}

.notification-container.show {
  transform: translateX(0);
}

.notification {
  padding: 15px 20px;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.notification.success {
  background-color: #4CAF50;
}

.notification.error {
  background-color: #F44336;
}

.notification button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 15px;
}

/* Responsive notification */
@media (max-width: 480px) {
  .notification-container {
    top: 10px;
    right: 10px;
    width: calc(100% - 20px);
  }

  .notification {
    padding: 12px 15px;
  }
}
.parcel-page-wrapper{
  width: 100%;
}
.orders-list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 25px;
  padding: 20px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  flex-wrap: nowrap;
}

.order-item {
  flex: 0 0 300px;
  background: linear-gradient(145deg, #1a1a1a, #242424);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #2d2d2d;
  scroll-snap-align: start;
}

/* Стилизация скроллбара */
.orders-list::-webkit-scrollbar {
  height: 6px;
}

.orders-list::-webkit-scrollbar-track {
  background: #1a1a1a;
}

.orders-list::-webkit-scrollbar-thumb {
  background: #FFD700;
  border-radius: 3px;
}

/* Адаптация для мобильных */
@media (max-width: 768px) {
  .orders-list {
    scroll-snap-type: x proximity;
    gap: 15px;
  }
  
  .order-item {
    flex: 0 0 280px;
  }
}

@media (max-width: 480px) {
  .order-item {
    flex: 0 0 85vw;
    margin-right: 15px;
  }
  
  .order-item:last-child {
    margin-right: 0;
  }
}.orders-list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 25px;
  padding: 20px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  flex-wrap: nowrap;
}

.order-item {
  flex: 0 0 300px;
  background: linear-gradient(145deg, #1a1a1a, #242424);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #2d2d2d;
  scroll-snap-align: start;
}

/* Стилизация скроллбара */
.orders-list::-webkit-scrollbar {
  height: 6px;
}

.orders-list::-webkit-scrollbar-track {
  background: #1a1a1a;
}

.orders-list::-webkit-scrollbar-thumb {
  background: #FFD700;
  border-radius: 3px;
}

/* Адаптация для мобильных */
@media (max-width: 768px) {
  .orders-list {
    scroll-snap-type: x proximity;
    gap: 15px;
  }
  
  .order-item {
    flex: 0 0 280px;
  }
}

@media (max-width: 480px) {
  .order-item {
    flex: 0 0 85vw;
    margin-right: 15px;
  }
  
  .order-item:last-child {
    margin-right: 0;
  }
}

.order-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.order-header {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
}

.order-header h3 {
  font-size:20px;
  margin: 0;
  color: #fff;
  font-weight: 600;
  width: 100%;
  letter-spacing: 0.5px;
}

.order-status {
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Цвета статусов */
.order-status.accepted {
  background: rgba(76, 175, 80, 0.15);
  color: #4CAF50;
}

.order-status.rejected {
  background: rgba(244, 67, 54, 0.15);
  color: #F44336;
}

.order-status.shipped {
  background: rgba(33, 150, 243, 0.15);
  color: #2196F3;
}

.order-status.arrived {
  background: rgba(255, 152, 0, 0.15);
  color: #FF9800;
}

.order-status.delivered {
  background: rgba(56, 142, 60, 0.15);
  color: #388E3C;
}

.order-status.pending {
  background: rgba(255, 235, 59, 0.15);
  color: #FFEB3B;
}

.order-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.order-details p {
  margin: 0;
  color: #B0B0B0;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.order-details p::before {
  content: '•';
  color: #FFD700;
  margin-right: 8px;
  font-size: 1.2rem;
}

.product-link {
  color: #FFD700;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.product-link:hover {
  color: #FFD700;
  text-decoration: underline;
}

.product-link::after {
  content: '↗';
  font-size: 0.9em;
}

.order-footer {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #333;
}

.order-footer small {
  color: #666;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.order-footer small::before {
  content: '🕒';
  font-size: 1rem;
}
.input-group{
  display: flex;
  width: 100%;
  gap: 20px;
}
/* Адаптивность */
@media (max-width: 768px) {
  .order-item {
    padding: 20px;
  }

  .order-header h3 {
    font-size: 1.2rem;
  }

  .order-status {
    font-size: 0.8rem;
    padding: 5px 12px;
  }

  .order-details {
    grid-template-columns: 1fr;
  }

  .order-details p {
    font-size: 0.9rem;
  }

  .product-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .order-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .order-status {
    align-self: flex-start;
  }
}
.empty-address {
  text-align: center;
  padding: 20px;
  border: 2px dashed #FFD700;
  border-radius: 15px;
  margin: 20px 0;
}

.empty-address p {
  color: #BAAFAF;
  margin-bottom: 15px;
}

.empty-address button {
  background: transparent;
  border: 1px solid #FFD700;
  color: #FFD700;
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
}
.parcel-address-list button{
  background: transparent;
  border: 1px solid #FFD700;
  color: #FFD700;
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
}
.parcel-address-list-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #333;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.parcel-address-list-item:hover {
  border-color: #FFD700;
}

.parcel-address-list-item.selected {
  border-color: #FFD700;
  background: rgba(255, 238, 0, 0.1);
}

.parcel-address-list-item-left h2 {
  font-size: 16px;
  margin-bottom: 5px;
}

.parcel-address-list-item-left h3 {
  color: #BAAFAF;
  font-size: 14px;
}

.parcel-address-list-item-right h2 {
  font-size: 14px;
  margin-bottom: 5px;
}

.parcel-address-list-item-right h3 {
  color: #BAAFAF;
  font-size: 12px;
}
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
  border: 1px solid #FFD700;
  border-radius: 30px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px 15px;
}
.parcels-add-btn{
  border: 1px solid #FFD700;
  border-radius: 30px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px 15px;
  margin-top: 20px;
}
.parcels-add-progress-declaration-total button:hover{
  background: #FFD700;
  color: #000;

}
.parcels-add-progress-declaration-wrapper{
  width: 100%;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: #111;
  gap: 15px;
  box-sizing: border-box;
}

.modern-select {
  width: 100%;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid #333;
  color: #fff;
  background: #0A0A0A;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 5px;
}

.modern-select:focus {
  border-color: #FFEE00;
}

.modernized-form input {
  background: #0A0A0A;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid #333;
  color: #fff;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

.modernized-form input:focus {
  border-color: #FFEE00;
  outline: none;
}

.modernized-form textarea {
  background: #0A0A0A;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid #333;
  color: #fff;
  font-size: 14px;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  resize: vertical;
}

.modernized-form textarea:focus {
  border-color: #FFEE00;
  outline: none;
}

.input-row {
  display: flex;
  gap: 15px;
  width: 100%;
}

.input-row input {
  flex: 1;
}

.parcels-add-btn.primary {
  background: #FFEE00;
  color: #000;
  border: none;
  font-weight: 600;
}

.parcels-add-btn.primary:hover {
  background: #fff;
  transform: translateY(-2px);
}

.parcels-add-btn.primary:disabled {
  background: #333;
  color: #666;
  cursor: not-allowed;
  transform: none;
}

.close-icon {
  width: 28px;
  height: 28px;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  transition: all 0.2s ease;
  background: rgba(255,255,255,0.05);
  color: #fff;
}

.close-icon:hover {
  background: rgba(255, 238, 0, 0.1);
  color: #FFEE00;
  transform: rotate(90deg);
}

.nav-icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s ease;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon:hover {
  opacity: 1;
  color: #FFEE00;
  transform: scale(1.1);
}

.add-address-minor {
  margin-top: 15px;
  background: transparent;
  border: 1px dashed #333;
  color: #fff;
  padding: 10px;
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.add-address-minor:hover {
  border-color: #FFEE00;
  color: #FFEE00;
}

@media (max-width: 600px) {
  .input-row {
    flex-direction: column;
    gap: 15px;
  }
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
  outline: 1px solid #FFD700;

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

/* NEW MODAL SYSTEM */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.popup {
  background: #0A0A0A;
  padding: 30px;
  border-radius: 24px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.popup-scroll-content {
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Custom scrollbar for popup */
.popup-scroll-content::-webkit-scrollbar {
  width: 6px;
}
.popup-scroll-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}
.popup-scroll-content::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 10px;
}

.parcels-add-progress {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  background: #161616;
  padding: 15px;
  border-radius: 12px;
}
.parcels-add-progress-left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 40px;
}
.parcels-add-progress-left h3 {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 1px solid #333;
  border-radius: 50%;
  background: transparent;
  font-size: 14px;
  z-index: 2;
  transition: all 0.3s;
}
.parcels-add-progress-left h3.active {
  background: #FFEE00;
  border-color: #FFEE00;
  color: #000;
  font-weight: bold;
}
.parcels-add-progress-left span {
  width: 60px;
  position: absolute;
  height: 1px;
  background: #333;
  left: 32px;
  top: 50%;
  z-index: 1;
}
.parcels-add-progress-right {
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: end;
}
.parcels-add-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.parcels-page {
  overflow-x: hidden;
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
  border: 1px solid #FFD700;
  border-radius: 30px;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px 15px;
}
.parcels-btn button:hover {
  background: #FFD700;
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
  border: 1px solid #FFD700;

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
.parcels-add-confirmation {
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
}
@media (max-width: 768px) {

  .parcels-add-confirmation {
    margin: 0;
    padding: 0;
    border-radius: 10px;
  }
  .confirmation-content {
    max-height: 50vh;
  }
  
  .confirmation-item {
    padding: 15px;
    margin-bottom: 15px;
  }
  
  .confirmation-item h3 {
    font-size: 16px;
  }
  
  .confirmation-item p {
    font-size: 14px;
  }
  
  .selected-address {
    padding: 15px;
  }
}

/* Мобильные устройства (480px и меньше) */
@media (max-width: 480px) {
  .parcels-add-confirmation {
    margin: 0;
    padding: 0;
    border-radius: 10px;
  }
  
  .confirmation-content {
    max-height: 60vh;
    padding-right: 5px;
  }
  
  .confirmation-item {
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 8px;
  }
  
  .confirmation-item h3 {
    font-size: 15px;
    margin-bottom: 10px;
  }
  
  .confirmation-item p {
    font-size: 13px;
    margin: 6px 0;
  }
  
  .confirmation-item p::before {
    margin-right: 8px;
    font-size: 16px;
  }
  
  .selected-address {
    padding: 12px;
    margin-top: 15px;
    border-radius: 8px;
  }
  
  .selected-address h3 {
    font-size: 15px;
  }
  
  .selected-address p {
    font-size: 13px;
  }
  
  .parcels-add-btn {
    font-size: 14px;
    padding: 12px 20px;
    margin-top: 15px;
  }
}

/* Очень маленькие экраны (меньше 360px) */
@media (max-width: 360px) {
  .confirmation-item p {
    word-break: break-word;
  }
  
  .confirmation-item p::before {
    display: none;
  }
  
  .selected-address {
    padding: 10px;
  }
  
  .parcels-add-btn {
    width: 100%;
    border-radius: 25px;
  }
}


.parcels-add-text h2 {
  color: #FFEB3B;
  font-size: 24px;
  margin-bottom: 10px;
}

.parcels-add-text p {
  color: #BAAFAF;
  margin-bottom: 25px;
}

.confirmation-content {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 15px;
}

.confirmation-item {
  background: #2d2d2d;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #3d3d3d;
}

.confirmation-item h3 {
  color: #FFD700;
  font-size: 18px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #3d3d3d;
}

.confirmation-item p {
  color: #fff;
  margin: 8px 0;
  font-size: 15px;
  display: flex;
  align-items: center;
}

.confirmation-item p::before {
  content: '•';
  color: #FFD700;
  margin-right: 10px;
  font-size: 20px;
}

.selected-address {
  background: rgba(76, 175, 80, 0.15);
  border-radius: 12px;
  padding: 20px;
  margin-top: 25px;
  border: 1px solid #4CAF50;
}

.selected-address h3 {
  color: #4CAF50;
  font-size: 18px;
  margin-bottom: 12px;
}

.selected-address p {
  color: #fff;
  margin: 6px 0;
  font-size: 15px;
}

.parcels-add-btn {
  background: #FFD700;
  color: #000;
  padding: 12px 35px;
  font-size: 16px;
  border-radius: 30px;
  transition: all 0.3s;
  margin-top: 25px;
}

.parcels-add-btn:hover:not(:disabled) {
  background: #FFD700;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 238, 0, 0.3);
}

.parcels-add-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
/* Горизонтальная ориентация */
@media (max-height: 500px) {
  .confirmation-content {
    max-height: 200px;
  }
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
.parcels-btn{
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.parcels-btn button {
  margin: 0;
  width: 100%;
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