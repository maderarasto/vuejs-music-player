import Vue from 'vue';
import Vuex from 'vuex';

import SpotifyAPI from "spotify-web-api-js";
import Utils from '@/utils';

Vue.use(Vuex);

const spotifyAPI = new SpotifyAPI();
const store = new Vuex.Store({
  state: {
    user: null,
    playing: false,
    playedTrack: null,
    savedTracks: null,
    recentlyPlayedGroups: [],
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

    recentlyPlayedGroups(state) {
      return state.recentlyPlayedGroups;
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

    addRecentlyPlayedGroup(state, group) {
      state.recentlyPlayedGroups.push(group);
    },

    clearRecentlyPlayedGroup(state) {
      state.recentlyPlayedGroups = [];
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

    loadRecentlyPlayedGroups({commit}) {
      spotifyAPI.getMyRecentlyPlayedTracks({ limit: 50 }).then(data => {
        const distinctGroupIds = [];

        data.items.filter(track => track.context).forEach(track => {
          const context = track.context.uri.split(':');
          const contextType = context[1];
          const contextId = context[2];

          if (!distinctGroupIds.includes(contextId))
            distinctGroupIds.push(contextId);
          else
            return;

          Utils.getResource(spotifyAPI, contextType, contextId)
              .then(group => commit('addRecentlyPlayedGroup', group))
              .catch(error => console.error(error));
        });
      });
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