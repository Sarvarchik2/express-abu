import { ref, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
  __name: "deliver",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const canvas = ref(null);
    const ctx = ref(null);
    const color = ref("#000000");
    const lineWidth = ref(4);
    const shipmentId = ref("");
    const isSubmitting = ref(false);
    const deliveryStatus = ref(false);
    const error = ref(null);
    const successMessage = ref(null);
    ref(0);
    ref(0);
    ref(false);
    const hasSignature = computed(() => {
      if (!ctx.value) return false;
      const imageData = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height);
      return imageData.data.some((channel) => channel !== 0);
    });
    watch(color, (newVal) => {
      if (ctx.value) ctx.value.strokeStyle = newVal;
    });
    watch(lineWidth, (newVal) => {
      if (ctx.value) ctx.value.lineWidth = newVal;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "delivery-signature-container" }, _attrs))} data-v-fdebc299><div class="signature-card" data-v-fdebc299><div class="canvas-container" data-v-fdebc299><canvas data-v-fdebc299></canvas>`);
      if (!hasSignature.value) {
        _push(`<div class="placeholder" data-v-fdebc299>${ssrInterpolate(_ctx.$t("drawing.sign_here"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="controls" data-v-fdebc299><div class="tools-row" data-v-fdebc299><div class="tool-group" data-v-fdebc299><label data-v-fdebc299>${ssrInterpolate(_ctx.$t("drawing.color"))}</label><input type="color"${ssrRenderAttr("value", color.value)} class="color-picker" data-v-fdebc299></div><div class="tool-group" data-v-fdebc299><label data-v-fdebc299>${ssrInterpolate(_ctx.$t("drawing.line_width"))}</label><select class="line-width-select" data-v-fdebc299><option value="2" data-v-fdebc299${ssrIncludeBooleanAttr(Array.isArray(lineWidth.value) ? ssrLooseContain(lineWidth.value, "2") : ssrLooseEqual(lineWidth.value, "2")) ? " selected" : ""}>2px</option><option value="4" data-v-fdebc299${ssrIncludeBooleanAttr(Array.isArray(lineWidth.value) ? ssrLooseContain(lineWidth.value, "4") : ssrLooseEqual(lineWidth.value, "4")) ? " selected" : ""}>4px</option><option value="6" data-v-fdebc299${ssrIncludeBooleanAttr(Array.isArray(lineWidth.value) ? ssrLooseContain(lineWidth.value, "6") : ssrLooseEqual(lineWidth.value, "6")) ? " selected" : ""}>6px</option></select></div><button class="tool-button" data-v-fdebc299><i class="icon-clear" data-v-fdebc299></i> ${ssrInterpolate(_ctx.$t("drawing.clear"))}</button></div><div class="delivery-form" data-v-fdebc299><div class="form-group" data-v-fdebc299><label for="shipmentId" data-v-fdebc299>${ssrInterpolate(_ctx.$t("drawing.shipment_id"))}</label><input id="shipmentId" type="text"${ssrRenderAttr("value", shipmentId.value)}${ssrIncludeBooleanAttr(isSubmitting.value || deliveryStatus.value) ? " disabled" : ""} class="shipment-input" data-v-fdebc299></div><div class="action-buttons" data-v-fdebc299><button${ssrIncludeBooleanAttr(isSubmitting.value || deliveryStatus.value || !shipmentId.value || !hasSignature.value) ? " disabled" : ""} class="submit-button" data-v-fdebc299><i class="icon-check" data-v-fdebc299></i> ${ssrInterpolate(deliveryStatus.value ? _ctx.$t("drawing.delivered") : _ctx.$t("drawing.confirm_delivery"))}</button><button${ssrIncludeBooleanAttr(!deliveryStatus.value) ? " disabled" : ""} class="reset-button" data-v-fdebc299><i class="icon-reset" data-v-fdebc299></i> ${ssrInterpolate(_ctx.$t("drawing.reset"))}</button></div></div></div></div>`);
      if (error.value) {
        _push(`<div class="alert error" data-v-fdebc299><i class="icon-error" data-v-fdebc299></i> ${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (successMessage.value) {
        _push(`<div class="alert success" data-v-fdebc299><i class="icon-success" data-v-fdebc299></i> ${ssrInterpolate(successMessage.value)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deliver.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deliver = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fdebc299"]]);

export { deliver as default };
//# sourceMappingURL=deliver.vue.mjs.map
