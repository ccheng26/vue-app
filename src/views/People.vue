<template>
  <div class="people">
    <h1 class="subheading">People</h1>
    <v-container id="person-container">
      <v-layout row wrap>
        <list-item
          v-for="person in people"
          :itemObj="person"
          :key="person.id"
          :itemKeys="personKeys"
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
  name: "people-view",
  components: { ListItem },
  computed: {
    ...mapGetters({
      people: "loadedPeople",
      personKeys: "personKeys"
    })
  },
};
</script>