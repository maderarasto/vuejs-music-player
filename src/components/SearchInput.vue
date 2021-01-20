<template>
  <div v-if="shouldShow" class="search-input">
    <i class="fas fa-search"></i>
    <input ref="search" type="text" placeholder="Search for Songs, Artists or Genres" autofocus />
  </div>
</template>

<script>
export default {
    name: "SearchInput",

    computed: {
      shouldShow() {
        return this.$route.name === 'Search';
      }
    },

  mounted() {
      this.$refs.search.focus();
  }
}
</script>

<style scoped>
.search-input {
  width: 300px;
  height: 40px;
  border-radius: 50px;
  background-color: white;
}

.search-input i {
  width: 15%;
  color: #8d8d8d;
}

.search-input input {
  width: 75%;
  height: 100%;
  border: 0;
}

.search-input input:focus {
  outline: none;
}
</style>