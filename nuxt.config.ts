export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: 'locales/',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'uz', name: "O'zbek", file: 'uz.json' }
    ],
    defaultLocale: 'uz', // ✅ Узбекский по умолчанию
    strategy: 'prefix_except_default', // ✅ Убираем /uz, но оставляем /en и /ru
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'uz'
    }
  },

  app: {
    head: {
      title: "Abu Express",
      link: [{ rel: "icon", type: "image/png", href: "/logo.ico" }]
    }
  },

  compatibilityDate: '2025-03-16'
});
