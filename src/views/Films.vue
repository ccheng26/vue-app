<template>
  <div class="films-view">
    <h1 class="subheading">Films</h1>
    <v-container id="film-container">
      <v-layout row wrap>
        <list-item
          v-for="film in films"
          :film="films"
          :key="film.id"
          :header="film.title"
          :supplemental="'Episode ' + film.episode_id"
          :description="film.opening_crawl"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ListItem from "../components/ListItem";
export default {
  name: "films-view",
  components: { ListItem },
  computed: {
    ...mapGetters({
      films: "loadedFilms",
    })
  },
};
</script>

<style scoped>
#film-container {
  display: flex;
  justify-content: space-around;
  align-content: space-around;
}
</style>