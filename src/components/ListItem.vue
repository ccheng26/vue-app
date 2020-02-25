<template>
  <v-card id="list-items" class="mx-auto" width="350" v-bind:all="all" v-if="all">
    <v-card-text>
      <div
        class="text--primary"
        v-for="(value, key) in itemObj"
        :item="value.id"
        :key="value.id"
      >{{titleCase(key)}}: {{value}}</div>
    </v-card-text>
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text
              v-for="(value, key) in additionalValues"
              :key="value.id"
              :item="value.id"
            >{{titleCase(key)}}: {{value}}</v-card-text>
          </div>
        </v-expand-transition>
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
    itemObj: Object,
    exclude: Array
  },
  methods: { titleCase: titleCase },
  data: () => ({
    show: false
  }),
  computed: {
    additionalValues: function() {
      let additionalValues = { ...this.itemObj };
      if (
        Object.keys(additionalValues) &&
        this.exclude &&
        this.exclude.length
      ) {
        for (let i in this.exclude) {
          delete additionalValues[this.exclude[i]];
        }
      }
      return additionalValues;
    }
  }
};
</script>

<style scoped>
#list-items {
  margin-bottom: 2%;
  padding: 1%;
}
</style>