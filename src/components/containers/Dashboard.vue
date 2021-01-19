<template>
  <div ref="dashboard" class="dashboard">
    <h2>Recently Played</h2>
    <div class="flex-row">
      <GroupLink
        v-for="group in recentlyPlayedGroups"
        :key="group.id"
        :group="group" />
    </div>
    <h2>Rock</h2>
    <div class="flex-row">
      <GroupLink
        v-for="group in recommendedRockGroups"
        :key="group.id"
        :group="group" />
    </div>
    <h2>Pop</h2>
    <div class="flex-row">
      <GroupLink
          v-for="group in recommendedPopGroups"
          :key="group.id"
          :group="group" />
    </div>
  </div>
</template>

<script>
import GroupLink from "@/components/links/GroupLink";

export default {
  name: 'Dashboard',
  components: {
    GroupLink,
  },

  data() {
      return {
        cardsInRow: 0,
      }
  },

  computed: {
    recentlyPlayedGroups() {
      return this.$store.getters.recentlyPlayedGroups.slice(0, this.cardsInRow);
    },

    recommendedRockGroups() {
      return this.$store.getters.recommendedRockGroups.slice(0, this.cardsInRow);
    },

    recommendedPopGroups() {
      return this.$store.getters.recommendedPopGroups.slice(0, this.cardsInRow);
    }
  },

  methods: {
    updateCardCount() {
      if (this.$refs.dashboard) {
        this.cardsInRow = Math.floor(this.$refs.dashboard.scrollWidth / 200);
      }
    }
  },

  created() {
    this.$store.dispatch('loadRecentlyPlayedGroups');
    this.$store.dispatch('loadRecommendedRockGroups', 7);
    this.$store.dispatch('loadRecommendedPopGroups', 7);
  },

  mounted() {
    this.updateCardCount();

    this.$nextTick(window.addEventListener('resize', this.updateCardCount));
  }
}
</script>

<style>
.dashboard {
  display: flex;
  margin: 50px 0 30px;
  padding: 0 30px;

  flex-direction: column;
  justify-content: flex-start;
}

.dashboard h2 {
  width: 100%;
  padding: 20px 0;

  text-align: left;
  font-weight: 700;
  color: white;
}

.dashboard .flex-row {
  display: flex;
  width: 100%;
}

.dashboard .flex-row .group-link {
  margin-right: 30px;
}
</style>