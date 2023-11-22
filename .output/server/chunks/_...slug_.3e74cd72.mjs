import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0$1, b as __nuxt_component_0$2, c as __nuxt_component_2 } from './server.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch.e311a7bf.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
    const { data: compositor, refresh: rCompositor } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Compositors/${route.params.slug}`, "$mXmuBYzkz0")), __temp = await __temp, __restore(), __temp);
    rCompositor();
    const { data: albums, refresh: rAlbum } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums2?filter={"compositorId":"${route.params.slug}"}&fields={"Title":true}`, "$uBUSjRD3pi")), __temp = await __temp, __restore(), __temp);
    rAlbum();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e9647790>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div data-v-e9647790><h4 data-v-e9647790>${ssrInterpolate(unref(compositor).Name)}</h4><div class="content-section" data-v-e9647790><div class="image-and-title" data-v-e9647790><div class="image-column" data-v-e9647790><img class="u-max-full-width"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/assets/link/${unref(compositor).image}`)} data-v-e9647790></div><div class="title-column" data-v-e9647790><div data-v-e9647790><h5 data-v-e9647790>Albumes</h5><ul data-v-e9647790><!--[-->`);
      ssrRenderList(unref(albums), (album) => {
        _push(`<li data-v-e9647790>`);
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
      _push(`<!--]--></ul><p data-v-e9647790><strong data-v-e9647790>Nacionalidad:</strong> ${ssrInterpolate(unref(compositor).nationality)}</p><p data-v-e9647790><strong data-v-e9647790>A\xF1o de nacimiento:</strong> ${ssrInterpolate(unref(compositor).birth_year)}</p>`);
      if (unref(compositor).Fields.length > 0) {
        _push(`<p data-v-e9647790><strong data-v-e9647790>Profesiones:</strong> ${ssrInterpolate(unref(compositor).Fields.join(", "))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="info-section" data-v-e9647790><p data-v-e9647790>${ssrInterpolate(unref(compositor).Descripcion)}</p><pre data-v-e9647790></pre></div></div></div></div><div data-v-e9647790></div></div>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compositors/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9647790"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.3e74cd72.mjs.map
