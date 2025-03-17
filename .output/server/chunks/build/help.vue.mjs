import { u as useHead } from './v3.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import 'vue-router';
import 'lucide-vue-next';

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
const _sfc_main = {
  name: "Help",
  data() {
    return {
      activeIndex: null,
      faqItems: [
        {
          question: "Как зарегистрироваться на вашем сайте?",
          answer: "Просто перейдите на страницу регистрации и заполните все необходимые данные.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
          video: "eOGyJPBHNCk"
          // YouTube ID видео
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
          video: null
          // У этого вопроса видео нет
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "help" }, _attrs))} data-v-0a50630f><h2 class="help-title" data-v-0a50630f>Часто задаваемые вопросы</h2><div class="faq" data-v-0a50630f><!--[-->`);
  ssrRenderList($data.faqItems, (item, index) => {
    _push(`<div class="faq-item" data-v-0a50630f><div class="faq-question" data-v-0a50630f><span data-v-0a50630f>${ssrInterpolate(item.question)}</span><span class="faq-toggle" data-v-0a50630f>${ssrInterpolate($data.activeIndex === index ? "−" : "+")}</span></div>`);
    if ($data.activeIndex === index) {
      _push(`<div class="faq-answer" data-v-0a50630f><p data-v-0a50630f>${ssrInterpolate(item.answer)}</p>`);
      if (item.video) {
        _push(`<iframe width="100%" height="250"${ssrRenderAttr("src", `https://www.youtube.com/embed/${item.video}`)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-v-0a50630f></iframe>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/help.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const help = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0a50630f"]]);

export { help as default };
//# sourceMappingURL=help.vue.mjs.map
