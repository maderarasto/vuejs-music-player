<template>
  <div v-if="resultCount > 0" ref="search" class="search">
    <div class="top-results">

      <div class="section top-playlist">
        <div class="header">
          <h2>Top result</h2>
        </div>
        <div class="playlist-card">
          <img v-if="topPlaylist" :src="topPlaylist.images[0].url" alt="top playlist image" />
          <h1 :title="topPlaylist.name">{{ topPlaylist.name }}</h1>
          <span class="badge">Playlist</span>
        </div>
      </div>
      <div class="section tracks">
        <div class="header">
          <h2>Songs</h2>
          <router-link v-if="results.tracks.length >= 4" :to="getSearchRoute('track')" class="search-all">See All</router-link>
        </div>
        <div class="song-list">
          <Track v-for="track in tracks" :key="track.id" :track="track" />
        </div>
      </div>
    </div>
    <div v-if="artists.length > 0" class="section row artist-row">
      <div class="header">
        <h2>Artists</h2>
        <router-link v-if="results.artists.length >= this.cardsInRow" :to="getSearchRoute('artist')" class="search-all">See All</router-link>
      </div>
      <div class="artists">
        <ResultCard
          v-for="artist in artists"
          :key="artist.id" type="artist"
          :result="artist"
          @click="onCardClick('artist', artist)" />
      </div>
    </div>
    <div class="section row album-row">
      <div class="header">
        <h2>Albums</h2>
        <router-link v-if="results.albums.length >= this.cardsInRow" :to="getSearchRoute('album')" class="search-all">See All</router-link>
      </div>
      <div class="albums">
        <ResultCard
          v-for="album in albums"
          :key="album.id"
          type="album"
          :result="album"
          @click="onCardClick('album', album)" />
      </div>
    </div>
    <div class="section row playlist-row">
      <div class="header">
        <h2>Playlists</h2>
        <router-link v-if="results.playlists.length >= this.cardsInRow" :to="getSearchRoute('playlist')" class="search-all">See All</router-link>
      </div>
      <div class="playlists">
        <ResultCard
          v-for="playlist in playlists"
          :key="playlist.id"
          type="playlist"
          :result="playlist"
          @click="onCardClick('playlist', playlist)" />
      </div>
    </div>
  </div>
</template>

<script>
import Track from "@/components/tracks/Track";
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
    },

    albums() {
      return this.results.albums.slice(0, this.cardsInRow);
    },

    playlists() {
      return this.results.playlists.slice(0, this.cardsInRow);
    }
  },

  methods: {
    getSearchRoute(resourceType) {
      const query = this.$route.params.query;
      let routeName = 'Search';

      if (resourceType === 'track') routeName += 'Tracks';
      if (resourceType === 'artist') routeName += 'Artists';
      if (resourceType === 'album') routeName += 'Albums';
      if (resourceType === 'playlist') routeName += 'Playlists';

      return { name: routeName, params: { query: query } };
    },

    updateCardCount() {
      console.log(this.$refs);
      if (this.$refs.search) {
        this.cardsInRow = Math.round((this.$refs.search.clientWidth - 25) / 205);
      }
    },

    onCardClick(type, result) {
      let routeName = '';

      if (type === 'artist') routeName = 'Artist';
      if (type === 'album') routeName = 'Album';
      if (type === 'playlist') routeName = 'Playlist';

      this.$router.push({ name: routeName, params: { id: result.id } });
    }
  },

  created() {
    this.$store.dispatch('search', this.$route.params.query);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.updateCardCount)
      this.updateCardCount();
    });
  }
}
</script>

<style scoped>
.search {
  margin-top: 80px;
  text-align: left;
  margin-bottom: 15px;
}

.section .header {
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  align-items: baseline;
}

.header .search-all {
  font-size: 10pt;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: gray;
}

.header .search-all:hover {
  text-decoration: underline;
}

.search .top-results {
  display: flex;
  width: 100%;
  height: 300px;
  text-align: left;
}

.top-results h2 {
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

.search .row {
  margin-top: 30px;
}

.row h2 {
  margin-bottom: 15px;
  font-weight: bolder;
  color: white;
}

.row .artists, .row .albums, .row .playlists {
  display: flex;
}

.row .result-card {
  margin-right: 25px;
}

.row .result-card:last-child {
  margin-right: 0;
}
</style>