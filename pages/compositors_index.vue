<template>
  <div>
      <HeaderView />
      <h2 style="margin-top: 15px">Compositores</h2>
      <p>Esta sección presenta información sobre compositores.</p>
      <div class="container centered-content principal">
          <ul>
            <div class="grid-container">
              <li v-for="compositor in compositors" :key="compositor._id">
                <NuxtLink :to="`/compositors/`+compositor._id"><img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/assets/link/${compositor.image}`"></NuxtLink>
                <div></div>
                <NuxtLink :to="`/compositors/`+compositor._id">{{ compositor.Name }}</NuxtLink>
              </li>
            </div>
          </ul>
        </div>
      <FooterView />
   </div>
</template>

<script setup>
  const { data: compositors } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/Compositors`)
</script>


<style scoped>
@import url('../static/css/indexCompositores.css');
</style>