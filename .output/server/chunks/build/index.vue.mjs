import { _ as _export_sfc, u as useI18n, a as __nuxt_component_0 } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, ref, watch, useSSRContext, unref, toDisplayString, createBlock, openBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { u as useHead } from './v3.mjs';
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

const Search$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgBvVVLUsJAEB0+S6rMEeIJ+JwATiDeIBafwhXxBMAJhB3Fp4obgDt3hAsgLt3hzmUWLPn4XpxohgoxkOir6kwm6e43093TI8QfIxH00zRNbbPZ5JLJ5M3hcNAhGr9jvtrtdovxeDwTlxJUq9UWOSB0akPWcuQ85xgnEvzWGQ6Hk9AEjUZDx+qmWC2dWHQwGo0snwUUQdCEXplEqVSq1O/314EE0vmcoUAY7gaDwa8hqNVqBvQfQWL7kSS9E9c5lEthnBMMD/Vpt91up8f/U0crMaB8D6NncQaWy+VHPp9/g61ZKBQSmFt+O2BSn4ISFgRZURakaRiGphBUKpUyyxCvXRENHYiWTqdzCgFQ5MOvWs6BtLdZWQoBYpeFrEQ8WMOXrhAQYLVFPKCfK4WANQzRRDxQ/DgE+/3+XSY5DuTg61UhwOpZYhqPv4gA1x4n2lIIcAKZYMauJSKAvYl9ydsFHILJZELnPUiRZ0JcANkJaNtRSL0TbPEFg87eghMdumzhnHGfs1hgd+39pzQ7nMBbKlGZKxIhUK/X2QXmeNVkLsXJHRCels2dzDD2Tt0H4itnvBdWqMQFc4B5G/qdkwQu5A5anvJ1C4F1roufm44LaEvStiT9Jgm8kwkmHZdPEURZxwAhxMBzM8tkMqtut2sf7awtSR5AErV5+oMkEFP8Bz4BhRUD1Agp3HoAAAAASUVORK5CYII=";

const Arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAuCAYAAAC4e0AJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANgSURBVHgBzZpPbtNAFMa/cbNuA2UN6QEQ6QlIL8CfLRvCDolF0xUSm7ZLVm0lFuyaSkhdNmLBtq7EAYI4AClsgaYHIOZ7M3bjxHEzdsaOf5KbsT11vjd+8+bNTBQWJLhCnR9NHo8R6E856uERMdBHoI8LrMBXd/S1hVDICUW3MMJLPuEZJoXaIoYcwUMvryGZxWvRAXZZbMEVAbo0Yj+rEdbiKbrBLzmGS9FJNXs0YN++ugUUvk3he8jnHlkZUNWWzVvw5lWg8AMKP0Q5wgV5w+faPedwa8vzAcd8UBvLooa2WsVJ2u1U8UsXHqHwnC7Um3VrpttQ+G4lhAsMEtTTnHUr0fLBb4r2dFSpEtKJN/kGhvGLEy2vw6GnY3jVaHBATOiadBtToYEqotCZjkA3bhMOQj9QbXx1F1vRybjlR5V0l2la8dbX4nWrq2Kji/8V2H/PnvcTixFwtA/RblN0hBHBG2Gwa9wHzj+bz5wMqXpDIo9xG4+pbYHU18ZlMWTryUJvoI5/Og2HF04mWigQEX/8YXy+sAErnPjA+HwTJdB+4dCAwDS2xyhTinjBoQEN8Rhp+QZKxKEB9Rp77gObmkcf2c2v4YzmQ6D/3ZQjAzJGoUYNFpOM7inQeYdCEQN2+B1nn+z/Z+5MSrh22OK3EQ+pNtTYcy/nzWS3XwNrq8DlLzij92XsNoK4y+5bZELcZmhTUTqaK05Ok8JzjLp6hB2gRER4+834PG+6wPSg79Hr+ygJV8KJ1uxFhaJxKFzSSSM+nBf6KBAJg86EGy7kjwmVgTkpingIdCBc0EshJp+XzDLAFQpEJiMSYSRqZY3nEyh06S2vTDEk+ItzFJwaO8GsY/pS9GIXrVdnl4gfCRduxOuLQfq6YCVQxl0iJnMbDx1Yjrilw12U6WXvCfE6bCrsoHoMqHRv+mIiq6QBXb1XVB2GYSdNeMTMlFit031GFfF/+nnaLklqPq/ucS1n2QaMtPBe2u25e1LBH27pqPEqVUkMw00F/7ZKthtqHfaDA5RDPxQ+mFcx61bmGYpb5xnqcLiejCppWM1hBWkJLi9vhgPFAC5hvqJ3PjIIN/+Wk3D7vs0nPEX+7fsTNt/hrDBoQ27xcUJDWnzaI5hFLDmmfzghbtGn2G8s5/69QZz/AwMWSFbwlOwAAAAASUVORK5CYII=";

