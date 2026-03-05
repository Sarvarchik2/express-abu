import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n } from './server.mjs';
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
import 'vue-router';
import 'lucide-vue-next';

const copy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE4SURBVHgB7VTtUcJAEH0XLSBoA7ECYwVqBVpCOkArACvQDgwVaAehBKyA+B8IFXC8vVk+AguBGX4xvJnN3uU2bzc7t89hD3yFxHrvWihxDEjU9hNUNN9ghR8hqyXbIpOACN9c9nnaMzPOQuUxz1/oE3i8u1t8bRGysicedrgUn8PGPxMO+Nu/4RtWSZe6G7RqhCTrkKSr26mahUR9ya8fWG1G/0m7q/WWmYYk/aHFaABjstDDMd7YotewrpDKWaQBqWbuMcu0iZAxeagwwj2ulvHxknCx2fObFkq2KNl8GeHEuBCeIWHMq9PW9UAe17qpXc4jkAbz+OAsr+6wjJuOUvdQJpW3IgjKGtxaQKHZREX+2Ax7akS6HB4hiuTwzDHs2xmpzqwwP1BYhyIMFo/bQS69NPvZJP9zsRam0FADqeAAAAAASUVORK5CYII=";

const usaFlag = "data:image/png;base64,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";

const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const fullName = ref("");
    const userId = ref("");
    const countries = ref([
      {
        name: "usa",
        name2: "USA",
        flag: usaFlag,
        offices: [
          {
            working_hours: "",
            addressFields: [
              { label: "address1", value: "606 Interchange Blvd" },
              { label: "city", value: "Newark" },
              { label: "state", value: "DE" },
              { label: "zip", value: "19711" },
              { label: "country", value: "USA" },
              { label: "phone", value: "+1 (929) 244-0000" }
            ]
          }
        ]
      }
    ]);
    const accordionItems = ref([
      { question: "create_account", answer: "create_account_answer" },
      { question: "register_order", answer: "register_order_answer" },
      { question: "tax_free_state", answer: "tax_free_state_answer" }
    ]);
    const selectedCountry = ref(countries.value[0].name);
    const selectedCountryFlag = ref(countries.value[0].flag);
    const copyMessage = ref("");
    const activeAccordion = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-page" }, _attrs))} data-v-3f314cd0><div class="profile-top" data-v-3f314cd0><!--[-->`);
      ssrRenderList(countries.value, (country) => {
        _push(`<button class="${ssrRenderClass({ "profile-button-active": selectedCountry.value === country.name })}" data-v-3f314cd0>${ssrInterpolate(_ctx.$t(`profile.countries.${country.name}`))}</button>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(countries.value, (country) => {
        _push(`<div style="${ssrRenderStyle(selectedCountry.value === country.name ? null : { display: "none" })}" class="profile-bottom" data-v-3f314cd0><div class="profile-bottom-title" data-v-3f314cd0><div class="profile-bottom-title-logo" data-v-3f314cd0><img${ssrRenderAttr("src", selectedCountryFlag.value)}${ssrRenderAttr("alt", _ctx.$t("profile.flag_alt"))} data-v-3f314cd0></div><h2 data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.your_address_in"))} ${ssrInterpolate(_ctx.$t(`profile.countries.${country.name}`))} <p data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.address_instructions"))} ${ssrInterpolate(_ctx.$t(`profile.countries.${country.name}`))}</p></h2></div><span class="profile-bottom-span" data-v-3f314cd0></span><div class="profile-bottom-name" data-v-3f314cd0><h2 data-v-3f314cd0>${ssrInterpolate(fullName.value)} <p data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.recipient"))}</p>`);
        if (userId.value) {
          _push(`<p style="${ssrRenderStyle({ "margin-top": "5px", "font-weight": "bold", "color": "#ffee00" })}" data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.personal_id"))}: ${ssrInterpolate(userId.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h2><button data-v-3f314cd0><img${ssrRenderAttr("src", unref(copy))}${ssrRenderAttr("alt", _ctx.$t("profile.copy_alt"))} data-v-3f314cd0></button></div><!--[-->`);
        ssrRenderList(country.offices, (office, oIdx) => {
          _push(`<!--[-->`);
          if (country.offices.length > 1) {
            _push(`<h3 style="${ssrRenderStyle({ "color": "#ffee00", "text-align": "center", "margin": "20px 0" })}" data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.office"))} ${ssrInterpolate(oIdx + 1)}</h3>`);
          } else {
            _push(`<!---->`);
          }
          if (oIdx > 0) {
            _push(`<span class="profile-bottom-span" data-v-3f314cd0></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="profile-bottom-address" data-v-3f314cd0><ul data-v-3f314cd0><!--[-->`);
          ssrRenderList(office.addressFields, (field, idx) => {
            _push(`<li data-v-3f314cd0><h2 data-v-3f314cd0>${ssrInterpolate(_ctx.$t(`profile.address_fields.${field.label}`))}</h2><p data-v-3f314cd0>${ssrInterpolate(field.value)}</p><button class="copy-btn" data-v-3f314cd0><img${ssrRenderAttr("src", unref(copy))}${ssrRenderAttr("alt", _ctx.$t("profile.copy_alt"))} data-v-3f314cd0></button></li>`);
          });
          _push(`<!--]--></ul></div><span class="profile-bottom-span" data-v-3f314cd0></span><div class="profile-bottom-chart" data-v-3f314cd0><h2 data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.work_schedule"))}</h2><h3 data-v-3f314cd0>`);
          if (office.working_hours) {
            _push(`<p data-v-3f314cd0>${ssrInterpolate(office.working_hours)}</p>`);
          } else {
            _push(`<!--[--><p data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.weekdays_schedule"))}</p><p data-v-3f314cd0>${ssrInterpolate(_ctx.$t("profile.saturday_schedule"))}</p><!--]-->`);
          }
          _push(`</h3></div><span class="profile-bottom-span" data-v-3f314cd0></span><!--]-->`);
        });
        _push(`<!--]--><div class="accordion-container" data-v-3f314cd0><!--[-->`);
        ssrRenderList(accordionItems.value, (item, index) => {
          _push(`<div class="accordion-item" data-v-3f314cd0><button class="accordion-title" data-v-3f314cd0>${ssrInterpolate(_ctx.$t(`profile.faq.${item.question}`))} <span class="plus-icon" data-v-3f314cd0>+</span></button><div class="accordion-content" style="${ssrRenderStyle(activeAccordion.value === index ? null : { display: "none" })}" data-v-3f314cd0><p data-v-3f314cd0>${ssrInterpolate(_ctx.$t(`profile.faq.${item.answer}`))}</p></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      if (copyMessage.value) {
        _push(`<div class="copy-popup" data-v-3f314cd0>✅ ${ssrInterpolate(copyMessage.value)}</div>`);
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
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f314cd0"]]);

export { profile as default };
//# sourceMappingURL=profile.vue.mjs.map
