<template>
  <div class="people">
    <h1 class="subheading">People</h1>
    <v-container id="person-container">
      <v-layout row wrap>
        <list-item
          v-for="person in peopleData"
          :itemObj="person"
          :key="person.id"
          v-bind:all="true"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { formatUrlArr, findArrObjByKeyVal } from "../helpers";
import ListItem from "../components/ListItem";
export default {
  name: "people-view",
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
    peopleData: function() {
      if (
        this.films &&
        this.people &&
        this.planets &&
        this.species &&
        this.starships &&
        this.vehicles
      ) {
        return this.people.map(person => {
          const { homeworld, species, vehicles, films, starships } = person;
          let home = findArrObjByKeyVal(this.planets, "url", homeworld)
          person.homeworld = home ? home.name : "N/A"
          person.films = Array.isArray(films) ? formatUrlArr(films, this.films, "title") : films;
          person.species = Array.isArray(species) ? formatUrlArr(species, this.species) : species;
          person.starships = Array.isArray(starships) ? formatUrlArr(starships, this.starships) : starships;
          person.vehicles = Array.isArray(vehicles) ? formatUrlArr(vehicles, this.vehicles) : vehicles;
          return person;
        });
      }
    }
  }
};
</script>