const Done = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAuCAYAAAC4e0AJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARbSURBVHgBzZo9bBxFFMffmz1jxyTKHpxDACWcpUg0IE6ALUsUXEqoLhV0jhuoUJICKiTbEjSARCIqqvi6dL6KEi8FyGA+HKBAAimnoCRK7uKs5fgrt7sv762z5z3b97Eft95f4b2ZnV39Z+Z97MwYIQYm7uh5K6NKSPAaIBUAQQeCvHefEEy+V0WAKgBeV6CMxZG6ARFBCEnxga5vWOoCIZ33C+0Vt0OAFY1UOWxHAoufeKDnbVtNA7HouECeEUfNLp24PxfssQCM156ZdpAusgno0B8MLUNTi1mz2kvjnsS7o23hPP8sQAIoGy/9fHLlcrd2XcVP1HJFC+35Po52G/Dy0sjKpY4tOt0cr+uTRDgHhwXi3FJuZart7XY3xu8+WyLlzMNh06EDB4oXG7ds/CN5U2nHwSa0T7zE73UWHiZ29xNEde6X3P2Kv07tbbRuSQxPl3CByLla4IH117WIF3PhZhchnegDtvraX9EinmP5VUgznNUldHvFpvg3a7pUFiHl2GBPe7+b4tkhJiFh1n604O6322CvUpDHip7ta/JHCpoD1yBB6tcewX+TD2H1+wY0agTZdwZ6fjZjqe1bX20a7sgPNLQSJMjmXzbc+Gh9tyLQwHNzRW/LdcdsnhSS4NFNB/7lEfcYPK3ghU+GICCu6eyIJ0rka1GE/1Nag+3/Hbcswl+uHIPBUyrwu4asTMF7qu/ixSn9wjPHMbRwgcApqLF7eiKj7hcunCkfDS1ccPgrQBH2/+NLnHPjb7tZPv3ZMBx7KwNRUAqOh+56r7H59hdbblj0EOd87sNBiIpDlA8lXhLL72dM+PP1VdcJ2yHCb3252SyL8Bc/PgJxEUr82k8N9yo2LGHvoFmQDvqF595/Klbh6MCqyliyERSM3Hu70y627I/bgiShm59uNMvDr2ow+s3TECeEWFVbQ2BCQPR3B1yn85BvFC9jerHcw4vlcaPQ3YEDGKtnb4RZgOy1aXFE87tGLEmoGxpoZ923ooM/QAjEAU9+sJvaxc6TEC5sZaxl982k0ICQnPr8iOuMe4mahLpgLGdN0317Q7NlYRvY9j3E/odf0ZplcU5/OXaIynJp7h6M1bILEGElJeFSkpGIjpo9u6FZNLr4vFltipdlIG85L0Da8W1CNY3y1xHT4IsBKUdrOLPe7xaPIqBZSDM86mIuXrFFvIy+g3gFUogcC/lHXdgXy2zNmZGGkDLEKvyjLuwTL/GTG56DCKEzbjiJ8pGPObevvt0Db9T1Eq9UDn+Lm7C8dGLl/EG32qbA33JmhZNB2439ROggXOiYv2Wq2ITOHooPEF7pJFzo7UCND4kdDRd4vZuH/iM+N8uRL/qBmh/OwjOchaehfxic+qf2RpV2BD9E5lmwNTXDgTfOjVnjyWgbQR4KfXy/8/8GIBHpQkhzMtmuK4ROOahoj9Di/ezMhnyRqiLPyEsgnWldmZlcZxLBMnvidS4bRx/CsjFqRsoljwFPU9NzlknqagAAAABJRU5ErkJggg==";

const Circle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGuSURBVHgBvVWxTgJBEH17X4DSk/0BE6g1AX9AqW3ESjuwsgRKO0ws7MCKVr9ALKzlD7jYi+cPsL7hTk5l5zwD+JLJwb3ZN3Mzu7MGGXBvKPDRhEONT5uYIKKN+f4eAe7MFkJNwyjClov7/FlDHjgMGKjrCxR4xCXj59zicZoNWeNe0Vqmvou36djBKjDo8Eu66d9UXDLvYR1wODfFWMsk4jYpSwHrQUTlivQk7sGMpVHEo3egewnsHzCb7dgqVeB2mBmgkGySOHs3hfPZhBvRlugKvwknPtp62eYBs69raUjW4YuepnDiI1/pxQytgLU69HGDYbb41yBXNwppUJUelH2cusiD0ZNKWSO18jHSzL+AOl4E2DAkQOgjanvIjfKOSkV6gF3kRvNUpcYBO/DoXXTGDpXwK8SncaSQMs7lMGzwoNk40BQPqhOtfw3HOi+E2R/XvmBuk0zx+aj4n2E3v4lMOsNXhktvt8U54IueEFgVIl5M75WlO5nlatFJHd8ZiH6KewMkQSwnYYfsMfJhRN8T36VvslYl26zOzGTiylD8/KpwbnKGAvQoHGkaHz2vGo8WSdmwAAAAAElFTkSuQmCC";

const Telegram = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJgSURBVHgBvVa/b9NAFP4uytwm/AHI7KCmOxJlZcGMsDTd2AoTElOyVJSFVAKpG61AiC0pEjC2lWBuEeyxmKFx/wGO79lnJY7v3IuT9pNOcXx373vv+f1S8IAeYQ3/cB+Kv0DA1TBbMdcpNFcNB6qJI8wD/QdtfYYhl/ZcQ7lTJlPBblFArft8bKEaIkq+S4uj6Y2ahWydZCdzkAlE4RPKCqc3chbSHSFV6GORqKOtlrBfIDRuFMsaWCxisqxm7h27VOPwEsiQyNRjryWEJrICXB5aWfQmLpVwnpcwPgcGnymQEtcfWo9E6hpuqCSpU3dWwtE3YP9jSiakjWVgNHQcZqrUWUFCeza6IYJ3dknyhWXmZ34vuF5ykVx1kq3AE2LNwVdg70NKKhCLsufsvxMKd+rwSHAh6r5Mfyex+RhoMq47L8bvWjdLRQVCaE2FzG293bwFyS267e1r4Mcv4Mnz4l4JGrAV4d4WNF2jgeIK77FGDKE7z+z7h5/KC7zkYTytxui8+C1E8/47rvep5Z1tuwmtWyhDrMjqLNTyzY6/A8tLQPtRqkR3201WmhJGpNJ/0WP0bMITTF4n1m4DdKkbGjs1FrcBZoAEiyswLohQKaSDmhkLInhCXCtWtC3l64IIjYQr7RYKXcyAJC3eFK1dKbPQcIz74Vm1Lh/9TgNJAubVlvuYFO484VU34OSFwlMsGgobk8NUbojixh4PPIClGFRAzO4gZIM8vwXGvdIjA1TDqSjuNSYmWjTNR6Y7MEPKIJ1HN3h31UaWyPaRYkb90PROieTJUT+iN44lqX1G/f9kWRSRAFgTLQAAAABJRU5ErkJggg==";

