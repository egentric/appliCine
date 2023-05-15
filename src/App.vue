<template>
  <div id="app">
    <HeaderNav />

    <div v-if="$route.path == '/'">
    <!-- si la route est / (racine du site) -->
    <h1 class="pt-5 font-weight-light">
      Vos films préférés son sur AppliCiné !
    </h1>
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
    </div>
    <div v-else>
      <!-- Si la route est différente de / -->
      <router-view :key="$route.fullPath"></router-view>
    </div>

    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from './components/template/HeaderNav.vue'
import FooterApp from './components/template/FooterApp.vue';
import MoviesList from './components/utils/MoviesList.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterApp,
    MoviesList
}
}


</script>

<style>
#app {
  min-height: 100vh;
  position: relative;
}

#content {
  padding-bottom: 60px; /* Hauteur du footer */
}

#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: grey;
  padding: 2px;
  color: rgb(0, 0, 0);
  font-size: 0.6rem;
  text-align: center;
}
</style>
