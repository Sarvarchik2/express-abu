

<!--<template>-->
<!--  &lt;!&ndash; Notification Component &ndash;&gt;-->
<!--  <div class="notification-container" :class="{ 'show': showNotification }">-->
<!--    <div class="notification" :class="notificationType">-->
<!--      <span>{{ notificationMessage }}</span>-->
<!--      <button @click="hideNotification">&times;</button>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="parcels-page">-->
<!--    <div class="tabs">-->
<!--      <button-->
<!--          v-for="(tab, index) in tabs"-->
<!--          :key="index"-->
<!--          :class="{ active: selectedTab === tab.key }"-->
<!--          @click="selectedTab = tab.key"-->
<!--      >-->
<!--        {{ tab.label }}-->
<!--      </button>-->
<!--    </div>-->

<!--    <div class="divider"></div>-->

<!--    <div class="sub-tabs">-->
<!--      <button-->
<!--          v-for="(filter, index) in currentFilters"-->
<!--          :key="index"-->
<!--          class="sub-tab"-->
<!--          :class="{ active: selectedFilter === filter }"-->
<!--          @click="selectedFilter = filter"-->
<!--      >-->
<!--        {{ filter }} <span class="count">{{ getFilterCount(filter) }}</span>-->
<!--      </button>-->
<!--    </div>-->

<!--    <div class="parcels-btn">-->
<!--      <button @click="openPopup">+ Добавить заказ (выкуп)</button>-->
<!--      <button @click="openOrderOwnPopup" style="margin-left: 10px;">+ Добавить свой заказ</button>-->
<!--    </div>-->

<!--    <div v-if="isLoading" class="loading-indicator">-->
<!--      Загрузка данных...-->
<!--    </div>-->

<!--    <div class="parcel-page-wrapper" v-else>-->
<!--      <div v-if="filteredOrders.length === 0" class="empty-state">-->
<!--        <img :src="empty" alt="Нет заказов" class="empty-image" />-->
<!--        <p class="empty-text">Заказов не найдено</p>-->
<!--      </div>-->

<!--      <div v-else class="orders-list">-->
<!--        <div v-for="order in filteredOrders" :key="order.id" class="order-item">-->
<!--          <div class="order-header">-->
<!--            <h3>{{ order.product_name || order.name }}</h3>-->
<!--            <span class="order-status" :class="getStatusClass(order)">-->
<!--              {{ getStatusText(order) }}-->
<!--            </span>-->
<!--          </div>-->
<!--          <div class="order-details">-->
<!--            <p>Цена: ${{ order.product_price || order.price }}</p>-->
<!--            <p>Количество: {{ order.product_quantity || order.quantity }} шт</p>-->
<!--            <p v-if="order.product_weight || order.weight">Вес: {{ order.product_weight || order.weight }} кг</p>-->
<!--            <p v-if="order.product_color || order.color">Цвет: {{ order.product_color || order.color }}</p>-->
<!--            <p v-if="order.product_size || order.size">Размер: {{ order.product_size || order.size }}</p>-->
<!--            <a v-if="order.url_product || order.link" :href="order.url_product || order.link" target="_blank" class="product-link">-->
<!--              Ссылка на товар-->
<!--            </a>-->
<!--          </div>-->
<!--          <div class="order-footer">-->
<!--            <small>Дата создания: {{ formatDate(order.created_at) }}</small>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Popup for purchase help &ndash;&gt;-->
<!--    <div v-if="isPopupOpen" class="parcels-add">-->
<!--      <div class="parcels-add-wrapper">-->
<!--        <div class="parcels-add-title">-->
<!--          <h2>{{ getPopupTitle() }}</h2>-->
<!--          <img :src="close" alt="close" @click="closePopup">-->
<!--        </div>-->

<!--        <div class="parcels-add-progress">-->
<!--          <div class="parcels-add-progress-left">-->
<!--            <h3 class="active">1</h3>-->
<!--            <h3 :class="{ active: currentStep >= 2 }">2</h3>-->
<!--            <h3 :class="{ active: currentStep >= 3 }">3</h3>-->
<!--            <span></span>-->
<!--          </div>-->

