<template>
  <div class="playlist">
    <PlaylistHeader :playlist="playlist" />
    <div class="playlist-body">
      <PlaylistNav />

      <div class="playlist-items">
        <PlaylistItem v-for="item in playlistItems" :key="item.track.id" :item="item.track" />
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
      playlist: null
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

  created() {
    const playlistId = this.$route.params.id;
    this.$spotify.getPlaylist(playlistId).then(playlist => this.playlist = playlist);
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