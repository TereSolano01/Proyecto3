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
    const { data: movie, refresh: rMovie } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Movies2/${route.params.slug}`, "$jSgLNqZjH7")), __temp = await __temp, __restore(), __temp);
    rMovie();
    const { data: albums, refresh: rAlbum } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums2?filter={"movieId":"${route.params.slug}"}&fields={"Title":true}`, "$aQiPjlYYPv")), __temp = await __temp, __restore(), __temp);
    rAlbum();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_FooterView = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-435597b3>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div data-v-435597b3><h4 data-v-435597b3>${ssrInterpolate(unref(movie).T\u00EDtulo)}</h4><div class="content-section" data-v-435597b3><div class="image-and-title" data-v-435597b3><div class="image-column" data-v-435597b3><img class="u-max-full-width"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/assets/link/${unref(movie).image}`)} data-v-435597b3></div><div class="title-column" data-v-435597b3><div data-v-435597b3>`);
      if (unref(movie).Director.length > 0) {
        _push(`<p data-v-435597b3><strong data-v-435597b3>Profesiones:</strong> ${ssrInterpolate(unref(movie).Director.join(", "))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-435597b3><strong data-v-435597b3>A\xF1o:</strong> ${ssrInterpolate(unref(movie).year)}</p>`);
      if (unref(movie).genero.length > 0) {
        _push(`<p data-v-435597b3><strong data-v-435597b3>G\xE9neros:</strong> ${ssrInterpolate(unref(movie).genero.join(", "))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="info-section" data-v-435597b3><p data-v-435597b3>${ssrInterpolate(unref(movie).descripcion)}</p><pre data-v-435597b3></pre><h5 data-v-435597b3>Album</h5><ul data-v-435597b3><!--[-->`);
      ssrRenderList(unref(albums), (album) => {
        _push(`<li data-v-435597b3>`);
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
      _push(`<!--]--></ul></div></div></div></div></div><div data-v-435597b3></div></div>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-435597b3"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_.169dcc55.mjs.map
