<template>
  <div class="films-view">
    <h1 class="subheading">Films</h1>
    <v-container id="film-container">
      <v-layout row wrap>
        <list-item
          v-for="film in filmData"
          :itemObj="film"
          :key="film.id"
          :header="film.title"
          :supplemental="'Episode ' + film.episode_id"
          :description="film.opening_crawl"
          :exclude="['title', 'opening_crawl', 'episode_id', 'title']"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { formatUrlArr } from "../helpers";
import ListItem from "../components/ListItem";
export default {
  name: "films-view",
  components: { ListItem },
  computed: {
    ...mapState([
      "planets",
      "films",
      "people",
      "species",
      "starships",
      "vehicles"
    ]),

    filmData: function() {
      if (
        this.films.length &&
        this.people.length &&
        this.planets.length &&
        this.species.length &&
        this.starships.length &&
        this.vehicles.length
      ) {
        return this.films.map(film => {
          const { planets, species, vehicles, characters, starships } = film;
          film.planets = Array.isArray(planets) ? formatUrlArr(planets, this.planets) : planets;
          film.characters = Array.isArray(characters) ? formatUrlArr(characters, this.people) : characters;
          film.species = Array.isArray(species) ? formatUrlArr(species, this.species) : species;
          film.starships = Array.isArray(starships) ? formatUrlArr(starships, this.starships) : starships;
          film.vehicles = Array.isArray(vehicles) ? formatUrlArr(vehicles, this.vehicles) : vehicles;
          return film;
        });
      }
    }
  }
};
</script>

<style scoped>
#film-container {
  display: flex;
  justify-content: space-around;
  align-content: space-around;
}
</style>