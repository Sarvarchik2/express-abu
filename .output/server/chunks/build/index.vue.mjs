import { _ as _export_sfc, u as useI18n, b as useLocalePath, a as __nuxt_component_0 } from './server.mjs';
import { u as useHead } from './v3.mjs';
import { mergeProps, ref, computed, useSSRContext, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const Search$1 = "data:image/webp;base64,UklGRgIBAABXRUJQVlA4TPYAAAAvF8AFELegoG0bydvug3n8SZSGgrZtJG+7D+bxJ1EFbdtI3nYfzONPoggiSQkk4KuRlArQRBN4JiBg/3+ttR7AAfhVtbhVtZgkSiIEPInQVUVVgQIzk+894LBtI0fyeXYu7aW5uf3+e934HUT0fwLw759ti+r2dJ1CCRpIj03poxpyW+ipllx21KN4qri8aH0llCIj2h9eBZ/RqzIBeGhdRgNwE/1yA9BvQJgzHaAKYPkGhOyWAbwBGK3LuAOYRLsWR37x6YiMBQR5m15xlJNLbNiFWwXJuVjBlN/NswJEJ4MGoVzAxbMGPKvqstoPAC4eDZ3XMAA=";

const Circle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBvVWxTgJBEH17X4DSk/0BE6g1AX9AqW3ESjuwsgRKO0ws7MCKVr9ALKzlD7jYi+cPsL7hTk5l5zwD+JLJwb3ZN3Mzu7MGGXBvKPDRhEONT5uYIKKN+f4eAe7MFkJNwyjClov7/FlDHjgMGKjrCxR4xCXj59zicZoNWeNe0Vqmvou36djBKjDo8Eu66d9UXDLvYR1wODfFWMsk4jYpSwHrQUTlivQk7sGMpVHEo3egewnsHzCb7dgqVeB2mBmgkGySOHs3hfPZhBvRlugKvwknPtp62eYBs69raUjW4YuepnDiI1/pxQytgLU69HGDYbb41yBXNwppUJUelH2cusiD0ZNKWSO18jHSzL+AOl4E2DAkQOgjanvIjfKOSkV6gF3kRvNUpcYBO/DoXXTGDpXwK8SncaSQMs7lMGzwoNk40BQPqhOtfw3HOi+E2R/XvmBuk0zx+aj4n2E3v4lMOsNXhktvt8U54IueEFgVIl5M75WlO5nlatFJHd8ZiH6KewMkQSwnYYfsMfJhRN8T36VvslYl26zOzGTiylD8/KpwbnKGAvQoHGkaHz2vGo8WSdmwAAAAAElFTkSuQmCC";

const Arrow = "data:image/webp;base64,UklGRtQCAABXRUJQVlA4WAoAAAAQAAAALgAALQAAQUxQSOAAAAABgFBrb93mhyAIglAIglAGNYOFQcOgYaAwCARDCARBMATtkYf9nwGIiAnAbbH3Fi0zo3pRjDZveT0mHWE1e7r20pq9332+WvYP7fDJoWG3PEe/bniOf156J2F7XChJGXKiwZGfE09WO9CkrQfOkwZAk3gDUJiaAJUpCySpHcYVmLhSFjLdyKz+cyvbQvaYyGBcO4TLgUpVgJlKAGFyAKhE9sd4Kg5XGj2SRrLgtHCEnGFhaIqrK8ET19dhBXeXMc1wfxqxK3rq3qvN6F2iiysG2tpuxCwYbfO2t8yM3SfFfVZQOCDOAQAAcAwAnQEqLwAuAD6RQJlKJaOiIac4DJCwEglsALEleNk+Df3D8cvxm6Xk3P+q+1XtAbavzAfsV+wHCAfrH1inoAeVz+t3wR/tb+yXwAfr4TJpl5y/NgFA+EVt9YBbYK9jWK1OdzeheUCKGLoAAP74MjjHMUeSjQx+DzSiL/8RxhQSWjxN7HEkHk0b/yI8NA/7LU6qv803pntkP7l+H7bUv+Ey+md9rss+iVPDxY5i17Ih+4gWuBPdh347BP7KGkUMwxmpfyexdn8f91hfuWfhqGJGwXqoKuGvbbGoTQ1J7gwn9qfu1x871TBb/+LFQRbAmGCunZOXr7Halpm79F/gn1yKpo5Eb3xoO8YHJj7nTyfUXsYjuRnJJbFMq56n/i2wBeIYMEe9wsyULiS99PMgmqaq3Zrvj8skD6iV17doZ7RHxGR1ebL0xOCv9PvG4rtsXEqgAA9ilXTZuiKqdAZX8kBzwnPHbVWKX9OOhz9WyrMJj1QlCnM2Bz0MUXdAQf94Qr+tO3kRZ+FjqXU/+RDiIQ9HYPxnrkx7T/v15jt3qGX/hUrAK2pwDJP/4tfHIXuAgY9N8YX0//8V1y6F24eNv/CPpy8EJUKiwzMhAAAA";

const Done = "data:image/webp;base64,UklGRrYCAABXRUJQVlA4WAoAAAAQAAAALgAALQAAQUxQSN8AAAABgBDbbt3oQTAEQSgEQQiDGoIZNAwSBgqDLgNDCARBMAT1b/vNAoiICUC/FDs9Itp5XxWz083j92Y6QyxGeh52azG4yhA5Y2IZoC2mbl3XmG0dS8y3n6QRxPZD8qBcvm3B2dInCVb7VGlC3zR465sRRQJSMK9ApqqAUUXCyaUI7nIh25XM2Oo/9ydkeyIrcC7FwZWQqSqQGlMGUJkEgBIZ3iuPfFAaw+edxOVLco6M75fGsOLXheDA73nagV71OTv6xSe0gqHrsCoYLMeQqpgoxTuaKWZLPqpHRPP7qgndAFZQOCCwAQAAEAsAnQEqLwAuAD6RPJlIpaMioScskLASCWwAnTM9xy+m/gBy1nDMT5HfOA8R3pAfyf0AdB30AP6J1AHPd+w1+5H7dEehuzT3SvQseGloO8MBwrqH2SOWC1ULU1CG6ERAAAD+6p2iTyvfw721V2ECKCb1h5ON7jzQnHb0CTHupZbC79hAigm8toTVHmhOO3kA12OqQCfmj3ysWjU8TxPYYWX+cZMmBAxu4jdKaGthGR85AWatul1Ghp/LcRx7xsYKDmCUsf4SD4XIqeMpuw+t7y0ShrkfM0pSruZwV533sgNmu2qy/ouP+Ba3obcOQEPaBcLkPqmiD0hC5ayoJjoI0CVIeeGuXpJy38BKzaU47K7R4tHFO5i2hOCebzR3ANNeHNf7ELy/qQ03vSZVO6zhDJYhwwD3pMZO+RMgRLCGSxDhk1ePA6f4JWhseaD/mmS/MSDFEaxC/9r68bb0f7BYH/5V/Q7rE4Y1fH8d+zXUbj/jh9dSbtbDdakXy8rOMln0/+YTmNDLYint/9IkFHe/IAmKj3bbXXALn/id0unIUyy8f57BdlLTk67j+1nIAAAA";

const _sfc_main$1 = {
  setup() {
    const searchQuery = ref("");
    const shipment = ref(null);
    const errorMessage = ref("");
    const statuses = [
      { key: "waiting", title: "В ожидании", description: "В США", icon: Arrow },
      { key: "sent", title: "Отправлено", description: "Отправлено из США", icon: Arrow },
      { key: "customs", title: "На таможенном складе", description: "На проверке в УЗБ", icon: Arrow },
      { key: "arrived", title: "Прибыл", description: "Посылка прибыла в УЗБ", icon: Arrow },
      { key: "delivered", title: "Доставлен", description: "Доставлен получателю", icon: Arrow }
    ];
    const currentStatus = computed(() => {
      if (!shipment.value) return "waiting";
      if (shipment.value.is_delivered) return "delivered";
      if (shipment.value.is_arrived) return "arrived";
      if (shipment.value.is_in_warehouse) return "customs";
      if (shipment.value.is_shipped) return "sent";
      return "waiting";
    });
    const isStatusActive = (statusKey) => {
      return currentStatus.value === statusKey;
    };
    const isStatusCompleted = (statusKey) => {
      const statusOrder = statuses.findIndex((s) => s.key === statusKey);
      const currentOrder = statuses.findIndex((s) => s.key === currentStatus.value);
      return statusOrder < currentOrder;
    };
    const getStatusIcon = (statusKey) => {
      const status = statuses.find((s) => s.key === statusKey);
      return isStatusCompleted(statusKey) || isStatusActive(statusKey) ? Done : status.icon;
    };
    const handleSearch = async () => {
      if (!searchQuery.value) return;
      try {
        const response = await fetch(`https://abuexpresslogisticscargo.com/api/shipment/${searchQuery.value}/`);
        if (!response.ok) throw new Error("Товар не найден");
        shipment.value = await response.json();
        errorMessage.value = "";
      } catch (error) {
        shipment.value = null;
        errorMessage.value = error.message;
      }
    };
    return {
      Search: Search$1,
      Circle,
      Done,
      searchQuery,
      shipment,
      errorMessage,
      statuses,
      handleSearch,
      isStatusActive,
      isStatusCompleted,
      getStatusIcon
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-component" }, _attrs))}><div class="product-component-search"><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("tracking.search_placeholder"))}${ssrRenderAttr("value", $setup.searchQuery)}><img${ssrRenderAttr("src", $setup.Search)} alt="search"></div>`);
  if ($setup.errorMessage) {
    _push(`<div class="error-message">${ssrInterpolate($setup.errorMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.shipment) {
    _push(`<div class="product-component-search-out"><div class="product-component-search-out-top"><span></span><!--[-->`);
    ssrRenderList($setup.statuses, (status, index) => {
      _push(`<div class="${ssrRenderClass([{
        "active": $setup.isStatusActive(status.key),
        "completed": $setup.isStatusCompleted(status.key)
      }, "product-component-search-out-top-item status-item"])}"><img${ssrRenderAttr("src", $setup.getStatusIcon(status.key))}${ssrRenderAttr("alt", _ctx.$t(`tracking.status.${status.key}.title`))}><h2>${ssrInterpolate(_ctx.$t(`tracking.status.${status.key}.title`))}</h2><p>${ssrInterpolate(_ctx.$t(`tracking.status.${status.key}.description`))}</p></div>`);
    });
    _push(`<!--]--></div><div class="product-component-search-out-center"><span></span><div class="product-component-search-out-center-item"><img${ssrRenderAttr("src", $setup.Circle)} alt="circle"><h2>${ssrInterpolate(_ctx.$t("tracking.departure_time"))}: ${ssrInterpolate($setup.shipment.departure_time)}</h2></div><div class="product-component-search-out-center-item"><img${ssrRenderAttr("src", $setup.Circle)} alt="circle"><h2>${ssrInterpolate(_ctx.$t("tracking.arrival_time"))}: ${ssrInterpolate($setup.shipment.arrival_time)}</h2></div><div class="product-component-search-out-center-item"><img${ssrRenderAttr("src", $setup.Circle)} alt="Circle"><h2>${ssrInterpolate(_ctx.$t("tracking.received_time"))}: ${ssrInterpolate($setup.shipment.is_delivered ? "2025-03-25" : _ctx.$t("tracking.pending"))}</h2></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/product/product.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);

const HelpImg = "" + __buildAssetsURL("help.PGX4uK6y.webp");

const Help2Img = "" + __buildAssetsURL("help2.B40YSLOz.webp");

const Money = "data:image/webp;base64,UklGRmADAABXRUJQVlA4WAoAAAAQAAAAPgAAQwAAQUxQSNwCAAABoFXbclZLKwmRUBKQEAk46Di4ODhxAA6Cg9MOIgEJJaEkrAdIIHR/P48RMQHyP2aIy1pKWZf4R8TqdH7T25JxdjNzzpbepBXwklTOOu8GmL5mdvAcpDsZ+PySH2ALcjdk4POKH/BZnpwdlhdM4JO0QwotUYM4TA0m6czkDpkcC6NWWKQdi2PfuSULrIMUqjRD5bpqQypMYwpoy8APzMBCQ6EMCVCkucAeMll3yA354mFEgtg6MJFMFqlYK8IyouDShtzI0BKnjDj43WHUxnRsHTs2AnLHBr+u+hcIzymkDnUoX9Y7CfS5CeYOic7ZinbNEJ9TSD2i+wls6olvEpGd+gXXjgT6XIB8J5Nlga0jQ3hOjN8dP8d0JRXv+GIycMc7YGtk6DB+j1ggtozaOLBWhDQiON9Whs/FCqVVQEfIDtoIBmYcDqYNhSJDI9SGqHF9qDQL6BjZ4VdDJFXHa5J2giKDg+NTSySTpVMd01ESwbRDs3aowSzjM9jU6p4MsrwxA58HPkCWdy6ApRvRgEXeqgZYieEixNUBm+TFyThbrYdx9iwvT5XeugR5f5hzqbWWPAd5WFNvfOCFid76V9AYw8u2eGnU8KkOUNOrklwa3TaPi0tOD3jdUv4C1BRGxNUBjjs1Bjnrzvn45jmqBD33xNVpxr4qnbrz4JFEJK7O2beYYX5MRNP3uAPr6px9iyJioAPOIc45l7LlvJXy5dq3KCISVigy6OZ68i3KZTRAh83rdKWLASXKtVbAZxlWwc3MHMBnaX4c2IIMC0an5yDX0YAa5TxIJO7V7KjfLQW5DgXwRa6HPfjjQAnyVCy11hyfixWwKJ03onFtRR8JK+BZuvsuzbgsei85UFWGbJOIxM0APje0Ahbl7g2L0kwGWOwIH4Ac5ImSLp0jSG8yoMSLsDhQVR5M9Fbp1x3A1pRWBzzJoyNEpkrbc5BnNfZOt0TibifLQf7YKc4qAwFWUDggXgAAALAFAJ0BKj8ARAA+jTiXR6UjoiExiACgEYlpABUgALhOlagKt3a2m+zM1EKvGjG1hNz5jzpxwAD++TVf4ZT35qNTB6lgZUqG3//5MqCt9V/krlfuU3//ky5v8BSAAAA=";

const Cart = "data:image/webp;base64,UklGRsACAABXRUJQVlA4WAoAAAAQAAAATAAAQwAAQUxQSBICAAABkFVtc95GA0EQBoIhCIIhiMGagcWgYSAzcBkIgiEMBEF4L+LUI1v7dxcREyApqYwzATXpSICaxiCpvoGlIYhoqrxXHYKIaDbgCIMQkQzkccgCLYxDKswDecFrIAnKQCJYemCMUb2ee5Q4EsD0mpUH1nq0NyxcqvLQEDcgj0JEZrCBSIMwEAMdSIMwjgDII4JPhOMRK+aywPcTVkA9CiwPWIFNPA+I91uBTVyBcLsCbOIa4ZC7FWAT3wXKTVKZzgqQxXmHdEHBXAK06a0AWbwNppsYtEmkAFm8FZrcQ9SgTQXI4j5DvYuocZrF/wXZoTmJ2luWjhXiFQG8RA2y9ATCpQbBS/SVpGeEQy4bTG69FyjXNkgP2SFdW6A8xGC6FqGFR0zQxPGA/IgFvj0SMD3BIHlIhTbdL0ELLmpA0ZtNBkV81QDq1xw13EPnApg6ie782Do3ztsk/qn+5KZVpWuY816t3cPqK8ptg/YN8l9UvwyOoj3CUhttT3f4xcfVbzLOTbut/HD10sZn004JqDFIrEB0MmhZZXoBtVOFXU43qD4JTOU9ArFLAPQsNFCXHZKc77B0iVDl4wHR5YDpQ4LSZQK7Q/yw9AoN4pkCwWWDrw8HpC5SwfRNDYq4RmA5WQHtow2szPPaAPWRCuxpXiqQpXPih0mcg/F5k+5qZxbFPWxnLcsd46vuryhdddlrWYJcBlZQOCCIAAAAMAkAnQEqTQBEAD6RNI9HpaKhIRCgsBIJaQLgA/AD9AP4ADyAP4B+AH6S/n73+ATSIhsFWlf/7T/y5szTc3e1GoFgsoFvttv//0zz8IQIpdQ4AADVL18Ll044EvX/2qAz1p6P8ir//3rSV44gMv+sMKcbq49HHjkv/NVtZRqY9Gz9B0X8eeAAAA==";

const Box = "data:image/webp;base64,UklGRmYCAABXRUJQVlA4WAoAAAAQAAAAOgAAQQAAQUxQSNQBAAABgFZrb97mhWAIhhAIgTAIYTAzSBikDDYGhRAIhRAIhqB+yNIrZWe/I8KB27aRpL1PBeNg129A6FS+Kq46rV1kLZcwn/I5nUs+ZZf36SHv009NZuki0huW8/Nky6Qe8j7d62eEX/WhmhqLnPMwxaR0a0mM5WaOuGlnVizH5B24u3bmxOLPk+GsB5uF6QzFQg3mOiOxqM/t5h3CGYll63aOpDMQS/01cuSdzNY6g/UVIae3tfZgtwynt7X2nRTnQm0tgBTn8rF0f7C4c+6fiZRG7k6OYWe5i1iIWDnGnd9dDG76eA8fCDunQ6XZNBvqOW5f2Fl20Qu0jABNrWfQOS5Q3woM9GAJTr0LRwUsxsHCThl+fhhQos5h2UnAOe1Y+gzQWE76zwsBaKeO5RHEcXpb21sN4jrtrS2IQjitrUUYwtnGrU2AcI5bGyOy9g24ApQ3BReBN/jneVwGTtmuAxUXgr9EEznbBSxd5Fa7qjUp+D1gQh1qTQpeDzBbYA5mD/BaIAXfIokWyMC2SLIFUjA1iW+BHlws7sl0cgRqEuA5KcrO1iTCaREt2aRzJBgL79SEYgk5FZFYok4R4WOJO0WEjSXFSTfIHCcZS5LTiyX7Q1ssFgBWUDggbAAAAFAGAJ0BKjsAQgA+fSySR6SiIaE3/ugAkA+JaQYoAAD8BkUTLhLqJ54/Gu86f3H3uTZPJyMO+ALYe2fgAP0x///Rw450kj/fjAT1f//9F2A0//pIF3/vxob8wRv//0X6OhMKLi3P//RdgAAAAA==";

const Safe = "data:image/webp;base64,UklGRpACAABXRUJQVlA4TIQCAAAvO0AQELcgFkzmL90Xw/zPP0G2Ld4JXoJJmmo7BjUAABzbBwAABNt2gkZJpMMgihbD2/9etUXpBiL6PwHyoL5SzjGojB+Wg481TUOFpdHpsw0S5sZlqyXn/TgBR7LHwuxctjWoXGrcG5c12gM6Vy7bGqTztZ2AGu0WTZXLtga5U+N+AvbYFfbGuZWgcrvFegIv9k2oXNao8rDFymWxK6uca1IZ0rJzXk7qQFuDDBw2gCIiCVhVBrcNCCIHJPnBFYooIL8YwGWC4ycUkAD1J6SBRnjfpqX5fJ+DRSi3HQDLbQdMT8xchrsqhAz5JgPyBq6/UMBFG+QfMMBEEjQdzhyKiIjDoiNZKg5gpwBwlGhjhMp1lsuN62oDRC5bfcnHWC9o03MObU+TdIZUgfdzgMmtL6jPVSi3qEN5LgDzHQs0e05W4K9vBpIMIAe0qecfyDKEObh+Z8AuY4g1iN+t4DqKZMjfbRDllgilb4M4zLuvQvguQ+5zsAm87+iKUPoAUWh9DnZ6lSV8eHdNcIg4TF0NVHRuAB5FAtSuCG+RDVKXw9/c+OhpvqNAEklQuyrXLW98XLscgogC2hMuPKmIZT816wngIiIVUo+8al2DfIx73SfpLVBOCWrX8waEkzYIo83gcpmhDmYO8UobpLEKuHzM0GwkA+IndagDqUORLwMwj1PA7RtZgb9RZiDK9xXaNMYMZOlUhzaNMAO7dJsD6bkZOLRPzIH5IS3AoXKnObDbE+bArnKv7oDH+/4bsMr9GaDYPaECLcmTwQEW67MCUE2etQ3AF/vOCkBL8rw55zJ9CpXzbjJkdM6+55yXvXGuQYaNlc4aZOiwtU8tm4wfYs45xUkeBA==";

const S1 = "data:image/webp;base64,UklGRroCAABXRUJQVlA4TK0CAAAvOsANELcgFkzmL90Xw/zPP0G2Ld4JXoJJmmo7BjUAABzbBwAALdu24kbS5QkFgZBsJXqc+c9VqK32M6L/E6AHw5hLGQf9BcdK3z/2sqFyenrVL/u6lLI6wGbvmYBWgrpxAzy8JQKb6WQB6lPDVBs1yGELOp2ArLGxrekeq3SHDG66uEALK3tPNwyNbpVD0mWHnNoO5ktDA9bRpAiu6xmqpCE78Lni4FH7Ap8bAjR1C5DPJXBTd4XxBjlYRwu0cxWS+hXiHRViLzSIpxrYa7RAPgXo8Avpjg2GgwLlVAM7yLDcYIAOV8inVpgPIrQbEtQDA4ZTEfjpqUG65pB6YQPX+QpMvQLNrkzgoTNsQLxgDvhnjKbgsIVzP0CShjFXgKKr5nQ9KAJuZ36BKk10W9aNyXdEKQNtsl6sgJu0dqrp3ljWmiUps69zKZ8GsJkkq+snBz1vztlW9PJUD1oxvT/EXEoa9L9nsBhjtPfFvDqH22cM7wlT4/IaHwkph06YGt3mtdatdcCHXizxSqrAZxcdoH2SqR9iruznIMkA/9iJ6Ox3vwB1DLpoXwC3HvCx3sy+5iBNQEu6076AmxS/DuDD7gO0EiQpApvp5gxU7eMXaIM0AUtQ12ELuj0BeSclBw/BoaifwE0PLtBCR9agjOA63CDpydAg9pTAC5SDAIRHVGA5CECG5SBC1bMj/DkwIEILr4lQDyaocthCx8AfSvCn9wMkRcCHnRrEZ1bIuzADm6QCsI6SvlAfMcAkmxrgJkm5AbRqEcgPBIePfp19NXXty/6PFuDntrBBs8jek07askFRcGC6aXAgKzitRl21QZI54OmGMAMUSTYE3W0VwJOdCnFtQEt6PDv7bS0pxjimuTb21fRC+zo31qiXhrS2c75EvTrmZa21rp88Bt0NAA==";

const S2 = "data:image/webp;base64,UklGRrIBAABXRUJQVlA4TKYBAAAvOUAOEKegoG0bxvxJd5fD/M8/QbYt3glegkmaajsGZXDEsfcAAIBl204VSRCxKLFa4cx/tBiS9Os3ov8M3LaNk8Ao5N7d+Ybl/8qw7bXWktzr0rvxyBY9nf3qiNmin8OY/Tpyzidw+Tr3kcK4lrVD8nOuXT6XAw43J8yWlKH6OZpwchSxQ3V1ZnYxO+q4YJtEql12LAFEuf0tO7ZIcIuraKNTZEdfI7d8AfTD6+m7xZoMdFv7LUkRgfCMBqdt7Lf8gGT4EnYCbTFlBTZ51CzfUWaVCcdnnJDtkvla5LBrwpMnxywtLwl6NGrGs533bNKU5a13oGW95jxZSANoNemk4FmWxmC817mUPDFzYzTG92v4jDKx+IifD+PeY7hHObDw6Jz90X2Ulo3GKCXbMn/Gb5aSzVmA4MS6xRVnlp+hy5fFt3eH6Mzyy6Io2Qebjr0wqdgNVeyGGv4evM1s+IFZx7vZD3uQ3y918csbduHMGiTHKGLj/Pjm+TUWitiG1p6F8On4uJXyoVJzfjU8S+mnlOc7zTvj48es78s35FpqPXJY/vxcAA==";

const S3 = "data:image/webp;base64,UklGRh4CAABXRUJQVlA4TBICAAAvPUAPAAWlbNuzSNb+cwAOPge0gqCgWsHggFFAKeg4iIMpBYkDWkFQUHHwLAq+pDI/5ywj+j8B8t9Up3lZ5ll/g9H59OTymfzclQtPqp9h7sUlzsseQ4ixvAB56WFKvGZ/G+VydP7gdde33QGKd1I9BV7v79EElG2UphoAdn2DZiCqNNcIZG02PYFV3roBZWqkTyhO3uwKFG2iGQ6Vt+sBWVvsUFQ61AKpwQY4qR59GKrEAb5KgbvUL7DWyQpMNTtEabjB1kAipIoF0H60wGzLEMR83yfblLxJNkgmB6jJwcMW4cM0FJgtAYLUpKrZJF8QLAU++nJQhisHh/QlGearL/C9fYG/ijD3doN0VWCoGAretlG0YoByoVCkVp3Y5DZKbQE9c5CqLg0Nd/j4nSJ8nv2A0MrB1CrA8j7RUbpxa3iknPegFrsLOef08OvcYn1ivLdZMealJiXsc4sJ+x5tr8Wvi1OddkgtInw7ndxtDQenFZtcKjDUDYDK5dZgFWMGrVPIYlyqgvQloUZ704pdepNsS/1F26O/YAv/nzwMDlJ/EeazCXJ/u2EAht4UGM4kgu8tQJJLByx9LcDnlUTgp6HA0KQYViCIcTiA7D+nlw0OaVjg/qKLz8ChFtGD8/2RgHuLDUiPzPm3SuV2nJx+S9MdY9lGqXc+7id+bDN8neRf3o3SenS32yjN1S3TKP8ZAQ==";

const S4 = "data:image/webp;base64,UklGRmwBAABXRUJQVlA4TGABAAAvPUAPEFXAqm07btNvBUHMQAxcBDGCBEHFwEXgIIgZmEGKwGEQBmJQM3gdraFzv/SOIgyyjfTmfwb/pofQCShmTY0Py+ZK1Q9tYvqx0OSNVufAWdvRuip148gTMS+cTKwiYo/yKMDianY2WTujCOAoB0dAr6Hh1olgsZXBA8HIiDsTOBlcCW5FOoFRBoBGvgOTsMaOM6iT1QJ0VOtBK2wPHoQ0jh6J+N5ByA5cBFgeae+lmgBXOqhOcG8wOlsIaKWxAEej1yvBKI0jqJqwgJfmBAYpdCHYSjIBJ4knsJLMBJ1XPS/4YuvVTNDJgoi9rGZhi1ZWagU3NK/Y3yMrOLMRwV4rKyIOshp4wTMrq+g/oIYT3MnLI7yT1SKCk9XeJHjQyCr6v4dy8KEsGH2kAvXXqzfx4ELXngkWuroIqq49Eyz03js74oN2Ppj1llbnQxZVVVP90Jh8rM3fDKYfB5MC";

const Bgh = "" + __buildAssetsURL("bgh.h5deYzK4.webp");

const Time247 = "data:image/webp;base64,UklGRgQFAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSGMEAAABoHRt27G3ntL9vam7Gqe27dS2bdu2bds2UrejzmJ8NbZthVvRdw7e58mLRMQEiO2lhm2+6f0mOcuX/HNCxJYh5cTdLQ59xPKHfS1c47/iM2z+fLG/iIQdf5S43YmQHanoM79+HRvt/TpTA2lbAyQEeGSfMeNPlFkx2/tU9ROlp9KArXE5JvhzlvEfJNlWIx5l9OwQsRw6J84EUcnws12j0wFyI5qLzS0ifKhzCthiHMIc3UgcDI9UUc6OQjcA0id7xEmj7GlVuA2FngG8qC6Ors9GO9CacQPgTmFxdhH62dYOAZwwxOERun8WWxoNcEIcbx4TcXjV+K51/cVy9TTggZ9z9hsJwIvC4vIGpw3dTCCjlri7wMr/maEJ+ROYLC4fAfwZoNoJRHvcZniBLQr/VMhtJK7vCqQHmFYAEZIPnwCLTZ8BzfNDOPC5R6QFEC35MgFoIXIImJU/ZgP7RT5CVogbtt6509pKWDa8l1I+iBEXhmWTGWxFYsFXZhiwQ1e6bddqBfNQOCgoqJBmLjwsFpRHw7QNGLQZ6KPqEOUD/ljhURVKgh+DNVEw8jB5LGMaAGy6AVRVTM5BvUu1G3zdRV3JR0Yxa5WAu174389kPIC0h89zITPI1DUXDot2FVyVw5Dy1VffASlFTUYmxH8LX4u6+4MyIoeBFiIS+hN8LKp7DX1Mu0UmAPtF+Q388Be80SiPAFVE5CFkNRVtPfijoCzzeheIeCG3quolpGRCTJ4aZUC8iMwG1oQ/f/68gmkbnBB1O+CRqKMhKxui8tL0d8hoJFL3X4j26wXUFhHPl9BecxfopomFzHTw5qF9KvzbVaTIG+DWrtvA2V3FpBV851FVzIYPHs07+PNH+ErX+x9IaS8iTclzsByBXaLeA8wS7bfwTSL871GNzITkTkFBQcWs+P0CjVXFkyGluKZAJiTeAyooeuegPRE0XHkKWDS8UHf4IOpZwH7RVgeubwX6KRaSB1FPB2qLXIS1Ks9HyK2q6wdsHApsUYzy6ldpBnm93spSJAVfNVVjr9d7QvQ7gaHlgBiF/UMhTuyNA1+YfITsUGdm3bkzzJ6wbHgnchCY4Yz9c4F9Iq2A2PwRCzQT8XwJNM8PLYBPRESWAhH54QGwzBSYDr4m7mvmg+QSJtkKRHncZsQCm0UZ+BcwzG3Tgd8CVTKTrF0FXVYjHZgkWuN0A3F50TdAjEfnfuMukFpVLPvX7Tp+1eGImObOnQQYLlYX/4N2hFN+JwH2iuXZ6Bc5VPQewDWPtYG67PXO1H4D8KygWA9XnS5riJPG9AyAawXFxnIqolo40SwO816P2FkgR4XvXku7WjzwAaQOF5t/huQolPFzQq2Fzo1FGVNV7E6C/4yZf5ggJ37boMqGqkC1vjvjslH+Ntkjtj8CQsR/a5pJmfWtNyb27TdZ6JM3B4qD2xMfHQ8TEf9Fn2ksf7KshLg1fN97S753+5qJu8sO2nw37qfk3MzkrxKvbxwSJrYDAFZQOCB6AAAAMAgAnQEqQABAAD51LpFHpKKhoTnoAJAOiWkAFte+AP4B+AH6AU/6UnF9ig4kkUspkF3hkhH/gJxpesRq0MzYiaiKUOp/nACtR4AA/vD3//+HR//hsr//ww//wKg/ER8A2///rT+5/q+n//+snK8Ck4ZdfAC9+BPAAAA=";

const Point = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABOFJREFUeJzVm92LVVUYh3/vUGo5FpZWRloUoZYopTGjCUERREEfoEJFEZEFRXgR3YZldVGE1V8Q1UXfGYRBWciYTIyVOn6URGYlhagD5Tgz6cx5ulhndGZwZu937bXPPj6Xh/fr95511t7r45gaADBT0i2SlkmaL+lqSTMltdZNeiUdlrRf0l5JnZI2m9mRRtRXCsA0YDWwBajhZwjoAB4DplWtJzfARcDzQE+E6PHoAdYC06vWNy6AAQ8DhxIKH8tRYA3QUrXeUQAzgI0lCh/LJuCyqnVLkoDFwMEGih/mIHBj1eJvA/6tQPww/wC3ViW+HeitUPwwfcDyWB0WKX6+pK2SmmVW7pF0s5n97HV0NwCYIuk7SYu8viWzW1KbmfV5nGIeJ+vVfOIlaYGkV71OrhEAtCsM/SLP4T8kfSHpN0l/1z+7XNJVku6UNLtA7JqkdjPbViDG+ABdkRNVDfgYWJIR34CbgE8LTIqdZYm/I7Kg/cCyiHzLgQOROW8vowFfRxTSAcwokPMSwmLKy1cptQu4krA687ADmJogdyuw05l7CMg1l+SdzB502ErSEUl3m9lxh88ZMbNeSfdIOupwa5H0QNHcpwA2O7+Bp5IlP13DGmcNm1IlPg8YcCT+FZiUJPnoOiYRJtS89AOTs+LmGdbzJGUGGsHbZnbCYZ+Lesx3HC5TJM3NMsrbAA8bnPYePnPaZ9aepwFXOBL2m9lOh72X7ZIGHPZzsgzyNMCzIfmXw9aNmaHTr895yKw9TwPOdyT0PKpiOeywzXwPydMAz5BrxP7AxQ7bzKVxngYccySc5bCNxZMjs/Y8DfD8rluBzEdPLISdKM9PMnO+yNMA7zbTvU57D/c57X8qnJGwGBl0vIF1U8LBBdAC7HbUcRJozY6cL3mnIzHAQ0kSj67hEWcNW/PEzftNfems9yXAM1tPCGFPYZ3TLd2eADAP/wlvBwkWRcC5wDfO3ADXpdA+spBvI4r4EPDM2mNzTiXsJXrZklL7cDGrIgoB+B64JiLftcCPkTlXldGAFmBXZEH/Aa8DmS8xwCzgzbpPDLtwPIW85wIrJX3g8RlDTeFUaaOkA5L+rH8+W+Fc4C5JbSp27rDSzD7Ka+xtgEnaIWmht6oGsUfSQjOr5XVwdbq+HH3RW1UDec4jXoo7HDWFW1xtXt+S6VQ4IcbjFHs8vlhSl4r9VlNSk7TUzLq8jlECzOwH+TYoy+atGPFS5AiQJOBSSfskXRgbIxHHJM01M89W2Smih7CZHZL0cqx/Ql6IFS8VGAGSBJyjMBfcUCROAbolLTGzk7EBCk1iZjYo6QlJQ0XiRDIo6dEi4qUEs3j9NsYbReNE8Fp9Mi5EoZ/AMIQVX7ck96Inkl8kLTKz/qKBkjzH6zezHpfkegmJpCZpdQrxyQHWR67gPLxStc5xASbjv83hYTfhnmLzAlxPOJtPzQDQrKvQ0QDPltCAZ6rWlRvCfb8NCcV/TliFnj0A0/FdaRmP30m4xd5QCLc+PfeLxnICWFq1jkIATxdowJNV158E4N0I8e9VXXcyCAesex3i9wEXVF13UoAFwPEc4vuAZvw/QnGAFUx8xlgD7q+6zlIB1k3QgLVV11c6hJek988g/hOa7R+hZUG4f7xthPjtJLhaf1YBzAH2EFZ4mTc6y+J/r23xLRUtXLIAAAAASUVORK5CYII=";

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const localePath = useLocalePath();
    const banners = ref([]);
    const timers = ref([]);
    useHead({
      title: t("meta.title"),
      // переводится по ключу в файлe локализации
      meta: [
        { name: "description", content: t("meta.description") },
        { name: "keywords", content: t("meta.keywords") },
        // Open Graph meta
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://abuexpress.uz${locale.value === "en" ? "/en" : locale.value === "ru" ? "/ru" : ""}` },
        { property: "og:title", content: t("meta.title") },
        { property: "og:description", content: t("meta.description") },
        { property: "og:site_name", content: "ABU Express" },
        // (При наличии изображения)
        { property: "og:image", content: "https://abuexpressgroup.com/_nuxt/logo2.wca1nOcZ.png" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: t("meta.title") },
        { name: "twitter:description", content: t("meta.description") },
        { name: "twitter:image", content: "https://abuexpressgroup.com/_nuxt/logo2.wca1nOcZ.png" }
      ],
      link: [
        { rel: "canonical", href: `https://abuexpress.uz${locale.value === "en" ? "/en/" : locale.value === "ru" ? "/ru/" : "/"}` }
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ABU Express",
            "url": "https://abuexpress.uz/",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+998959550555",
              "contactType": "customer service",
              "areaServed": "UZ"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Абу Сулеймана Банакоти 225A",
              "addressLocality": "Tashkent",
              "addressCountry": "UZ"
            }
          }
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "abu-express" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "abu-express-swiper",
        modules: [unref(Navigation), unref(Pagination), unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 20,
        autoplay: { delay: 3e3, disableOnInteraction: false },
        pagination: {
          clickable: true,
          type: "progressbar"
        },
        navigation: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(banners.value, (banner, idx) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: idx,
                class: "abu-express-swiper-slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<picture${_scopeId2}><source${ssrRenderAttr("srcset", banner.mobile_image_url)} media="(max-width: 768px)"${_scopeId2}><img${ssrRenderAttr("src", banner.desktop_image_url)} alt="Slide" class="slide-img"${_scopeId2}></picture>`);
                  } else {
                    return [
                      createVNode("picture", null, [
                        createVNode("source", {
                          srcset: banner.mobile_image_url,
                          media: "(max-width: 768px)"
                        }, null, 8, ["srcset"]),
                        createVNode("img", {
                          src: banner.desktop_image_url,
                          alt: "Slide",
                          class: "slide-img"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(banners.value, (banner, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: idx,
                  class: "abu-express-swiper-slide"
                }, {
                  default: withCtx(() => [
                    createVNode("picture", null, [
                      createVNode("source", {
                        srcset: banner.mobile_image_url,
                        media: "(max-width: 768px)"
                      }, null, 8, ["srcset"]),
                      createVNode("img", {
                        src: banner.desktop_image_url,
                        alt: "Slide",
                        class: "slide-img"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="abu-express-time"><h2 class="abu-express-time-title">${ssrInterpolate(_ctx.$t("time_header"))}</h2><p class="abu-express-time-text">${ssrInterpolate(_ctx.$t("time_subheader"))}</p>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "abu-express-time-swiper",
        modules: [unref(Navigation), unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 200,
        autoplay: { delay: 3500, disableOnInteraction: false },
        navigation: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(timers.value, (timer, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "abu-express-time-slide",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3${_scopeId2}>${ssrInterpolate(timer.country)}</h3><div class="abu-express-time-item"${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(timer.days)} <span${_scopeId2}>${ssrInterpolate(_ctx.$t("days"))}</span></h5><h5${_scopeId2}>${ssrInterpolate(timer.hours)} <span${_scopeId2}>${ssrInterpolate(_ctx.$t("hours"))}</span></h5><h5${_scopeId2}>${ssrInterpolate(timer.minutes)} <span${_scopeId2}>${ssrInterpolate(_ctx.$t("minutes"))}</span></h5><h5${_scopeId2}>${ssrInterpolate(timer.seconds)} <span${_scopeId2}>${ssrInterpolate(_ctx.$t("seconds"))}</span></h5></div>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: unref(localePath)("/")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$t("time_send"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("time_send")), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("h3", null, toDisplayString(timer.country), 1),
                      createVNode("div", { class: "abu-express-time-item" }, [
                        createVNode("h5", null, [
                          createTextVNode(toDisplayString(timer.days) + " ", 1),
                          createVNode("span", null, toDisplayString(_ctx.$t("days")), 1)
                        ]),
                        createVNode("h5", null, [
                          createTextVNode(toDisplayString(timer.hours) + " ", 1),
                          createVNode("span", null, toDisplayString(_ctx.$t("hours")), 1)
                        ]),
                        createVNode("h5", null, [
                          createTextVNode(toDisplayString(timer.minutes) + " ", 1),
                          createVNode("span", null, toDisplayString(_ctx.$t("minutes")), 1)
                        ]),
                        createVNode("h5", null, [
                          createTextVNode(toDisplayString(timer.seconds) + " ", 1),
                          createVNode("span", null, toDisplayString(_ctx.$t("seconds")), 1)
                        ])
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("time_send")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(timers.value, (timer, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  class: "abu-express-time-slide",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode("h3", null, toDisplayString(timer.country), 1),
                    createVNode("div", { class: "abu-express-time-item" }, [
                      createVNode("h5", null, [
                        createTextVNode(toDisplayString(timer.days) + " ", 1),
                        createVNode("span", null, toDisplayString(_ctx.$t("days")), 1)
                      ]),
                      createVNode("h5", null, [
                        createTextVNode(toDisplayString(timer.hours) + " ", 1),
                        createVNode("span", null, toDisplayString(_ctx.$t("hours")), 1)
                      ]),
                      createVNode("h5", null, [
                        createTextVNode(toDisplayString(timer.minutes) + " ", 1),
                        createVNode("span", null, toDisplayString(_ctx.$t("minutes")), 1)
                      ]),
                      createVNode("h5", null, [
                        createTextVNode(toDisplayString(timer.seconds) + " ", 1),
                        createVNode("span", null, toDisplayString(_ctx.$t("seconds")), 1)
                      ])
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("time_send")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="abu-express-how-works"><div class="abu-express-how-works-main"><h2>${ssrInterpolate(_ctx.$t("how_title"))}</h2><div class="abu-express-how-works-wrapper"><div class="abu-express-how-works-left"><ul><li>${ssrInterpolate(_ctx.$t("how_step1"))}</li><li>${ssrInterpolate(_ctx.$t("how_step2"))}</li><li>${ssrInterpolate(_ctx.$t("how_step3"))}</li></ul><button>${ssrInterpolate(_ctx.$t("how_button"))}</button></div><div class="abu-express-how-works-right"><iframe width="100%" src="https://www.youtube.com/embed/Gus2csb-5vk?si=TTVKkGQI2eepVkjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div></div></section>`);
      _push(ssrRenderComponent(Search, null, null, _parent));
      _push(`<section class="abu-express-help"><div class="abu-express-help-img"><img${ssrRenderAttr("src", unref(HelpImg))} alt="help"></div><div class="abu-express-help-text"><h2>${ssrInterpolate(_ctx.$t("help_title"))}</h2><p>${ssrInterpolate(_ctx.$t("help_desc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/help")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("help_btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("help_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="abu-express-facility"><h4>${ssrInterpolate(_ctx.$t("why_title"))}</h4><div class="abu-express-facility-item"><img${ssrRenderAttr("src", unref(Money))} alt="feature"><h2>${ssrInterpolate(_ctx.$t("tax_free"))}</h2><p>${ssrInterpolate(_ctx.$t("tax_free_desc"))}</p></div><div class="abu-express-facility-item"><img${ssrRenderAttr("src", unref(Cart))} alt="feature"><h2>${ssrInterpolate(_ctx.$t("best_rates"))}</h2><p>${ssrInterpolate(_ctx.$t("best_rates_desc"))}</p></div><div class="abu-express-facility-item"><img${ssrRenderAttr("src", unref(Box))} alt="feature"><h2>${ssrInterpolate(_ctx.$t("fast_delivery"))}</h2><p>${ssrInterpolate(_ctx.$t("fast_delivery_desc"))}</p></div><div class="abu-express-facility-item"><img${ssrRenderAttr("src", unref(Point))} alt="feature"><h2>${ssrInterpolate(_ctx.$t("security"))}</h2><p>${ssrInterpolate(_ctx.$t("security_desc"))}</p></div><div class="abu-express-facility-item"><img${ssrRenderAttr("src", unref(Time247))} alt="feature"><h2>${ssrInterpolate(_ctx.$t("security2"))}</h2><p>${ssrInterpolate(_ctx.$t("security_desc2"))}</p></div><div class="abu-express-facility-item"><img${ssrRenderAttr("src", unref(Safe))} alt="feature"><h2>${ssrInterpolate(_ctx.$t("security3"))}</h2><p>${ssrInterpolate(_ctx.$t("security_desc3"))}</p></div></section><section class="abu-express-help abu-express-help-about"><div class="abu-express-help-img"><img${ssrRenderAttr("src", unref(Help2Img))} alt="help"></div><div class="abu-express-help-text"><h2>${ssrInterpolate(_ctx.$t("about_title"))}</h2><p>${ssrInterpolate(_ctx.$t("about_desc"))}</p><button>${ssrInterpolate(_ctx.$t("about_btn"))}</button></div></section><section class="abu-express-statistic"><h2>${ssrInterpolate(_ctx.$t("statistic_title"))}</h2><div class="abu-express-statistic-item"><img${ssrRenderAttr("src", unref(S1))} alt="stat"><h3>${ssrInterpolate(_ctx.$t("stat1_count"))}</h3><p>${ssrInterpolate(_ctx.$t("stat1_text"))}</p></div><div class="abu-express-statistic-item"><img${ssrRenderAttr("src", unref(S2))} alt="stat"><h3>${ssrInterpolate(_ctx.$t("stat2_count"))}</h3><p>${ssrInterpolate(_ctx.$t("stat2_text"))}</p></div><div class="abu-express-statistic-item"><img${ssrRenderAttr("src", unref(S3))} alt="stat"><h3>${ssrInterpolate(_ctx.$t("stat3_count"))}</h3><p>${ssrInterpolate(_ctx.$t("stat3_text"))}</p></div><div class="abu-express-statistic-item"><img${ssrRenderAttr("src", unref(S4))} alt="stat"><h3>${ssrInterpolate(_ctx.$t("stat4_count"))}</h3><p>${ssrInterpolate(_ctx.$t("stat4_text"))}</p></div></section><section class="abu-express-help"><div class="abu-express-help-img"><img${ssrRenderAttr("src", unref(Bgh))} alt="help"></div><div class="abu-express-help-text"><h2>${ssrInterpolate(_ctx.$t("final_help_title"))}</h2><p>${ssrInterpolate(_ctx.$t("final_help_desc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/help")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("final_help_btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("final_help_btn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
