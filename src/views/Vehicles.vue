<template>
  <div class="vehicles">
    <h1 class="subheading">Vehicles</h1>
    <v-container id="vehicle-container">
      <v-layout row wrap>
        <list-item
          v-for="vehicle in vehicles"
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
import ListItem from "../components/ListItem";
export default {
  name: "vehicles-view",
  components: { ListItem },
  computed: {
    ...mapGetters({
      vehicles: "loadedVehicles",
    })
  },
};
</script>