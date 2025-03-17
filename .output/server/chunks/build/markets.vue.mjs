import { u as useHead } from './v3.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import 'vue-router';
import 'lucide-vue-next';

const Search = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBvVWLcYMwDBWdwCN4g3aDskG7QekG3aBsQDZwNmg7AdmAdAKSCZINHOnyfDjEgA1H3p3OnHnWkz+SiB6AbIpgrc15eGPTbArTe7Z/tt8sy840F+z8na21HeS7hp28+YpNp/gW54rNwIE4LGQuwMvZtl4AOkWgwcKvyDUaIrK7l5gFFQQKSoAn1IZ27RNzCJQ0AxCS3ZgxUi2R0AJIgAhUDUURfQ8jIip0Gk8Y3YXtaAGQM5JDr4MiTNrTckiS6pCITB5oJTiRA/XU1xKh5PIQxjP1TsWJ7DAWtAAIUu73b4hQT2bstIjBE9ZDBJfxFc2Al2tmirgB8YPSBdqoatyrwt8UJ5Dbru/8xKxxQn6fGOsnxuNtoo6r56Swt52xweNobNcZTyiKCmvKkFBsjxeT9y/OpD4d6Vqj7no8iqMc9Zb/fdJawI5KeiQuXrC42wgpUAgAAAAASUVORK5CYII=";

const Target = "" + __buildAssetsURL("target.UKqKuIbl.png");

const Walmart = "" + __buildAssetsURL("walmart.CM1-a68B.png");

const Nike = "" + __buildAssetsURL("nike.RTIysseA.png");

const Polo = "" + __buildAssetsURL("polo.Qwt3eavR.png");

const _sfc_main = {
  name: "Markets",
  data() {
    useHead({
      title: "Магазины — Abu Express",
      meta: [
        { name: "description", content: "Оцените популярные магазины, такие как Target, Walmart и Nike. Сравнивайте рейтинги и находите лучшие предложения с Abu Express!" },
        { name: "keywords", content: "магазины, рейтинг магазинов, Target, Walmart, Nike, шопинг, доставка, товары" },
        { property: "og:title", content: "Магазины — Abu Express" },
        { property: "og:description", content: "Сравнивайте рейтинги магазинов, находите лучшие предложения и делайте покупки с Abu Express." },
        { property: "og:image", content: "/assets/logo.png" },
        { property: "og:url", content: "https://abu-express-nuxt.netlify.app/markets" }
      ]
    });
    return {
      Search,
      searchQuery: "",
      sortOption: "default",
      selectedCategory: "",
      markets: [
        {
          id: 1,
          name: "Target",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4,
          userRating: 0,
          category: "Супермаркет",
          logo: Target
        },
        {
          id: 2,
          name: "Walmart",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4,
          userRating: 0,
          category: "Супермаркет",
          logo: Walmart
        },
        {
          id: 3,
          name: "Nike",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4,
          userRating: 0,
          category: "Одежда",
          logo: Nike
        },
        {
          id: 4,
          name: "Polo Ralph Lauren",
          description: "Сеть розничных магазинов где можно найти все",
          rating: 4,
          userRating: 0,
          category: "Одежда",
          logo: Polo
        }
      ]
    };
  },
  computed: {
    filteredMarkets() {
      let result = this.markets;
      if (this.searchQuery) {
        result = result.filter(
          (market) => market.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      if (this.selectedCategory) {
        result = result.filter((market) => market.category === this.selectedCategory);
      }
      if (this.sortOption === "asc") {
        result = result.sort((a, b) => a.rating - b.rating);
      } else if (this.sortOption === "desc") {
        result = result.sort((a, b) => b.rating - a.rating);
      }
      return result;
    },
    categories() {
      return [...new Set(this.markets.map((market) => market.category))];
    }
  },
  methods: {
    setUserRating(id, rating) {
      const market = this.markets.find((m) => m.id === id);
      if (market) {
        market.userRating = rating;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "markets" }, _attrs))}><div class="markets-top"><select class="market-top-left"><option value=""${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, "") : ssrLooseEqual($data.selectedCategory, "")) ? " selected" : ""}>Категории</option><!--[-->`);
  ssrRenderList($options.categories, (category) => {
    _push(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedCategory) ? ssrLooseContain($data.selectedCategory, category) : ssrLooseEqual($data.selectedCategory, category)) ? " selected" : ""}>${ssrInterpolate(category)}</option>`);
  });
  _push(`<!--]--></select><div class="market-top-center"><img${ssrRenderAttr("src", $data.Search)} alt="search"><input class="market-top-center"${ssrRenderAttr("value", $data.searchQuery)} type="text" placeholder=" Поиск"></div><select class="market-top-right"><option value="default"${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "default") : ssrLooseEqual($data.sortOption, "default")) ? " selected" : ""}>Рейтинг</option><option value="asc"${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "asc") : ssrLooseEqual($data.sortOption, "asc")) ? " selected" : ""}>По возрастанию</option><option value="desc"${ssrIncludeBooleanAttr(Array.isArray($data.sortOption) ? ssrLooseContain($data.sortOption, "desc") : ssrLooseEqual($data.sortOption, "desc")) ? " selected" : ""}>По убыванию</option></select></div><div class="markets-list"><!--[-->`);
  ssrRenderList($options.filteredMarkets, (market) => {
    _push(`<div class="markets-list-item"><img${ssrRenderAttr("src", market.logo)}${ssrRenderAttr("alt", market.name)} class="market-logo"><div class="market-info"><h2>${ssrInterpolate(market.name)}</h2><p>${ssrInterpolate(market.description)}</p><div class="rating-wrapper"><div class="rating"><span>Рейтинг</span><span class="stars">⭐️⭐️⭐️⭐️</span><span>${ssrInterpolate(market.rating.toFixed(1))}</span></div><div class="user-rating"><span>Добавить оценку</span><!--[-->`);
    ssrRenderList(5, (star) => {
      _push(`<span class="${ssrRenderClass([{ active: star <= market.userRating }, "user-star"])}"> ★ </span>`);
    });
    _push(`<!--]--><span>${ssrInterpolate(market.userRating.toFixed(1))}</span></div></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/markets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markets = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { markets as default };
//# sourceMappingURL=markets.vue.mjs.map
