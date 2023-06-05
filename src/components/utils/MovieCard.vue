<template>
  <router-link :to="`/MovieDetails/${id}`" style="text-decoration: none">
    <div class="card border-dark mb-3" style="max-width: 18rem">
      <div class="card-header bg-transparent border-dark">
        <p style="text-align: center">Rang: {{ index + 1 }}</p>
        <h5 style="text-align: center">{{ title }}</h5>
      </div>
      <div class="card-body text-dark">
        <img
          v-bind:src="preUrl + poster_path"
          class="card-img-top"
          v-bind:alt="original_title"
        />
        <p class="card-text pt-2"><b>Sortie :</b> {{ release_date }}</p>
        <p class="card-text"><b>Note moyenne :</b> {{ vote_average }}</p>
        <p class="card-text" style="max-height: 8em; overflow: hidden">
          <b>Résumé : </b>{{ overview }}
        </p>
      </div>
      <div class="card-footer bg-transparent border-dark">
        <button type="button" class="btn btn-dark btn-sm">Voir</button>
      </div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "MovieCard",
  props: [
    "index",
    "id",
    "title",
    "poster_path",
    "release_date",
    "vote_average",
    "overview",
  ],
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
};
</script>
