<template>
  <div class="starships">
    <h1 class="subheading">Starships</h1>
    <v-container id="starship-container">
      <v-layout row wrap>
        <list-item
          v-for="starship in starshipData"
          :itemObj="starship"
          :key="starship.id"
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
  name: "starships-view",
  components: { ListItem },
  computed: {
    ...mapState(["films", "people", "starships"]),
    starshipData: function() {
      if (this.films && this.people && this.starships) {
        return this.starships.map(starship => {
          const { films, pilots } = starship;
          starship.pilots = Array.isArray(pilots) ? formatUrlArr(pilots, this.people) : pilots;
          starship.films = Array.isArray(films) ? formatUrlArr(films, this.films, 'title') : films;
          return starship;
        });
      }
    }
  }
};
</script>