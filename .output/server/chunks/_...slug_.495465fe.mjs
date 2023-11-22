import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0$1, b as __nuxt_component_0$2, c as __nuxt_component_2 } from './server.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch.e311a7bf.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: album, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Albums2/${route.params.slug}`, "$3S96hATLH5")), __temp = await __temp, __restore(), __temp);
    refresh();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-287c4f7e>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div data-v-287c4f7e><h4 data-v-287c4f7e>${ssrInterpolate(unref(album).Title)}</h4><div class="content-section" data-v-287c4f7e><div class="image-and-title" data-v-287c4f7e><div class="image-column" data-v-287c4f7e><img class="u-max-full-width"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/assets/link/${unref(album).image}`)} data-v-287c4f7e></div><div class="title-column" data-v-287c4f7e><div data-v-287c4f7e>`);
      if (unref(album).compositorId) {
        _push(`<p data-v-287c4f7e><strong data-v-287c4f7e>Compositores:</strong> `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/compositors/" + unref(album).compositorId
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(album).compositor.join(", "))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(album).compositor.join(", ")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-287c4f7e><strong data-v-287c4f7e>A\xF1o de Estreno:</strong> ${ssrInterpolate(unref(album).year)};</p>`);
      if (unref(album).fields.length > 0) {
        _push(`<p data-v-287c4f7e><strong data-v-287c4f7e>G\xE9neros:</strong> ${ssrInterpolate(unref(album).fields.join(", "))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-287c4f7e><strong data-v-287c4f7e>Pel\xEDcula:</strong> `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/movies/" + unref(album).movieId
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(album).movie)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(album).movie), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="info-section" data-v-287c4f7e><p data-v-287c4f7e>${ssrInterpolate(unref(album).Description)}</p></div></div></div></div></div><div data-v-287c4f7e></div></div>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-287c4f7e"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.495465fe.mjs.map