<!--          <div class="parcels-add-progress-right">-->
<!--            <img v-if="currentStep > 1" :src="left" alt="left" @click="prevStep">-->
<!--            <img v-if="currentStep < 3" :src="right" alt="right" @click="nextStep">-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Step 1: Product information &ndash;&gt;-->
<!--        <div v-if="currentStep === 1" class="parcels-add-progress-declaration">-->
<!--          <div class="parcels-add-text">-->
<!--            <h2>Товары для покупки</h2>-->
<!--            <p>Введите данные товаров, которые хотите купить.</p>-->
<!--          </div>-->

<!--          <div-->
<!--              v-for="(parcel, index) in parcels"-->
<!--              :key="index"-->
<!--              class="parcels-add-progress-declaration-wrapper"-->
<!--          >-->
<!--            <h4>Декларация {{ index + 1 }}</h4>-->
<!--            <input type="text" v-model="parcel.link" placeholder="Ссылка на товар*" required>-->
<!--            <div class="input-group">-->
<!--              <input type="text" v-model="parcel.name" placeholder="Название товара*" required>-->
<!--              <input type="number" v-model="parcel.price" placeholder="Цена за ед $*" required>-->
<!--              <input type="number" v-model="parcel.quantity" placeholder="Количество* шт" required>-->
<!--            </div>-->
<!--            <div class="input-group">-->
<!--              <input type="text" v-model="parcel.color" placeholder="Цвет*" required>-->
<!--              <input type="text" v-model="parcel.size" placeholder="Размер*" required>-->
<!--              <input type="number" v-model="parcel.weight" placeholder="Вес (кг)*" required step="0.01">-->
<!--            </div>-->
<!--            <textarea v-model="parcel.comment" placeholder="Комментарий для оператора"></textarea>-->
<!--          </div>-->

<!--          <div class="parcels-add-progress-declaration-total">-->
<!--            <h2>Итого: {{ totalPrice }}$</h2>-->
<!--            <button @click="addParcel">+ Добавить товар</button>-->
<!--          </div>-->

<!--          <div class="parcels-add-btn-wrapper">-->
<!--            <button class="parcels-add-btn" @click="nextStep">Продолжить</button>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Step 2: Address selection &ndash;&gt;-->
<!--        <div v-if="currentStep === 2" class="parcels-add-address">-->
<!--          <div class="parcels-add-text">-->
<!--            <h2>Выбор получателя</h2>-->
<!--            <p>Выберите сохраненный адрес или добавьте новый.</p>-->
<!--          </div>-->

<!--          <div class="parcels-add-address-content">-->
<!--            <h2>Список адресов</h2>-->

<!--            <div v-if="addresses.length === 0" class="empty-address">-->
<!--              <p>Нет сохраненных адресов. Пожалуйста, добавьте адрес получателя.</p>-->
<!--              <button @click="navigateToAddresses">+ Добавить адрес</button>-->
<!--            </div>-->

<!--            <div v-else class="parcel-address-list">-->
<!--              <div-->
<!--                  v-for="addr in addresses"-->
<!--                  :key="addr.id"-->
<!--                  class="parcel-address-list-item"-->
<!--                  :class="{ selected: selectedAddress === addr.id }"-->
<!--                  @click="selectAddress(addr.id)"-->
<!--              >-->
<!--                <div class="parcel-address-list-item-left">-->
<!--                  <h2>{{ addr.first_name }} {{ addr.last_name }}</h2>-->
<!--                  <h3>{{ addr.address }}, {{ addr.city }}</h3>-->
<!--                </div>-->
<!--                <div class="parcel-address-list-item-right">-->
<!--                  <h2>{{ addr.phone_number }}</h2>-->
<!--                  <h3>Паспорт: {{ addr.passport_number }}</h3>-->
<!--                </div>-->
<!--              </div>-->
<!--              <button @click="navigateToAddresses">+ Добавить адрес</button>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="parcels-add-btn-wrapper">-->
<!--            <button-->
<!--                class="parcels-add-btn"-->
<!--                @click="nextStep"-->
<!--                :disabled="!selectedAddress"-->
<!--            >-->
<!--              Продолжить-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Step 3: Confirmation &ndash;&gt;-->
<!--        <div v-if="currentStep === 3" class="parcels-add-confirmation">-->
<!--          <div class="parcels-add-text">-->
<!--            <h2>Подтверждение заказа</h2>-->
<!--            <p>Проверьте все данные перед отправкой.</p>-->
<!--          </div>-->

