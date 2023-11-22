import { _ as _export_sfc, a as __nuxt_component_0$1, b as __nuxt_component_0$2, c as __nuxt_component_2 } from './server.mjs';
import { withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch.e311a7bf.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const _sfc_main = {
  __name: "movies_index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: movies } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Movies2`, "$FQJdizRsdd")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0670d643>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<h2 style="${ssrRenderStyle({ "margin-top": "15px" })}" data-v-0670d643>Pel\xEDculas</h2><p data-v-0670d643>Esta secci\xF3n presenta informaci\xF3n sobre pel\xEDculas.</p><div class="container centered-content principal" data-v-0670d643><ul data-v-0670d643><div class="grid-container" data-v-0670d643><!--[-->`);
      ssrRenderList(unref(movies), (movie) => {
        _push(`<li data-v-0670d643>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/movies/` + movie._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="u-max-full-width"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/assets/link/${movie.image}`)} data-v-0670d643${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "u-max-full-width",
                  src: `https://cms-una.000webhostapp.com/assets/link/${movie.image}`
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div data-v-0670d643></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/movies/` + movie._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(movie.T\u00EDtulo)}`);
            } else {
              return [
                createTextVNode(toDisplayString(movie.T\u00EDtulo), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></div></ul></div>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const movies_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0670d643"]]);

export { movies_index as default };
//# sourceMappingURL=movies_index.dc5473af.mjs.map
