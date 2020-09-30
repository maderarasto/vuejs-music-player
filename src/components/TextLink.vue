<template>
  <router-link :to="route" class="text-link" :style="linkStyle">
    <p>{{ text }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'TextLink',
  
  props: {
    text: String,
    active: Boolean,
    route: [ String, Object ]
  },

  computed: {
    linkStyle() {
      return {
        'color': this.active ? 'white' : '#d4d4d4'
      }
    }
  }
}
</script>

<style scoped>
.text-link {
  display: flex;
  width: 100%;
  padding: 5px 0;

  text-align: left;
  text-decoration: none;
  cursor: default;
}

.text-link p:hover {
  color: white;
}
</style>