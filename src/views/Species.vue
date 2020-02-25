<template>
  <div class="species">
    <h1 class="subheading">Species</h1>
    <v-container id="species-container">
      <v-layout row wrap>
        <list-item v-for="specie in speciesData" :itemObj="specie" :key="specie.id" v-bind:all="true" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { formatUrlArr, findArrObjByKeyVal } from "../helpers";
import ListItem from "../components/ListItem";
export default {
  name: "species-view",
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
    speciesData: function() {
      if (this.films && this.people && this.planets && this.species) {
        return this.species.map(specie => {
          const { homeworld, people, vehicles, films, starships } = specie;
          let home = findArrObjByKeyVal(this.planets, "url", homeworld);
          specie.homeworld = home ? home.name : "N/A";
          specie.films = Array.isArray(films) ? formatUrlArr(films, this.films, "title") : films;
          specie.people = Array.isArray(people) ? formatUrlArr(people, this.people) : people;
          return specie;
        });
      }
    }
  }
};
</script>