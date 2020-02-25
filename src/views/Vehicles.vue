<template>
  <div class="vehicles">
    <h1 class="subheading">Vehicles</h1>
    <v-container id="vehicle-container">
      <v-layout row wrap>
        <list-item
          v-for="vehicle in vehicleData"
          :itemObj="vehicle"
          :key="vehicle.id"
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
  name: "vehicles-view",
  components: { ListItem },
  computed: {
    ...mapState(["films", "people", "vehicles"]),
    vehicleData: function() {
      if (this.films.length && this.people.length && this.vehicles.length) {
        return this.vehicles.map(vehicle => {
          const { films, pilots } = vehicle;
          vehicle.pilots = Array.isArray(pilots) ? formatUrlArr(pilots, this.people) : pilots;
          vehicle.films = Array.isArray(films) ? formatUrlArr(films, this.films, "title") : films;
          return vehicle;
        });
      }
    }
  }
};
</script>