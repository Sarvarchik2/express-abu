import { defineComponent, ref, provide, createElementBlock, useSSRContext, computed, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n } from './server.mjs';
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

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});

const _sfc_main$1 = {
  __name: "map",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/map.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Map = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-97634612"]]);

const Mail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEqSURBVHgBvVWBUcMwDHx5grCBN6BsACMwQboB3YB0EsgEZYMyQpigXiDgCRCSrUIutLnmWvfvdBcp0n8s6WKCgb9wj2/UICzErcQ85iOIRTA6OLR0g3cNkgk8y4sGlwahEaE1pRMwtigFwoNLLSqL2tkMhsqPqo7c3zkIqU7rh2AsHPKQh4hpYPOEOs23QcfRu0pF/Eh5yz1WUqBfdieRt0l6RmsCQeZbi78ZZXjwJ/ig6cbteXo0B3P6v43U/GNcx0WybaS4MpKl+DuL79JW5ngl9jLFQ0lpGmHfDiP1w2dbfz9FcIqIZabWtNZ7Pd2TVK7wf3HOEDkDDlfA1UQCyiKoSERZRCdj/0BJEDonDXtFWbQu/dQYa5SA8Co//fr5+l3K8W5x4ev3B7vY0nyq8ixJAAAAAElFTkSuQmCC";

const Point = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBnVTtVcJAEJy9ChJtACpRK/FZgbGCPCsQK1Aq0A6UCqAD0gAcDcAyexyfyUGSeW//ZGdmbzd7B1xAPQaMUpeYMzTGVBf4shyugYRXkv2JsB40T4nLq8KEiewrQzFCFyje5B4jCX0p/vhpgG5YsfzQYY3HHmJDhg0KB4dnNB9xzAq5VSFx3MgRPIhNPbjVk0PJUQUvz7wGXq0N1yiOybPjNiNzF8QjNviIS2XiMmEAa2GOfkM0zBx7m6AvZGfwj/6YSJywtZF1FFdyx0Xir1rR4BNdobvd2N8FO8UU7YdZUflke+KCSx72+gVtIbxIccnc4VvOYSreb4rJIfc3nfcoEo+K56tUoA3CBi7wHY0sflLP2RZIVLojz5r/6gAAAABJRU5ErkJggg==";

const Phone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgBpVSLdcIwDDx5gnSDdINuUDpBGaGdoO0EhQlgA8IEsAEwAWwAC4TAApiznx8EXmyicO8p/px9lhzJQICt0LN7LGiWtuX4H13BzT9B6NZK/EIJoVgOi22EP0DwKi9sW8LglAwtI6/y0tCDfnKF4B0qQedFGkcoBdP3IxhAKbhLiI35QzZQCVqsEnyKiwgazKPsCW9QQtzHVQabvIF3efihCdsE2WGEz3glM5/8NfgyLTHxpVpiVOflsogkmx5isCh4/JS9T/bvk31HpYKRDKV2qivBNR7nJRKH/gnuQuHkAt1xMPURXV7S9W90RyZNs/S0T08n0Ie/kRgT7tSFn6Mt2kRH4S//gjc9wM88xiH3Cm5e06ogVPlcrK4VdQZiUZmckJZs2AAAAABJRU5ErkJggg==";

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const countries = ref([
      {
        name: "Узбекистан",
        phone: "+998(95)955-05-55",
        email: "abuexpress@gmail.com",
        address: "Ташкент, Узбекистан, Абу Сулеймана Банакоти 225A\n",
        branches: [
          { name: "Ташкент", coords: [41.2995, 69.2401], address: "ул. Амира Темура 10", phone: "+998 90 123 45 67" },
          { name: "Самарканд", coords: [39.6547, 66.9753], address: "ул. Навои 15", phone: "+998 91 765 43 21" }
        ]
      },
      {
        name: "США",
        phone: "+19177718088",
        email: "abuexpress@gmail.com",
        address: "1954 Coney Island ave Brooklyn NY 11223",
        branches: [
          { name: "Нью-Йорк", coords: [40.5774, -73.9667], address: "1954 Coney Island ave Brooklyn NY 11223", phone: "+1 929 244 0000" }
        ]
      },
      {
        name: "Турция",
        phone: "+905013271111  \n+905056012222",
        email: "abuexpress@gmail.com",
        address: "Стамбул, Турция, Ataturk Caddesi 113A | Havuzlu Hamam Sk.No:4/1",
        branches: [
          { name: "Стамбул", coords: [41.034153, 28.89315], address: "Абу Сулеймана Банакоти 225A | Ataturk Caddesi 113A\n", phone: "+905013271111" }
        ]
      }
    ]);
    const activeIndex = ref(0);
    const currentCountry = computed(() => countries.value[activeIndex.value]);
    const feedback = ref({
      name: "",
      surname: "",
      phone: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-wrapper" }, _attrs))} data-v-d358e21e><div class="tabs" data-v-d358e21e><!--[-->`);
      ssrRenderList(countries.value, (country, idx) => {
        _push(`<button class="${ssrRenderClass({ active: activeIndex.value === idx })}" data-v-d358e21e>${ssrInterpolate(country.name)}</button>`);
      });
      _push(`<!--]--></div><div class="content" data-v-d358e21e><div class="left-col" data-v-d358e21e><div class="contacts-block" data-v-d358e21e><h2 data-v-d358e21e>${ssrInterpolate(_ctx.$t("contact_contact"))}</h2><p data-v-d358e21e><img${ssrRenderAttr("src", unref(Phone))} alt="Mail" data-v-d358e21e> ${ssrInterpolate(currentCountry.value.phone)}</p><p data-v-d358e21e><img${ssrRenderAttr("src", unref(Mail))} alt="Mail" data-v-d358e21e> ${ssrInterpolate(currentCountry.value.email)}</p><p data-v-d358e21e><img${ssrRenderAttr("src", unref(Point))} alt="Mail" data-v-d358e21e> ${ssrInterpolate(currentCountry.value.address)}</p></div><form class="feedback-form" data-v-d358e21e><h3 data-v-d358e21e>${ssrInterpolate(_ctx.$t("contact_link"))}</h3><label data-v-d358e21e><input type="text"${ssrRenderAttr("value", feedback.value.name)} placeholder="Имя" data-v-d358e21e><input type="text"${ssrRenderAttr("value", feedback.value.surname)} placeholder="Фамилия" data-v-d358e21e></label><label data-v-d358e21e><input type="text"${ssrRenderAttr("value", feedback.value.phone)} placeholder="+998" data-v-d358e21e><input type="text" placeholder="gmail" data-v-d358e21e></label><textarea placeholder="Текст сообщения" data-v-d358e21e>${ssrInterpolate(feedback.value.message)}</textarea><button type="submit" data-v-d358e21e>${ssrInterpolate(_ctx.$t("contact_send"))}</button></form></div><div class="right-col" data-v-d358e21e>`);
      _push(ssrRenderComponent(Map, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d358e21e"]]);

export { contact as default };
//# sourceMappingURL=contact.vue.mjs.map
