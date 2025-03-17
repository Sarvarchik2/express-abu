import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { l as logo } from './logo2.png.mjs';
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

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))} data-v-a7527db2><div class="logo" data-v-a7527db2><img${ssrRenderAttr("src", unref(logo))} alt="logo" data-v-a7527db2></div><form class="login-wrapper" data-v-a7527db2><h2 data-v-a7527db2>Войти</h2><p data-v-a7527db2>Войти чтобы использовать все возможности сисетмы</p><input type="email" placeholder="Gmail" data-v-a7527db2><input type="password" placeholder="Password" data-v-a7527db2><div class="login-wrapper-btn" data-v-a7527db2><button data-v-a7527db2>Забыли пароль?</button><button type="submit" data-v-a7527db2>Войти</button></div></form>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/registration" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` У вас еще нет аккаунта? Зарегестрируйтесь! `);
          } else {
            return [
              createTextVNode(" У вас еще нет аккаунта? Зарегестрируйтесь! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7527db2"]]);

export { login as default };
//# sourceMappingURL=login.vue.mjs.map
