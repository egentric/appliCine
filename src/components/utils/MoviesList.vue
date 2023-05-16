<template>
  <ul>
    <li class="list-unstyled" v-for="(movie, index) in movies" :key="movie.id">
      <MovieCard
        :index="index"
        :id="movie.id"
        :title="movie.title"
        :poster_path="movie.poster_path"
        :release_date="movie.release_date"
        :vote_average="movie.vote_average"
        :overview="movie.overview"
      />
    </li>
  </ul>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  name: "MoviesList",
  components: {
    MovieCard,
  },
  props: ["movies"],
};
</script>

<style>
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
