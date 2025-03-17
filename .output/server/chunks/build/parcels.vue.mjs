import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, E as Exit } from './server.mjs';
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

const empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7ZjfbcIwEMbPUftON0g3SCcoPFAewbBAOkHFBMAGbACdwH2r+keCERghnaC8t8T9TsTIQALEEKASnxTF5yPOj+NsHxa0og+lyrgFMVGJCpBHNK5KObb7hGmMlPJ/iAZolql4RddElYqU0QIiARih6dPxtADx2AJA58gALBN5EohCCcY3nUiIxo33iySkEwoB8D06sZCUpZNDsP4txARX5OA7GET0IOUdrlut9fOSB7bxJTCFQUxNo9ZshgsQBoBtfS7Xkp8XInhXamCD4PZoA3zO/T7lkEtOhDYIwj+0AbDxhZRTrrODQUK7g20XAHeIeRIO7S6215K1MIiVJLQjspSsBUJEKUk4SEnW40zRlSRcSlbKOUUFl3N6XtDsqiiBCXL60gFQ2FxRfvmOvkydxQa2SyQictiULHF+BM4QwvP61Xq9TXsKSdvH7SnLv/HnmMXxFx1A8ZZIbowECDuYPfdaiCntIaF1Q5MjBFTCww2skrSPtj19qTGNLhBG5wGhrZ0x0USs9x1Eybjj1X7v2lqWZ1y0omzH/9M7SgcZA7qHK71wEWKIF7Uz/BGPi/ErPIYZjw9MBGUI9UIDK50yto7jXq3V6hr7TamumB8p7OYnkjUpX9LelQnBesXhCZImTDviYXEtAtBylp+/CKIbZPmN/gDisNnrhVF1hgAAAABJRU5ErkJggg==";

const left = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAASCAYAAACJgPRIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBfdJtDYAgEAZgNIERjEAEItBEGkADbaBNjEAEImiDEyfozXHvuzH48YyPOzolhIiGPEWFklGkJ0kCcwV5jC3gCzgkMNEX2wKWAdcCY9n+TpBAKmBRwksqEGvSs/Upof9xK4KaXdwjaGAJGHQMGgQDa4tGcIMNZnCvsAPo/XQXWS3afHwQ1akAAAAASUVORK5CYII=";

const right = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAASCAYAAACJgPRIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBhdJREYAgDAbgnQmMYAQiEIEm0kAaaANtQgQjEMEIyO7GuQf2+9/x9nFjG1RrLXJmsiKAkxFaFDwRdO08AjcEff0SEYwKegSTIC7vELwEFm4MwdzhRHZmQmm3d1iO56QePgSrGkEYgQCHKfvra0kWKAIOMjrp4CbQbvn7dC+NIudcPJtAhgAAAABJRU5ErkJggg==";

