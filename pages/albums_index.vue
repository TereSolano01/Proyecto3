<template>
  <div>
      <HeaderView />
      <h2 style="margin-top: 15px">Álbumes</h2>
      <p>Esta sección te sumerge en el fascinante mundo de los álbumes, ofreciendo detalles y datos intrigantes sobre cada uno de ellos.</p>
      <div class="container centered-content principal">
        <ul>
          <div class="grid-container">
            <li v-for="album in albums" :key="album._id">
              <NuxtLink :to="`/albums/`+album._id"> <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/assets/link/${album.image}`"></NuxtLink>
              <NuxtLink :to="`/albums/`+album._id">{{ album.Title }}</NuxtLink>
            </li>
          </div>
        </ul>
      </div>
    <FooterView />
   </div>
</template>

<script setup>
  const { data: albums } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums2`)
</script>

<style scoped>
@import url('../static/css/index.css');
</style>