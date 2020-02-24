<template>
  <v-card id="list-items" class="mx-auto" max-width="350" v-bind:all="all" v-if="all">
    <v-card-text>
      <div
        class="text--primary"
        v-for="item in itemKeys"
        :item="item.id"
        :key="item.id"
      >{{titleCase(item)}}: {{itemObj[item]}}</div>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn text color="deep-purple accent-4">More Details</v-btn>
    </v-card-actions> -->
  </v-card>
  <v-card id="list-items" class="mx-auto" min-width="300" v-else>
    <v-list-item-title class="headline mb-1" v-bind:header="header">{{header}}</v-list-item-title>
    <v-list-item-subtitle v-bind:supplemental="supplemental">{{supplemental}}</v-list-item-subtitle>
    <v-expand-transition>
      <div>
        <v-divider></v-divider>
        <v-card-text>
          <div class="text--primary" v-bind:description="description">{{description}}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { titleCase } from "../helpers";
export default {
  name: "list-item",
  props: {
    header: String,
    description: String,
    supplemental: String,
    all: Boolean,
    itemKeys: Array,
    itemObj: Object
  },
  methods: { titleCase: titleCase },
  data: () => ({
    show: false
  })
};
</script>

<style scoped>
#list-items {
  margin-bottom: 2%;
  padding: 1%;
}
</style>