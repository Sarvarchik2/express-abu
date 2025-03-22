

<template>
  <div>
    <template v-if="!authRoutes.includes(route.path)">
      <Navbar />
    </template>

    <NuxtLayout>
      <div class="abu-express-wrapper">
        <Sidebar v-if="showSidebar" />
        <NuxtPage />
      </div>
    </NuxtLayout>

    <template v-if="!authRoutes.includes(route.path)">
      <Footer />
    </template>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '~/components/navbar/navbar.vue';
import Footer from '~/components/footer/footer.vue';
import Sidebar from '~/components/sidebar/sidebar.vue';

const route = useRoute();

// Страницы, где показывать Sidebar
const sidebarRoutes = ['/profile', '/parcels', '/address', '/balance', '/claims', '/settings'];
const authRoutes = ['/login', '/registration'];

const showSidebar = computed(() => sidebarRoutes.includes(route.path));

onMounted(() => {
  watch(
      () => route.path,
      (newPath) => {
        if (process.client) {
          if (authRoutes.includes(newPath)) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = '';
          }
        }
      },
      { immediate: true }
  );
});
import { useI18n } from 'vue-i18n';
import { useCookie } from '#app';
import { onMounted, ref } from 'vue';

const { locale, setLocaleMessage } = useI18n();
const langCookie = useCookie('i18n_redirected');
const isLoaded = ref(false); // Контроль загрузки

const loadLocaleMessages = async (lang) => {
  try {
    const response = await fetch(`/locales/${lang}.json`);
    const messages = await response.json();
    setLocaleMessage(lang, messages);
    locale.value = lang;
    isLoaded.value = true; // Переводы загружены
  } catch (error) {
    console.error("Ошибка загрузки локализации:", error);
  }
};

onMounted(() => {
  // Если кука не установлена, ставим 'uz' по умолчанию
  const userLang = langCookie.value || 'uz';
  langCookie.value = userLang;
  loadLocaleMessages(userLang);
});
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #000;
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: #fff;
}
.abu-express-wrapper{
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
@media (max-width: 600px) {
  .abu-express-wrapper{
    flex-direction: column;
  }
}
</style>