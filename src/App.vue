<template>
  <div id="app">
    <HeaderNav />

    <div v-if="$route.path == '/'">
      <!-- si la route est / (racine du site) -->
      <h1 class="pt-5 font-weight-light pb-4" style="text-align: center">
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
import axios from "axios";
import HeaderNav from "./components/template/HeaderNav.vue";
import FooterApp from "./components/template/FooterApp.vue";
import MoviesList from "./components/utils/MoviesList.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
    FooterApp,
    MoviesList,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate"
      )
      .then((res1) => {
        this.movies = res1.data.results;
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&vote_count.gte=1000&with_watch_monetization_types=flatrate"
          )
          .then((res2) => {
            this.movies = this.movies.concat(res2.data.results);

            console.log(this.movies);
          });
      });
  },
};
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
