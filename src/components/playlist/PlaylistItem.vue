<template>
  <div :class="itemClasses" @mouseenter="setHovered(true)" @mouseleave="setHovered(false)" @click="onClick">
    <div class="item-icon">
      <i :class="iconClasses" @click="onPlayClick"></i>
    </div>
    <div class="item-info">
      <p class="item-title">{{ title }}</p>
      <ul class="additional-info">
        <li class="item-artists" v-html="artists"></li>
        <li class="item-album"><a href="#">{{ album }}</a></li>
      </ul>
    </div>
    <div class="dropdown-options">
      <div class="icon" @click="onDropdownClick" v-click-outside="{exclude: '.dropdown-options', handler: onDropdownOutsideClick}">
        <i v-for="i in 3" :key="i" class="fas fa-circle"></i>
      </div>
      <div :class="['dropdown-menu', this.optionsActive ? 'active' : '']">
        <a class="dropdown-item" href="#">Save to your Liked Songs</a>
        <a class="dropdown-item" href="#">Add to Queue</a>
        <a class="dropdown-item" href="#">Add to Playlist</a>
        <a class="dropdown-item" href="#">Remove from this Playlist</a>
        <a class="dropdown-item" href="#">Show credits</a>
        <a class="dropdown-item" href="#">Copy Song Link</a>
      </div>
    </div>
    <div class="item-length">
      <span>{{ length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistItem',

  props: {
    item: Object,
    selected: Boolean
  },

  data() {
    return {
      hovered: false,
      optionsActive: false
    }
  },

  computed: {
    itemClasses() {
      return [ 'playlist-item', this.selected ? 'selected' : '', this.hovered ? 'hovered' : '', this.playing ? 'played' : '' ];
    },

    iconClasses() {
      return [ 'fas', this.hovered ? 'fa-play' : 'fa-music' ];
    },

    playedTrack() {
      return this.$store.getters.playedTrack;
    },

    playing() {
      return this.playedTrack && this.playedTrack.id === this.item.id;
    },

    title() {
      return this.item ? this.item.name : '';
    },

    artists() {
      let artists = this.item ? this.item.artists : [];
      artists = artists.map(artist => `<a href="#">${artist.name}</a>`);
      
      return artists.join(', ');
    },

    album() {
      return this.item ? this.item.album.name : '';
    },

    duration() {
      return this.item ? this.$utils.parseTime(this.item.duration_ms) : 
        { hours: 0, minutes: 0, seconds: 0 };
    },

    length() {
      const seconds = this.$utils.formatNumber(this.duration.seconds, '.', '', 2);

      return `${this.duration.minutes}:${seconds}`;
    }
  },

  methods: {
    onClick() {
      this.$emit('select', { trackId: this.item.id });
    },

    setHovered(hovered) {
      this.hovered = hovered;
    },

    onPlayClick() {
      this.$store.commit('setPlayedTrack', this.item);
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
.playlist-item {
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 0;
  border-radius: 5px;

  cursor: default;
}

.playlist-item.selected {
  background-color: #505050;
  color: white;
}

.playlist-item.hovered {
  background-color: #303030;
  color: white;
}

.playlist-item .item-icon {
  width: 60px;
}

.playlist-item .item-icon > i {
  font-size: 15px;
  color: #a6a6a6; 
}

.playlist-item.played .item-icon > i {
  color: #2ecc71;
}

.playlist-item.active .item-icon > i {
  color: white;
}

.playlist-item .item-info {
  flex: 1;
  text-align: left;
}

.playlist-item .item-title {
  font-size: 12pt;
  color: white;
}

.playlist-item.played .item-title {
  color: #2ecc71;
}

.playlist-item .additional-info {
  color: #a6a6a6;
}

.playlist-item .additional-info li {
  display: inline;
  padding-left: 10px;
  list-style: none;
  font-size: 10pt;
}

.playlist-item .additional-info .item-artists {
  padding-left: 0;
}

.playlist-item .additional-info a {
  color: #a6a6a6;
  text-decoration: none;
}

.playlist-item .additional-info a:hover {
  text-decoration: underline;
}

.playlist-item .additional-info li::before {
  content: '\2022';
  margin-right: 10px;
}

.playlist-item .additional-info .item-artists::before {
  content: '';
  margin-right: 0;
}

.playlist-item .dropdown-options {
  position: relative;
  width: 50px;
  padding: 0 20px;
  margin: 5px 10px 0;
  visibility: hidden;
}

.playlist-item.active .dropdown-options {
  visibility: visible;
}

.playlist-item .dropdown-options .icon > i {
  padding: 2px;
  font-size: 3px;
  color: white;
  z-index: -1;
}

.playlist-item .dropdown-options .dropdown-menu {
  position: absolute;
  top: 30px;
  left: -215px;
  
  display: none;
  min-width: 250px;
  padding: 5px 0;
  border-radius: 5px;
  border: 1px solid #303030;

  background-color: #303030;
  z-index: 1;
}

.playlist-item .dropdown-options .dropdown-menu.active {
  display: block;
}

.playlist-item .dropdown-options .dropdown-menu .dropdown-item {
  display: block;
  padding: 10px 15px;

  text-align: left;
  text-decoration: none;

  color: white;
}

.playlist-item .dropdown-options .dropdown-menu .dropdown-item:hover {
  background-color: #505050;
}

.playlist-item .item-length {
  width: 100px;
  font-size: 12pt;
  color: #a6a6a6;
}

.playlist-item.played .item-length {
  color: #2ecc71;
}
</style>