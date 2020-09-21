<template>
  <div class="playlist">
    <PlaylistHeader :playlist="playlist" />
    <div class="playlist-body">
      <PlaylistNav />
    </div>
  </div>
</template>

<script>
import PlaylistHeader from '@/components/PlaylistHeader';
import PlaylistNav from '@/components/PlaylistNav';

export default {
  name: 'Playlist',
  components: {
    PlaylistHeader,
    PlaylistNav
  },

  data() {
    return {
      playlist: null
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
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