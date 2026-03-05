import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useI18n, E as Exit } from './server.mjs';
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

const empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR3SURBVHgB3ZrdUdtAEMf3lOQtD04HSgWYCiI/JJk8BUEBkAqACrArSFxBTAMIP2WAzKAOMBXkUkF4IZMJoMt/0cmRhT7OurP5+M1oZMsn6f5e3Wpv9wQ55DiKuoIoUEKskFJdHOpg8wvNJG+KaOIR/cQ+fheGE3KEIEtOoihIiD6ic1sqFdAGiS3GNrQV11oQC4GAPXwMyC0siIWNqAVzC1qgkCLyBVGvF4ZynpOMBZ1GUecaQiBmh5YIOvjlOdEAwi4M2zcDMf4VdnR3gC8LY2s1CoKYLixzajHgXcEW6jU5Da/ux6PxeBOWOXsAYhjuw9l39KmuUaWF2DIshh4mq1WWKrUQj5nrdMw8VE65j2U/3LEQezNtGZ/sifHSPce/NsGNOje4Jj6/wfEu2cOOYrXo/Z4XW12n7xif7GABu2/DMC77Ub/Lvlrex9d93c0fnLGQds8/yAal9t+tr2+ZND06OBgJITbJAgjo5f+4mTF0ZT9uJqZimPdp25gs0FHLlKkgRMpbZPmoYYyENCc45xPZEfAjnH3JW2ibLMA/Nf4wZ9zF6HNisiBvpVtBPI8hS8+DZ/mQ2rNPdkytlFnIyjqMSOc0Sz83Qym1xvtMUECPHe0tPf24+WSJsIj3hJtYscNavMSRdRKlAmoJT+HJAazF81zNcWByDpuoHQE5wENyhsfQCrmh8zdJ5p7NnozHLkKtFGSaPGcXA8Lz9prmK3l4vqWSpE/u6DgVxCRJMsI7Ya+p3fF4vC3QltziC3gGRYtBYhsQx3d6MvYNwS/C+zWVOoGAFsAiBd0LHj0xWJCkp4NkQUYJvEeC9DCAzumpoNQ5C3JWyrhvEiEkhz4xPRFYy22SBK77FznOjuLCF+r/+JR67xf2LpF4373O0lg8Y2w9ydOd59TVmCtyl7h42FAtiBDIvkxnyV0Etm+yCVprhIh1X6Z5srkzPiwEIfvwN0oeoWG5owqOIp6l0UPbYPU2PTzNy+GxY0GB8enIv10KsWMrpAgLw1joo2Pz5Os4vFrlD9PMKS4wUIaCECEP3m9s9GkB6CzQ1lEUSVHIudUwzD7MZE4NrcRV6x4tAcP+3DqD7MtMLCfS6LgWB4lBY0zuhTYzf+6MIJ0jHtacP2mTTGyLvlf1i1+pYbE/d6JtlCj69LAC1iqnI+GU+sWDpRU87UK5RnTnZQvBr3qOPVsVVdUQfl2glLJa9rSUzod0w9KBf53WdZYC7vW57Di8ca/q0a+ssTK6IlEmYAJLhb0FjSdtGb5vUPyNHcWHmlUmjWV9nVll91kW641epIsiJDlAL+7gEGynWHnX4VVjWb9REKPHVN3CixFZLDwyWAAlb2oeszxGghhdTO5TfRArscVcKxLpC29Sdp0/6DTHbWi3gnYclPqVV4RrZm8Wulwak8fAWmVIfbOOMp+m8NxmUFV4rmJuQRnaYbC1XJTo87QSktFaUAY7DV6hJdL1Bz61gAc8xsg+LH/YVkjuWu7IlmjqBRZcBPCpfInmBSZkE4Gkhuslmv8ANjG9I1JHv7oAAAAASUVORK5CYII=";

