<template>
<div>
    <HeaderView />
    <h2 style="margin-top: 15px">Películas</h2>
    <p>Esta sección presenta información sobre películas.</p>
    <div class="container centered-content principal">
      <ul>
        <div class="grid-container">
          <li v-for="movie in movies" :key="movie._id">
            <NuxtLink :to="`/movies/`+movie._id"><img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/assets/link/${movie.image}`"></NuxtLink>
              <div></div>
              <NuxtLink :to="`/movies/`+movie._id">{{ movie.Título }}</NuxtLink>
          </li>
        </div>
      </ul>
    </div>
    <FooterView />
  </div>
</template>

<script setup>
  const { data: movies } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Movies2`)
</script>

<style scoped>
@import url('../static/css/indexMovies.css');

</style>