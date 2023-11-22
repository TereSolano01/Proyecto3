import { _ as _export_sfc, a as __nuxt_component_0$1, b as __nuxt_component_0$2, c as __nuxt_component_2 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  head() {
    return {
      script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderView = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_FooterView = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "blog",
    class: "text-typography_primary, container"
  }, _attrs))} data-v-ce0b7320>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h2 class="titulo-principal" data-v-ce0b7320>Soundtracks Populares</h2><div class="carousel" data-v-ce0b7320><div class="carousel-inner" data-v-ce0b7320><input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" data-v-ce0b7320><div class="carousel-item" data-v-ce0b7320><img src="https://cms-una.000webhostapp.com/assets/link/7e959ad4623838307700037f" alt="Cruella" data-v-ce0b7320></div><input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" data-v-ce0b7320><div class="carousel-item" data-v-ce0b7320><img src="https://cms-una.000webhostapp.com/assets/link/7e959ad93063647c580001e4" alt="Grease" data-v-ce0b7320></div><input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" data-v-ce0b7320><div class="carousel-item" data-v-ce0b7320><img src="https://cms-una.000webhostapp.com/assets/link/7e959add3536664cc5000387" alt="Wakanda" data-v-ce0b7320></div><label for="carousel-3" class="carousel-control" data-v-ce0b7320>\u2039</label><label for="carousel-2" class="carousel-control" data-v-ce0b7320>\u203A</label><label for="carousel-1" class="carousel-control" data-v-ce0b7320>\u2039</label><label for="carousel-3" class="carousel-control" data-v-ce0b7320>\u203A</label><label for="carousel-2" class="carousel-control" data-v-ce0b7320>\u2039</label><label for="carousel-1" class="carousel-control" data-v-ce0b7320>\u203A</label><ol class="carousel-indicators" data-v-ce0b7320><li data-v-ce0b7320><label for="carousel-1" class="carousel-bullet" data-v-ce0b7320>\u2022</label></li><li data-v-ce0b7320><label for="carousel-2" class="carousel-bullet" data-v-ce0b7320>\u2022</label></li><li data-v-ce0b7320><label for="carousel-3" class="carousel-bullet" data-v-ce0b7320>\u2022</label></li></ol></div></div><div data-v-ce0b7320><div class="list" data-v-ce0b7320><div data-v-ce0b7320>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    style: { "flex": "1" },
    to: "/albums_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\xC1lbumes`);
      } else {
        return [
          createTextVNode("\xC1lbumes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p data-v-ce0b7320>Descubre una variedad de soundtracks de pel\xEDculas que dan vida a tus escenas favoritas. Sum\xE9rgete en emocionantes mundos cinematogr\xE1ficos y emb\xE1rcate en un viaje musical inolvidable.</p></div><div data-v-ce0b7320>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    style: { "flex": "1" },
    to: "/compositors_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Compositores`);
      } else {
        return [
          createTextVNode("Compositores")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p data-v-ce0b7320>Descubre los genios tras las bandas sonoras de tus pel\xEDculas favoritas. Conoce compositores que han enriquecido la experiencia cinematogr\xE1fica, desde cl\xE1sicos hasta contempor\xE1neos. Explora su impacto en el cine a trav\xE9s de la m\xFAsica.</p></div><div data-v-ce0b7320>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    style: { "flex": "1" },
    to: "/movies_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pel\xEDculas`);
      } else {
        return [
          createTextVNode("Pel\xEDculas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p data-v-ce0b7320>Descubre pel\xEDculas que te cautivar\xE1n. Nuestra selecci\xF3n abarca g\xE9neros y \xE9pocas, ofreciendo experiencias \xFAnicas. Desde cl\xE1sicos hasta joyas contempor\xE1neas, explora un mundo de emociones y aventuras.</p></div></div></div>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ce0b7320"]]);

export { index as default };
//# sourceMappingURL=index.6bd33043.mjs.map
