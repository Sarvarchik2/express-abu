import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const Search = "data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMMAAAAvGMAFEKegoG0bxvxJtzsg5n/+CbJt8UfwEkzSVNsxWAYAgCPA0XsAAIDDSHLb5gErgpQEQt9/s0xyBxH9nwD8f0mPe9plag0y3F8y6ZBc9F0AYLkZOiCFB/oa76+XuGNUI6S10DCu79XywKxRKuUxJbRq5W8KxSsj5u+o7vjM+NlOnSteKW1KeVTwkJmL2liYJpQX2pnbkEZoRwrPgSX4oC83Y5dquRiZVw/YgyxeXr4mMF4DwGKPP3kXADBeI5Nmn9UA";

const _sfc_main = {
  name: "Markets",
  data() {
    return {
      Search,
      searchQuery: "",
      sortOption: "default",
      selectedCategory: "",
      markets: [
        // Турецкие магазины (25)
        { id: 1, name: "Trendyol", description: "Онлайн маркетплейс", category: "Онлайн-магазин", rating: 4.5, userRating: 0, link: "https://www.trendyol.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Trendyol_logo.png" },
        { id: 2, name: "LC Waikiki", description: "Одежда", category: "Одежда", rating: 4.2, userRating: 0, link: "https://www.lcwaikiki.com", logo: "https://www.lcwaikiki.com/Resource/Images/lcw-logo.png" },
        { id: 3, name: "Zara", description: "Одежда", category: "Одежда", rating: 4.4, userRating: 0, link: "https://www.zara.com", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Zara_Logo.svg" },
        { id: 4, name: "Bershka", description: "Одежда", category: "Одежда", rating: 4.3, userRating: 0, link: "https://www.bershka.com", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Bershka-logo.svg" },
        { id: 5, name: "Pull & Bear", description: "Одежда", category: "Одежда", rating: 4.2, userRating: 0, link: "https://www.pullandbear.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Pull_and_Bear_Logo.svg" },
        { id: 6, name: "Oysho", description: "Женская одежда", category: "Одежда", rating: 4.1, userRating: 0, link: "https://www.oysho.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Oysho_Logo.svg" },
        { id: 7, name: "H&M", description: "Одежда", category: "Одежда", rating: 4.5, userRating: 0, link: "https://www2.hm.com", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
        { id: 8, name: "Mango", description: "Одежда", category: "Одежда", rating: 4.4, userRating: 0, link: "https://shop.mango.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Mango-logo.svg" },
        { id: 9, name: "Penti", description: "Женская одежда", category: "Одежда", rating: 4, userRating: 0, link: "https://www.penti.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Penti_logo.png" },
        { id: 10, name: "Koton", description: "Одежда и аксессуары", category: "Одежда", rating: 4.1, userRating: 0, link: "https://www.koton.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Koton_logo.svg" },
        { id: 11, name: "Mavi", description: "Одежда", category: "Одежда", rating: 4.4, userRating: 0, link: "https://www.mavi.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mavi_logo.svg" },
        { id: 12, name: "Beymen", description: "Люкс одежда", category: "Одежда", rating: 4.7, userRating: 0, link: "https://www.beymen.com", logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Beymen_logo.svg" },
        { id: 13, name: "Hepsiburada", description: "Крупнейший маркетплейс", category: "Онлайн-магазин", rating: 4.6, userRating: 0, link: "https://www.hepsiburada.com", logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/Hepsiburada_logo.png" },
        { id: 14, name: "N11", description: "Популярный онлайн-магазин", category: "Онлайн-магазин", rating: 4.3, userRating: 0, link: "https://www.n11.com", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/N11_logo.svg" },
        { id: 15, name: "Paşabahçe", description: "Посуда", category: "Посуда", rating: 4.6, userRating: 0, link: "https://www.pasabahce.com.tr", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pasabahce_logo.png" },
        { id: 16, name: "Kelebek Mobilya", description: "Мебель", category: "Мебель", rating: 4.5, userRating: 0, link: "https://www.kelebek.com.tr", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Kelebek_logo.svg" },
        // Американские магазины (25)
        { id: 26, name: "Amazon", description: "Крупнейший онлайн-магазин", category: "Онлайн-магазин", rating: 4.8, userRating: 0, link: "https://www.amazon.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { id: 27, name: "eBay", description: "Международный маркетплейс", category: "Онлайн-магазин", rating: 4.3, userRating: 0, link: "https://www.ebay.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" },
        { id: 28, name: "Best Buy", description: "Электроника", category: "Электроника", rating: 4.2, userRating: 0, link: "https://www.bestbuy.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Best_Buy_logo.svg" },
        { id: 29, name: "Nike", description: "Спортивная одежда", category: "Одежда", rating: 4.6, userRating: 0, link: "https://www.nike.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
        { id: 30, name: "Adidas", description: "Спортивная одежда", category: "Одежда", rating: 4.5, userRating: 0, link: "https://www.adidas.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
        { id: 31, name: "Macy's", description: "Универмаг", category: "Универмаг", rating: 4.3, userRating: 0, link: "https://www.macys.com", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Macy%27s_Logo.svg" },
        { id: 32, name: "Costco", description: "Супермаркет", category: "Супермаркет", rating: 4.4, userRating: 0, link: "https://www.costco.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Costco_Wholesale_logo.svg" },
        { id: 33, name: "Home Depot", description: "Строительные материалы", category: "Дом и ремонт", rating: 4.5, userRating: 0, link: "https://www.homedepot.com", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/TheHomeDepot.svg" }
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
    _push(`<div class="markets-list-item"><img${ssrRenderAttr("src", market.logo)}${ssrRenderAttr("alt", market.name)} class="market-logo"><div class="market-info"><h2>${ssrInterpolate(market.name)}</h2><p>${ssrInterpolate(market.description)}</p><a${ssrRenderAttr("href", market.link)} target="_blank">Перейти на сайт</a><div class="rating-wrapper"><div class="rating"><span>Рейтинг</span><span class="stars">⭐️⭐️⭐️⭐️</span><span>${ssrInterpolate(market.rating.toFixed(1))}</span></div><div class="user-rating"><span>Добавить оценку</span><!--[-->`);
    ssrRenderList(5, (star) => {
      _push(`<span class="${ssrRenderClass([{ active: star <= market.userRating }, "user-star"])}">★</span>`);
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
