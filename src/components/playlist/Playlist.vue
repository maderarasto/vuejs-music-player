<template>
  <div class="playlist">
    <PlaylistHeader :playlist="playlist" :liked-songs="likedSongs" />
    <div class="playlist-body">
      <PlaylistNav />

      <div class="playlist-items">
        <PlaylistItem
          v-for="item in playlistItems"
          :key="item.track.id"
          :item="item.track"
          :selected="isTrackSelected(item.track)"
          @select="onSelect" />
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistHeader from './PlaylistHeader';
import PlaylistNav from './PlaylistNav';
import PlaylistItem from './PlaylistItem';

export default {
  name: 'Playlist',
  components: {
    PlaylistHeader,
    PlaylistNav,
    PlaylistItem
  },

  data() {
    return {
      playlist: null,
      likedSongs: false,
      selectedItemId: null
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    playlistItems() {
      return this.playlist ? this.playlist.tracks.items : [];
    }
  },

  methods: {
    onSelect(event) {
      this.selectedItemId = event.trackId;
    },

    isTrackSelected(track) {
      return track.id === this.selectedItemId;
    }
  },

  created() {
    if (this.$route.name.includes('Playlist')) {
      const playlistId = this.$route.params.id;
      this.$store.dispatch('loadPlaylist', playlistId).then(playlist => this.playlist = playlist);
    } else {
      this.playlist = this.$store.getters.savedTracks;
      this.likedSongs = true;
    }
  }
}
</script>

<style>
.playlist {
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
}

.playlist .playlist-body {
  margin: 0 50px;
}
</style>