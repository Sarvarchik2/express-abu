import { _ as _export_sfc, u as useI18n, b as useLocalePath, a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "registration",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useRouter();
    const localePath = useLocalePath();
    const form = ref({
      email: "",
      full_name: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      date_of_birth: "",
      card_number: "",
      personal_number: "",
      password: ""
    });
    const otpSent = ref(false);
    const otpVerified = ref(false);
    const message = ref("");
    const otpArray = ref(["", "", "", "", "", ""]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "register" }, _attrs))} data-v-897aafcc><div class="logo" data-v-897aafcc><img${ssrRenderAttr("src", unref(logo))} alt="logo" data-v-897aafcc></div>`);
      if (!otpSent.value) {
        _push(`<form class="register-wrapper" data-v-897aafcc><h2 data-v-897aafcc>${ssrInterpolate(_ctx.$t("registration.title"))}</h2><input${ssrRenderAttr("value", form.value.email)} type="email"${ssrRenderAttr("placeholder", _ctx.$t("registration.email_placeholder"))} required data-v-897aafcc><input${ssrRenderAttr("value", form.value.first_name)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("registration.first_name_placeholder"))} required data-v-897aafcc><input${ssrRenderAttr("value", form.value.last_name)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("registration.last_name_placeholder"))} required data-v-897aafcc><input${ssrRenderAttr("value", form.value.phone_number)} type="tel"${ssrRenderAttr("placeholder", _ctx.$t("registration.phone_placeholder"))} required data-v-897aafcc><input${ssrRenderAttr("value", form.value.date_of_birth)} type="date"${ssrRenderAttr("placeholder", _ctx.$t("registration.dob_placeholder"))} required data-v-897aafcc><input${ssrRenderAttr("value", form.value.card_number)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("registration.card_placeholder"))} required data-v-897aafcc><input${ssrRenderAttr("value", form.value.personal_number)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("registration.pinfl_placeholder"))} maxlength="14" required data-v-897aafcc><input${ssrRenderAttr("value", form.value.password)} type="password"${ssrRenderAttr("placeholder", _ctx.$t("registration.password_placeholder"))} minlength="6" required data-v-897aafcc><button type="submit" data-v-897aafcc>${ssrInterpolate(_ctx.$t("registration.submit_btn"))}</button>`);
        if (message.value) {
          _push(`<p class="message" data-v-897aafcc>${ssrInterpolate(message.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
      } else {
        _push(`<!---->`);
      }
      if (otpSent.value && !otpVerified.value) {
        _push(`<div class="register-wrapper" data-v-897aafcc><h2 data-v-897aafcc>${ssrInterpolate(_ctx.$t("registration.otp_title"))}</h2><p data-v-897aafcc>${ssrInterpolate(_ctx.$t("registration.otp_subtitle"))} <b data-v-897aafcc>${ssrInterpolate(form.value.email)}</b></p><div class="otp-inputs" data-v-897aafcc><!--[-->`);
        ssrRenderList(otpArray.value, (digit, index) => {
          _push(`<input${ssrRenderAttr("value", otpArray.value[index])} maxlength="1" data-v-897aafcc>`);
        });
        _push(`<!--]--></div><button data-v-897aafcc>${ssrInterpolate(_ctx.$t("registration.otp_confirm_btn"))}</button>`);
        if (message.value) {
          _push(`<p class="message" data-v-897aafcc>${ssrInterpolate(message.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (otpVerified.value) {
        _push(`<div class="register-wrapper" data-v-897aafcc><h2 data-v-897aafcc>${ssrInterpolate(_ctx.$t("registration.success_title"))}</h2><p data-v-897aafcc>${ssrInterpolate(_ctx.$t("registration.success_subtitle"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/login")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("registration.already_have_account"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("registration.already_have_account")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/registration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const registration = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-897aafcc"]]);

export { registration as default };
//# sourceMappingURL=registration.vue.mjs.map
