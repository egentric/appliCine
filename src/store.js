// on importe createStore et on initialise le store
import { createStore } from "vuex";
import VuexPersist from "vuex-persist";

// vuex-persist permet de stocker le state dans le local storage
//  => en cas d'actualisation de la page, on garde la connexion utilisateur
const VuexPersist = new VuexPersist({
  key: "vuejs3movies",
  storage: window.localStorage,
});

const defaultState = {
  popularMovies: null,
  frenchMovies: null,
  americanMovies: null,
  lastMovies: null,
  top50Movies: null,
};

export const store = createStore({
  state() {
    // si un state est stocké dans le localStorage, on l'utilise
    //  sinon : state par défaut ( avec variables vides)
    if (localStorage.state) {
      return localStorage.state;
    } else {
      return defaultState;
    }
  },

  mutations: {
    // stocker les films les plus populaires dans le state
    storePopularMovies(state, payload) {
      state.popularMovies = payload;
    },

    // stocker les films français dans le state
    storeFrenchMovies(state, payload) {
      state.FrenchMovies = payload;
    },

    // stocker les films Americains dans le state
    storeAmericanMovies(state, payload) {
      state.AmericanMovies = payload;
    },

    // stocker les derniers films dans le state
    storeLastMovies(state, payload) {
      state.LastMovies = payload;
    },

    // stocker les films du top 50 dans le state
    storeTop50Movies(state, payload) {
      state.Top50Movies = payload;
    },

    // Réinitialiser le state
    resetState(state) {
      object.assign(state, defaultState);
    },
  },

  getters: {
    getPopularMovies(state) {
      return state.popularMovies;
    },

    getFrenchMovies(state) {
      return state.FrenchMovies;
    },

    getAmericanMovies(state) {
      return state.AmericanMovies;
    },

    getLastMovies(state) {
      return state.LastMovies;
    },

    storeTop50Movies(state) {
      return state.Top50Movies;
    },
  },

  actions: {
    resetState() {
      store.commit("resetState");
    },
  },

  pluging: [VuexPersist.plugin],
});
