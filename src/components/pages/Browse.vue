<template>
  <div class="browse">
    <FloatButton v-if="shouldShowLeftArrow" class="left-arrow" @click="onArrowClick('left')">
      <i class="fas fa-angle-left fa-2x"></i>
    </FloatButton>
    <div ref="topGenres" class="genre-row">
      <h2>Featured genres</h2>
      <div class="genres top-genres" :style="topGenresStyle">
        <GenreLink name="rock-page" text="Rock" top-genre />
        <GenreLink name="pop-page" text="Pop" top-genre />
        <GenreLink name="edm_dance-page" text="Dance/Electronic" top-genre />
      </div>
    </div>
    <FloatButton v-if="shouldShowRightArrow" class="right-arrow" @click="onArrowClick('right')">
      <i class="fas fa-angle-right fa-2x"></i>
    </FloatButton>
    <div class="genre-row" style="overflow: unset">
      <h2>Browse all</h2>
      <div class="genres all-genres">
        <GenreLink v-for="category in categories" :key="category.id" :name="category.id" :text="category.name" />
      </div>
    </div>
  </div>
</template>

<script>
import GenreLink from "@/components/links/GenreLink";
import FloatButton from "@/components/FloatButton";

export default {
  name: 'Browse',
  components: {
    FloatButton,
    GenreLink
  },

  data() {
    return {
      mounted: false,
      topGenresEnd: false,
      movedTopGenres: 0
    }
  },

  computed: {
    categories() {
      return this.$store.getters['categories'].filter(category => !['rock', 'pop', 'edm_dance'].includes(category.id));
    },

    shouldShowLeftArrow() {
      return this.movedTopGenres < 0;
    },

    shouldShowRightArrow() {
      return !this.topGenresEnd;
    },

    topGenresStyle() {
      return {
        left: `${this.movedTopGenres}px`
      };
    }
  },

  methods: {
    onArrowClick(type) {
      const direction = type === 'left' ? 1 : type === 'right' ? -1 : 0;
      this.movedTopGenres += direction * 310;
    },

    onResize() {
      this.movedTopGenres = 0;
      this.topGenresEnd = this.$refs.topGenres.scrollWidth <= this.$refs.topGenres.clientWidth;
    }
  },

  mounted() {
    window.addEventListener('resize', this.onResize);
    this.mounted = true;
    this.topGenresEnd = this.$refs.topGenres.scrollWidth <= this.$refs.topGenres.clientWidth;
  },

  updated() {
    this.topGenresEnd = this.mounted ? this.$refs.topGenres.clientWidth === this.$refs.topGenres.scrollWidth : false
  }
}
</script>

<style>
.browse {
  position: relative;
  margin-top: 80px;
  text-align: left;
}

.browse .float-button {
  position: absolute;
  top: 125px;
  z-index: 2;
}

.float-button.left-arrow {
  left: -25px;
}

.float-button.right-arrow {
  right: -25px;
}

.browse .genre-row {
  position: relative;
  height: 315px;
  margin: 15px 0;
  overflow: hidden;
}

.genre-row h2 {
  margin: 25px 0 10px;
  font-weight: bolder;
  color: white;
}

.genre-row .genres {
  display: flex;
}

.genre-row .genres.top-genres {
  position: absolute;
}

.genres .genre-link {
  margin-right: 20px;
  margin-bottom: 20px;
}

.genres .genre-link:last-child {
  margin-right: 0;
}

.genres.all-genres {
  flex-wrap: wrap;
}
</style>