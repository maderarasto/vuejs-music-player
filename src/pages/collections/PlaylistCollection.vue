<template>
  <div class="playlist-collection">
    <h2>Playlists</h2>
    <div class="playlists">
      <div class="liked-songs-playlist" @click="onLikedSongsClick">
        <h1>Liked Songs</h1>
        <span class="liked-songs-count">{{ likedSongs.tracks.items.length }} liked songs</span>
      </div>
      <ResultCard
          v-for="playlist in playlists"
          :key="playlist.id"
          type="playlist"
          :result="playlist"
          @click="onResultCardClick(playlist)"/>
    </div>
  </div>
</template>

<script>
import ResultCard from "@/components/cards/ResultCard";
export default {
  name: "Playlists",

  components: {
    ResultCard
  },

  computed: {
    playlists() {
      return this.$store.getters['playlists'];
    },

    likedSongs() {
      return this.$store.getters['savedTracks'];
    }
  },

  methods: {
    onLikedSongsClick() {
      this.$router.push({ name: 'LikedSongs' });
    },

    onResultCardClick(playlist) {
      this.$router.push({ name: 'Playlist', params: { id: playlist.id } });
    }
  }
}
</script>

<style scoped>
.playlist-collection h2 {
  font-weight: bold;
  color: white;
}

.playlist-collection .playlists {
  display: flex;
  margin-top: 15px;
}

.playlists .liked-songs-playlist {
  position: relative;
  width: 500px;
  height: 275px;
  margin-right: 20px;
  border-radius: 10px;
  flex-wrap: wrap;
  cursor: pointer;

  background: rgb(182,137,232);
  background: linear-gradient(305deg, rgba(182,137,232,1) 0%, rgba(167,118,221,1) 30%, rgba(133,74,198,1) 100%);
}

.liked-songs-playlist h1 {
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: white;
}

.liked-songs-playlist .liked-songs-count {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}

.playlists .result-card {
  margin-right: 20px;
}

.playlists .result-card:last-child {
  margin-right: 0;
}
</style>