const _sfc_main = {
  __name: "parcels",
  __ssrInlineRender: true,
  setup(__props) {
    const isPopupOpen = ref(false);
    const currentStep = ref(1);
    const parcels2 = ref([{ link: "", name: "", price: "", quantity: "", color: "", size: "", comment: "" }]);
    const selectedTab = ref("parcels");
    const selectedFilter = ref("");
    const tabs = ref([
      { key: "parcels", label: "Посылки", filters: ["В процессе", "Доставленные", "Ожидание оплаты"] },
      { key: "purchase_help", label: "Помощь в покупке", filters: ["В процессе", "Приобретенные покупки", "Подтвержденные покупки", "Одобренные товары"] },
      { key: "your_purchases", label: "Ваши покупки", filters: ["В ожидании", "Одобренные товары"] }
    ]);
    const orders = ref([]);
    const currentFilters = computed(() => {
      var _a;
      return ((_a = tabs.value.find((tab) => tab.key === selectedTab.value)) == null ? void 0 : _a.filters) || [];
    });
    const totalPrice = computed(() => {
      return parcels2.value.reduce((sum, parcel) => sum + (parseFloat(parcel.price) || 0) * (parseInt(parcel.quantity) || 0), 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "parcels-page" }, _attrs))} data-v-e7ef923b><div class="tabs" data-v-e7ef923b><!--[-->`);
      ssrRenderList(tabs.value, (tab, index) => {
        _push(`<button class="${ssrRenderClass({ active: selectedTab.value === tab.key })}" data-v-e7ef923b>${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div><div class="divider" data-v-e7ef923b></div><div class="sub-tabs" data-v-e7ef923b><!--[-->`);
      ssrRenderList(currentFilters.value, (filter, index) => {
        _push(`<button class="${ssrRenderClass([{ active: selectedFilter.value === filter }, "sub-tab"])}" data-v-e7ef923b>${ssrInterpolate(filter)} <span class="count" data-v-e7ef923b>0</span></button>`);
      });
      _push(`<!--]--></div><div class="parcels-btn" data-v-e7ef923b><button data-v-e7ef923b>+ Новый адрес</button></div>`);
      if (orders.value.length === 0) {
        _push(`<div class="empty-state" data-v-e7ef923b><img${ssrRenderAttr("src", unref(empty))} alt="Нет заказов" class="empty-image" data-v-e7ef923b><p class="empty-text" data-v-e7ef923b>Заказов не найдено</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isPopupOpen.value) {
        _push(`<div class="parcels-add" data-v-e7ef923b><div class="parcels-add-wrapper" data-v-e7ef923b><div class="parcels-add-title" data-v-e7ef923b>`);
        if (currentStep.value === 1) {
          _push(`<h2 data-v-e7ef923b>Добавить заказ</h2>`);
        } else {
          _push(`<!---->`);
        }
        if (currentStep.value === 2) {
          _push(`<h2 data-v-e7ef923b>Выбор получателя</h2>`);
        } else {
          _push(`<!---->`);
        }
        if (currentStep.value === 3) {
          _push(`<h2 data-v-e7ef923b>Подтверждение заказа</h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img${ssrRenderAttr("src", unref(Exit))} alt="close" data-v-e7ef923b></div><div class="parcels-add-progress" data-v-e7ef923b><div class="parcels-add-progress-left" data-v-e7ef923b><h3 class="${ssrRenderClass({ active: currentStep.value >= 1 })}" data-v-e7ef923b>1</h3><span data-v-e7ef923b></span><h3 class="${ssrRenderClass({ active: currentStep.value >= 2 })}" data-v-e7ef923b>2</h3><span data-v-e7ef923b></span><h3 class="${ssrRenderClass({ active: currentStep.value >= 3 })}" data-v-e7ef923b>3</h3></div><div class="parcels-add-progress-right" data-v-e7ef923b>`);
        if (currentStep.value > 1) {
          _push(`<img${ssrRenderAttr("src", unref(left))} alt="left" data-v-e7ef923b>`);
        } else {
          _push(`<!---->`);
        }
        if (currentStep.value < 3) {
          _push(`<img${ssrRenderAttr("src", unref(right))} alt="right" data-v-e7ef923b>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (currentStep.value === 1) {
          _push(`<div class="parcels-add-progress-declaration" data-v-e7ef923b><div class="parcels-add-text" data-v-e7ef923b><h2 data-v-e7ef923b>Товары для покупки</h2><p data-v-e7ef923b>Введите данные товаров, которые хотите купить.</p></div><!--[-->`);
          ssrRenderList(parcels2.value, (parcel, index) => {
            _push(`<div class="parcels-add-progress-declaration-wrapper" data-v-e7ef923b><h4 data-v-e7ef923b>Декларация</h4><input type="text"${ssrRenderAttr("value", parcel.link)} placeholder="Ссылка на товар*" data-v-e7ef923b><label data-v-e7ef923b><input type="text"${ssrRenderAttr("value", parcel.name)} placeholder="Название товара*" data-v-e7ef923b><input type="text"${ssrRenderAttr("value", parcel.price)} placeholder="Цена за ед $*" data-v-e7ef923b><input type="text"${ssrRenderAttr("value", parcel.quantity)} placeholder="Количество* шт" data-v-e7ef923b></label><label data-v-e7ef923b><input type="text"${ssrRenderAttr("value", parcel.color)} placeholder="Цвет*" data-v-e7ef923b><input type="text"${ssrRenderAttr("value", parcel.size)} placeholder="Размер*" data-v-e7ef923b></label><textarea placeholder="Комментарий для оператора" data-v-e7ef923b>${ssrInterpolate(parcel.comment)}</textarea></div>`);
          });
          _push(`<!--]--><div class="parcels-add-progress-declaration-total" data-v-e7ef923b><h2 data-v-e7ef923b>Итого: ${ssrInterpolate(totalPrice.value)}$</h2><button data-v-e7ef923b>+ Добавить товар</button></div><div class="parcels-add-btn-wrapper" data-v-e7ef923b><button class="parcels-add-btn" data-v-e7ef923b>Продолжить</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (currentStep.value === 2) {
          _push(`<div class="parcels-add-address" data-v-e7ef923b><div class="parcels-add-text" data-v-e7ef923b><h2 data-v-e7ef923b>Выбор получателя</h2><p data-v-e7ef923b>Выберите сохраненный адрес или добавьте новый.</p></div><div class="parcels-add-address-content" data-v-e7ef923b><h2 data-v-e7ef923b>Список адресов</h2></div><div class="parcels-add-btn-wrapper" data-v-e7ef923b><button class="parcels-add-btn" data-v-e7ef923b>Продолжить</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (currentStep.value === 3) {
          _push(`<div class="parcels-add-confirmation" data-v-e7ef923b><div class="parcels-add-text" data-v-e7ef923b><h2 data-v-e7ef923b>Подтверждение заказа</h2><p data-v-e7ef923b>Проверьте все данные перед отправкой.</p></div><div class="parcels-add-btn-wrapper" data-v-e7ef923b><button class="parcels-add-btn" data-v-e7ef923b>Отправить заказ</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/parcels.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const parcels = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7ef923b"]]);

export { parcels as default };
//# sourceMappingURL=parcels.vue.mjs.map
