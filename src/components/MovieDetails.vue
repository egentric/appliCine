<template>
  <div v-if="movie" class="card mb-3 mx-auto mt-5" style="max-width: 80%">
    <div class="card-header">
      <h2 class="card-title" style="text-align: center">
        {{ movie.title }}
      </h2>
      <p class="card-text" style="text-align: center">
        <b>{{ movie.tagline }}</b>
      </p>
    </div>
    <div class="row g-0">
      <div class="col-md-4 aff">
        <img
          v-bind:src="preUrl + movie.poster_path"
          class="img-fluid rounded-start p-2"
          v-bind:alt="movie.original_title"
        />
      </div>
      <div class="col-md-8 video">
        <div
          class="mt-5 d-flex justify-content-center"
          id="trailer"
          v-if="video[0]"
        >
          <iframe
            width="650"
            height="300"
            v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="shadow p-3"
          ></iframe>
        </div>
        <p class="card-text" style="text-align: center">
          <b>vidéo</b>
        </p>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-8 mt-3">
              <b>Genres : </b>
              <span v-for="genre in movie.genres" :key="genre.id">
                {{ genre.name }}
                <span v-if="genre !== movie.genres[movie.genres.length - 1]"
                  >,</span
                >
              </span>
            </div>
            <div class="col-lg-4 mt-3 text-lg-end text-start">
              <b>Note moyenne :</b> {{ roundedVoteAverage }}
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mt-3">
              <b>Titre Original :</b> {{ movie.original_title }}
            </div>
            <div class="col-lg-4 mt-3 text-lg-end text-start">
              <b>Sortie :</b> {{ movie.release_date }}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col text-start">
              <b>Résumé : </b>{{ movie.overview }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.aff {
  background-color: gainsboro;
}

.video {
  background-color: gainsboro;
}
h2 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>
<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  computed: {
    roundedVoteAverage() {
      if (this.movie) {
        return this.movie.vote_average.toFixed(1);
      }
      return 0;
    },
  },
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
      id: this.$route.params.id,
      movie: null,
      video: [],
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "?api_key=b495cd2235b63fb77b75f027990876fd&language=fr"
      )
      .then((res) => {
        this.movie = res.data;
        console.log(this.movie);
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              this.id +
              "/videos?api_key=b495cd2235b63fb77b75f027990876fd&language=fr"
          )
          .then((res) => {
            this.video = res.data.results;
            console.log(this.video);
          });
      });
  },
};
</script>
