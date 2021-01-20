<template>
  <div v-if="resultCount > 0" ref="search" class="search">
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
    <div v-if="artists.length > 0" class="artist-row">
      <h2>Artists</h2>
      <div class="artists">
        <ResultCard v-for="artist in artists" :key="artist.id" type="artist" :result="artist" />
      </div>
    </div>
    <div class="albums">

    </div>
    <div class="playlists">

    </div>
  </div>
</template>

<script>
import Track from "@/components/Track";
import ResultCard from "@/components/cards/ResultCard";

export default {
  name: "Search",
  components: {
    ResultCard,
    Track
  },

  data() {
    return {
      cardsInRow: 8
    }
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
    },

    artists() {
      return this.results.artists.slice(0, this.cardsInRow);
    }
  },

  methods: {
    updateCardCount() {
      if (this.$refs.search) {
        this.cardsInRow = Math.round((this.$refs.search.clientWidth - 25) / 205);
      }
    }
  },

  created() {
    this.$store.dispatch('search', this.$route.params.query);
  },

  mounted() {
    this.$nextTick(window.addEventListener('resize', this.updateCardCount));
  }
}
</script>

<style scoped>
.search {
  margin-top: 80px;
  text-align: left;
  margin-bottom: 15px;
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

.search .artist-row {
  margin-top: 30px;
}

.artist-row h2 {
  margin-bottom: 15px;
  font-weight: bolder;
  color: white;
}

.artist-row .artists {
  display: flex;
}

.artists .result-card {
  margin-right: 25px;
}

.artists .result-card:last-child {
  margin-right: 0;
}
</style>