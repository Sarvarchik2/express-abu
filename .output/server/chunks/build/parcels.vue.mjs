import { ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
import 'lucide-vue-next';

const empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7ZjfbcIwEMbPUftON0g3SCcoPFAewbBAOkHFBMAGbACdwH2r+keCERghnaC8t8T9TsTIQALEEKASnxTF5yPOj+NsHxa0og+lyrgFMVGJCpBHNK5KObb7hGmMlPJ/iAZolql4RddElYqU0QIiARih6dPxtADx2AJA58gALBN5EohCCcY3nUiIxo33iySkEwoB8D06sZCUpZNDsP4txARX5OA7GET0IOUdrlut9fOSB7bxJTCFQUxNo9ZshgsQBoBtfS7Xkp8XInhXamCD4PZoA3zO/T7lkEtOhDYIwj+0AbDxhZRTrrODQUK7g20XAHeIeRIO7S6215K1MIiVJLQjspSsBUJEKUk4SEnW40zRlSRcSlbKOUUFl3N6XtDsqiiBCXL60gFQ2FxRfvmOvkydxQa2SyQictiULHF+BM4QwvP61Xq9TXsKSdvH7SnLv/HnmMXxFx1A8ZZIbowECDuYPfdaiCntIaF1Q5MjBFTCww2skrSPtj19qTGNLhBG5wGhrZ0x0USs9x1Eybjj1X7v2lqWZ1y0omzH/9M7SgcZA7qHK71wEWKIF7Uz/BGPi/ErPIYZjw9MBGUI9UIDK50yto7jXq3V6hr7TamumB8p7OYnkjUpX9LelQnBesXhCZImTDviYXEtAtBylp+/CKIbZPmN/gDisNnrhVF1hgAAAABJRU5ErkJggg==";

const _sfc_main = {
  __name: "parcels",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const showNotification = ref(false);
    const notificationMessage = ref("");
    const notificationType = ref("success");
    ref(false);
    const isOrderOwnPopupOpen = ref(false);
    ref(1);
    const currentOrderOwnStep = ref(1);
    const selectedTab = ref("parcels");
    const selectedFilter = ref("all");
    const selectedAddress = ref(null);
    const isLoading = ref(false);
    const orderOwnErrors = ref({});
    const addresses = ref([]);
    const ownOrders = ref([]);
    const availableLocations = ref([]);
    const { t, locale } = useI18n();
    const getFilterCount = (filter) => {
      const currentOrders = ownOrders.value;
      if (filter === "all") return currentOrders.length;
      return currentOrders.filter((order) => {
        switch (filter) {
          case "accepted":
            return order.is_accepted;
          case "rejected":
            return order.is_rejected;
          case "shipped":
            return order.is_shipped;
          case "arrived":
            return order.is_arrived;
          case "delivered":
            return order.is_delivered;
          default:
            return true;
        }
      }).length;
    };
    const parcels2 = ref([{
      link: "",
      name: "",
      price: "",
      quantity: "",
      color: "",
      size: "",
      weight: "",
      comment: ""
    }]);
    const orderOwn = ref({
      location: "",
      track_number: "",
      market_name: "",
      url_product: "",
      invoice_number: null,
      invoice_id: "",
      product_name: "",
      product_price: "",
      product_quantity: 1,
      product_weight: null,
      product_color: "",
      product_size: "",
      comment: "",
      receiver_address: null
    });
    const tabs = ref([
      {
        key: "parcels",
        label: "parcels",
        filters: ["all", "accepted", "rejected", "shipped", "arrived", "delivered"]
      }
    ]);
    const getStatusClass = (order) => {
      if (order.is_delivered) return "delivered";
      if (order.is_arrived) return "arrived";
      if (order.is_shipped) return "shipped";
      if (order.is_accepted) return "accepted";
      if (order.is_rejected) return "rejected";
      return "pending";
    };
    const filteredOrders = computed(() => {
      const currentOrders = ownOrders.value;
      if (!selectedFilter.value || selectedFilter.value === "all") return currentOrders;
      return currentOrders.filter((order) => {
        switch (selectedFilter.value) {
          case "accepted":
            return order.is_accepted;
          case "rejected":
            return order.is_rejected;
          case "shipped":
            return order.is_shipped;
          case "arrived":
            return order.is_arrived;
          case "delivered":
            return order.is_delivered;
          default:
            return true;
        }
      });
    });
    const getStatusText = (order) => {
      if (order.is_delivered) return t("parcels.status.delivered");
      if (order.is_arrived) return t("parcels.status.arrived");
      if (order.is_shipped) return t("parcels.status.shipped");
      if (order.is_accepted) return t("parcels.status.accepted");
      if (order.is_rejected) return t("parcels.status.rejected");
      return t("parcels.status.pending");
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString(locale.value, {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    };
    const currentFilters = computed(() => {
      var _a;
      return ((_a = tabs.value.find((tab) => tab.key === selectedTab.value)) == null ? void 0 : _a.filters) || [];
    });
    computed(() => {
      return parcels2.value.reduce((sum, parcel) => {
        return sum + (parseFloat(parcel.price) || 0) * (parseInt(parcel.quantity) || 0);
      }, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="${ssrRenderClass([{ "show": showNotification.value }, "notification-container"])}" data-v-1f2aa213><div class="${ssrRenderClass([notificationType.value, "notification"])}" data-v-1f2aa213><span data-v-1f2aa213>${ssrInterpolate(notificationMessage.value)}</span><button data-v-1f2aa213>×</button></div></div><div class="parcels-page" data-v-1f2aa213><div class="sub-tabs" data-v-1f2aa213><!--[-->`);
      ssrRenderList(currentFilters.value, (filter, index) => {
        _push(`<button class="${ssrRenderClass([{ active: selectedFilter.value === filter }, "sub-tab"])}" data-v-1f2aa213>${ssrInterpolate(_ctx.$t(`parcels.filters.${filter}`))} <span class="count" data-v-1f2aa213>${ssrInterpolate(getFilterCount(filter))}</span></button>`);
      });
      _push(`<!--]--></div><div class="parcels-btn" data-v-1f2aa213><button data-v-1f2aa213>+ ${ssrInterpolate(_ctx.$t("parcels.add_own_order"))}</button></div>`);
      if (isLoading.value) {
        _push(`<div class="loading-indicator" data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.loading"))}</div>`);
      } else {
        _push(`<div class="parcel-page-wrapper" data-v-1f2aa213>`);
        if (filteredOrders.value.length === 0) {
          _push(`<div class="empty-state" data-v-1f2aa213><img${ssrRenderAttr("src", unref(empty))}${ssrRenderAttr("alt", _ctx.$t("parcels.no_orders"))} class="empty-image" data-v-1f2aa213><p class="empty-text" data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.no_orders"))}</p></div>`);
        } else {
          _push(`<div class="orders-list" data-v-1f2aa213><!--[-->`);
          ssrRenderList(filteredOrders.value, (order) => {
            _push(`<div class="order-item" data-v-1f2aa213><div class="order-header" data-v-1f2aa213><h3 data-v-1f2aa213>${ssrInterpolate(order.product_name || order.name)}</h3><span class="${ssrRenderClass([getStatusClass(order), "order-status"])}" data-v-1f2aa213>${ssrInterpolate(getStatusText(order))}</span></div><div class="order-details" data-v-1f2aa213>`);
            if (order.location) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.own_order.location") || "Склад")}:</strong> ${ssrInterpolate(_ctx.$te(`profile.countries.${order.location.toLowerCase()}`) ? _ctx.$t(`profile.countries.${order.location.toLowerCase()}`) : order.location)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (order.track_number) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.own_order.track_number") || "Трек-номер")}:</strong> ${ssrInterpolate(order.track_number)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (order.invoice_number) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.own_order.invoice_number") || "Номер инвойса")}:</strong> ${ssrInterpolate(order.invoice_number)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (order.market_name) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.own_order.market_name") || "Магазин")}:</strong> ${ssrInterpolate(order.market_name)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.product_details.price"))}:</strong> $${ssrInterpolate(order.product_price || order.price)}</p><p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.product_details.quantity"))}:</strong> ${ssrInterpolate(order.product_quantity || order.quantity)} ${ssrInterpolate(_ctx.$t("parcels.product_details.pcs"))}</p>`);
            if (order.product_weight || order.weight) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.product_details.weight"))}:</strong> ${ssrInterpolate(order.product_weight || order.weight)} kg</p>`);
            } else {
              _push(`<!---->`);
            }
            if (order.product_color || order.color) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.product_details.color"))}:</strong> ${ssrInterpolate(order.product_color || order.color)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (order.product_size || order.size) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.product_details.size"))}:</strong> ${ssrInterpolate(order.product_size || order.size)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (order.departure_date) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>Departure:</strong> ${ssrInterpolate(formatDate(order.departure_date))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (order.arrival_date) {
              _push(`<p data-v-1f2aa213><strong data-v-1f2aa213>Arrival:</strong> ${ssrInterpolate(formatDate(order.arrival_date))}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="product-links" style="${ssrRenderStyle({ "display": "flex", "gap": "10px", "margin-top": "10px" })}" data-v-1f2aa213>`);
            if (order.url_product || order.link) {
              _push(`<a${ssrRenderAttr("href", order.url_product || order.link)} target="_blank" class="product-link" data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.product_details.product_link"))}</a>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div><div class="order-footer" data-v-1f2aa213><small data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.product_details.creation_date"))}: ${ssrInterpolate(formatDate(order.created_at))}</small></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
      }
      if (isOrderOwnPopupOpen.value) {
        _push(`<div class="popup-overlay" data-v-1f2aa213><div class="popup parcels-add-popup" data-v-1f2aa213><div class="popup-header" data-v-1f2aa213><h2 data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.own_order.title"))}</h2><svg class="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1f2aa213><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f2aa213></path></svg></div><div class="popup-scroll-content" data-v-1f2aa213><div class="parcels-add-progress" data-v-1f2aa213><div class="parcels-add-progress-left" data-v-1f2aa213><h3 class="active" data-v-1f2aa213>1</h3><h3 class="${ssrRenderClass({ active: currentOrderOwnStep.value >= 2 })}" data-v-1f2aa213>2</h3><span data-v-1f2aa213></span></div><div class="parcels-add-progress-right" data-v-1f2aa213>`);
        if (currentOrderOwnStep.value > 1) {
          _push(`<svg class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1f2aa213><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f2aa213></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (currentOrderOwnStep.value < 2) {
          _push(`<svg class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1f2aa213><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f2aa213></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (currentOrderOwnStep.value === 1) {
          _push(`<div class="parcels-add-progress-declaration" data-v-1f2aa213><div class="parcels-add-text" data-v-1f2aa213><h2 data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.steps.product_info"))}</h2></div><div class="parcels-add-progress-declaration-wrapper modernized-form" data-v-1f2aa213><select required class="${ssrRenderClass([{ "invalid-field": orderOwnErrors.value.location }, "modern-select"])}" data-v-1f2aa213><option value="" disabled selected data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.own_order.select_location") || "Выберите склад")}</option><!--[-->`);
          ssrRenderList(availableLocations.value, (loc) => {
            _push(`<option${ssrRenderAttr("value", loc.location)} data-v-1f2aa213${ssrIncludeBooleanAttr(Array.isArray(orderOwn.value.location) ? ssrLooseContain(orderOwn.value.location, loc.location) : ssrLooseEqual(orderOwn.value.location, loc.location)) ? " selected" : ""}>${ssrInterpolate(_ctx.$te(`profile.countries.${loc.location.toLowerCase()}`) ? _ctx.$t(`profile.countries.${loc.location.toLowerCase()}`) : loc.location)}</option>`);
          });
          _push(`<!--]--></select><input type="text"${ssrRenderAttr("value", orderOwn.value.track_number)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.track_number"))} required class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.track_number })}" data-v-1f2aa213><div class="input-row" data-v-1f2aa213><input type="text"${ssrRenderAttr("value", orderOwn.value.market_name)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.market_name"))} required class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.market_name })}" data-v-1f2aa213><input type="text"${ssrRenderAttr("value", orderOwn.value.url_product)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.product_link"))} data-v-1f2aa213></div><div class="input-row" data-v-1f2aa213><input type="text"${ssrRenderAttr("value", orderOwn.value.product_name)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.product_name"))} required class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.product_name })}" data-v-1f2aa213><input type="text"${ssrRenderAttr("value", orderOwn.value.product_price)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.product_price"))} inputmode="decimal" required class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.product_price })}" data-v-1f2aa213></div><div class="input-row" data-v-1f2aa213><input type="number"${ssrRenderAttr("value", orderOwn.value.product_quantity)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.product_quantity"))} required class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.product_quantity })}" data-v-1f2aa213><input type="text"${ssrRenderAttr("value", orderOwn.value.product_weight)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.product_weight"))} inputmode="decimal" class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.product_weight })}" data-v-1f2aa213></div><div class="input-row" data-v-1f2aa213><input type="text"${ssrRenderAttr("value", orderOwn.value.product_color)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.product_color"))} required class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.product_color })}" data-v-1f2aa213><input type="text"${ssrRenderAttr("value", orderOwn.value.product_size)}${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.product_size"))} class="${ssrRenderClass({ "invalid-field": orderOwnErrors.value.product_size })}" data-v-1f2aa213></div><textarea${ssrRenderAttr("placeholder", _ctx.$t("parcels.own_order.comment"))} data-v-1f2aa213>${ssrInterpolate(orderOwn.value.comment)}</textarea></div><div class="parcels-add-btn-wrapper" data-v-1f2aa213><button class="parcels-add-btn primary" data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.form.continue"))}</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (currentOrderOwnStep.value === 2) {
          _push(`<div class="parcels-add-address" data-v-1f2aa213><div class="parcels-add-text" data-v-1f2aa213><h2 data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.steps.recipient_selection"))}</h2></div><div class="parcels-add-address-content" data-v-1f2aa213>`);
          if (addresses.value.length === 0) {
            _push(`<div class="empty-address" data-v-1f2aa213><p data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.address.no_address"))}</p><button data-v-1f2aa213>${ssrInterpolate(_ctx.$t("parcels.address.add_address"))}</button></div>`);
          } else {
            _push(`<div class="parcel-address-list" data-v-1f2aa213><!--[-->`);
            ssrRenderList(addresses.value, (addr) => {
              _push(`<div class="${ssrRenderClass([{ selected: selectedAddress.value === addr.id }, "parcel-address-card"])}" data-v-1f2aa213><div class="address-card-header" data-v-1f2aa213><div class="address-card-name" data-v-1f2aa213><h3 data-v-1f2aa213>${ssrInterpolate(addr.first_name)} ${ssrInterpolate(addr.last_name)}</h3></div><div class="address-card-phone" data-v-1f2aa213><span data-v-1f2aa213>${ssrInterpolate(addr.phone_number)}</span></div><div class="selection-indicator" data-v-1f2aa213>`);
              if (selectedAddress.value === addr.id) {
                _push(`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon" data-v-1f2aa213><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-1f2aa213></path></svg>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div><div class="address-card-body" data-v-1f2aa213><div class="address-detail" data-v-1f2aa213><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="detail-icon" data-v-1f2aa213><path d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z" stroke="currentColor" stroke-width="2" data-v-1f2aa213></path><circle cx="12" cy="9" r="3" stroke="currentColor" stroke-width="2" data-v-1f2aa213></circle></svg><p data-v-1f2aa213>${ssrInterpolate(addr.country)}, ${ssrInterpolate(addr.city)}, ${ssrInterpolate(addr.address)}</p></div></div></div>`);
            });
            _push(`<!--]--><button class="add-address-minor" data-v-1f2aa213><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-icon" data-v-1f2aa213><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f2aa213></path></svg> ${ssrInterpolate(_ctx.$t("parcels.address.add_address"))}</button></div>`);
          }
          _push(`</div><div class="parcels-add-btn-wrapper" data-v-1f2aa213><button class="parcels-add-btn primary"${ssrIncludeBooleanAttr(isLoading.value || !selectedAddress.value) ? " disabled" : ""} data-v-1f2aa213>${ssrInterpolate(isLoading.value ? _ctx.$t("parcels.form.submitting") : _ctx.$t("parcels.form.submit_order"))}</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/parcels.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const parcels = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f2aa213"]]);

export { parcels as default };
//# sourceMappingURL=parcels.vue.mjs.map
