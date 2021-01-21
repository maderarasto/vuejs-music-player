<template>
  <nav :class="navClasses">
    <div class="nav-left">
      <SearchInput v-if="shouldSearchShow" @input="onSearchInput"/>
    </div>
    <div class="nav-right">
      <UserDropdown />
    </div>
  </nav>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import UserDropdown from '@/components/UserDropdown';

export default {
  name: 'PlayerNav',
  components: {
    SearchInput,
    UserDropdown
  },

  props: {
    showOverlay: Boolean
  },

  computed: {
    shouldSearchShow() {
      const routes = [
        'Browse',
        'Search',
        'SearchTracks'
      ];

      return routes.includes(this.$route.name);
    },

    navClasses() {
      return ['player-nav', this.showOverlay ? 'nav-overlay' : ''];
    }
  },

  methods: {
    onSearchInput(value) {
      this.$store.commit('setSearchResults', null);

      if (value === '')
        this.$router.push({ name: 'Browse' });
      else
        this.$router.push({ name: 'Search', params: { query: value} });
    }
  }
}
</script>

<style>
.player-nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  width: 100%;
  height: 60px;

  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #303030; */
}

.player-nav.nav-overlay {
  background-color: #040404;
}

.nav-left {
  padding: 0 10px 0 30px;
}

.nav-right {
  padding: 0 30px 0 10px;
}
</style>