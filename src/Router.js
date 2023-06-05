import { createRouter, createWebHistory } from "vue-router";

// on importe les différents composants
import App from "./App.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import AmericanMovies from "./components/AmericanMovies.vue";
import LastMovies from "./components/LastMovies.vue";
import MovieDetails from "./components/MovieDetails.vue";
import SearchMovies from "./components/SearchMovies.vue";
import TopRatedMovies from "./components/TopRatedMovies.vue";

const routes = [
  // on déclare les routes
  {
    path: "/", // path = url
    component: App, // composant associé
  },
  {
    path: "/AmericanMovies",
    component: AmericanMovies,
  },
  {
    path: "/FrenchMovies",
    component: FrenchMovies,
  },
  {
    path: "/LastMovies",
    component: LastMovies,
  },
  {
    path: "/MovieDetails/:id",
    name: "MovieDetails",
    component: MovieDetails,
    props: true,
  },
  {
    path: "/SearchMovies",
    component: SearchMovies,
  },
  {
    path: "/TopRatedMovies",
    component: TopRatedMovies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