<!--          <div class="confirmation-content">-->
<!--            <div v-for="(parcel, index) in parcels" :key="index" class="confirmation-item">-->
<!--              <h3>Товар {{ index + 1 }}</h3>-->
<!--              <p>Ссылка: {{ parcel.link }}</p>-->
<!--              <p>Название: {{ parcel.name }}</p>-->
<!--              <p>Цена: {{ parcel.price }}$</p>-->
<!--              <p>Количество: {{ parcel.quantity }} шт</p>-->
<!--              <p>Вес: {{ parcel.weight }} кг</p>-->
<!--              <p>Цвет: {{ parcel.color }}</p>-->
<!--              <p>Размер: {{ parcel.size }}</p>-->
<!--            </div>-->

<!--            <div v-if="selectedAddress" class="selected-address">-->
<!--              <h3>Адрес доставки:</h3>-->
<!--              <p>{{ getSelectedAddress().first_name }} {{ getSelectedAddress().last_name }}</p>-->
<!--              <p>{{ getSelectedAddress().address }}, {{ getSelectedAddress().city }}</p>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="parcels-add-btn-wrapper">-->
<!--            <button-->
<!--                class="parcels-add-btn"-->
<!--                @click="submitOrder"-->
<!--                :disabled="isLoading"-->
<!--            >-->
<!--              {{ isLoading ? 'Отправка...' : 'Отправить заказ' }}-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Popup for adding own order &ndash;&gt;-->
<!--    <div v-if="isOrderOwnPopupOpen" class="parcels-add">-->
<!--      <div class="parcels-add-wrapper">-->
<!--        <div class="parcels-add-title">-->
<!--          <h2>Добавить свой заказ</h2>-->
<!--          <img :src="close" alt="close" @click="closeOrderOwnPopup">-->
<!--        </div>-->

<!--        <div class="parcels-add-progress">-->
<!--          <div class="parcels-add-progress-left">-->
<!--            <h3 class="active">1</h3>-->
<!--            <h3 :class="{ active: currentOrderOwnStep >= 2 }">2</h3>-->
<!--            <span></span>-->
<!--          </div>-->

<!--          <div class="parcels-add-progress-right">-->
<!--            <img v-if="currentOrderOwnStep > 1" :src="left" alt="left" @click="prevOrderOwnStep">-->
<!--            <img v-if="currentOrderOwnStep < 2" :src="right" alt="right" @click="nextOrderOwnStep">-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Step 1: Order information &ndash;&gt;-->
<!--        <div v-if="currentOrderOwnStep === 1" class="parcels-add-progress-declaration">-->
<!--          <div class="parcels-add-text">-->
<!--            <h2>Информация о заказе</h2>-->
<!--            <p>Введите данные о вашем заказе.</p>-->
<!--          </div>-->

<!--          <div class="parcels-add-progress-declaration-wrapper">-->
<!--            <input type="text" v-model="orderOwn.track_number" placeholder="Трек-номер*" required>-->
<!--            <input type="text" v-model="orderOwn.market_name" placeholder="Название магазина*" required>-->
<!--            <input type="text" v-model="orderOwn.url_product" placeholder="Ссылка на товар">-->

<!--            <div class="input-group">-->
<!--              <input type="text" v-model="orderOwn.product_name" placeholder="Название товара*" required>-->
<!--              <input type="number" v-model="orderOwn.product_price" placeholder="Цена $*" required>-->
<!--            </div>-->

<!--            <div class="input-group">-->
<!--              <input type="number" v-model="orderOwn.product_quantity" placeholder="Количество*" required>-->
<!--              <input type="number" v-model="orderOwn.product_weight" placeholder="Вес (кг)*" required step="0.01">-->
<!--            </div>-->

