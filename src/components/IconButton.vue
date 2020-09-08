<template>
  <div class="icon-button" :style="buttonStyle">
    <i v-if="faIcon" :class="iconClasses"></i>
    <h4>{{ text }}</h4>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
  
  props: {
    text: String,
    faIcon: String,
    active: Boolean
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

<style>
.icon-button {
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;

  cursor: pointer;
}

.icon-button i {
  color: #d4d4d4;
  padding: 0 20px;
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