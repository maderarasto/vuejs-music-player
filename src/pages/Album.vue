<template>
  <div class="album" >
    <AlbumHeader ref="header" @load="onLoadHeader" />
    <div class="album-body" >
      <div class="gradient-background" :style="gradientBackgroundStyle"></div>
      <div class="foreground">
        <AlbumNav />
        <div class="album-content">
          <div class="table-tracks">
            <div class="table-row header-row">
              <div class="table-cell table-header column-number">#</div>
              <div class="table-cell table-header column-album">Album</div>
              <div class="table-cell table-header column-options"><i class="far fa-clock"></i></div>
            </div>
            <div
              v-for="(track, trackIndex) in albumTracks"
              :key="track.id"
              class="table-row body-row"
              :class="getTrackClass(trackIndex)"
              @click="onTrackClick(trackIndex)"
              @mouseenter="onMouseEnter(trackIndex)"
              @mouseleave="onMouseLeave"
              v-click-outside="outsideTableClick">
              <div class="table-cell column-number">
                <i v-if="shouldShowPlayIcon(trackIndex)" class="fas fa-play fa-sm"></i>
                <span v-else>{{ trackIndex + 1 }}</span>
              </div>
              <div class="table-cell column-title">
                <div class="track-details">
                  <span class="track-title">{{ track.name }}</span>
                  <span class="track-artists" v-html="getArtistLinks(track)"></span>
                </div>
              </div>
              <div class="table-cell column-options">
                <i class="far fa-heart"></i>
                <span class="track-length">{{ getTrackLength(track) }}</span>
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
          <div class="section-more">
            <h2>More by {{ album.artists[0].name }}</h2>
            <div class="albums">
              <ResultCard v-for="album in otherAlbums" :key="album.id" type="album" :result="album" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumHeader from "@/components/album/AlbumHeader";
import AlbumNav from "@/components/album/AlbumNav";
import ResultCard from "@/components/cards/ResultCard";

export default {
  name: "Album",
  components: {
    AlbumHeader,
    AlbumNav,
    ResultCard
  },

  data() {
    return {
      gradientColor: { r: 0, g: 0, b: 0 },

      selectedTrack: null,
      hoveredTrack: null,
      otherAlbums: []
    }
  },

  computed: {
    album() {
      return this.$store.getters['album'];
    },

    albumArtist() {
      return this.album ? this.album.artists[0] : null
    },

    albumTracks() {
      return this.album ? this.album.tracks.items : [];
    },

    outsideTableClick() {
      return { exclude: '.body-row', handler: this.onOutsideClick };
    },

    gradientBackgroundStyle() {
      return {
        background: `linear-gradient(${this.getFormattedColor(this.gradientColor)}, #191919 80%)`
      }
    }
  },

  watch: {
    albumArtist() {
      if (this.albumArtist === null) return;

      this.$store.dispatch('loadArtistAlbums', this.albumArtist.id)
        .then(data => {
          this.otherAlbums = data.items.sort(() => Math.random() - 0.5).splice(0, 5);
        })
        .catch(error => console.error(error));
    }
  },

  methods: {
    shouldShowPlayIcon(trackIndex) {
      return this.selectedTrack === trackIndex || this.hoveredTrack === trackIndex;
    },

    getArtistLinks(track) {
      const html = track.artists.reduce((result, artist) => result + `<a href="artists/${artist.id}">${artist.name}</a>, `, '');

      return html.substr(0, html.length - 2);
    },

    getTrackLength(track) {
      const duration = this.$utils.parseTime(track.duration_ms);
      const seconds = this.$utils.formatNumber(duration.seconds, '.', '', 2);

      return `${duration.minutes}:${seconds}`;
    },

    getFormattedColor(color) {
      return `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`;
    },

    getTrackClass(trackIndex) {
      return {
        active: this.selectedTrack === trackIndex
      }
    },

    onLoadHeader() {
      this.$utils.getImageMainColor(this.$refs.header.$refs.albumImage)
          .then(color => this.gradientColor = { r: color[0], g: color[1], b: color[2]});
    },

    onTrackClick(trackIndex) {
      this.selectedTrack = trackIndex;
    },

    onOutsideClick() {
      this.selectedTrack = null;
    },

    onMouseEnter(trackIndex) {
      this.hoveredTrack = trackIndex
    },

    onMouseLeave() {
      this.hoveredTrack = null
    }
  },

  created() {
    this.$store.dispatch('loadAlbum', this.$route.params.id);
  }
}
</script>

<style>
.album {
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  text-align: left;
}

.album .album-body {
  position: relative;
  width: 100%;

  color: white;
}

.album-body .gradient-background {
  position: absolute;
  width: 100%;
  height: 300px;
  z-index: 1;
}

.album-body .foreground {
  position: absolute;
  width: 100%;
  z-index: 2;
}

.album-body .album-content {
  padding: 15px 40px;
}

.album-body .album-content .table-tracks {
  width: 100%;
}

.album-content .table-tracks .table-row {
  display: flex;
  padding-right: 10px;
}

.table-tracks .table-row.body-row {
  line-height: 50px;
  border-radius: 5px;
}

.table-tracks .table-row.body-row:hover {
  background-color: #2f2f2f;
}

.table-tracks .table-row.body-row.active {
  background-color: #4f4f4f;
}

.table-tracks .table-row.header-row {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-tracks .table-row .table-cell {
  display: flex;
  align-items: center;
  cursor: default;
  color: gray;
}

.table-tracks .table-row .table-cell.table-header {
  font-size: 10pt;
  font-weight: bold;
  text-transform: uppercase;
}

.table-tracks .table-row .table-cell.column-number {
  width: 3%;
  padding-right: 15px;
  justify-content: flex-end;
}

.table-tracks .table-row .table-cell.column-title {
  width: 87%;
}

.table-tracks .table-row .table-cell.column-options {
  width: 10%;
  justify-content: center;
}

.table-tracks .table-row .table-cell.column-number {
  width: 3%;
  padding-right: 20px;
  justify-content: flex-end;
}

.table-tracks .table-row.body-row .table-cell.column-title {
  color: white;
}

.table-tracks .table-row.body-row .table-cell.column-title .track-details {
  display: flex;
  flex-direction: column;
}

.table-tracks .table-row.body-row .table-cell.column-title .track-details > * {
  line-height: 20px;
}

.table-tracks .table-row.body-row .table-cell.column-title .track-artists > a {
  font-size: 10pt;
  text-decoration: none;
  color: gray
}

.table-tracks .table-row.body-row .table-cell.column-title .track-artists > a:hover {
  text-decoration: underline;
  color: white;
}

.table-tracks .table-row.body-row .table-cell.column-options > i {
  margin: 0 15px;
  visibility: hidden;
  color: gray;
}

.table-tracks .table-row.body-row .table-cell.column-options > i:hover {
  color: white
}

.table-tracks .table-row.body-row:hover .table-cell.column-options > i,
.table-tracks .table-row.body-row.active .table-cell.column-options > i{
  visibility: visible;
}

.table-tracks .table-row.body-row:hover .table-cell,
.table-tracks .table-row.body-row:hover .table-cell a,
.table-tracks .table-row.body-row.active .table-cell,
.table-tracks .table-row.body-row.active .table-cell a {
  color: white !important;
}

.album-content .section-more {
  margin-top: 30px;
}

.album-content .section-more .albums {
  display: flex;
  margin-top: 15px;
}

.album-content .section-more .albums .result-card {
  margin-right: 20px;
}
</style>