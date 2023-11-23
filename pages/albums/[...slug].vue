<script setup>
  const route = useRoute()
  const { data: album, refresh } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Albums2/${route.params.slug}`)
  refresh()
</script>

<template>
    <div>
      <HeaderView />
      <div>
          <h4>{{album.Title}}</h4>
          <div class="content-section">
            <div class="image-and-title">
              <div class="image-column">
                <img class="u-max-full-width" 
         :src="`https://cms-una.000webhostapp.com/assets/link/${album.image}`">
              </div>
              <div class="title-column">
                <div>
                  <p v-if="album.compositorId"><strong>Compositores:</strong> <NuxtLink :to="'/compositors/' + album.compositorId">{{ album.compositor.join(', ') }}</NuxtLink></p>
                  <p><strong>Año de Estreno:</strong> {{album.year}};</p>
                  <p v-if="album.fields.length > 0"><strong>Géneros:</strong> {{ album.fields.join(', ') }}</p>
                  <p><strong>Película:</strong> <NuxtLink :to="'/movies/'+album.movieId">{{album.movie}}</NuxtLink></p>
                  <div class="info-section">
                    <p> {{album.Description}}</p>
                  </div>
                  <button class="snipcart-add-item button-54"
  :data-item-id="album._id"
  :data-item-price="album.precio"
  :data-item-description="album.Description"
  :data-item-image="`https://cms-una.000webhostapp.com/assets/link/${album.image}`"
  :data-item-name="album.Title">
  Adquirir Vinilo
</button>
                </div>
                 </div>
               </div>
              </div>
            <div>
              <utteranc/>
          </div>
      </div>
      <FooterView />
    </div>
  </template>
  


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');
@import url('../../static/css/details.css');
</style>