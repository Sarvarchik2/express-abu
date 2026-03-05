import { _ as _export_sfc, u as useI18n, b as useLocalePath, a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { l as logo } from './logo2.png.mjs';
import { useRouter } from 'vue-router';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'lucide-vue-next';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const form = ref({
      email: "",
      password: ""
    });
    const message = ref("");
    useRouter();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))} data-v-11c2fd47><div class="logo" data-v-11c2fd47><img${ssrRenderAttr("src", unref(logo))} alt="logo" data-v-11c2fd47></div><form class="login-wrapper" data-v-11c2fd47><h2 data-v-11c2fd47>${ssrInterpolate(_ctx.$t("login.title"))}</h2><p data-v-11c2fd47>${ssrInterpolate(_ctx.$t("login.subtitle"))}</p><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Gmail" required data-v-11c2fd47><input${ssrRenderAttr("value", form.value.password)} type="password" placeholder="Password" required data-v-11c2fd47><div class="login-wrapper-btn" data-v-11c2fd47>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/forgot-password"),
        class: "forgot-pass-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" data-v-11c2fd47${_scopeId}>${ssrInterpolate(_ctx.$t("login.forgot_password"))}</button>`);
          } else {
            return [
              createVNode("button", { type: "button" }, toDisplayString(_ctx.$t("login.forgot_password")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="submit" data-v-11c2fd47>${ssrInterpolate(_ctx.$t("login.submit_btn"))}</button></div>`);
      if (message.value) {
        _push(`<p class="message" data-v-11c2fd47>${ssrInterpolate(message.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/registration")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("login.no_account"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("login.no_account")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11c2fd47"]]);

export { login as default };
//# sourceMappingURL=login.vue.mjs.map
