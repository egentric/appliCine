<template>
  <div v-if="movie" class="card mb-3 mx-auto mt-5" style="max-width: 80%">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          v-bind:src="preUrl + movie.poster_path"
          class="img-fluid rounded-start"
          v-bind:alt="movie.original_title"
        />
      </div>
      <div class="col-md-8">
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
            class="shadow"
          ></iframe>
        </div>
        <p class="card-text" style="text-align: center">
          <b>video</b>
        </p>
        <div class="card-body">
          <h5 class="card-title" style="text-align: center">
            {{ movie.title }}
          </h5>
          <p class="card-text" style="text-align: center">
            {{ movie.tagline }}
          </p>
          <p class="card-text" style="text-align: center">
            <b>Sortie :</b> {{ movie.release_date }}
          </p>
          <p class="card-text" style="text-align: center">
            <b>Genres : </b>
            <span v-for="genre in movie.genres" :key="genre.id">
              {{ genre.name }}
              <span v-if="genre !== movie.genres[movie.genres.length - 1]"
                >,</span
              >
            </span>
          </p>
          <p class="card-text" style="text-align: center">
            <b>Note moyenne :</b> {{ movie.vote_average }}
          </p>
          <p class="card-text" style="text-align: center">
            <b>Titre Original :</b> {{ movie.original_title }}
          </p>
          <p class="card-text" style="text-align: center">
            <b>Résumé : </b>{{ movie.overview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",
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
