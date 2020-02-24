import Vue from 'vue'
import Vuex from 'vuex'
import { handleBaseGet } from '../api'
import { get, set } from './vuex-helpers'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    filmKeys: [],
    planets: [],
    planetKeys: [],
    species: [],
    speciesKeys: [],
    starships: [],
    starshipKeys: [],
    people: [],
    personKeys: [],
    vehicles: [],
    vehicleKeys: [],
  },
  mutations: {
    SAVE_FILMS: set('films'),
    SAVE_FILM_KEYS: set('filmKeys'),
    SAVE_PLANETS: set('planets'),
    SAVE_PLANET_KEYS: set('planetKeys'),
    SAVE_SPECIES: set('species'),
    SAVE_SPECIES_KEYS: set('speciesKeys'),
    SAVE_STARSHIPS: set('starships'),
    SAVE_STARSHIP_KEYS: set('starshipKeys'),
    SAVE_PEOPLE: set('people'),
    SAVE_PERSON_KEYS: set('personKeys'),
    SAVE_VEHICLES: set('vehicles'),
    SAVE_VEHICLE_KEYS: set('vehicleKeys'),
  },
  actions: {
    loadFilms({ commit }) {
      handleBaseGet('films', 'film', commit, 'episode_id')
    },
    loadPlanets({ commit }) {
      handleBaseGet('planets', 'planet', commit, 'url', true)
    },
    loadSpecies({ commit }) {
      handleBaseGet('species', 'species', commit, 'url', true)
    },
    loadStarships({ commit }) {
      handleBaseGet('starships', 'starship', commit, 'url', true)
    },
    loadPeople({ commit }) {
      handleBaseGet('people', 'person', commit, 'url', true)
    },
    loadVehicles({ commit }) {
      handleBaseGet('vehicles', 'vehicle', commit, 'url', true)
    },
  },
  modules: {
  },
  getters: {
    loadedFilms: get('films'),
    filmKeys: get('filmKeys'),
    loadedPlanets: get('planets'),
    planetKeys: get('planetKeys'),
    loadedSpecies: get('species'),
    speciesKeys: get('speciesKeys'),
    loadedStarships: get('starships'),
    starshipKeys: get('starshipKeys'),
    loadedPeople: get('people'),
    personKeys: get('personKeys'),
    loadedVehicles: get('vehicles'),
    vehicleKeys: get('vehicleKeys'),
  }
})
