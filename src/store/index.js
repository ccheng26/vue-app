import Vue from 'vue'
import Vuex from 'vuex'
import { handleBaseGet } from '../api'
import { get, set } from './vuex-helpers'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    planets: [],
    species: [],
    starships: [],
    people: [],
    vehicles: [],
  },
  mutations: {
    SAVE_FILMS: set('films'),
    SAVE_PLANETS: set('planets'),
    SAVE_SPECIES: set('species'),
    SAVE_STARSHIPS: set('starships'),
    SAVE_PEOPLE: set('people'),
    SAVE_VEHICLES: set('vehicles'),
  },
  actions: {
    loadFilms({ commit }) {
      handleBaseGet('films', commit, 'episode_id')
    },
    loadPlanets({ commit }) {
      handleBaseGet('planets', commit, 'url', true)
    },
    loadSpecies({ commit }) {
      handleBaseGet('species', commit, 'url', true)
    },
    loadStarships({ commit }) {
      handleBaseGet('starships', commit, 'url', true)
    },
    loadPeople({ commit }) {
      handleBaseGet('people', commit, 'url', true)
    },
    loadVehicles({ commit }) {
      handleBaseGet('vehicles', commit, 'url', true)
    },
  },
  modules: {
  },
  getters: {
    loadedFilms: get('films'),
    loadedPlanets: get('planets'),
    loadedSpecies: get('species'),
    loadedStarships: get('starships'),
    loadedPeople: get('people'),
    loadedVehicles: get('vehicles'),
  }
})