<!--            <div class="input-group">-->
<!--              <input type="text" v-model="orderOwn.product_color" placeholder="Цвет*" required>-->
<!--              <input type="text" v-model="orderOwn.product_size" placeholder="Размер*" required>-->
<!--            </div>-->

<!--            <textarea v-model="orderOwn.comment" placeholder="Комментарий"></textarea>-->
<!--          </div>-->

<!--          <div class="parcels-add-btn-wrapper">-->
<!--            <button class="parcels-add-btn" @click="nextOrderOwnStep">Продолжить</button>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Step 2: Address selection &ndash;&gt;-->
<!--        <div v-if="currentOrderOwnStep === 2" class="parcels-add-address">-->
<!--          <div class="parcels-add-text">-->
<!--            <h2>Выбор получателя</h2>-->
<!--            <p>Выберите сохраненный адрес доставки.</p>-->
<!--          </div>-->

<!--          <div class="parcels-add-address-content">-->
<!--            <h2>Список адресов</h2>-->

<!--            <div v-if="addresses.length === 0" class="empty-address">-->
<!--              <p>Нет сохраненных адресов. Пожалуйста, добавьте адрес получателя.</p>-->
<!--              <button @click="navigateToAddresses">+ Добавить адрес</button>-->
<!--            </div>-->

