<template>
  <div class="search-tracks">
    <h2>All songs for "{{ query }}"</h2>
    <div class="track-table">
      <div class="table-row header-row">
        <div class="table-cell table-header column-number">#</div>
        <div class="table-cell table-header column-title">Title</div>
        <div class="table-cell table-header column-album">Album</div>
        <div class="table-cell table-header column-options"><i class="far fa-clock"></i></div>
      </div>
      <div
          v-for="(track, index) in tracks"
          :key="track.id"
          class="table-row body-row"
          :class="getTrackClass(index)"
          @click="onTrackClick(index)"
          @mouseenter="onMouseEnter(index)"
          @mouseleave="onMouseLeave"
          v-click-outside="outsideTableClick">
        <div class="table-cell column-number">
          <i v-if="shouldShowPlayIcon(index)" class="fas fa-play fa-sm"></i>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div class="table-cell column-title">
          <img v-if="getAlbumImage(track)" :src="getAlbumImage(track).url" alt="image of the track" />
          <div class="track-details">
            <span class="track-title">{{ track.name }}</span>
            <span class="track-artists" v-html="getArtistLinks(track)"></span>
          </div>
        </div>
        <div class="table-cell column-album">
          <router-link :to="getAlbumRoute(track)">{{ track.album.name }}</router-link>
        </div>
        <div class="table-cell column-options">
          <i class="far fa-heart"></i>
          <span class="track-length">{{ getTrackLength(track) }}</span>
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchTracks",

  data() {
    return {
      hoveredTrack: null,
      selectedTrack: null,
    }
  },

  computed: {
    query() {
      return this.$route.params.query;
    },

    tracks() {
      return this.$store.getters['searchTracks'];
    },

    outsideTableClick() {
      return { exclude: '.body-row', handler: this.onOutsideClick };
    }
  },

  methods: {
    shouldShowPlayIcon(index) {
      return this.hoveredTrack === index || this.selectedTrack === index;
    },

    getAlbumImage(track) {
      return track.album.images.length > 0 ? track.album.images[0] : null;
    },

    getArtistLinks(track) {
      const html = track.artists.reduce((result, artist) => result + `<a href="artists/${artist.id}">${artist.name}</a>, `, '');

      return html.substr(0, html.length - 2);
    },

    getAlbumRoute(track) {
      return { name: 'Album', params: { id: track.album.id }};
    },

    getTrackLength(track) {
      const duration = this.$utils.parseTime(track.duration);
      const seconds = this.$utils.formatNumber(duration.seconds, '.', '', 2);

      return `${duration.minutes}:${seconds}`;
    },

    getTrackClass(index) {
      return {
        active: this.selectedTrack === index
      }
    },

    onTrackClick(index) {
      this.selectedTrack = index;
    },

    onOutsideClick() {
      this.selectedTrack = null;
    },

    onMouseEnter(index) {
      this.hoveredTrack = index;
    },

    onMouseLeave() {
      this.hoveredTrack = null;
    }
  },

  created() {
    this.$store.dispatch('searchTracks', this.query);
  }
}
</script>

<style>
.search-tracks {
  margin: 80px 40px 15px;
  text-align: left;
}

.search-tracks h2 {
  color: white;
}

.search-tracks .track-table {
  width: 100%;
  margin-top: 15px;
}

.track-table .table-row {
  display: flex;
}

.table-row.header-row {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-row.body-row {
  line-height: 60px;
  border-radius: 5px;
}

.table-row.body-row.active {
  background-color: #2f2f2f !important;
}

.table-row.body-row:hover {
  background-color: #1f1f1f;
}

.table-row .table-cell {
  display: flex;
  align-items: center;
  cursor: default;
  color: gray;
}

.table-cell.table-header {
  font-size: 10pt;
  font-weight: bold;
  text-transform: uppercase;
}

.table-cell.column-number {
  width: 3%;
  padding-right: 15px;
  justify-content: flex-end;
}

.table-cell.column-title {
  width: 50%
}

.table-cell.column-album {
  width: 37%
}

.table-cell.column-options {
  width: 10%;
  justify-content: center;
}

.table-cell.column-options .track-length {
  font-size: 10pt;
  font-weight: bold;
}

.table-cell.column-options > i:hover {
  color: white;
}

.table-row.body-row .table-cell.column-title > img {
  width: 48px;
  height: 48px;
}

.table-row.body-row .table-cell.column-title .track-details {
  display: flex;
  margin-left: 15px;
  flex-direction: column;
}

.table-row.body-row .table-cell.column-title .track-details > * {
  line-height: 24px;
}

.table-row.body-row .table-cell.column-title .track-title {
  color: white;
}

.table-row.body-row .table-cell.column-title .track-artists > a {
  font-size: 10pt;
  color: gray
}

.table-row.body-row .table-cell.column-album > a {
  text-decoration: none;
  color: gray
}

.table-row.body-row .table-cell.column-album > a:hover {
  text-decoration: underline;
}

.table-row.body-row .table-cell.column-title .track-artists > a:hover {
  color: white;
}

.table-row.body-row:hover .table-cell,
.table-row.body-row:hover .table-cell a,
.table-row.body-row.active .table-cell,
.table-row.body-row.active .table-cell a{
  color: white;
}

.table-row.body-row .table-cell.column-options > i {
  margin: 0 15px;
  visibility: hidden;
  color: gray;
}

.table-row.body-row:hover .table-cell.column-options > i {
  visibility: visible;
}
</style>