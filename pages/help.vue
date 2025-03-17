<template>
  <div class="help">
    <h2 class="help-title">Часто задаваемые вопросы</h2>

    <div class="faq">
      <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          @click="toggleFaq(index)"
      >
        <div class="faq-question">
          <span>{{ item.question }}</span>
          <span class="faq-toggle">{{ activeIndex === index ? '−' : '+' }}</span>
        </div>

        <div v-if="activeIndex === index" class="faq-answer">
          <p>{{ item.answer }}</p>

          <!-- YouTube видео, если есть -->
          <iframe
              v-if="item.video"
              width="100%"
              height="250"
              :src="`https://www.youtube.com/embed/${item.video}`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
useHead({
  title: "Помощь — Abu Express",
  meta: [
    { name: "description", content: "Ответы на популярные вопросы по доставке. Узнайте, как отправить посылку, какие тарифы и сроки доставки у Abu Express." },
    { name: "keywords", content: "FAQ, вопросы и ответы, доставка, грузоперевозки, Abu Express" },
    { property: "og:title", content: "Помощь — Abu Express" },
    { property: "og:description", content: "Ответы на часто задаваемые вопросы по доставке и тарифам." },
    { property: "og:image", content: "/assets/faq-preview.png" },
    { property: "og:url", content: "https://abu-express-nuxt.netlify.app/help" }
  ]
});

export default {
  name: "Help",
  data() {
    return {
      activeIndex: null,
      faqItems: [
        {
          question: "Как зарегистрироваться на вашем сайте?",
          answer: "Просто перейдите на страницу регистрации и заполните все необходимые данные.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
          video: "eOGyJPBHNCk" // YouTube ID видео
        },
        {
          question: "Как отправить посылку, если я нахожусь в другом штате?",
          answer: "Свяжитесь с нашей службой поддержки, и мы подскажем ближайший пункт приема посылок.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
          video: "oHg5SJYRHA0"
        },
        {
          question: "Как работает услуга выкупа товара?",
          answer: "Мы покупаем товар за вас и отправляем его в Узбекистан.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
          video: "dQw4w9WgXcQ"
        },
        {
          question: "Какой минимальный вес для отправки?",
          answer: "Минимальный вес посылки - 5 кг.",
          video: null // У этого вопроса видео нет
        }
      ]
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.help {
  padding: 20px;
  color: white;
  background-color: black;
  width: 100%;
}

.help-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.faq {
  width: 100%;
  margin: 0 auto;
}

.faq-item {
  background: #0A0A0A;
  padding: 15px;
  border-right: 30px;
overflow: hidden;
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;

}

.faq-item iframe{
  border-right: 30px;
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.faq-toggle {
  font-size: 24px;
  color: #FFEE00;
}

.faq-answer {
  margin-top: 10px;
  font-size: 14px;
}

iframe {
  width: 100%;
  height: 250px;
  margin-top: 10px;
  border-radius: 8px;
}
</style>
