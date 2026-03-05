import { _ as _export_sfc, u as useI18n, b as useLocalePath, a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useRouter();
    const localePath = useLocalePath();
    const form = ref({
      email: "",
      new_password: ""
    });
    const otpSent = ref(false);
    const otpVerified = ref(false);
    const passwordReset = ref(false);
    const message = ref("");
    const otpArray = ref(["", "", "", "", "", ""]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "register" }, _attrs))} data-v-6fe6bb61><div class="logo" data-v-6fe6bb61><img${ssrRenderAttr("src", unref(logo))} alt="logo" data-v-6fe6bb61></div>`);
      if (!otpSent.value) {
        _push(`<form class="register-wrapper" data-v-6fe6bb61><h2 data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.title"))}</h2><p data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.subtitle"))}</p><input${ssrRenderAttr("value", form.value.email)} type="email"${ssrRenderAttr("placeholder", _ctx.$t("forgot_password.email_placeholder"))} required data-v-6fe6bb61><button type="submit" data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.submit_btn"))}</button>`);
        if (message.value) {
          _push(`<p class="message" data-v-6fe6bb61>${ssrInterpolate(message.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/login"),
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("forgot_password.back_to_login"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("forgot_password.back_to_login")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form>`);
      } else {
        _push(`<!---->`);
      }
      if (otpSent.value && !otpVerified.value) {
        _push(`<div class="register-wrapper" data-v-6fe6bb61><h2 data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.otp_title"))}</h2><p data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.otp_subtitle"))} <b data-v-6fe6bb61>${ssrInterpolate(form.value.email)}</b></p><div class="otp-inputs" data-v-6fe6bb61><!--[-->`);
        ssrRenderList(otpArray.value, (digit, index) => {
          _push(`<input${ssrRenderAttr("value", otpArray.value[index])} maxlength="1" data-v-6fe6bb61>`);
        });
        _push(`<!--]--></div><button data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.otp_confirm_btn"))}</button>`);
        if (message.value) {
          _push(`<p class="message" data-v-6fe6bb61>${ssrInterpolate(message.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (otpVerified.value && !passwordReset.value) {
        _push(`<form class="register-wrapper" data-v-6fe6bb61><h2 data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.new_pass_title"))}</h2><p data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.new_pass_subtitle"))}</p><input${ssrRenderAttr("value", form.value.new_password)} type="password"${ssrRenderAttr("placeholder", _ctx.$t("forgot_password.new_password_placeholder"))} minlength="6" required data-v-6fe6bb61><button type="submit" data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.reset_btn"))}</button>`);
        if (message.value) {
          _push(`<p class="message" data-v-6fe6bb61>${ssrInterpolate(message.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      } else {
        _push(`<!---->`);
      }
      if (passwordReset.value) {
        _push(`<div class="register-wrapper" data-v-6fe6bb61><h2 data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.success_title"))}</h2><p data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.success_subtitle"))}</p><button style="${ssrRenderStyle({ "margin-top": "20px" })}" data-v-6fe6bb61>${ssrInterpolate(_ctx.$t("forgot_password.back_to_login"))}</button></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fe6bb61"]]);

export { forgotPassword as default };
//# sourceMappingURL=forgot-password.vue.mjs.map
