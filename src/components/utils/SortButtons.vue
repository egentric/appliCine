<template>
  <div class="mt-2 mb-3 d-flex justify-content-center">
    <button class="btn btn-outline-secondary custom-btn" @click="sortByTitle">
      Trier par titre
    </button>
    <button
      class="btn btn-outline-secondary custom-btn"
      @click="sortByReleaseDate"
    >
      Trier par date de sortie
    </button>
    <button class="btn btn-outline-secondary custom-btn" @click="sortByRating">
      Trier par note
    </button>

    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
  </div>
</template>
<style>
.custom-btn {
  margin-right: 10px; /* Ajustez la valeur selon votre préférence */
}
</style>
<script>
export default {
  name: "SortButtons",
  props: ["movies"],
  data() {
    return {
      loading: true,
      errored: false,
      sortedByTitle: false,
      sortedByReleaseDate: false,
      sortedByRating: false,
    };
  },
  methods: {
    sortByTitle() {
      let sortedMovies = this.movies; //on déclere une variable qui contient les films en props du fichiers parents

      if (!this.sortedByTitle) {
        // si les film ne sont pas trié par titre par ordre alphabétique

        sortedMovies.sort((a, b) => {
          // on trie les film par ordre alphabétique
          if (a.title < b.title) return -1; // si a avant b dans l'alphabet a=b-1
          return a.title > b.title ? 1 : 0; // si a après b dans l'alphabet a=b+1 sinon pas de changement (0)
        });
      } else {
        // si film déjà trié
        sortedMovies.sort((a, b) => {
          if (a.title > b.title) return -1;
          return a.title < b.title ? 1 : 0;
        });
      }
      this.sortedByTitle = !this.sortedByTitle; //déclare trie fait ou pas
      this.$emit("sort-movies", sortedMovies); //déclenche un event perso : nom event + variable
    },

    sortByReleaseDate() {
      let sortedMovies = this.movies; //on déclere une variable qui contient les films en props du fichiers parents

      if (!this.sortedByReleaseDate) {
        // si les film ne sont pas trié par titre par date

        sortedMovies.sort((a, b) => {
          // on trie les film par ordre date
          if (a.release_date < b.release_date) return -1; // si a avant b dans date a=b-1
          return a.release_date > b.release_date ? 1 : 0; // si a après b dans date a=b+1 sinon pas de changement (0)
        });
      } else {
        // si film déjà trié
        sortedMovies.sort((a, b) => {
          if (a.release_date > b.release_date) return -1;
          return a.release_date < b.release_date ? 1 : 0;
        });
      }
      this.sortedByReleaseDate = !this.sortedByReleaseDate; //déclare trie fait ou pas
      this.$emit("sort-movies", sortedMovies); //déclenche un event perso : nom event + variable
    },
    sortByRating() {
      let sortedMovies = this.movies; //on déclere une variable qui contient les films en props du fichiers parents

      if (!this.sortedByRating) {
        // si les film ne sont pas trié par titre par ordre note

        sortedMovies.sort((a, b) => {
          // on trie les film par ordre note
          if (a.vote_average < b.vote_average) return -1; // si a avant b dans note a=b-1
          return a.vote_average > b.vote_average ? 1 : 0; // si a après b dans note a=b+1 sinon pas de changement (0)
        });
      } else {
        // si film déjà trié
        sortedMovies.sort((a, b) => {
          if (a.vote_average > b.vote_average) return -1;
          return a.vote_average < b.vote_average ? 1 : 0;
        });
      }
      this.sortedByRating = !this.sortedByRating; //déclare trie fait ou pas
      this.$emit("sort-movies", sortedMovies); //déclenche un event perso : nom event + variable
    },
  },
};
</script>