const _sfc_main = {
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    const addresses = ref([]);
    const showPopup = ref(false);
    const selectedTab = ref("parcels");
    const isEditing = ref(false);
    ref(null);
    const { t } = useI18n();
    const form = ref({
      name: "",
      surname: "",
      phone: "",
      phone_second: "",
      email: "",
      address: "",
      apartament: "",
      country: "",
      region: "",
      city: "",
      ofice: "",
      zip: ""
    });
    const tabs = ref([
      { key: "parcels", label: "address.tabs.recipient" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "parcels-page" }, _attrs))} data-v-30297481><div class="tabs" data-v-30297481><!--[-->`);
      ssrRenderList(tabs.value, (tab, index) => {
        _push(`<button class="${ssrRenderClass({ active: selectedTab.value === tab.key })}" data-v-30297481>${ssrInterpolate(_ctx.$t(tab.label))}</button>`);
      });
      _push(`<!--]--></div><div class="divider" data-v-30297481></div>`);
      if (addresses.value.length === 0) {
        _push(`<div class="empty-state" data-v-30297481><img${ssrRenderAttr("src", unref(empty))}${ssrRenderAttr("alt", _ctx.$t("address.empty.alt"))} class="empty-image" data-v-30297481><p class="empty-text" data-v-30297481>${ssrInterpolate(_ctx.$t("address.empty.text1"))}<br data-v-30297481> ${ssrInterpolate(_ctx.$t("address.empty.text2"))}</p><button data-v-30297481>${ssrInterpolate(_ctx.$t("address.empty.button"))}</button></div>`);
      } else {
        _push(`<div class="recipient-list" data-v-30297481><!--[-->`);
        ssrRenderList(addresses.value, (addr) => {
          _push(`<div class="recipient-card" data-v-30297481><div class="recipient-info" data-v-30297481><h3 data-v-30297481><span data-v-30297481>${ssrInterpolate(addr.first_name)} ${ssrInterpolate(addr.last_name)}</span></h3><p data-v-30297481>${ssrInterpolate(_ctx.$t("address.recipient.country"))} <span data-v-30297481>${ssrInterpolate(_ctx.$te(`profile.countries.${addr.country.toLowerCase()}`) ? _ctx.$t(`profile.countries.${addr.country.toLowerCase()}`) : addr.country)}</span></p><p data-v-30297481>${ssrInterpolate(_ctx.$t("address.recipient.phone"))} <span data-v-30297481>${ssrInterpolate(addr.phone_number)}</span></p><p data-v-30297481>${ssrInterpolate(_ctx.$t("address.recipient.email"))} <span data-v-30297481>${ssrInterpolate(addr.email)}</span></p><p data-v-30297481>${ssrInterpolate(_ctx.$t("address.recipient.address"))} <span data-v-30297481>${ssrInterpolate(addr.address)}, ${ssrInterpolate(addr.apartment)}, ${ssrInterpolate(addr.district)}, ${ssrInterpolate(addr.city)}</span></p><p data-v-30297481>${ssrInterpolate(_ctx.$t("address.recipient.zip"))} <span data-v-30297481>${ssrInterpolate(addr.postal_code)}</span></p><div class="recipient-info-actions" data-v-30297481><button data-v-30297481>${ssrInterpolate(_ctx.$t("address.actions.edit"))}</button><button data-v-30297481>${ssrInterpolate(_ctx.$t("address.actions.delete"))}</button></div></div></div>`);
        });
        _push(`<!--]--><button class="recipient-list-btn" data-v-30297481>${ssrInterpolate(_ctx.$t("address.actions.add_more"))}</button></div>`);
      }
      if (showPopup.value) {
        _push(`<div class="popup-overlay" data-v-30297481><div class="popup" data-v-30297481><div class="popup-header" data-v-30297481><h2 data-v-30297481>${ssrInterpolate(_ctx.$t(isEditing.value ? "address.popup.edit" : "address.popup.add"))}</h2><img${ssrRenderAttr("src", unref(Exit))} alt="close" class="close-icon" data-v-30297481></div><form data-v-30297481><div class="popup-scroll-content" data-v-30297481><div class="popup-overlay-item-wrapper" data-v-30297481><div class="popup-overlay-item" data-v-30297481><h4 data-v-30297481>${ssrInterpolate(_ctx.$t("address.popup.details"))}</h4><div class="input-row" data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.name"))}${ssrRenderAttr("value", form.value.name)} required data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.surname"))}${ssrRenderAttr("value", form.value.surname)} required data-v-30297481></div><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.phone"))}${ssrRenderAttr("value", form.value.phone)} required data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.phone_second"))}${ssrRenderAttr("value", form.value.phone_second)} data-v-30297481><input type="email"${ssrRenderAttr("placeholder", _ctx.$t("address.form.email"))}${ssrRenderAttr("value", form.value.email)} required data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.country") || "Страна")}${ssrRenderAttr("value", form.value.country)} required data-v-30297481></div><div class="popup-overlay-item" data-v-30297481><h4 data-v-30297481>${ssrInterpolate(_ctx.$t("address.popup.address"))}</h4><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.address"))}${ssrRenderAttr("value", form.value.address)} required data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.apartament"))}${ssrRenderAttr("value", form.value.apartament)} required data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.region"))}${ssrRenderAttr("value", form.value.region)} required data-v-30297481><div class="input-row" data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.city"))}${ssrRenderAttr("value", form.value.city)} required data-v-30297481><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.zip"))}${ssrRenderAttr("value", form.value.zip)} required data-v-30297481></div><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("address.form.ofice"))}${ssrRenderAttr("value", form.value.ofice)} data-v-30297481></div></div></div><div class="popup-actions" data-v-30297481><button type="button" data-v-30297481>${ssrInterpolate(_ctx.$t("address.actions.cancel"))}</button><button type="submit" data-v-30297481>${ssrInterpolate(_ctx.$t("address.actions.save"))}</button></div></form></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const address = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30297481"]]);

export { address as default };
//# sourceMappingURL=address.vue.mjs.map
