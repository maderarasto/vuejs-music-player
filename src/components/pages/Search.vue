<template>
  <div v-if="resultCount > 0" class="search">
    <div class="top-results">

      <div class="top-playlist">
        <h2>Top result</h2>
        <div class="playlist-card">
          <img v-if="topPlaylist" :src="topPlaylist.images[0].url" alt="top playlist image" />
          <h1 :title="topPlaylist.name">{{ topPlaylist.name }}</h1>
          <span class="badge">Playlist</span>
        </div>
      </div>
      <div class="tracks">
        <h2>Songs</h2>
        <div class="song-list">
          <Track v-for="track in tracks" :key="track.id" :track="track" />
        </div>
      </div>
    </div>
    <div class="artists">
      <h2>Artists</h2>
    </div>
    <div class="albums">

    </div>
    <div class="playlists">

    </div>
  </div>
</template>

<script>
import Track from "@/components/Track";

export default {
  name: "Search",
  components: {
    Track
  },

  computed: {
    results() {
      return this.$store.getters['searchResults'];
    },

    resultCount() {
        return [...this.results.albums, ...this.results.artists, ...this.results.playlists, ...this.results.tracks].length;
    },

    topPlaylist() {
      return this.results.playlists.length > 0 ? this.results.playlists[0] : null;
    },

    tracks() {
      return this.results.tracks.slice(0, 4);
    }
  },

  created() {
    this.$store.dispatch('search', this.$route.params.query);
  }
}
</script>

<style scoped>
.search {
  margin-top: 80px;
  text-align: left;
}

.search .top-results {
  display: flex;
  width: 100%;
  height: 300px;
  text-align: left;
}

.top-results h2 {
  margin-bottom: 15px;
  font-weight: bolder;
  color: white;
}

.search .top-playlist {
  width: 400px;
  height: 100%;
}

.top-playlist .playlist-card {
  width: 100%;
  height: 250px;
  border-radius: 5px;
  cursor: pointer;

  background-color: #1f1f1f;
}

.playlist-card {
  padding: 20px;
  box-sizing: border-box;
}

.playlist-card img {
  width: 100px;
  height: 100px;
  border-radius: 15px;
}

.playlist-card h1 {
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
}

.playlist-card .badge {
  padding: 2px 10px;
  border-radius: 50px;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 10pt;
  color: white;

  background-color: #0f0f0f;
}

.playlist-card:hover {
  background-color: #2f2f2f;
}

.search .tracks {
  height: 100%;
  margin-left: 50px;
  flex: 1;
}

.search .artists {
  margin-top: 30px;
}

.artists h2 {
  margin-bottom: 15px;
  font-weight: bolder;
  color: white;
}
</style>