<template>
  <div class="collection-nav">
    <router-link class="collection-link" :class="getLinkClass('Playlists')" :to="{name: 'Playlists'}">Playlists</router-link>
    <router-link class="collection-link" :class="getLinkClass('Artists')" :to="{name: 'Artists'}">Artists</router-link>
    <router-link class="collection-link" :class="getLinkClass('Albums')" :to="{name: 'Albums'}">Albums</router-link>
  </div>
</template>

<script>
export default {
  name: "CollectionNav",

  methods: {
    isActiveLink(routeName) {
      return this.$route.name === routeName;
    },

    getLinkClass(routeName) {
      return { active: this.isActiveLink(routeName) };
    }
  }
}
</script>

<style scoped>
.collection-nav {

}

.collection-nav .collection-link {
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 10pt;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.collection-link.active {
  background-color: #2f2f2f;
}
</style>