<template>
  <div class="mt-2 d-flex justify-content-center">
    <H1 class="pt-5 font-weight-light pb-4" style="text-align: center"
      >Rechercher un film</H1
    >
  </div>
  <div class="mt-2 mb-3 d-flex justify-content-center">
    <input
      v-model="movieInput"
      type="text"
      placeholder="Rechercher un film"
      @keyup="sendRequest"
    />
  </div>
  <div>
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
  </div>
</template>

<script>
import axios from "axios";
import MoviesList from "./utils/MoviesList.vue";

export default {
  name: "SearchMovies",
  components: {
    MoviesList,
  },

  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
      timeoutId: null, // Ajout d'une propriété pour stocker l'ID du délai
    };
  },
  methods: {
    sendRequest() {
      clearTimeout(this.timeoutId); // Annule le délai précédent s'il existe

      // Définit un nouveau délai avant d'envoyer la requête
      this.timeoutId = setTimeout(() => {
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=b495cd2235b63fb77b75f027990876fd&include_adult=false&language=fr&page=1&vote_count.gte=1000",
            {
              params: {
                query: this.movieInput,
              },
            }
          )
          .then((res) => {
            this.movies = res.data.results;
            console.log(this.movies);
          });
      }, 300); // Délai de 300 millisecondes
    },
  },
};
</script>
