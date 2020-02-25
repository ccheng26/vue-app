<template>
  <div class="species">
    <h1 class="subheading">Species</h1>
    <v-container id="species-container">
      <v-layout row wrap>
        <list-item
          v-for="specie in species"
          :itemObj="specie"
          :key="specie.id"
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
  name: "species-view",
  components: { ListItem },
  computed: {
    ...mapGetters({
      species: "loadedSpecies",
    })
  },
};
</script>