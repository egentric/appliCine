<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">AppliCine</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/LastMovies" class="nav-link"
              >Films de l'année</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/FrenchMovies" class="nav-link"
              >Films Français</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/AmericanMovies" class="nav-link"
              >Films Americains</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/TopRatedMovies" class="nav-link"
              >Les 50 mieux notés</router-link
            >
          </li>
        </ul>
        <router-link to="/SearchMovies" class="nav-link">
          <button class="btn btn-outline-secondary">Recherches</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue";

export default {
  components: {
    RouterLink,
  },
};
</script>
