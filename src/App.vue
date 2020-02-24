<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Star Wars</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-link to="/">Home</router-link>|
      <router-link to="/films">Films</router-link>|
      <router-link to="/planets">Planets</router-link>|
      <router-link to="/species">Species</router-link>|
      <router-link to="/people">People</router-link>|
      <router-link to="/vehicles">Vehicles</router-link>|
      <router-link to="/starships">Starships</router-link>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Films from "./views/Films";

export default {
  name: "App",

  components: {
    Films
  },
  created() {
    this.$store.dispatch("loadFilms");
    this.$store.dispatch("loadPlanets");
    this.$store.dispatch("loadSpecies");
    this.$store.dispatch("loadStarships");
    this.$store.dispatch("loadPeople");
    this.$store.dispatch("loadVehicles");
  }
};
</script>

<style scoped>
h1 {
  color: black;
}
.v-content {
  text-align: center;
}
</style>>
