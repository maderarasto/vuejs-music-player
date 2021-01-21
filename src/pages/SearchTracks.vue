<template>
  <div class="search-tracks">
    <h2>All songs for "{{ query }}"</h2>
        <TrackTable :tracks="tracks" />

  </div>
</template>

<script>
import TrackTable from "@/components/tracks/TrackTable";
export default {
  name: "SearchTracks",
  components: {TrackTable},

  computed: {
    query() {
      return this.$route.params.query;
    },

    tracks() {
      return this.$store.getters['searchTracks'];
    }
  },

  created() {
    this.$store.dispatch('searchTracks', this.query);
  }
}
</script>

<style>
  .search-tracks {
    margin-top: 80px;
    text-align: left;
    margin-bottom: 15px;
  }

  .search-tracks h2 {
    color: white;
  }

  .search-tracks .track-table {
    width: 100%;
    margin-top: 15px;
  }
</style>