import Vue from 'vue';
import Vuex from 'vuex';
import SpotifyAPI from "spotify-web-api-js";

Vue.use(Vuex);

const spotifyAPI = new SpotifyAPI();
const store = new Vuex.Store({
  state: {
    user: null,
    playing: false,
    playedTrack: null,
    savedTracks: null,
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

    playedTrack(state) {
      return state.playedTrack;
    },

    savedTracks(state) {
      return state.savedTracks;
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

    setPlayedTrack(state, track) {
      state.playedTrack = track;
    },

    setSavedTracks(state, savedTracks) {
      state.savedTracks = savedTracks;
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
  },

  actions: {
    initToken(_, token) {
      console.log(token);
      spotifyAPI.setAccessToken(token);
    },

    loadUser({commit}) {
      spotifyAPI.getMe().then(user => commit('setUser', user));
    },

    loadSavedTracks(context) {

      spotifyAPI.getMySavedTracks().then(data => {
        const savedTracks = { tracks: data, name: 'Liked Songs' };
        savedTracks.owner = context.getters.user;


        context.commit('setSavedTracks', savedTracks);
      });
    },

    loadUserPlaylists({commit}) {
      spotifyAPI.getUserPlaylists().then(playlists => {
        commit('setPlaylists', playlists.items);
      });
    },

    loadCurrentPlayingTrack({commit}) {
      spotifyAPI.getMyCurrentPlayingTrack().then(data => {
        const track = data ? data.item : null;

        commit('setPlayedTrack', track);
      })
    },

    loadPlaylist(_, playlistId) {
      return new Promise((resolve, reject) => {
        spotifyAPI.getPlaylist(playlistId)
            .then(playlist => resolve(playlist))
            .catch(error => reject(error));
      })
    }
  }
});

export default store;