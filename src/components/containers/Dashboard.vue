<template>
  <div class="dashboard">
    <h2>Recently Played</h2>
    <div class="flex-row">
      <GroupLink
        v-for="group in recentlyPlayedGroup"
        :key="group.id"
        :group="group" />
    </div>
  </div>
</template>

<script>
import GroupLink from "@/components/GroupLink";

export default {
  name: 'Dashboard',
  components: {
    GroupLink,
  },

  computed: {
    recentlyPlayedGroup() {
      return this.$store.getters.recentlyPlayedGroups;
    }
  }
}
</script>

<style>
.dashboard {
  display: flex;
  margin-top: 50px;
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