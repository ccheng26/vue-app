<template>
  <div class="planets">
    <h1 class="subheading">Planets</h1>
    <v-container id="planet-container">
      <v-layout row wrap>
        <list-item
          v-for="planet in planets"
          :itemObj="planet"
          :key="planet.id"
          :itemKeys="planetKeys"
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
  name: "planets-view",
  components: { ListItem },
  computed: {
    ...mapGetters({
      planets: "loadedPlanets",
      planetKeys: "planetKeys"
    })
  }
};
</script>