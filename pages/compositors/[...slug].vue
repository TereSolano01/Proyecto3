<script setup>
  const route = useRoute()
  const { data: compositor, refresh: rCompositor } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Compositors/${route.params.slug}`)
  rCompositor()
  const { data: albums, refresh: rAlbum } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums2?filter={"compositorId":"${route.params.slug}"}&fields={"Title":true}`)
  rAlbum()
</script>

<template>
    <div>
      <HeaderView />
      <div>
          <h4>{{compositor.Name}}</h4>
          <div class="content-section">
            <div class="image-and-title">
              <div class="image-column">
                <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/assets/link/${compositor.image}`">
              </div>
              <div class="title-column">
                <div>
                  <h5>Albumes</h5>
                      <ul>
                        <li v-for="album in albums" :key="album.id">
                        <NuxtLink :to="`/albums/`+album._id">{{album.Title}}</NuxtLink>
                        </li>
                      </ul>
                  <p><strong>Nacionalidad:</strong> {{compositor.nationality}}</p>
                  <p><strong>Año de nacimiento:</strong> {{compositor.birth_year}}</p>
                  <p v-if="compositor.Fields.length > 0"><strong>Profesiones:</strong> {{ compositor.Fields.join(', ') }}</p>
                  </div>
                  <div class="info-section">
                    <p> {{compositor.Descripcion}}</p>
                      <pre></pre>
                    </div>
                 </div>
               </div>
              </div>
            <div>
          </div>
      </div>
      <FooterView />
    </div>
  </template>
  


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');
@import url('../../static/css/details.css');
</style>