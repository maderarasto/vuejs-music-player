<template>
  <div class="search-artists">
    <h2>All {{ this.type }}s for "{{ query }}"</h2>
    <div class="artists">
      <ResultCard
        v-for="result in results"
        :key="result.id"
        :type="type"
        :result="result"
        @click="onCardClick(result)" />
    </div>
  </div>
</template>

<script>
import ResultCard from "@/components/cards/ResultCard";

export default {
  name: "SearchArtists",
  components: {
    ResultCard
  },

  props: {
    type: String
  },

  computed: {
    query() {
      return this.$route.params.query;
    },

    results() {
      let data = [];

      if (this.type === 'artist') data = this.$store.getters['searchArtists'];
      if (this.type === 'album') data = this.$store.getters['searchAlbums'];
      if (this.type === 'playlist') data = this.$store.getters['searchPlaylists'];

      return data;
    }
  },

  methods: {
    onCardClick(result) {
      let routeName = '';

      if (this.type === 'artist') routeName = 'Artist';
      if (this.type === 'album') routeName = 'Album';
      if (this.type === 'playlist') routeName = 'Playlist';

      this.$router.push({ name: routeName, params: { id: result.id } });
    }
  },

  created() {
    if (this.type === 'artist')
      this.$store.dispatch('searchArtists', this.query);
    else if (this.type === 'album')
      this.$store.dispatch('searchAlbums', this.query);
    else if (this.type === 'playlist')
      this.$store.dispatch('searchPlaylists', this.query);
  }
}
</script>

<style scoped>
.search-artists {
  margin-top: 80px;
  text-align: left;
  margin-bottom: 15px;
}

.search-artists h2 {
  color: white;
}

.search-artists .artists {
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
}

.artists .result-card {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>