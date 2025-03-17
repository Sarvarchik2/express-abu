import { a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './v3.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

/* empty css               */
const _sfc_main = {
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Услуги — Abu Express",
      meta: [
        { name: "description", content: "Быстрая авиадоставка (7-10 дней) и экономичные морские перевозки (до 45 дней) от Abu Express. Выберите удобный способ доставки в Узбекистан!" },
        { name: "keywords", content: "авиадоставка, морские перевозки, грузоперевозки, доставка в Узбекистан, логистика" },
        { property: "og:title", content: "Услуги — Abu Express" },
        { property: "og:description", content: "Надежные грузоперевозки в Узбекистан: авиадоставка (7-10 дней) и морская доставка (до 45 дней)." },
        { property: "og:image", content: "/assets/services-preview.png" },
        { property: "og:url", content: "https://abu-express-nuxt.netlify.app/services" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))}><div class="services-item"><h2>${ssrInterpolate(_ctx.$t("services_air_sea_title"))}</h2><p>${ssrInterpolate(_ctx.$t("services_air_sea_desc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("tarif_registration"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("tarif_registration")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services.vue.mjs.map
