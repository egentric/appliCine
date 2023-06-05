<template>
  <div class="mt-2 mb-3 d-flex justify-content-center">
    <button class="btn btn-outline-secondary mr-2" @click="sortByTitle">
      Trier par titre
    </button>
    <button class="btn btn-outline-secondary mr-2" @click="sortByReleaseDate">
      Trier par date de sortie
    </button>
    <button class="btn btn-outline-secondary" @click="sortByRating">
      Trier par note
    </button>

    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
      sortBy: "", // Ajout d'une propriété pour stocker l'ordre de tri
    };
  },
  methods: {
    sortByTitle() {
      if (this.sortBy === "title") {
        // Si le tri est déjà par titre, inverse l'ordre
        this.movies.reverse();
      } else {
        // Sinon, effectue le tri par titre
        this.movies.sort((a, b) => a.title.localeCompare(b.title));
        this.sortBy = "title";
      }
    },
    sortByReleaseDate() {
      if (this.sortBy === "releaseDate") {
        // Si le tri est déjà par date de sortie, inverse l'ordre
        this.movies.reverse();
      } else {
        // Sinon, effectue le tri par date de sortie
        this.movies.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
        this.sortBy = "releaseDate";
      }
    },
    sortByRating() {
      if (this.sortBy === "rating") {
        // Si le tri est déjà par note, inverse l'ordre
        this.movies.reverse();
      } else {
        // Sinon, effectue le tri par note
        this.movies.sort((a, b) => b.rating - a.rating);
        this.sortBy = "rating";
      }
    },
  },
};
</script>
