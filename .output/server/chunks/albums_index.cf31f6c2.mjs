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
  __name: "albums_index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: albums } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums2`, "$VvxfpQ1L5Y")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5dd01bc6>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<h2 style="${ssrRenderStyle({ "margin-top": "15px" })}" data-v-5dd01bc6>\xC1lbumes</h2><p data-v-5dd01bc6>Esta secci\xF3n te sumerge en el fascinante mundo de los \xE1lbumes, ofreciendo detalles y datos intrigantes sobre cada uno de ellos.</p><div class="container centered-content principal" data-v-5dd01bc6><ul data-v-5dd01bc6><div class="grid-container" data-v-5dd01bc6><!--[-->`);
      ssrRenderList(unref(albums), (album) => {
        _push(`<li data-v-5dd01bc6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/albums/` + album._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="u-max-full-width"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/assets/link/${album.image}`)} data-v-5dd01bc6${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "u-max-full-width",
                  src: `https://cms-una.000webhostapp.com/assets/link/${album.image}`
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/albums/` + album._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(album.Title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(album.Title), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums_index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const albums_index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5dd01bc6"]]);

export { albums_index as default };
//# sourceMappingURL=albums_index.cf31f6c2.mjs.map
