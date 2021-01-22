<template>
  <div class="search-artists">
    <h2>All artists for "{{ query }}"</h2>
    <div class="artists">
      <ResultCard
        v-for="artist in artists"
        :key="artist.id"
        type="artist"
        :result="artist"
        @click="onCardClick(artist)" />
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

  computed: {
    query() {
      return this.$route.params.query;
    },

    artists() {
      return this.$store.getters.searchArtists;
    }
  },

  methods: {
    onCardClick(artist) {
      this.$router.push({ name: 'Artist', params: { id: artist.id } });
    }
  },

  created() {
    this.$store.dispatch('searchArtists', this.query);
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