const _sfc_main$1 = {
  setup() {
    const rating = ref(0);
    const searchQuery = ref("");
    const showSearchOut = ref(false);
    const setRating = (value) => {
      rating.value = value;
    };
    const handleSearch = () => {
      if (/^\d{4}$/.test(searchQuery.value)) {
        showSearchOut.value = true;
      } else {
        showSearchOut.value = false;
      }
    };
    watch(searchQuery, (newVal) => {
      if (!/^\d{4}$/.test(newVal)) {
        showSearchOut.value = false;
      }
    });
    return {
      Search: Search$1,
      Telegram,
      Done,
      Circle,
      Arrow,
      rating,
      setRating,
      searchQuery,
      handleSearch,
      showSearchOut
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-component" }, _attrs))}><div class="product-component-search"><input type="text" placeholder="Введите свой номер товара"${ssrRenderAttr("value", $setup.searchQuery)}><img${ssrRenderAttr("src", $setup.Search)} alt="search"></div>`);
  if ($setup.showSearchOut) {
    _push(`<div class="product-component-search-out"><div class="product-component-search-out-top"><span></span><div class="product-component-search-out-top-item"><img${ssrRenderAttr("src", $setup.Arrow)} alt="arrow"><h2>В ожидании</h2><p>В США</p></div><div class="product-component-search-out-top-item"><img${ssrRenderAttr("src", $setup.Arrow)} alt="arrow"><h2>Отправлено</h2><p>Отправлена из США</p></div><div class="product-component-search-out-top-item"><img${ssrRenderAttr("src", $setup.Arrow)} alt="arrow"><h2>На таможенном складе</h2><p>На таможенном размотре в УЗБ</p></div><div class="product-component-search-out-top-item"><img${ssrRenderAttr("src", $setup.Arrow)} alt="arrow"><h2>Прибыл</h2><p>Посылка прибыла в УЗБ</p></div><div class="product-component-search-out-top-item"><img${ssrRenderAttr("src", $setup.Done)} alt="done"><h2>Доставлен</h2><p>Доставлен получателю</p></div></div><div class="product-component-search-out-center"><span></span><div class="product-component-search-out-center-item"><img${ssrRenderAttr("src", $setup.Circle)} alt="circle"><h2>Дата отправки: 11/08/25, 18:25</h2></div><div class="product-component-search-out-center-item"><img${ssrRenderAttr("src", $setup.Circle)} alt="circle"><h2>Дата создания: 11/08/25, 18:25</h2></div><div class="product-component-search-out-center-item"><img${ssrRenderAttr("src", $setup.Circle)} alt="circle"><h2>Дата доставки: 11/08/25, 18:25</h2></div><div class="product-component-search-out-center-item"><img${ssrRenderAttr("src", $setup.Done)} alt="done"><h2>Дата получения: 11/08/25, 18:25</h2></div></div><div class="product-component-search-out-bottom"><div class="product-component-search-out-bottom-item"><h3>Поставьте оценку</h3><div class="product-component-search-out-bottom-item-rate"><div class="abu-express-stars"><!--[-->`);
    ssrRenderList(5, (star) => {
      _push(`<span class="${ssrRenderClass([{ filled: star <= $setup.rating }, "abu-express-star"])}"> ★ </span>`);
    });
    _push(`<!--]--></div></div><textarea placeholder="Оставьте отзыв" type="text"></textarea></div><div class="product-component-search-out-bottom-item"><h3>Фото</h3></div><div class="product-component-search-out-bottom-item-last"><div class="product-component-search-out-bottom-item-last-top"><h4><p>Откуда</p> Филлиада, Пенсильвания, США </h4><span></span><h4><p>Куда</p> Мирабад, Ташкент, Узбекистан </h4></div><div class="product-component-search-out-bottom-item-last-bottom">`);
    _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", $setup.Telegram)} alt="telegram"${_scopeId}> @abuexpres `);
        } else {
          return [
            createVNode("img", {
              src: $setup.Telegram,
              alt: "telegram"
            }, null, 8, ["src"]),
            createTextVNode(" @abuexpres ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` +998(99)008-18-81 `);
        } else {
          return [
            createTextVNode(" +998(99)008-18-81 ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div>`);
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

const imageSrc = "" + __buildAssetsURL("us.D5BfB38Q.png");

const imageSrc2 = "" + __buildAssetsURL("tur._bsSyyOp.png");

const HelpImg = "" + __buildAssetsURL("help.CjbwVRhM.png");

const Help2Img = "" + __buildAssetsURL("help2.DDwa4W34.png");

const Money = "data:image/png;base64,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";

const Cart = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABECAYAAADEBrh4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQuSURBVHgB7Zz/dZswEMfPff2/HoENmk5QukE2qDtBvUHoBM4GcSZIOoHdCZxOgDsB2eCqC0feIcQPgQQY6/MeQTF6SHytH3fSmRUoEHEDOcfVanWGQDMkGJY58GcRBMwYRKsICIEqLNyhQbw0iFcDdckWAQ+h2zbAAibcyiQndawh0AyLJ0kg0I4SaitEy0Jr64g21t3ClfIB7Pgr0jFcKbaivYj0J7hSPoIdZ5GOF2S7nWW6zZVcgQVKpFidDnAdvPDxqEQ8ygtBtG6c1fGtaIG23VO/0RGWQcTnNafXhutkOXxRwr2CDdTSpEsFC4VsUH7W/WCj/lpEk5A9Kp45pc9sTY6rQ3XHZ3UquiT54+sgWjfkOBZE64icGF6DaC3wwsS7aDR7Lko0TysvNyL95kYuRjQl2J06ZcUM5xAp2j/6swjRWLCE/40cL8l/Fukj/bl40TTBiEfHe7eV7mnF3IxbEkyz2PfgGO3+9mPmnERT5T+MIJh83lPx+UV2TxJMnTbiI+qSG3CPsWvOSjTM91ypBd005NEF++VJMOKrSP+BPmC+F1pyXl2B+cpCQWYSztAlE/AIlvd8b/rexLdoaZ1wEwgmnzWDvvgUTdw/1YUbWzCui1wS6j/p+RZNlJFiPQmMgCrn3kmZzppst3LSqQTjOhxEuTEMQT4BeMQgXAIjon1ZwxYCMB9n3NysvayIu8kGRgRrjNohN0zFDftNwzMHy8E+D/r1PsatNPIWKRq0GLV9RHupufmSGLayoaP198XFqWFuF74/nymPdUvjuIZCfRJsC8siFul+/qYJrIbRL2Zs0ya6DbgEy8ZftgThtMbgfuhBs9X+gBcaMs9jWdpkargqqM7dOahjh7nTG3O+2U0YXK9brC4IpE1fvlV8Wl3B6rRTh23g8hmmobT5a4BCECgWrdbUGCxaAQ+a3+GyA5iP6vjhNHy0C9wNY8gNRNozlIFyc+uiZz4oav1ZDxOtw7loXUEtRmJEXq2jGQOBQCAQ8AZb2DvNSziN7V5hvoe6Zc8kE77kE87pp0mqMj+xnTvwjMGHNJHi1D4yVkOeJhEO85aedaxHOplwaH6vBznpa74eY/VFAjF4AKu780khDOYt8F6vK0yBJshTQ769z8pqX15a14qwvFzv7Qtsquhaq0DUkjfrkrdnXZ7EvTcWea2X64fGp8nV2sb3FLG/J69H4JZIpNt2kH6L9GewZKho0vGNYD6sB173h6HLxQ15I60rO624NmbuWvKeunZlL2B5IkhNYxVWl8Wdr79jdYDf1uS70/JFMDZYtY1SzD2AWz7usGo7ReABrJo2bx4A12NruJ7AVGDz68R0NuAJrIagNrGHqcH2CEa6FoNnWLh9Qz3ejF4YgI89ghjynSmayml2pR9hdV5/d1iPiOtBQTo06Zwh3wvYD13u/g9/ThdeNoeSuAAAAABJRU5ErkJggg==";

const Box = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABCCAYAAADpCK66AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPGSURBVHgB7ZqNcdpAEIXXmRRACbgDuwPcgVNBlApMKjCpAFIBTgUkFcgdkA5EBzgVvOxGp8kh7qT7lQTJm9mx0O8+7erTGY5oYAGYcTxyzOmaxQafOY74K/k8o2sSG1pwVDBL1hd06VItuzYY3BvWbS+2taVarZaF+rzUtleGKi/pUiTV4SgNldu1K6f2fYG5tec0ZeEcQE3ii57j7mB+puV80wIY7ADa+CTL+64sVS5obMEOoFKqRQFSrb0znHM7WmujB0CJzl8ZqjwcwGAHUJX6zmNMgMEMoOxJYEiAoRtApvXrTKbzAQyOAFJJHLMkcZ5TeoDBE0CwP1/hSfTnVxlusDvA4DEC8khCbtIzJRZiAIbAEZAliU1QEgGCD8CQaARkSGKOKQEMddu1VSJwBNSRxNgAK0x345gxiUEAhrpT2zd3ays94AikgESyAQz1q3Jn8dNptlEuiiYFGB/3hO7R3ZnZDewPebJnmE5NV4brOQMMNYlLwznEy7LL7KoniS3yUdQLYLCP7uS4hdqn6DWrnXAJ8yiloMSCB8BgflUelZeZtp+72Z4kBgcY7K+V0pQLfM32JCEaEmAw3IQldefsb1YdPMM0AAY4jO7aZt+Rh25ubt44Vrx4y3HQNs055IvvLRK1tjLypM6t643jgfNYSj7kIS+zjfgiBw4x/JlOTRccJSIBhpqmew5Ti8oNf6UABZltxBfd8J8Hjm/a6jmHVNgbYKptd7xY0mlFf1ICRZkVqSoXvPiJTqv8yFHBEWC8n7TsXh3XSNpUuucDJVC02UZs+IX/3HN8aW1adQEMagTEi9IlOnC+ctyq7kmiZGZFPgBTZF9TXc2Ftq8cFwSgPiU128gBYAKeNoDEmHTFfSiA+pTFbKMOgK3pFECvVJtcpa6mrqxmRR0AE/0BEG+Xtj1QZr2ngSQA4/b9zotHbfVtzkq2lb2yutrGhjQqGtTs2PpvduIKbv2LMKtIfVAff1CgBqNxrGSQIqOvmFfURbVx7Lv4nwOU/sB/xCXNMOuQ+gJhra361fzDbPrOdk4ZpF+EMgj235fv9B0qww7PSDxBI6dZ+Py+jAFmmOUwi9Dfl5F5hllKs0g1ww6ZZpilMovUM+yQYYZZrFlETnBxuUCyGWYxZpFogovrxaIBFmIWmSa4uFw4CmA+ZpFhim+QEAgwV7PIPMXXWwgAWJ9Z5AZQrOABsC6zGBJAsYIDwExmMRaAYoUegLXWTQNAsYIdYLqmA6BYwQ4wk6YBoFjBDrCm2gu6NuEcYNMGUKxUa6/GANBv1PQZg4b6iC8AAAAASUVORK5CYII=";

const Safe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABCCAYAAAAL1LXDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUVSURBVHgB3Zvteds2EMdPefw97ATFBkknCDtBkgmqThB1AkkTWJ2A7gR2J4A6QdQJyEzgdoILLjhaRxgEXwBQln/PA5MGQZB/3uEdWsFCIGJhDqUJyoSCoxsOp9Vq9R9cO0ZkacKtCV9xGG3CxoT3cE0IkY84n9qErQkKErOCBJBIc/hgwgbO7upCLnsC68LfOO4dWBcPWZXu+cuEB+P2DVwKtuSWrdEHWfnAaYtAXoUJaxPuMewZmtMpWAJ+sS0/eFAkzMTc+8mEOwyjs4hnkRvMLDLw7NbyIej6GmJA64YhF6P4CgfcNRVkSRavA8Jrfic1JeNyIFPND84uMvCOY8RXQeGciQ6I3FxSZB/83jvsrzxvfTcVnhuylMucoPVOX2VXuQk3ToLDS7TmWNjqrvBSJpBdvw28EthwXSuzOz8Brwh28Za6jXwvIr/CK8JnzDfQ7fte/xBNwEPOJ030AUiwEmn+h4zwF6+4BahN2EJ+pBGLG+fiI+RFw3lkRJ5F7WdhLPEH5KMj+A0sBFvTNwzcYN62/plgJSK+QQbQdvF2ImoPdozbUi3V7i9lYVlWG+PCO7CTBe3XV/x/drILZuuuRdSv9Idr0L2I/7KElbMKZrFaRN3JaRpzfgA75UOQ2G1u0UkFcx92w00P9WwoKJFk77ntd3FObv3IXV3KI8uMxk50RnYwAxweQwfzxnHTOQpmgN33KqMtjHZqhdy29Fymcno04TNXVF7MtTVYSx97kpQmkNWj56xvIB5ZA7cC/6GjEXKCkZi0d+ZAoZ32JXEf4fwhf3RUTPgEEaQQrMT5Lynmjk0eR7AfjoZ3JPCeL72FSFJUWkdxnrRvzDW2nKJpIJIUgmXNu048IKC8FJ+77fYsogWz+/0poqjW/w0i4Q8ne1/7JEstKZolzkdOEz3G1Kjm3i9jm7QReemkzZLgM3R7Tfc4o9fE7e1BRD2EmrSpJBPM7kb9ZDkgmNOESDduoNsTiyZp15JFy/KsYDrSK/apdwaQ4Eb8/zPEo8R5Ay8M18I/QTzyozUwnUacK4hHybxJsOz+vYN4Yod3jThP6nFU5G6cB6QYi8o8GvcidxWpj0xl829ux/uI8jinaTzJC7Voq6JGJNhdTy44rt054FtrrlEsZmN3tUBDBGjH0y0PFNcOHmh0o/i8hK6bT4Us11r5I7eroc0udL3inhXV8NEDBMEHcX58OsPu6mHsV9UYhqxMvbuhQT9xgAiw67mlvFA4D5pdlh2XlNToLKpjeDGbPoyCmaBvIc1JoEWCqClTtLtwNIdRi+p43ryi+Rhbl1RCT+VLkMytLw17jqT0JSqwW4uWcKWgbRH63Vkk3F27ldm6tdCxDiV2rbzI8kdKnLJbj7lBWjmqplwafF5212NucrcwXYVre967mnKz25YusVIfhevKkz0Tu1t+iOiJuVxgt1Ye58o9GWmnPEcvdaTGI3YHc/GUixcl2iP2HmLB5+0acfHmyiOWponTrC33iL5IRYbnrU95xIoH+URTJ1/BQgTeIc+uAf667nZ8eoE1ZAbtaoQ7YxI1Xp7y8B0+p8phbfTvLiDhy9Yj/CK1R/htCuHsvpUnf42X6u6ifyN26+azhAeELm/VPtBfmbTQyw+23RjeGJOsckzyU7wWtJWXXMSWNGBnQ/8VcW85bQn+Wc0j2PWlI7xkcPgnNkNovMYZFzz/ymTML03b6VsFGUnq0iHYYgq67t7uWD9N2eIUw3fgFO4Ltg1UpQAAAABJRU5ErkJggg==";

const S1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA4CAYAAABDsYAdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATsSURBVHgB7VuNdaM4EB6ngXMHRwfrDo4SvBWYqyB0YDqIO3CuguxWgDtIrgJ5K3C2gm+lMCTDIAkwYHv35XtvYhsGSSONRvNDFnQhAFjaj9RSYmnJl18sHReLxQv9CbBCri2ViMNY2ltK6HeEHfiqh5A+bGkmLGgG2AHf24+d59bB0v+WXvn3F0srqlRbwqn1V6veR7pluJVRK3WyVPCeDT2TWnr2qPaSbhU8aInnIfuQJ0WipGuB9+GW9+KpHlC9ArwaUtDBK2OfyZTAOV9fiz5d20+Ol6aGWx3EjY2bhBxNFUzoTNhnd6ItJ+CShfPBTCY0C3JCGCXzGXEto5FQ7bmJzDrG8UBjEBDUzfBarhyae9XQBEBTU0rPuHI1IQ57OheqMfc9DfAVk3TYbHMp2jxF+LRRy2ko0DQUBpE9iOZ+WtNEUJOdRPgae5yGAk2DlA3gTWki9G2XteDUxXsX6Wslvh/ohmE9LeeR/ScurXx8MWGXorEjxfFDfE9oOshz+rWD9zXw3Dvu+jyM7jNThmgrmgDc53tbPcLAL+J718S0OpNG56GDNx1lIPxtSgNZdvAmaGLYhKPt5246+E99DVrP/k2f9tg4ySDivHMebRdxG+GV590J49zFrRw8Aj42KudCR0spnQNWD6Mac7/3qLyotBaKZ1jynhsIbFR/mRLO9ZvD76sXNAYBgeGbebRV32BYiHevni/FvW1kDE6ThntOkYFkCAudCr7cM5At4h6Qm6QyNlEIRz0lek7o4LQMC+bImXq3ot/tsbBTPG6WfRb8QNUx9ZN//21pTe1zsZWWYYGc3/3K5NI7j+xQXBfoVn8f3lI49LsClfqXfYQE5k2lzpJd9AGVEVsx1Wp7tPTyxyTJP/GJT0yKSxsoR4m6dbxUmWM2Ydn5cJb3H/LXczRemL5bOtyEsxADqmBgi3h+ty+eMGE+y6FzZVn9apfO654xj6vc5RRIidCHm3cU12q1jkVHjv9r6CzGh/vqtOFA5yDg+ex9ncHvFrrV3XM7SUdfS24nFLo5PECFjGhnKAyGFLUjg28Ji3ZIBh7sGiPKjSzEo6dtg2YklCCMPWJC8+whIEAuBYC/DpvRhAgIbdAuvTzCv0Du2srX8N4z+AKeFcLIOuwZQusYuQzw1YJrOVaSaasYdohXyo0S9GyV7QsE6rYRXqNWeOnLHRUDOjXA5d5wgaduG+FN0DwCi7qi/T74Hh3KbF5GFwR61nQEf2NhdAq06NGZxOzq6xmDHO+ug7cxXlf+6KyRCDSKXVdy6aRzkXTwNuS5Uw9vrrFaAyEn+K8OXlnFOLz9RU/riuYhPsnrBEOh9uG3CN9GbbmsvqHPTYNAcQgDDMQcQDN/nHvuu32qnaNnzVSgjbeXRRSfPLQv+lIW2u5hou5t0Y64DHzHIypPxReeuWslN6i1YLqyQ1xQ7Q/s+fo9wr58iQ7/OOSEO3xjnp26vqEZgXZZ8gT/xNcwGOIDcGM71UkhOjeqg1lenUVVudN95Z5x1NqX0hiw4CvPNTNqRuN9+gzN+4TrsWHuIxPhdxoNegTtnvbqIP4JbdsxOoScJOHGauXSMonn9tv/AVBVdTtSOy3jqH7JWpZGJA6W/r2Zl63xYdgMpkOJK5zlvcGqmAVUsQ8MKsOY0sSYPUmOj/xxQlXxWb/IVReWjzRzcPELQBBp0RKFiu0AAAAASUVORK5CYII=";

const S2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMSSURBVHgB7ZrtkZswEIaXmfyPOzg6iEsgFcQdhHTgDkIHcQemg1wqwKnASQXMVcClgo00rGYWgUFfCDHjZ2bnfIaV97VeBJIF8OTJLslgRyDiQfwpROQiPrFDbyJuWZbdYI9IYSIKET9EtLiMPCeHPUDiziIaER3a006JTcK6ZMlSxBforfmIdxF/RPylvwqZ85X9L238GVJA67k57iIu2Fv4MNPeUXNAAVthIa6h83LL9i+sjQs/9gFWxsKWNxG/RNTCdu/gBrfzR35gFaGRxRkRTGgi4h5ew15CE+y5nL1+Ax8cBpQDREKr6QQu0PB+xfmbeHRxWo2c3CZR9d49VXGs1oLVdLdNbGfEVVuL4+DwHno1Tfo+Ia6jxgpIEM11y9enOKmcEBi192ShNl+oODfXal6uVbNrjZHtif2UTFEY5vDOeTVJOLGEFiKD/aiOVhaE0W2lNEngF3QFEZkQWRnm6bbNTZJqq28mEK4iKZfbtjFNii7URyTlN9Y1Y3/jV5jdizwIINLetpTIny46XHGhyVcktWFvW5bcaGJLCEwIkdROY21blpzj+MG9DSU4oEg320400uKYlgotwIFQIqktd9tONFbh4wd7+b58ijkatnUNJZLaa1hbJfhCvVvi/Eq5PDa5aof9VO9nYJH+tl34ADkq1wui70o0ibyHFEl1hLOtwYedSHS30NNBRdJnN6zNEmJhKLqCAODatrUoRNpKvyaD2Qtj2tawoEoTG2Reu5lt59CKqsCTZGyrg8NnZ2+bJWdbBfa3ly5UDyRpWwUO57gVOJKsbRWafZ3XoZK1rWLCvgU4kLRtFb72Td62Cl/7Jm9bha99cTgxKCFlcGYjxULeUbNtMj9sTYLjhTejgnE4YV99ZTIImgXPBudLy7eult8MHD7oLw5K2iAU/bcgZyYGpfPMufoCXQl7QuvVh4vkOJzTevdm9E2PNAjJPQY5e7sW8Ztev0C/pYcf/5ZlWQ17A8cbFOeoYM/QNdjMCOzQYGQ2ZfP9utgvgMtftl/orX/Qb158XXt/4JMnO+A/5W6RTearFMcAAAAASUVORK5CYII=";

const S3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVqSURBVHgB7Zs9L6xNGMfH8zwaBT4BNQk6oaCTkNBJSFCT0FLQPJGQUCPUSKhJqBEkKiR6ComOT3BOfpNcm2tn75e5577X2T3rn2x2zx67M//rZa632aaWlpZfpgHxj2lQNCzx/8w3orOz07S1tZn29nbT0dFh33t7e7PPr6+v9vFdqBpxyPX09JiJiQnT29trX/NeEj4/P83z87N5enoy5+fn5urqylQLTUUfbkNDQ2Z2dtaMj4+nEk0DgkAAx8fHhQuhMOIQXltbs89x+Pr6suYMITFxMfm+vj7rBnHgc5ubm+bo6MgUgdzEMePt7e1IwmxWTPbm5sYSToJ2Dx4iFA3cYHp6Ovd5kIs4Gl5dXS17D62ilbOzM3N9fW3yAKEuLi5a13GB9jc2NkwogohzOh8cHJRpGcI7Oztmb28vVbMh6yFgVwB5tJ+ZOJu4uLiwzwJMeWFhoerhiDX39/fN8PBw6T3WHBsby7x2pgQG07u9vS0jvbKyErRwCISkNnH2cnd3Z/eWBd4aZwFIS4jCtKempnL7cShws9PT01IkYD+Dg4PeCvDSuJi3kCYUscifIg1Ymz1IWEQArgsmwUvj2pSySrbaEFMXzSOQ0dHR1M+lapzTVPsP5p2XNJZD7CcyJCUtPmAv7EmAC/Ddafi3ubn5/7j/RJr4kaCozGlyctKsr69bgX58fJiHhweTB5g7ljgyMmL/3d/fbxMnvjsOiRo/OTkpvSZk5UkYNHRGllfjgt3d3bJ8Pk3rscRJFrSJE6drHewRzQNMXsd7F7HEdSqKeWf1a9LZkPgK+Mzl5aWXr2qwR7JHgZtOa0QSR1o6LODbWcDn5VBEAFmxtbVlv4M8naotCzB5H61HEtc5cYi2NfL6cNbPQ/rw8LD075mZmci/iyROSSig6Kg3cKIL4BIlvArimIf8IWHi8fHR1BtIYsRK4RLlLhXEaRkJqKnrFXrvmpOggrg+hbXJ1Bt0HREVWSqIa7MINXMaBHKy8jorZNPSowtBGvGy9rL0vWVR2XxWSCFDhhZSwRE+EZhPny5pDzzgwwNuWohlGtepZIimNFgkT9mKm+VtYWmibqv7rx4hacG5HdtYjVez3taWUM0DVJoUwI3l3zo7E0C8u7vb+mDRHVlfeBMnseF05IG/IEGxEAhwJnAo+VpKVouS0ZRuaUsdLgNH5m6+o6ZU4hQKFBxpczAEwsbyNvrj9hBVqUX113xHTbGHG18qpWGW4R9CSqqDs0JGVL6QYQclcdQIShCrcXcWJqMhJCrmpTucLCaJAuSLmm5Sogow5eXlZbuuxGeJ0ayNwIVsWh/Ay8cx3bSanFHOy8uLfS2FTmgCJOA7tPX4NDoRuk8PIDWOMynxaUS4Nxryzsbd7/C9McFe5+fnU/8ukTimTUej3sC+gw83kLXlVEtI23ssceJyrUxLQpDmGrHE8x5MtYCGJa5zdRexxP9UDv1d+LnS2Wj4If43Iil7LCOuT0HfKxW1jNbW1tJr94QvI65DWFJJVy/w1rgO+LrVXI+QUlXgzggqNK7r6JARb61Az8bp8bkJWcXhppP7uHuktQ72rPcdVWFWEEc6Wut0VpaWlowPtE8Vnfn51vcoiz0L5EKxi8h7bvj2/f19RZ+dHriMYN1Ji+58cIJ2dXWZIvD+/l46a6IamfiydICZiupoxD648xZVrMRe8JNmY9LpDnnpf+keXZGdVreVJP7KvfakkEt/LqlVlXqzkYXn5ua8wxsLDgwMmCKR5RKR7/Vx70u8aJRrFfKjmqiNcIig7aL9G4tCAVFnjbgdlocvI3if9YN/oSA/oxD/yzPS9QWmjeXxLGRD12z6+Yllg6Fhif8G0rcZ8oRsZ7cAAAAASUVORK5CYII=";

const S4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOJSURBVHgB7Zs9b9pAGMcfNyVqkyH0CyRrMyRzl0TdkkjJnEjJnEhJhnYJEUsnkGDpAgNbB5DYQYKxAokdkNjhCxQGWBio/5YOHSY2+M53brF/0sl2XrD/fl7uuRcMMtnZ2flhHr6ZLU6bzdAwjF/j8fj71u7u7k/zB69m+0CbDzR+icVihmFa+w9tvqXtDCF8RgESj8dpf3/fOu7t7VltXQaDgXUcDofU6XTIC+8pACDy6emJbm9v6eDggPyi2WxSsVi02iq0WxxCa7War4Lt5PN5enl5cf0b7cJ7vd6C6NFoRP1+33JXnKOtC0IEwIOOj48XfpdOpymVSjn+r1bhd3d3VCgU5tewSqlUskTLgpf5+PhIz8/P1jVe4OHhoeOLfEcaubq6mp/DHdH8EA3gNYlEghqNhnWNJMnfz45W4cw1ASytAj67292fR6tw/kHa7TapgBfu1jWu3Z0hgRwdHVmxxCwnk5kR64g/5urdbtdyV6/9sR0+pvHMTqwUzvpcJA63D/IKEt1bsFitVCokAi/czeKurg6LtlotSiaTvopedc9yuTzPzqpwtTgE8+4MN0SDVQArGUVhJSorW09PT+dWymQyVoaWdX0nHIVDMO+ODw8Pa5WCMjBrsySI+6+qwERxdPWTk5P5OauBVQNP4oVeXl6SKhyFI4MzWFGgA7xklqDgAV5Ga15wFM4nM9lY9gpfzalKqo4xzldZbwlHF4cmAz73+vp6qZ6Gy7OkiiNLpn4iPB7PZrMkC0ugqNl1I1yy+hH3sDRiOgiELX5xcSE9mcCXrLqRmnpSEXu60Do6+5cIrXApV5eN8SBDRao7k+3HIfzm5kbZQMQNYVeXFQ3gMSrrcTeELY6pW6fJhHWBxVXNva1CWDjmrdH+V6LuLGxE/bhXME6WzcgYluqc5OARFo7ZVz9WPDHYCUK8sKv7NTPCT3joRNji9/f3roty64B+vFqtUhAIC8cDB/XQfhB1Z2EjEh42IuFhIxIeNpQJxzKzbGWnEiXCMXip1+vWIr8fa2wqUCKcH3i47TULkijGw0YkPGyEVvjSfnUsDSETox9mc2rYteBlgY/fMo3Ff6/bM/2+N/bJ5nK5xT+EcNbOzs5mm8r5+fmM1xoaV7d7zZKrw8X4XY2bAETbNxmF9gt3W7FY7KN58pVChGEYha3pdPp7e3v7k3n9mTb/+6XYW5aZTCavfwHWMzzrjFK6GwAAAABJRU5ErkJggg==";

const Bgh = "" + __buildAssetsURL("bgh._tHen0dU.png");

const Time247 = "data:image/png;base64,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";

const Point = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABOFJREFUeJzVm92LVVUYh3/vUGo5FpZWRloUoZYopTGjCUERREEfoEJFEZEFRXgR3YZldVGE1V8Q1UXfGYRBWciYTIyVOn6URGYlhagD5Tgz6cx5ulhndGZwZu937bXPPj6Xh/fr95511t7r45gaADBT0i2SlkmaL+lqSTMltdZNeiUdlrRf0l5JnZI2m9mRRtRXCsA0YDWwBajhZwjoAB4DplWtJzfARcDzQE+E6PHoAdYC06vWNy6AAQ8DhxIKH8tRYA3QUrXeUQAzgI0lCh/LJuCyqnVLkoDFwMEGih/mIHBj1eJvA/6tQPww/wC3ViW+HeitUPwwfcDyWB0WKX6+pK2SmmVW7pF0s5n97HV0NwCYIuk7SYu8viWzW1KbmfV5nGIeJ+vVfOIlaYGkV71OrhEAtCsM/SLP4T8kfSHpN0l/1z+7XNJVku6UNLtA7JqkdjPbViDG+ABdkRNVDfgYWJIR34CbgE8LTIqdZYm/I7Kg/cCyiHzLgQOROW8vowFfRxTSAcwokPMSwmLKy1cptQu4krA687ADmJogdyuw05l7CMg1l+SdzB502ErSEUl3m9lxh88ZMbNeSfdIOupwa5H0QNHcpwA2O7+Bp5IlP13DGmcNm1IlPg8YcCT+FZiUJPnoOiYRJtS89AOTs+LmGdbzJGUGGsHbZnbCYZ+Lesx3HC5TJM3NMsrbAA8bnPYePnPaZ9aepwFXOBL2m9lOh72X7ZIGHPZzsgzyNMCzIfmXw9aNmaHTr895yKw9TwPOdyT0PKpiOeywzXwPydMAz5BrxP7AxQ7bzKVxngYccySc5bCNxZMjs/Y8DfD8rluBzEdPLISdKM9PMnO+yNMA7zbTvU57D/c57X8qnJGwGBl0vIF1U8LBBdAC7HbUcRJozY6cL3mnIzHAQ0kSj67hEWcNW/PEzftNfems9yXAM1tPCGFPYZ3TLd2eADAP/wlvBwkWRcC5wDfO3ADXpdA+spBvI4r4EPDM2mNzTiXsJXrZklL7cDGrIgoB+B64JiLftcCPkTlXldGAFmBXZEH/Aa8DmS8xwCzgzbpPDLtwPIW85wIrJX3g8RlDTeFUaaOkA5L+rH8+W+Fc4C5JbSp27rDSzD7Ka+xtgEnaIWmht6oGsUfSQjOr5XVwdbq+HH3RW1UDec4jXoo7HDWFW1xtXt+S6VQ4IcbjFHs8vlhSl4r9VlNSk7TUzLq8jlECzOwH+TYoy+atGPFS5AiQJOBSSfskXRgbIxHHJM01M89W2Smih7CZHZL0cqx/Ql6IFS8VGAGSBJyjMBfcUCROAbolLTGzk7EBCk1iZjYo6QlJQ0XiRDIo6dEi4qUEs3j9NsYbReNE8Fp9Mi5EoZ/AMIQVX7ck96Inkl8kLTKz/qKBkjzH6zezHpfkegmJpCZpdQrxyQHWR67gPLxStc5xASbjv83hYTfhnmLzAlxPOJtPzQDQrKvQ0QDPltCAZ6rWlRvCfb8NCcV/TliFnj0A0/FdaRmP30m4xd5QCLc+PfeLxnICWFq1jkIATxdowJNV158E4N0I8e9VXXcyCAesex3i9wEXVF13UoAFwPEc4vuAZvw/QnGAFUx8xlgD7q+6zlIB1k3QgLVV11c6hJek988g/hOa7R+hZUG4f7xthPjtJLhaf1YBzAH2EFZ4mTc6y+J/r23xLRUtXLIAAAAASUVORK5CYII=";

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const timers = ref([]);
    useHead({
      title: "Главная страница - Abu Express",
      meta: [
        { name: "description", content: "Узнай тарифы на доставку по всему миру" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
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
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "abu-express-swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(imageSrc))} alt="Slide" class="slide-img"${_scopeId2}><h2${_scopeId2}>${ssrInterpolate(_ctx.$t("hero_title"))}</h2><h3${_scopeId2}>${ssrInterpolate(_ctx.$t("hero_subtitle"))}</h3>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/tarif" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("hero_button"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("hero_button")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("img", {
                      src: unref(imageSrc),
                      alt: "Slide",
                      class: "slide-img"
                    }, null, 8, ["src"]),
                    createVNode("h2", null, toDisplayString(_ctx.$t("hero_title")), 1),
                    createVNode("h3", null, toDisplayString(_ctx.$t("hero_subtitle")), 1),
                    createVNode(_component_NuxtLink, { to: "/tarif" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hero_button")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "abu-express-swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", unref(imageSrc2))} alt="Slide" class="slide-img"${_scopeId2}><h2${_scopeId2}>${ssrInterpolate(_ctx.$t("hero_title2"))}</h2><h3${_scopeId2}>${ssrInterpolate(_ctx.$t("hero_subtitle2"))}</h3>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/tarif" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("hero_button2"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("hero_button2")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("img", {
                      src: unref(imageSrc2),
                      alt: "Slide",
                      class: "slide-img"
                    }, null, 8, ["src"]),
                    createVNode("h2", null, toDisplayString(_ctx.$t("hero_title2")), 1),
                    createVNode("h3", null, toDisplayString(_ctx.$t("hero_subtitle2")), 1),
                    createVNode(_component_NuxtLink, { to: "/tarif" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hero_button2")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "abu-express-swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: unref(imageSrc),
                    alt: "Slide",
                    class: "slide-img"
                  }, null, 8, ["src"]),
                  createVNode("h2", null, toDisplayString(_ctx.$t("hero_title")), 1),
                  createVNode("h3", null, toDisplayString(_ctx.$t("hero_subtitle")), 1),
                  createVNode(_component_NuxtLink, { to: "/tarif" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hero_button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "abu-express-swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: unref(imageSrc2),
                    alt: "Slide",
                    class: "slide-img"
                  }, null, 8, ["src"]),
                  createVNode("h2", null, toDisplayString(_ctx.$t("hero_title2")), 1),
                  createVNode("h3", null, toDisplayString(_ctx.$t("hero_subtitle2")), 1),
                  createVNode(_component_NuxtLink, { to: "/tarif" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hero_button2")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
                    _push3(ssrRenderComponent(_component_router_link, { to: "/" }, {
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
                      createVNode(_component_router_link, { to: "/" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("time_send")), 1)
                        ]),
                        _: 1
                      })
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
                    createVNode(_component_router_link, { to: "/" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("time_send")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="abu-express-how-works"><div class="abu-express-how-works-main"><h2>${ssrInterpolate(_ctx.$t("how_title"))}</h2><div class="abu-express-how-works-wrapper"><div class="abu-express-how-works-left"><ul><li>${ssrInterpolate(_ctx.$t("how_step1"))}</li><li>${ssrInterpolate(_ctx.$t("how_step2"))}</li><li>${ssrInterpolate(_ctx.$t("how_step3"))}</li></ul><button>${ssrInterpolate(_ctx.$t("how_button"))}</button></div><div class="abu-express-how-works-right"><iframe width="100%" src="https://www.youtube.com/embed/eOGyJPBHNCk?si=DiDvnXPtAfWpTURj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div></div></section>`);
      _push(ssrRenderComponent(Search, null, null, _parent));
      _push(`<section class="abu-express-help"><div class="abu-express-help-img"><img${ssrRenderAttr("src", unref(HelpImg))} alt="help"></div><div class="abu-express-help-text"><h2>${ssrInterpolate(_ctx.$t("help_title"))}</h2><p>${ssrInterpolate(_ctx.$t("help_desc"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/help" }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/help" }, {
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
