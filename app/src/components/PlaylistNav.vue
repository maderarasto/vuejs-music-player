<template>
  <div class="playlist-nav">
    <PlaylistButton v-if="!playing" fa-icon="fa-play-circle" @click="onClickPlay" />
    <PlaylistButton v-else fa-icon="fa-pause-circle" @click="onClickPause" />
    <div class="dropdown-options">
      <div class="icon" @click="onDropdownClick" v-click-outside="{exclude: '.dropdown-options', handler: onDropdownOutsideClick}">
        <i v-for="i in 3" :key="i" class="fas fa-circle"></i>
      </div>
      <div :class="['dropdown-menu', this.optionsActive ? 'active' : '']">
        <a class="dropdown-item" href="#">Copy Playlist Link</a>
        <a class="dropdown-item" href="#">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistButton from '@/components/PlaylistButton';

export default {
  name: 'PlaylistNav',
  components: {
    PlaylistButton
  },

  data() {
    return {
      optionsActive: false
    }
  },

  computed: {
    playing() {
      return this.$store.getters.playing;
    }
  },

  methods: {
    onClickPlay() {
      this.$store.commit('setPlaying', true);
    },

    onClickPause() {
      this.$store.commit('setPlaying', false);
    },

    onDropdownClick() {
      this.optionsActive = !this.optionsActive;
    },

    onDropdownOutsideClick() {
      this.optionsActive = false;
    }
  }
}
</script>

<style>
.playlist-nav {
  display: flex;
  width: 100%;
  height: 100px;
  padding: 10px 0;
  align-items: center;
}

.playlist-nav .dropdown-options {
  position: relative;
  padding: 20px;
  margin: 0 10px;
}

.playlist-nav .dropdown-options .icon > i {
  padding: 2px;
  font-size: 7px;
  color: #d4d4d4;
}

.playlist-nav .dropdown-options .icon:hover > i {
  color: white;
}

.playlist-nav .dropdown-options .dropdown-menu {
  position: absolute;
  top: 30px;
  left: 35px;
  
  display: none;
  min-width: 190px;
  padding: 5px 0;
  border-radius: 5px;
  border: 1px solid #303030;

  background-color: #303030;
}

.playlist-nav .dropdown-options .dropdown-menu.active {
  display: block;
}

.playlist-nav .dropdown-options .dropdown-menu .dropdown-item {
  display: block;
  padding: 10px 15px;

  text-align: left;
  text-decoration: none;

  color: white;
}

.playlist-nav .dropdown-options .dropdown-menu .dropdown-item:hover {
  background-color: #505050;
}
</style>