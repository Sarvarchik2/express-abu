
<template>
  <div class="profile-page">
    <div class="profile-top">
      <button
          v-for="country in countries"
          :key="country.name"
          :class="{ 'profile-button-active': selectedCountry === country.name }"
          @click="selectCountry(country)"
      >
        {{ $t(`profile.countries.${country.name}`) }}
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
          <img :src="selectedCountryFlag" :alt="$t('profile.flag_alt')" />
        </div>
        <h2>
          {{ $t('profile.your_address_in') }} {{ $t(`profile.countries.${country.name}`) }}
          <p>
            {{ $t('profile.address_instructions') }} {{ $t(`profile.countries.${country.name}`) }}
          </p>
        </h2>
      </div>

      <span class="profile-bottom-span"></span>
      <div class="profile-bottom-name">
        <h2>
          {{ fullName }}
          <p>{{ $t('profile.recipient') }}</p>
          <p v-if="userId" style="margin-top: 5px; font-weight: bold; color: #ffee00;">
            {{ $t('profile.personal_id') }}: {{ userId }}
          </p>
        </h2>
        <button @click="copyToClipboard(country.name2)">
          <img :src="copy" :alt="$t('profile.copy_alt')" />
        </button>
      </div>

      <template v-for="(office, oIdx) in country.offices" :key="oIdx">
        <h3 v-if="country.offices.length > 1" style="color: #ffee00; text-align: center; margin: 20px 0;">{{ $t('profile.office') }} {{ oIdx + 1 }}</h3>
        <span class="profile-bottom-span" v-if="oIdx > 0"></span>
        <div class="profile-bottom-address">
          <ul>
            <li v-for="(field, idx) in office.addressFields" :key="idx">
              <h2>{{ $t(`profile.address_fields.${field.label}`) }}</h2>
              <p>{{ field.value }}</p>
              <button class="copy-btn" @click="copyToClipboard(field.value)">
                <img :src="copy" :alt="$t('profile.copy_alt')" />
              </button>
            </li>
          </ul>
        </div>

        <span class="profile-bottom-span"></span>
        <div class="profile-bottom-chart">
          <h2>{{ $t('profile.work_schedule') }}</h2>
          <h3>
            <p v-if="office.working_hours">{{ office.working_hours }}</p>
            <template v-else>
              <p>{{ $t('profile.weekdays_schedule') }}</p>
              <p>{{ $t('profile.saturday_schedule') }}</p>
            </template>
          </h3>
        </div>
        <span class="profile-bottom-span"></span>
      </template>
      <!-- <div class="accordion-container">
        <div
            class="accordion-item"
            v-for="(item, index) in accordionItems"
            :key="index"
        >
          <button @click="toggleAccordion(index)" class="accordion-title">
            {{ $t(`profile.faq.${item.question}`) }}
            <span class="plus-icon">+</span>
          </button>
          <div
              class="accordion-content"
              v-show="activeAccordion === index"
          >
            <p>{{ $t(`profile.faq.${item.answer}`) }}</p>
          </div>
        </div>
      </div> -->
    </div>

    <transition name="fade">
      <div v-if="copyMessage" class="copy-popup">✅ {{ copyMessage }}</div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import copy from "@/assets/profile/copy.png";

// Флаги стран
import usaFlag from "@/assets/profile/profile.png";
import turkeyFlag from "@/assets/profile/turkey.png";
import chinaFlag from "@/assets/profile/china.png";
import germanyFlag from "@/assets/profile/germany.png";
import koreaFlag from "@/assets/profile/korea.png";
import polshaFlag from "@/assets/profile/polsha.png";
import ukFlag from "@/assets/profile/uk.png";
import australiaFlag from "@/assets/profile/avstralya.png";
import italyFlag from "@/assets/profile/italiya.png";

const { t } = useI18n();
const fullName = ref('')
const userId = ref('')

const countries = ref([
  {
    name: "usa",
    name2: "USA",
    flag: usaFlag,
    offices: [
      {
        working_hours: "",
        addressFields: [
          { label: "address1", value: "606 Interchange Blvd" },
          { label: "city", value: "Newark" },
          { label: "state", value: "DE" },
          { label: "zip", value: "19711" },
          { label: "country", value: "USA" },
          { label: "phone", value: "+1 (929) 244-0000" },
        ]
      }
    ]
  }
]);

const mapLocationToFlag = (location) => {
  const loc = location.toLowerCase();
  if (loc.includes('turk') || loc.includes('турц')) return turkeyFlag;
  if (loc.includes('chin') || loc.includes('xitoy') || loc.includes('китай')) return chinaFlag;
  if (loc.includes('german') || loc.includes('герман')) return germanyFlag;
  if (loc.includes('korea') || loc.includes('корея')) return koreaFlag;
  if (loc.includes('polsh') || loc.includes('poland') || loc.includes('польш')) return polshaFlag;
  if (loc.includes('uk') || loc.includes('england') || loc.includes('великоб')) return ukFlag;
  if (loc.includes('avstral') || loc.includes('austral') || loc.includes('австрал')) return australiaFlag;
  if (loc.includes('ital') || loc.includes('итал')) return italyFlag;
  return usaFlag; // default fallback
};

onMounted(async () => {
  if (process.client) {
    fullName.value = localStorage.getItem('full_name') || t('profile.no_name')
    userId.value = localStorage.getItem('user_id') || ''

    // Fetch up-to-date user data
    const token = localStorage.getItem('access_token')
    if (token) {
      try {
        const response = await axios.get('https://abuexpresslogisticscargo.com/api/get-me/', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        if (response.data?.success) {
          const user = response.data.data
          userId.value = user.id
          fullName.value = user.full_name || fullName.value
          localStorage.setItem('user_id', user.id)
          localStorage.setItem('full_name', fullName.value)
        }
      } catch (e) {
        console.error('Ошибка при загрузке профиля', e)
      }
    }

    // Fetch office addresses
    try {
      const officeRes = await axios.get('https://abuexpresslogisticscargo.com/api/office-address/')
      if (officeRes.data && Array.isArray(officeRes.data) && officeRes.data.length > 0) {
        const locMap = {};

        officeRes.data.forEach(item => {
          const locName = item.location.toLowerCase();
          if (!locMap[locName]) {
            locMap[locName] = {
              name: locName,
              name2: item.location,
              flag: mapLocationToFlag(item.location),
              offices: []
            };
          }
          locMap[locName].offices.push({
            working_hours: item.working_hours,
            addressFields: [
              { label: "address1", value: item.address },
              { label: "state", value: item.state },
              { label: "zip", value: item.zip },
              { label: "country", value: item.location },
              { label: "phone", value: item.phone_number }
            ]
          });
        });

        const mappedCountries = Object.values(locMap);

        if (mappedCountries.length > 0) {
          countries.value = mappedCountries;
          selectedCountry.value = mappedCountries[0].name;
          selectedCountryFlag.value = mappedCountries[0].flag;
        }
      }
    } catch (err) {
      console.error('Ошибка при загрузке адресов', err);
    }
  }
})

const accordionItems = ref([
  { question: "create_account", answer: "create_account_answer" },
  { question: "register_order", answer: "register_order_answer" },
  { question: "tax_free_state", answer: "tax_free_state_answer" },
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
    copyMessage.value = t('profile.copied_message', { text });
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
