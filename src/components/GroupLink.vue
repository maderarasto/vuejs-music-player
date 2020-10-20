<template>
  <router-link :to="group.url" class="group-link">
    <img class="group-image" :src="group.image" />
    <h3>{{ group.name }}</h3>
    <p>{{ group.description }}</p>
  </router-link>
</template>

<script>
export default {
  name: "GroupLink",

  props: {
    group: Object
  },
}
</script>

<style scoped>
.group-link {
  width: 200px;
  height: 280px;
  padding: 20px;

  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  background-color: #1f1f1f;
}

.group-link:hover {
  background-color: #2f2f2f;
}

.group-link .group-image {
  width: 160px;
  height: 160px;
  margin: 0;
  border-radius: 2px;
}

.group-link > h3 {
  margin: 10px 0 0;
  text-align: left;
  text-decoration: none;
  color: white;
}

.group-link > p {
  text-align: left;
  text-decoration: none;
  font-size: 11pt;
  color: #8d8d8d;
}

.group-link:link {
  text-decoration: none;
}
</style>