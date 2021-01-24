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
    categories: [],
    recentlyPlayedGroups: [],
    recommendedRockGroups: [],
    recommendedPopGroups: [],
    playlists: [],
    artists: [],
    albums: [],
    searchResults: { albums: [], artists: [], playlists: [], tracks: []},
    searchTracks: [],
    searchArtists: [],
    searchAlbums: [],
    searchPlaylists: [],

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

    recommendedRockGroups(state) {
      return state.recommendedRockGroups;
    },

    recommendedPopGroups(state) {
      return state.recommendedPopGroups;
    },

    playlists(state) {
      return state.playlists;
    },

    artists(state) {
      return state.artists;
    },

    albums(state) {
      return state.albums;
    },

    categories(state) {
      return state.categories;
    },

    searchResults(state) {
      return state.searchResults
    },

    searchTracks(state) {
      return state.searchTracks;
    },

    searchArtists(state) {
      return state.searchArtists;
    },

    searchAlbums(state) {
      return state.searchAlbums;
    },

    searchPlaylists(state) {
      return state.searchPlaylists;
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

    setRecommendedRockGroups(state, rockGroups) {
      state.recommendedRockGroups = [];

      rockGroups.forEach(group => state.recommendedRockGroups.push(group));
    },

    setRecommendedPopGroups(state, popGroups) {
      state.recommendedPopGroups = [];

      popGroups.forEach(group => state.recommendedPopGroups.push(group));
    },

    setPlaylists(state, playlists) {
      state.playlists = [];

      playlists.forEach(playlist => state.playlists.push(playlist));
    },

    setArtists(state, artists) {
      state.artists = [];

      artists.items.forEach(artist => state.artists.push(artist));
    },

    setAlbums(state, albums) {
      state.albums = [];

      albums.items.forEach(album => state.albums.push(album));
    },

    setCategories(state, categories) {
      state.categories = [];

      categories.forEach(category => state.categories.push({
        id: category.id,
        name: category.name,
        icon: category.icons.length > 0 ? category.icons[0].url : ''
      }));
    },

    setSearchResults(state, searchResults) {
      state.searchResults.albums = [];
      state.searchResults.artists = [];
      state.searchResults.playlists = [];
      state.searchResults.tracks = [];

      if (!searchResults) return;

      searchResults.albums.items.forEach(album =>
        state.searchResults.albums.push({
          id: album.id,
          name: album.name,
          artists: album.artists,
          images: album.images
      }));

      searchResults.artists.items.forEach(artist =>
        state.searchResults.artists.push({
          id: artist.id,
          name: artist.name,
          images: artist.images
        })
      );

      searchResults.playlists.items.forEach(playlist =>
          state.searchResults.playlists.push({
            id: playlist.id,
            name: playlist.name,
            owner: playlist.owner,
            images: playlist.images
          })
      );

      searchResults.tracks.items.forEach(track =>
          state.searchResults.tracks.push({
            id: track.id,
            name: track.name,
            artists: track.artists,
            album: track.album,
            duration: track.duration_ms
          })
      );
    },

    setSearchTracks(state, tracks) {
      state.searchTracks = [];

      tracks.items.forEach(track =>
        state.searchTracks.push({
          id: track.id,
          name: track.name,
          artists: track.artists,
          album: track.album,
          duration: track.duration_ms
        })
      );
    },

    setSearchArtists(state, artists) {
      state.searchArtists = [];

      artists.items.forEach(artist =>
          state.searchArtists.push({
            id: artist.id,
            name: artist.name,
            images: artist.images
          })
      );
    },

    setSearchAlbums(state, albums) {
      state.searchAlbums = [];

      albums.items.forEach(album =>
          state.searchAlbums.push({
            id: album.id,
            name: album.name,
            artists: album.artists,
            images: album.images
          })
      );
    },

    setSearchPlaylists(state, playlists) {
      state.searchPlaylists = [];

      playlists.items.forEach(playlist =>
          state.searchPlaylists.push({
            id: playlist.id,
            name: playlist.name,
            owner: playlist.owner,
            images: playlist.images
          })
      );
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
      commit('clearRecentlyPlayedGroup');

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

    loadCategories({commit}) {
      spotifyAPI.getCategories({ locale: 'en', limit: 40 }).then(data => {
        commit('setCategories', data.categories.items);
      })
    },

    loadRecommendedRockGroups({commit}, limit) {
      spotifyAPI.getCategoryPlaylists('rock', { limit: limit }).then(data => {
        const rockGroups = [];

        data.playlists.items.forEach(playlist => rockGroups.push({
          id: playlist.id,
          name: playlist.name,
          route: { name: 'Playlist', params: { id: playlist.id }},
          description: playlist.description,
          image: playlist.images ? playlist.images[0].url : ''
        }));

        commit('setRecommendedRockGroups', rockGroups);
      });

    },

    loadRecommendedPopGroups({commit}, limit) {
      spotifyAPI.getCategoryPlaylists('pop', { limit: limit }).then(data => {
        const popGroups = [];

        data.playlists.items.forEach(playlist => popGroups.push({
          id: playlist.id,
          name: playlist.name,
          route: { name: 'Playlist', params: { id: playlist.id }},
          description: playlist.description,
          image: playlist.images ? playlist.images[0].url : ''
        }));

        commit('setRecommendedPopGroups', popGroups);
      });

    },

    loadPlaylist(_, playlistId) {
      return new Promise((resolve, reject) => {
        spotifyAPI.getPlaylist(playlistId)
            .then(playlist => resolve(playlist))
            .catch(error => reject(error));
      })
    },

    loadArtists({commit}) {
      spotifyAPI.getFollowedArtists({ limit: 50 })
          .then(data => {
            commit('setArtists', data.artists);
          })
          .catch(error => console.error(error));
    },

    loadAlbums({commit}) {
      spotifyAPI.getMySavedAlbums({ limit: 50 })
          .then(data => {
            commit('setAlbums', data);
          })
          .catch(error => console.error(error));
    },

    search({commit}, query) {
      spotifyAPI.search(query, [ 'album', 'artist', 'playlist', 'track'], { limit: 10 })
          .then(data => {
            commit('setSearchResults', data);
          })
          .catch(error => console.error(error));
    },

    searchTracks({commit}, query) {
      spotifyAPI.search(query, ['track'], { limit: 50 })
          .then(data => {
            commit('setSearchTracks', data.tracks);
          })
          .catch(error => console.error(error));
    },

    searchArtists({commit}, query) {
      spotifyAPI.search(query, ['artist'], { limit: 50 })
          .then(data => {
            commit('setSearchArtists', data.artists);
          })
          .catch(error => console.error(error));
    },

    searchAlbums({commit}, query) {
      spotifyAPI.search(query, ['album'], { limit: 50 })
          .then(data => {
            commit('setSearchAlbums', data.albums);
          })
          .catch(error => console.error(error));
    },

    searchPlaylists({commit}, query) {
      spotifyAPI.search(query, ['playlist'], { limit: 50 })
          .then(data => {
            commit('setSearchPlaylists', data.playlists);
          })
          .catch(error => console.error(error));
    }
  }
});

export default store;