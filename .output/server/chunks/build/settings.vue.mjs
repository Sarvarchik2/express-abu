import { mergeProps, ref, useSSRContext } from 'vue';
import axios from 'axios';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  setup() {
    const { t } = useI18n();
    const formData = ref({
      email: "",
      full_name: "",
      password: ""
    });
    const isLoading = ref(false);
    const showDeleteModal = ref(false);
    const showPassword = ref(false);
    const notification = ref({
      show: false,
      type: "",
      message: "",
      icon: ""
    });
    const submitForm = async () => {
      var _a, _b, _c;
      isLoading.value = true;
      try {
        const token = localStorage.getItem("access_token");
        const requestData = {
          full_name: formData.value.full_name,
          password: formData.value.password || void 0
        };
        const response = await axios.patch(
          "https://abuexpresslogisticscargo.com/api/edit/",
          requestData,
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );
        localStorage.setItem("full_name", formData.value.full_name);
        showNotification({
          message: t("profileedit.update_success"),
          type: "success",
          icon: "fas fa-check-circle"
        });
      } catch (error) {
        console.error("Update error:", ((_a = error.response) == null ? void 0 : _a.data) || error);
        showNotification({
          message: ((_c = (_b = error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.detail) || t("profileedit.update_error"),
          type: "error",
          icon: "fas fa-exclamation-circle"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const deleteProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        await axios.delete(
          "https://abuexpresslogisticscargo.com/api/delete/",
          {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          }
        );
        showNotification({
          message: t("profileedit.delete_success"),
          type: "success",
          icon: "fas fa-check-circle"
        });
        localStorage.clear();
        setTimeout(() => {
          (void 0).location.href = "/";
        }, 1500);
      } catch (error) {
        console.error("Delete error:", error);
        showNotification({
          message: t("profileedit.delete_error"),
          type: "error",
          icon: "fas fa-exclamation-circle"
        });
        showDeleteModal.value = false;
      }
    };
    const confirmDelete = () => {
      showDeleteModal.value = true;
    };
    const showNotification = ({ message, type, icon }) => {
      notification.value = { show: true, message, type, icon };
      setTimeout(() => {
        notification.value.show = false;
      }, 5e3);
    };
    return {
      formData,
      isLoading,
      showDeleteModal,
      showPassword,
      notification,
      submitForm,
      confirmDelete,
      deleteProfile
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "profileedit-page" }, _attrs))} data-v-ff6da531><div class="profileedit-container" data-v-ff6da531><h1 class="page-title" data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.title"))}</h1><form class="profileedit-form" data-v-ff6da531><div class="form-grid" data-v-ff6da531><div class="form-group" data-v-ff6da531><label class="input-label" data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.full_name"))}</label><input type="text"${ssrRenderAttr("value", $setup.formData.full_name)}${ssrRenderAttr("placeholder", _ctx.$t("profileedit.full_name_placeholder"))} class="form-input" required data-v-ff6da531></div><div class="form-group" data-v-ff6da531><label class="input-label" data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.email"))}</label><input type="email"${ssrRenderAttr("value", $setup.formData.email)} class="form-input" disabled data-v-ff6da531></div><div class="form-group" data-v-ff6da531><label class="input-label" data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.password"))}</label><div class="password-wrapper" data-v-ff6da531><input${ssrRenderAttr("type", $setup.showPassword ? "text" : "password")}${ssrRenderDynamicModel($setup.showPassword ? "text" : "password", $setup.formData.password, null)}${ssrRenderAttr("placeholder", _ctx.$t("profileedit.password_placeholder"))} class="form-input" minlength="8" data-v-ff6da531><button type="button" class="toggle-password" data-v-ff6da531><i class="${ssrRenderClass($setup.showPassword ? "far fa-eye-slash" : "far fa-eye")}" data-v-ff6da531></i></button></div></div></div><div class="form-actions" data-v-ff6da531><button type="submit" class="save-btn"${ssrIncludeBooleanAttr($setup.isLoading) ? " disabled" : ""} data-v-ff6da531>`);
  if ($setup.isLoading) {
    _push(`<i class="fas fa-spinner fa-spin" data-v-ff6da531></i>`);
  } else {
    _push(`<!---->`);
  }
  _push(` ${ssrInterpolate($setup.isLoading ? _ctx.$t("profileedit.saving") : _ctx.$t("profileedit.save"))}</button><button type="button" class="delete-btn" data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.delete"))}</button></div></form></div>`);
  if ($setup.showDeleteModal) {
    _push(`<div class="modal-overlay" data-v-ff6da531><div class="modal-content" data-v-ff6da531><div class="modal-header" data-v-ff6da531><h3 data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.delete_confirmation"))}</h3><button class="modal-close" data-v-ff6da531><i class="fas fa-times" data-v-ff6da531></i></button></div><div class="modal-body" data-v-ff6da531><p data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.delete_warning"))}</p></div><div class="modal-actions" data-v-ff6da531><button class="confirm-delete-btn" data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.confirm_delete"))}</button><button class="cancel-btn" data-v-ff6da531>${ssrInterpolate(_ctx.$t("profileedit.cancel"))}</button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.notification.show) {
    _push(`<div class="${ssrRenderClass([$setup.notification.type, "notification"])}" data-v-ff6da531><div class="notification-content" data-v-ff6da531><i class="${ssrRenderClass($setup.notification.icon)}" data-v-ff6da531></i><span data-v-ff6da531>${ssrInterpolate($setup.notification.message)}</span></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ff6da531"]]);

export { settings as default };
//# sourceMappingURL=settings.vue.mjs.map
