<template>
  <router-link :to="group.route" class="group-link">
    <img class="group-image" :src="group.image" />
    <h4>{{ group.name }}</h4>
    <p>{{ group.description }}</p>
  </router-link>
</template>

<script>
export default {
  name: "GroupLink",

  props: {
    group: Object
  }
}
</script>

<style scoped>
.group-link {
  width: 200px;
  height: 280px;
  padding: 20px;

  overflow: hidden;
  text-overflow: ellipsis;

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

.group-link > h4 {
  margin: 10px 0 0;
  text-align: left;
  text-decoration: none;
  color: white;
}

.group-link > p {
  text-align: left;
  text-decoration: none;
  font-size: 10pt;
  color: #8d8d8d;
}

.group-link:link {
  text-decoration: none;
}
</style>