<template>
  <router-link :to="route" class="icon-link" :style="linkStyle">
    <i v-if="faIcon" :class="iconClasses"></i>
    <h4>{{ text }}</h4>
  </router-link>
</template>

<script>
export default {
  name: 'IconLink',
  
  props: {
    text: String,
    faIcon: String,
    active: Boolean,
    route: [ String, Object ]
  },

  computed: {
    linkStyle() {
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
.icon-link {
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-radius: 7px;

  text-decoration: none;
  cursor: pointer;
}

.icon-link i {
  padding: 0 20px 0 10px;
  color: #d4d4d4;
}

.icon-link i:hover {
  color: white;
}

.icon-link h4 {
  color: #d4d4d4;
}

.icon-link h4:hover {
  color: white;
}
</style>