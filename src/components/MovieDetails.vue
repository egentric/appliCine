<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          v-bind:src="preUrl + poster_path"
          class="img-fluid rounded-start"
          v-bind:alt="original_title"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center">{{ title }}</h5>
          <p class="card-text" style="text-align: center">
            <b>Sortie :</b> {{ release_date }}
          </p>
          <p class="card-text" style="text-align: center">
            <b>Note moyenne :</b> {{ vote_average }}
          </p>
          <p class="card-text" style="text-align: center">
            <b>Titre Original :</b> {{ original_title }}
          </p>
          <p class="card-text" style="text-align: center">
            <b>Résumé : </b>{{ overview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: {
    id: String,
    title: String,
    poster_path: String,
    release_date: String,
    vote_average: String,
    overview: String,
  },
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
};
</script>
