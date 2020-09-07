import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    playlists: []
  },

  getters: {
    user(state) {
      return state.user;
    },

    playlists(state) {
      return state.playlists;
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setPlaylists(state, playlists) {
      state.playlists = [];

      playlists.forEach(playlist => state.playlists.push(playlist));
    }
  }
});

export default store;