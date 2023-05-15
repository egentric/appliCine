<template>
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <img src="..." class="card-img-top" alt="...">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'FrenchMovies',
  data() {
    return {
      movies: null,
    };
  },
  created: function() {
    axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=b495cd2235b63fb77b75f027990876fd&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=fr&with_watch_monetization_types=flatrate')
      .then(res => {
        this.movies = res.data.results;
      })
      console.log(re.data);
  }
}
</script>