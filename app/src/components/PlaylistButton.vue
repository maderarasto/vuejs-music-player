<template>
  <div class="playlist-button" @click="onClick">
    <i :class="iconClasses"></i>
  </div>
</template>

<script>
export default {
  name: 'PlaylistButton',

  props: {
    faIcon: String,
  },

  computed: {
    iconClasses() {
      return [ 'fas', this.faIcon ];
    }
  },

  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style>
.playlist-button {
  width: 45px;
  height: 45px;
  margin: 18px;

  background-color: white;
}

.playlist-button > i{
  font-size: 75px;
  border-radius: 50px;
  transform: translate(-25%, -23%);

  color: #2ecc71;
}

.playlist-button:hover > i {
  font-size: 80px;
}
</style>