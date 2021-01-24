<template>
  <div class="album-collection">
    <h2>Albums</h2>
    <div class="albums">
      <ResultCard
          v-for="album in albums"
          :key="album.id"
          type="album"
          :result="album"
          @click="onResultCardClick(album)"/>
    </div>
  </div>
</template>

<script>
import ResultCard from "@/components/cards/ResultCard";

export default {
  name: "AlbumCollection",
  components: {
    ResultCard
  },

  computed: {
    albums() {
      return this.$store.getters['albums'].map(album => album.album);
    }
  },

  methods: {
    onResultCardClick(album) {
      this.$router.push({ name: 'Album', params: { id: album.id } });
    }
  },

  created() {
    this.$store.dispatch('loadAlbums');
  }
}
</script>

<style scoped>
.album-collection h2 {
  font-weight: bold;
  color: white;
}

.album-collection .albums {
  display: flex;
  margin-top: 15px;
}

.albums .result-card {
  margin-right: 20px;
}

.albums .result-card:last-child {
  margin-right: 0;
}
</style>