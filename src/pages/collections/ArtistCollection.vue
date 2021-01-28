<template>
  <div class="artist-collection">
    <h2>Artists</h2>
    <div class="artists">
      <ResultCard
          v-for="artist in artists"
          :key="artist.id"
          type="artist"
          :result="artist"
          @click="onResultCardClick(artist)"/>
    </div>
  </div>
</template>

<script>
import ResultCard from "@/components/cards/ResultCard";

export default {
  name: "ArtistCollection",
  components: {
    ResultCard
  },

  computed: {
    artists() {
      return this.$store.getters['artists'];
    }
  },

  methods: {
    onResultCardClick(artist) {
      this.$router.push({ name: 'Artist', params: { id: artist.id } });
    }
  },

  created() {
    this.$store.dispatch('loadArtists');
  }
}
</script>

<style scoped>
.artist-collection {
  margin: 80px 40px 0;
}

.artist-collection h2 {
  font-weight: bold;
  color: white;
}

.artist-collection .artists {
  display: flex;
  margin-top: 15px;
}

.artists .result-card {
  margin-right: 20px;
}

.artists .result-card:last-child {
  margin-right: 0;
}
</style>