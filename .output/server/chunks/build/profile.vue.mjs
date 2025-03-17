import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'lucide-vue-next';

const copy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE4SURBVHgB7VTtUcJAEH0XLSBoA7ECYwVqBVpCOkArACvQDgwVaAehBKyA+B8IFXC8vVk+AguBGX4xvJnN3uU2bzc7t89hD3yFxHrvWihxDEjU9hNUNN9ghR8hqyXbIpOACN9c9nnaMzPOQuUxz1/oE3i8u1t8bRGysicedrgUn8PGPxMO+Nu/4RtWSZe6G7RqhCTrkKSr26mahUR9ya8fWG1G/0m7q/WWmYYk/aHFaABjstDDMd7YotewrpDKWaQBqWbuMcu0iZAxeagwwj2ulvHxknCx2fObFkq2KNl8GeHEuBCeIWHMq9PW9UAe17qpXc4jkAbz+OAsr+6wjJuOUvdQJpW3IgjKGtxaQKHZREX+2Ax7akS6HB4hiuTwzDHs2xmpzqwwP1BYhyIMFo/bQS69NPvZJP9zsRam0FADqeAAAAAASUVORK5CYII=";

const usaFlag = "data:image/png;base64,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";

const turkeyFlag = "" + __buildAssetsURL("turkey.D8n122L_.png");

const chinaFlag = "" + __buildAssetsURL("china.D8XtiZg2.png");

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const countries = ref([
      {
        name: "США",
        name2: "Журабаев Асадбек",
        flag: usaFlag,
        addressFields: [
          { label: "Адрес 1", value: "606 Interchange Blvd" },
          { label: "Адрес 2", value: "ID 19046" },
          { label: "Город", value: "Newark" },
          { label: "Штат", value: "DE" },
          { label: "ZIP-код", value: "19711" },
          { label: "Страна", value: "USA" },
          { label: "Номер", value: "+1 (929) 244-0000" }
        ]
      },
      {
        name: "Турция",
        name2: "Журабаев Асадбек",
        flag: turkeyFlag,
        addressFields: [
          { label: "Адрес 1", value: "Taksim Square, Istiklal St. 12" },
          { label: "Адрес 2", value: "ID 45789" },
          { label: "Город", value: "Стамбул" },
          { label: "Штат", value: "Marmara" },
          { label: "ZIP-код", value: "34435" },
          { label: "Страна", value: "Turkey" },
          { label: "Номер", value: "+90 (532) 456-7890" }
        ]
      },
      {
        name: "Китай",
        name2: "Журабаев Асадбек",
        flag: chinaFlag,
        addressFields: [
          { label: "Адрес 1", value: "123 Beijing Road" },
          { label: "Адрес 2", value: "ID 78542" },
          { label: "Город", value: "Пекин" },
          { label: "Штат", value: "Beijing Municipality" },
          { label: "ZIP-код", value: "100000" },
          { label: "Страна", value: "China" },
          { label: "Номер", value: "+86 (10) 8765-4321" }
        ]
      }
    ]);
    const accordionItems = ref([
      { question: "Как создать личный кабинет?", answer: "Зарегистрируйтесь на сайте и подтвердите email." },
      { question: "Как зарегистрировать интернет заказ?", answer: "Выберите товары и перейдите к оформлению заказа." },
      { question: "Будет ли склад в безналоговом штате?", answer: "Да, склад есть в безналоговом штате Делавэр (DE)." }
    ]);
    const selectedCountry = ref(countries.value[0].name);
    const selectedCountryFlag = ref(countries.value[0].flag);
    const copyMessage = ref("");
    const activeAccordion = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-page" }, _attrs))} data-v-9749ee98><div class="profile-top" data-v-9749ee98><!--[-->`);
      ssrRenderList(countries.value, (country) => {
        _push(`<button class="${ssrRenderClass({ "profile-button-active": selectedCountry.value === country.name })}" data-v-9749ee98>${ssrInterpolate(country.name)}</button>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(countries.value, (country) => {
        _push(`<div style="${ssrRenderStyle(selectedCountry.value === country.name ? null : { display: "none" })}" class="profile-bottom" data-v-9749ee98><div class="profile-bottom-title" data-v-9749ee98><div class="profile-bottom-title-logo" data-v-9749ee98><img${ssrRenderAttr("src", selectedCountryFlag.value)} alt="Flag" data-v-9749ee98></div><h2 data-v-9749ee98> Ваш адрес в ${ssrInterpolate(country.name)} <p data-v-9749ee98> Укажите ваш адрес в ${ssrInterpolate(country.name)} как адрес для доставки при покупке online </p></h2></div><span class="profile-bottom-span" data-v-9749ee98></span><div class="profile-bottom-name" data-v-9749ee98><h2 data-v-9749ee98>${ssrInterpolate(country.name2)} <p data-v-9749ee98>Получатель</p></h2><button data-v-9749ee98><img${ssrRenderAttr("src", unref(copy))} alt="copy" data-v-9749ee98></button></div><span class="profile-bottom-span" data-v-9749ee98></span><div class="profile-bottom-address" data-v-9749ee98><ul data-v-9749ee98><!--[-->`);
        ssrRenderList(country.addressFields, (field, idx) => {
          _push(`<li data-v-9749ee98><h2 data-v-9749ee98>${ssrInterpolate(field.label)}</h2><p data-v-9749ee98>${ssrInterpolate(field.value)}</p><button class="copy-btn" data-v-9749ee98><img${ssrRenderAttr("src", unref(copy))} alt="copy" data-v-9749ee98></button></li>`);
        });
        _push(`<!--]--></ul></div><span class="profile-bottom-span" data-v-9749ee98></span><div class="profile-bottom-chart" data-v-9749ee98><h2 data-v-9749ee98>График работы</h2><h3 data-v-9749ee98><p data-v-9749ee98>09:00 - 17:00 | Понедельник - Пятница</p><p data-v-9749ee98>09:00 - 14:00 | Суббота</p></h3></div><span class="profile-bottom-span" data-v-9749ee98></span><div class="accordion-container" data-v-9749ee98><!--[-->`);
        ssrRenderList(accordionItems.value, (item, index) => {
          _push(`<div class="accordion-item" data-v-9749ee98><button class="accordion-title" data-v-9749ee98>${ssrInterpolate(item.question)} <span class="plus-icon" data-v-9749ee98>+</span></button><div class="accordion-content" style="${ssrRenderStyle(activeAccordion.value === index ? null : { display: "none" })}" data-v-9749ee98><p data-v-9749ee98>${ssrInterpolate(item.answer)}</p></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      if (copyMessage.value) {
        _push(`<div class="copy-popup" data-v-9749ee98>✅ ${ssrInterpolate(copyMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9749ee98"]]);

export { profile as default };
//# sourceMappingURL=profile.vue.mjs.map
