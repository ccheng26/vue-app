<template>
  <div class="home">
    <Films />
  </div>
</template>

<script>
// @ is an alias to /src
import Films from "@/views/Films.vue";
import swapi from "../api";
export default {
  name: "Home",
  components: {
    Films
  }
};
</script>
