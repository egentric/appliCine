<template>
  <div>
    <H1 class="pt-5 font-weight-light pb-4" style="text-align: center"
      >Films Français</H1
    >
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./utils/MoviesList.vue";

export default {
  name: "FrenchMovies",
  components: {
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
        "https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=fr&with_watch_monetization_types=flatrate"
      )
      .then((res1) => {
        this.movies = res1.data.results;
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&vote_count.gte=1000&with_original_language=fr&with_watch_monetization_types=flatrate"
          )
          .then((res2) => {
            this.movies = this.movies.concat(res2.data.results);

            console.log(this.movies);
          });
      });
  },
};
</script>
