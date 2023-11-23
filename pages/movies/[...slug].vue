<script setup>
  const route = useRoute()
  const { data: movie, refresh: rMovie } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/item/Movies2/${route.params.slug}`)
    rMovie()
  const { data: albums, refresh: rAlbum } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums2?filter={"movieId":"${route.params.slug}"}&fields={"Title":true}`)
  rAlbum()
</script>

<template>
    <div>
      <HeaderView />
      <div>
          <h4>{{movie.Título}}</h4>
          <div class="content-section">
            <div class="image-and-title">
              <div class="image-column">
                <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/assets/link/${movie.image}`">
              </div>
              <div class="title-column">
                <div>
                  <p v-if="movie.Director.length > 0"><strong>Profesiones:</strong> {{ movie.Director.join(', ') }}</p>
                  <p><strong>Año:</strong> {{movie.year}}</p>
                  <p v-if="movie.genero.length > 0"><strong>Géneros:</strong> {{ movie.genero.join(', ') }}</p>
                  <div class="info-section">
                    <p> {{movie.descripcion}}</p>
                      <pre></pre>
                      <h5>Album</h5>
                      <ul>
                        <li v-for="album in albums" :key="album.id">
                        <NuxtLink :to="`/albums/`+album._id">{{album.Title}}</NuxtLink>
                        </li>
                      </ul>
                    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
@import url('../../static/css/details.css');
</style>