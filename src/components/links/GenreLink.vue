<template>
  <div class="genre-link" :style="linkStyle" @click="onLinkClick">
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name: "GenreLink",

  props: {
    name: String,
    text: String,
    topGenre: Boolean
  },

  data() {
    return {
      color: { r: 0, g: 0, b: 0 }
    }
  },

  computed: {
    link() {
      return `genres/${this.name}`;
    },

    linkStyle() {
      return {
        width: this.topGenre ? '400px' : '200px',
        height: this.topGenre ? '225px' : '200px',
        flexShrink: this.topGenre ? '0' : 'unset',
        background: `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`,
      };
    }
  },

  methods: {
    onLinkClick() {
      this.$router.push(this.link);
    }
  },

  created() {
    this.color.r = 125 + Math.floor(Math.random() * (200 - 125 + 1));
    this.color.g = 125 + Math.floor(Math.random() * (150 - 125 + 1));
    this.color.b = 125 + Math.floor(Math.random() * (255 - 125 + 1));
  }
}
</script>

<style scoped>
.genre-link {
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;

  background: linear-gradient(45deg, rgba(0,0,0,0.75) 0%, rgba(106,106,201,0) 100%);
}

.genre-link h3 {
  font-size: 16pt;
  font-weight: bold;
  color: white;
}
</style>