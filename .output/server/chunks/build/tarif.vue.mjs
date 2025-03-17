import { _ as _export_sfc, E as Exit, u as useI18n } from './server.mjs';
import { u as useHead } from './v3.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const Traifleft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVVSURBVHgB3VvhdeM2DIZzC6QTVBucN6g6QbPBuRPYncC6CZKbIOkEuU4QdwKnE8j3P1dlgTMOoEgZlkVZokDJyfcen2yJIgkQBEEImEFkYAEJXVLYw0eYmd9cru1VYkfl1VwR/oMreKbfz7NfzP1omEEEENFM8B/U+g2cEtoXzJANMeRvYsYGlKHGACKaZ3VJg11BOcMOPKsbuv/NzSrfq8+slZTEvLuHOY3sN/o9r7W1o2ef4QNsYktGZzDhVNb4PxRU0JYCv0NmJGF4+ym1dUdt5rX2by3TpgMNYFkj/EmD6Jb+UtPHob8cX2ABY4M5XxtIVMIb+y/g8YgRY0lDbdbzMQlvGMtCLA1eFiuICerwtuI6r8viSEFNAiMN3+GhGhfpI4gBavh+NE4HgMa3EpNzD5qgRrcV8YXZmi4SPDaxJLagATHz4ymaAbAKOleRBLu/vxniHSwTCsuEWwiB1fZOsVys2Ptgl4NjQj+dVePgxSm8rhCKseglwdUaKpS16QSwZrQx1rq98GKMize37n0wZ5WDUlydq5yI2V/AO4E9Q7ilcN1W0Vl6j/DOUJ1d6JTaXEEqvglEHxFTKk9UCvRjSyXI1D0rBWLtd1MWimCisB8yCECrFIi1n8KICCCekUMApBT4HgQ1HIpA4hkFBEIs85T/X5m7e/hUPoV/YCBocNdUEr6eqcdrOYMwhB/DEb6Y6944bO09BfEnguZYKjGJe2ZGQ901DgQE4kTarfY/XRd9GkVctow1l9JwhnjW8k8YkQFmDHK3I+1/M0T7nyEoRyEBLXW5XirqJZYZsRhQ+hPZoWrc120GQltDOsQzFg1tJxiLAe58QNcDNwqhFLo0okc8tvThk4Lg5WraPdg8X3kXSOz9V+iHzHN/R+X32Wy2M5110PZ4ZsdowDMMwYfq/V/lDpBAD9CgMzvTwTMvkDW0f9NSP4UBEIo/B+f1gUDQYBZY2u9c5uL+GvthjdZ+oLJC/5kgAwVUdA9lgCWWB74Q/9cYBxkoQZUBRw232wQXQbwZZ0QG5KiPDJTh6OZdYGduKPgAsFSACejiM+0oGShC0LpjBrjtb/B3Prv17TyPeev5C/ptt+rEWyT2+lpJAPxQ8/3/2XCPiWfb4I6uX6AbYhHPtLrJ/nZlQlcYMx0G0KA3cMwER/wrlgbPpw7NxCOe4WhFGps0C0ERWBpKW0u08xNs+yg87G8hdhubc42x+a9xHPZ2NIx49i8U2OBPGDyuuvM3tj9wAPEMVSdt3SFSusScK2wfzSF6ztVWrXkszWkm2ol/qroUnCtsJmIOvd5SRWB5ZmjCStSRMy+RgBK80l73lsaAJTC3RPE1rT3zHYBUJKDV+115hkb4MFKfUSyPvj7i1cYjtP/i9GH5FTW6FJz0618aiIq7gNztvGb/mFJQ9VkepX2z38tN19qPc/2xH9BbaTopWDUQvwAl9Ip5EGEl+ViBkFgaSlIKMlBCUMyD+IoaFmEVADy4wVRjkjhUzqv5vS+9nyCp5VnF1/KyjLB6q2FyOGgSRYRVfw5OiFq0aAZDQBr0obMGvQDUiH8ADeAhWDp/A8HSLpdBJ1i6avxFxORfZrj8UijuB4gBYSmaSOxLWBI2aesokQNiwu4Oh5SZl+kCKu3pbryUGdFxgsdpbI9jSkND9tjTJNJYS1qaIm1u+vQdm7R0h8f5g7lNbExhIAzR/sTM4R9zQAlVkjSarK1EPOIvQeR/h39t6qxJkPakzjJBc5FonUI9DZfD3K7gjt7vG9DRiJjJ0wub/5vAMOyM0/YKvl508rQPdmbnNiH6I3RLn3eJ1tGTpH8CTa7W0R7WQfoAAAAASUVORK5CYII=";

const Arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABYSURBVHgB7dSxCUAhDATQ+38CR3Ak9290ANER4mlhZyMnWHiQIgReEUKAjVhFYHmoYplggbGiDCbkBngA9g9ewl9voE36cWPke32g5jbHh1If+4T5WFbzBhsEno3uZCkTAAAAAElFTkSuQmCC";

const _sfc_main = {
  name: "Tarif",
  setup() {
    const { t } = useI18n();
    useHead({
      title: "Тарифы — Abu Express",
      meta: [
        { name: "description", content: "Узнайте актуальные тарифы на экспресс-доставку (3-5 дней). Бесплатная консолидация и доставка в Ташкент и Самарканд." },
        { name: "keywords", content: "тарифы, доставка, экспресс-доставка, стоимость доставки, грузоперевозки" },
        { property: "og:title", content: "Тарифы — Abu Express" },
        { property: "og:description", content: "Тарифы на экспресс-доставку: минимальный вес 5 кг, доставка 3-5 дней, бесплатная консолидация." },
        { property: "og:image", content: "/assets/logo.png" }
      ]
    });
    return { t };
  },
  data() {
    return {
      Traifleft,
      Exit,
      Arrow,
      tarifs: [
        {
          title: "tarif_turk",
          description: "tarif_description",
          delivery: "tarif_delivery",
          price: "$5 / 1кг",
          isModalOpen: false
        },
        {
          title: "tarif_usa",
          description: "tarif_description",
          delivery: "tarif_delivery2",
          price: "$10 / 1кг",
          isModalOpen: false
        }
      ]
    };
  },
  methods: {
    openModal(index) {
      this.tarifs[index].isModalOpen = true;
    },
    closeModal(index) {
      this.tarifs[index].isModalOpen = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tarif" }, _attrs))}><!--[-->`);
  ssrRenderList($data.tarifs, (tarif2, index) => {
    _push(`<div class="tarif-item">`);
    if (tarif2.isModalOpen) {
      _push(`<div class="tarif-more-modal"><div class="tarif-more-modal-wrapper"><div class="tarif-more-modal-top"><h2>${ssrInterpolate(_ctx.$t("tarif_title"))}</h2><img${ssrRenderAttr("src", $data.Exit)} alt="exit"></div><p>${ssrInterpolate(tarif2.description)}</p></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="tarif-item-left"><img${ssrRenderAttr("src", $data.Traifleft)} alt="tarif image"><div class="tarif-item-left-text"><h2>${ssrInterpolate(_ctx.$t(tarif2.title))}</h2><h3>${ssrInterpolate(_ctx.$t("tarif_weight"))}</h3><h3>${ssrInterpolate(_ctx.$t("tarif_smth"))}</h3><h3>${ssrInterpolate(_ctx.$t("tarif_data"))}</h3><h3>${ssrInterpolate(_ctx.$t(tarif2.delivery))}</h3><button>${ssrInterpolate(_ctx.$t("tarif_more"))} <img${ssrRenderAttr("src", $data.Arrow)} alt="more"></button></div></div><div class="tarif-item-right"><h2>${ssrInterpolate(tarif2.price)}</h2></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tarif.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tarif = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tarif as default };
//# sourceMappingURL=tarif.vue.mjs.map
