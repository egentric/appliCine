<template>
  <div>
    <H1 class="pt-5 font-weight-light pb-4" style="text-align: center"
      >Top 50 des Films</H1
    >
    <SortButtons :movies="movies" @sort-movies="sortMovies" />
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";

export default {
  name: "TopRatedMovies",
  components: {
    MoviesList,
    SortButtons,
  },

  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },

  methods: {
    sortMovies(sortedMovies) {
      //déclenche si tri effectué dans sortButton
      this.movies = sortedMovies; //on stock les films trié
    },
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000"
      )
      .then((res1) => {
        this.movies = res1.data.results;
        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&vote_count.gte=1000"
          )
          .then((res2) => {
            this.movies = this.movies.concat(res2.data.results);
            axios
              .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=3&vote_count.gte=1000"
              )
              .then((res3) => {
                this.movies = this.movies.concat(res3.data.results);
                // Afficher les 50 premiers éléments
                this.movies = this.movies.slice(0, 50);
                console.log(this.movies);
              });
          });
      });
  },
};
</script>