<!--            <div v-else class="parcel-address-list">-->
<!--              <div-->
<!--                  v-for="addr in addresses"-->
<!--                  :key="addr.id"-->
<!--                  class="parcel-address-list-item"-->
<!--                  :class="{ selected: selectedAddress === addr.id }"-->
<!--                  @click="selectAddress(addr.id)"-->
<!--              >-->
<!--                <div class="parcel-address-list-item-left">-->
<!--                  <h2>{{ addr.first_name }} {{ addr.last_name }}</h2>-->
<!--                  <h3>{{ addr.address }}, {{ addr.city }}</h3>-->
<!--                </div>-->
<!--                <div class="parcel-address-list-item-right">-->
<!--                  <h2>{{ addr.phone_number }}</h2>-->
<!--                  <h3>Паспорт: {{ addr.passport_number }}</h3>-->
<!--                </div>-->
<!--              </div>-->
<!--              <button @click="navigateToAddresses">+ Добавить адрес</button>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="parcels-add-btn-wrapper">-->
<!--            <button-->
<!--                class="parcels-add-btn"-->
<!--                @click="submitOrderOwn"-->
<!--                :disabled="!selectedAddress || isLoading"-->
<!--            >-->
<!--              {{ isLoading ? 'Отправка...' : 'Отправить заказ' }}-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="notification-container" :class="{ 'show': showNotification }">
    <div class="notification" :class="notificationType">
      <span>{{ notificationMessage }}</span>
      <button @click="hideNotification">&times;</button>
    </div>
  </div>

  <!-- Language Switcher -->

  <div class="parcels-page">
    <div class="tabs">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: selectedTab === tab.key }"
          @click="selectedTab = tab.key"
      >
        {{ $t(`parcels.tabs.${tab.key}`) }}
      </button>
    </div>

    <div class="divider"></div>

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
      <button @click="openPopup">+ {{ $t('parcels.add_order') }}</button>
      <button @click="openOrderOwnPopup" style="margin-left: 10px;">+ {{ $t('parcels.add_own_order') }}</button>
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
            <p>{{ $t('parcels.product_details.price') }}: ${{ order.product_price || order.price }}</p>
            <p>{{ $t('parcels.product_details.quantity') }}: {{ order.product_quantity || order.quantity }} {{ $t('parcels.product_details.pcs') }}</p>
            <p v-if="order.product_weight || order.weight">{{ $t('parcels.product_details.weight') }}: {{ order.product_weight || order.weight }} kg</p>
            <p v-if="order.product_color || order.color">{{ $t('parcels.product_details.color') }}: {{ order.product_color || order.color }}</p>
            <p v-if="order.product_size || order.size">{{ $t('parcels.product_details.size') }}: {{ order.product_size || order.size }}</p>
            <a v-if="order.url_product || order.link" :href="order.url_product || order.link" target="_blank" class="product-link">
              {{ $t('parcels.product_details.product_link') }}
            </a>
          </div>
          <div class="order-footer">
            <small>{{ $t('parcels.product_details.creation_date') }}: {{ formatDate(order.created_at) }}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup for purchase help -->
    <div v-if="isPopupOpen" class="parcels-add">
      <div class="parcels-add-wrapper">
        <div class="parcels-add-title">
          <h2>{{ getPopupTitle() }}</h2>
          <img :src="close" alt="close" @click="closePopup">
        </div>

        <div class="parcels-add-progress">
          <div class="parcels-add-progress-left">
            <h3 class="active">1</h3>
            <h3 :class="{ active: currentStep >= 2 }">2</h3>
            <h3 :class="{ active: currentStep >= 3 }">3</h3>
            <span></span>
          </div>

          <div class="parcels-add-progress-right">
            <img v-if="currentStep > 1" :src="left" alt="left" @click="prevStep">
            <img v-if="currentStep < 3" :src="right" alt="right" @click="nextStep">
          </div>
        </div>

        <!-- Step 1: Product information -->
        <div v-if="currentStep === 1" class="parcels-add-progress-declaration">
          <div class="parcels-add-text">
            <h2>{{ $t('parcels.steps.product_info') }}</h2>
            <p>{{ $t('parcels.product_info') }}</p>
          </div>

          <div
              v-for="(parcel, index) in parcels"
              :key="index"
              class="parcels-add-progress-declaration-wrapper"
          >
            <h4>{{ $t('parcels.form.declaration') }} {{ index + 1 }}</h4>
            <input type="text" v-model="parcel.link" :placeholder="$t('parcels.form.product_link')" required>
            <div class="input-group">
              <input type="text" v-model="parcel.name" :placeholder="$t('parcels.form.product_name')" required>
              <input type="number" v-model="parcel.price" :placeholder="$t('parcels.form.price')" required>
              <input type="number" v-model="parcel.quantity" :placeholder="$t('parcels.form.quantity')" required>
            </div>
            <div class="input-group">
              <input type="text" v-model="parcel.color" :placeholder="$t('parcels.form.color')" required>
              <input type="text" v-model="parcel.size" :placeholder="$t('parcels.form.size')" required>
              <input type="number" v-model="parcel.weight" :placeholder="$t('parcels.form.weight')" required step="0.01">
            </div>
            <textarea v-model="parcel.comment" :placeholder="$t('parcels.form.comment')"></textarea>
          </div>

          <div class="parcels-add-progress-declaration-total">
            <h2>{{ $t('parcels.form.total') }}: {{ totalPrice }}$</h2>
            <button @click="addParcel">{{ $t('parcels.form.add_product') }}</button>
          </div>

          <div class="parcels-add-btn-wrapper">
            <button class="parcels-add-btn" @click="nextStep">{{ $t('parcels.form.continue') }}</button>
          </div>
        </div>

        <!-- Step 2: Address selection -->
        <div v-if="currentStep === 2" class="parcels-add-address">
          <div class="parcels-add-text">
            <h2>{{ $t('parcels.steps.recipient_selection') }}</h2>
            <p>{{ $t('parcels.select_recipient') }}</p>
          </div>

          <div class="parcels-add-address-content">
            <h2>{{ $t('parcels.address.title') }}</h2>

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
                  <h3>{{ addr.address }}, {{ addr.city }}</h3>
                </div>
                <div class="parcel-address-list-item-right">
                  <h2>{{ addr.phone_number }}</h2>
                  <h3>{{ $t('parcels.address.passport') }}: {{ addr.passport_number }}</h3>
                </div>
              </div>
              <button @click="navigateToAddresses">{{ $t('parcels.address.add_address') }}</button>
            </div>
          </div>

          <div class="parcels-add-btn-wrapper">
            <button
                class="parcels-add-btn"
                @click="nextStep"
                :disabled="!selectedAddress"
            >
              {{ $t('parcels.form.continue') }}
            </button>
          </div>
        </div>

        <!-- Step 3: Confirmation -->
        <div v-if="currentStep === 3" class="parcels-add-confirmation">
          <div class="parcels-add-text">
            <h2>{{ $t('parcels.steps.confirmation') }}</h2>
            <p>{{ $t('parcels.order_confirmation') }}</p>
          </div>

          <div class="confirmation-content">
            <div v-for="(parcel, index) in parcels" :key="index" class="confirmation-item">
              <h3>{{ $t('parcels.form.product') }} {{ index + 1 }}</h3>
              <p>{{ $t('parcels.form.product_link') }}: {{ parcel.link }}</p>
              <p>{{ $t('parcels.form.product_name') }}: {{ parcel.name }}</p>
              <p>{{ $t('parcels.form.price') }}: {{ parcel.price }}$</p>
              <p>{{ $t('parcels.form.quantity') }}: {{ parcel.quantity }} {{ $t('parcels.product_details.pcs') }}</p>
              <p>{{ $t('parcels.product_details.weight') }}: {{ parcel.weight }} kg</p>
              <p>{{ $t('parcels.product_details.color') }}: {{ parcel.color }}</p>
              <p>{{ $t('parcels.product_details.size') }}: {{ parcel.size }}</p>
            </div>

            <div v-if="selectedAddress" class="selected-address">
              <h3>{{ $t('parcels.address.delivery_address') }}:</h3>
              <p>{{ getSelectedAddress().first_name }} {{ getSelectedAddress().last_name }}</p>
              <p>{{ getSelectedAddress().address }}, {{ getSelectedAddress().city }}</p>
            </div>
          </div>

          <div class="parcels-add-btn-wrapper">
            <button
                class="parcels-add-btn"
                @click="submitOrder"
                :disabled="isLoading"
            >
              {{ isLoading ? $t('parcels.form.submitting') : $t('parcels.form.submit_order') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup for adding own order -->
    <div v-if="isOrderOwnPopupOpen" class="parcels-add">
      <div class="parcels-add-wrapper">
        <div class="parcels-add-title">
          <h2>{{ $t('parcels.own_order.title') }}</h2>
          <img :src="close" alt="close" @click="closeOrderOwnPopup">
        </div>

        <div class="parcels-add-progress">
          <div class="parcels-add-progress-left">
            <h3 class="active">1</h3>
            <h3 :class="{ active: currentOrderOwnStep >= 2 }">2</h3>
            <span></span>
          </div>

          <div class="parcels-add-progress-right">
            <img v-if="currentOrderOwnStep > 1" :src="left" alt="left" @click="prevOrderOwnStep">
            <img v-if="currentOrderOwnStep < 2" :src="right" alt="right" @click="nextOrderOwnStep">
          </div>
        </div>

        <!-- Step 1: Order information -->
        <div v-if="currentOrderOwnStep === 1" class="parcels-add-progress-declaration">
          <div class="parcels-add-text">
            <h2>{{ $t('parcels.steps.product_info') }}</h2>
            <p>{{ $t('parcels.product_info') }}</p>
          </div>

          <div class="parcels-add-progress-declaration-wrapper">
            <input type="text" v-model="orderOwn.track_number" :placeholder="$t('parcels.own_order.track_number')" required>
            <input type="text" v-model="orderOwn.market_name" :placeholder="$t('parcels.own_order.market_name')" required>
            <input type="text" v-model="orderOwn.url_product" :placeholder="$t('parcels.own_order.product_link')">

            <div class="input-group">
              <input type="text" v-model="orderOwn.product_name" :placeholder="$t('parcels.own_order.product_name')" required>
              <input type="number" v-model="orderOwn.product_price" :placeholder="$t('parcels.own_order.product_price')" required>
            </div>

            <div class="input-group">
              <input type="number" v-model="orderOwn.product_quantity" :placeholder="$t('parcels.own_order.product_quantity')" required>
              <input type="number" v-model="orderOwn.product_weight" :placeholder="$t('parcels.own_order.product_weight')" required step="0.01">
            </div>

            <div class="input-group">
              <input type="text" v-model="orderOwn.product_color" :placeholder="$t('parcels.own_order.product_color')" required>
              <input type="text" v-model="orderOwn.product_size" :placeholder="$t('parcels.own_order.product_size')" required>
            </div>

            <textarea v-model="orderOwn.comment" :placeholder="$t('parcels.own_order.comment')"></textarea>
          </div>

          <div class="parcels-add-btn-wrapper">
            <button class="parcels-add-btn" @click="nextOrderOwnStep">{{ $t('parcels.form.continue') }}</button>
          </div>
        </div>

        <!-- Step 2: Address selection -->
        <div v-if="currentOrderOwnStep === 2" class="parcels-add-address">
          <div class="parcels-add-text">
            <h2>{{ $t('parcels.steps.recipient_selection') }}</h2>
            <p>{{ $t('parcels.select_recipient') }}</p>
          </div>

          <div class="parcels-add-address-content">
            <h2>{{ $t('parcels.address.title') }}</h2>

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
                  <h3>{{ addr.address }}, {{ addr.city }}</h3>
                </div>
                <div class="parcel-address-list-item-right">
                  <h2>{{ addr.phone_number }}</h2>
                  <h3>{{ $t('parcels.address.passport') }}: {{ addr.passport_number }}</h3>
                </div>
              </div>
              <button @click="navigateToAddresses">{{ $t('parcels.address.add_address') }}</button>
            </div>
          </div>

          <div class="parcels-add-btn-wrapper">
            <button
                class="parcels-add-btn"
                @click="submitOrderOwn"
                :disabled="!selectedAddress || isLoading"
            >
              {{ isLoading ? $t('parcels.form.submitting') : $t('parcels.form.submit_order') }}
            </button>
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
import close from '@/assets/exit.png';
import left from "@/assets/left.png";
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
const orders = ref([]);
const ownOrders = ref([]);


import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const getFilterCount = (filter) => {
  const currentOrders = selectedTab.value === 'parcels' ? orders.value : ownOrders.value;

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
  track_number: '',
  market_name: '',
  url_product: '',
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
  },
  {
    key: "purchase_help",
    label: "purchase_help",
    filters: ["all", "accepted", "rejected", "shipped", "arrived", "delivered"]
  },
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
  const currentOrders = selectedTab.value === 'parcels' ? orders.value : ownOrders.value;

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
    track_number: '',
    market_name: '',
    url_product: '',
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
    if (!orderOwn.value.track_number || !orderOwn.value.market_name ||
        !orderOwn.value.product_name || isNaN(orderOwn.value.product_price) ||
        isNaN(orderOwn.value.product_quantity) || !orderOwn.value.product_color ||
        !orderOwn.value.product_size || isNaN(orderOwn.value.product_weight)) {
      showNotificationMessage('Пожалуйста, заполните все обязательные поля', 'error');
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

    const [ordersResponse, ownOrdersResponse] = await Promise.all([
      axios.get('https://abuexpresslogisticscargo.com/api/order/', {
        headers: { Authorization: `Bearer ${token}` }
      }),
      axios.get('https://abuexpresslogisticscargo.com/api/order-own/', {
        headers: { Authorization: `Bearer ${token}` }
      })
    ]);

    orders.value = ordersResponse.data || [];
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

    const orderData = {
      parcels: parcels.value.map(parcel => ({
        link: parcel.link,
        name: parcel.name,
        price: Number(parcel.price),
        quantity: Number(parcel.quantity),
        color: parcel.color,
        size: parcel.size,
        weight: Number(parcel.weight),
        comment: parcel.comment
      })),
      receiver_address: selectedAddress.value
    };

    await axios.post(
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
    showNotificationMessage('Ваш заказ успешно отправлен!');
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
      product_price: Number(orderOwn.value.product_price),
      product_quantity: Number(orderOwn.value.product_quantity),
      product_weight: Number(orderOwn.value.product_weight)
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

// Lifecycle hooks
onMounted(async () => {
  try {
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
  border: 3px solid #FFD700;
  border-radius: 25px;
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
.parcels-add-progress{

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
.parcels-add-progress-left{
  width: 86%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
  background: #FFD700;
  font-size: 16px;
}
.parcels-add-progress-left span{
  width: 100%;
  position: absolute;
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