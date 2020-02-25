<template>
  <div class="starships">
    <h1 class="subheading">Starships</h1>
    <v-container id="starship-container">
      <v-layout row wrap>
        <list-item
          v-for="starship in starships"
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
import ListItem from "../components/ListItem";
export default {
  name: "starships-view",
  components: { ListItem },
  computed: {
    ...mapGetters({
      starships: "loadedStarships",
    })
  },
};
</script>