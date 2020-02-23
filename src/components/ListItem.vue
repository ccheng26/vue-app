<template>
  <div class="list-items">
    <ul>
      <li v-for="(item, index) in items">{{ index }} - {{ item.message }}</li>
    </ul>
    <h3>Essential Links</h3>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    items: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>