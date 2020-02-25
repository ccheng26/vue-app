<template>
  <div class="planets">
    <h1 class="subheading">Planets</h1>
    <v-container id="planet-container" v-if="planetData">
      <v-layout row wrap>
        <list-item
          v-for="planet in planetData"
          :itemObj="planet"
          :key="planet.id"
          v-bind:all="true"
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
  name: "planets-view",
  components: { ListItem },
  data: () => ({
    loaded: false
  }),
  computed: {
    ...mapState(["planets", "films", "people"]),
    planetData: function() {
      if (this.films.length && this.planets.length && this.people.length) {
        return this.planets.map( planet => {
          const { films, residents } = planet;
          planet.films = Array.isArray(films) ? formatUrlArr(films, this.films, "title") : films;
          planet.residents = Array.isArray(residents) ? formatUrlArr(residents, this.people) : residents;
          return planet;
        });
      }
    }
  }
};
</script>