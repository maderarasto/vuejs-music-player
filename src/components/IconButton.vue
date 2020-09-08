<template>
  <router-link :to="route" class="icon-button" :style="buttonStyle">
    <i v-if="faIcon" :class="iconClasses"></i>
    <h4>{{ text }}</h4>
  </router-link>
</template>

<script>
export default {
  name: 'IconButton',
  
  props: {
    text: String,
    faIcon: String,
    active: Boolean,
    route: String
  },

  computed: {
    buttonStyle() {
      return {
        'background-color': this.active ? '#303030' : 'transparent'
      }
    },

    iconClasses() {
      return ['fas', this.faIcon]
    }
  }
}
</script>

<style scoped>
.icon-button {
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-radius: 7px;

  text-decoration: none;
  cursor: pointer;
}

.icon-button i {
  padding: 0 20px 0 10px;
  color: #d4d4d4;
}

.icon-button i:hover {
  color: white;
}

.icon-button h4 {
  color: #d4d4d4;
}

.icon-button h4:hover {
  color: white;
}
</style>