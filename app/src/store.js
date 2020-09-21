import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    playing: false,
    playlists: [],
    scrollPosition: {
      x: 0,
      y: 0,
      z: 0
    }
  },

  getters: {
    user(state) {
      return state.user;
    },

    playing(state) {
      return state.playing;
    },

    playlists(state) {
      return state.playlists;
    },

    scrollPosition(state) {
      return state.scrollPosition;
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setPlaying(state, playing) {
      state.playing = playing;
    },

    setPlaylists(state, playlists) {
      state.playlists = [];

      playlists.forEach(playlist => state.playlists.push(playlist));
    },

    setScrollPosition(state, position) {
      state.scrollPosition = position;
    },

    resetScrollPosition(state) {
      state.scrollPosition = {
        x: 0,
        y: 0,
        z: 0
      };
    }
  }
});

export default store;