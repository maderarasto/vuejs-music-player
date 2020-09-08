const redirectURI = 'http://localhost:8080';
const clientID = 'f3017ca61c164cffbaccf73cfdc44bf1';

const scopes = [
  'user-top-read',
  'user-library-read',
  'user-read-recently-played',
  'user-read-playback-position',
  'playlist-read-private'
];

const utils = {
  authorizeURI: 'https://accounts.spotify.com/authorize',

  getAuthorizeURI() {
    let authorizeURI = `${this.authorizeURI}?client_id=${clientID}&`;

    authorizeURI += `redirect_uri=${redirectURI}&`;
    authorizeURI += `scopes=${scopes.join('%20')}&`
    authorizeURI += `response_type=token&show_dialog=true`;

    return authorizeURI;
  },

  getHashData() {
    const hash = window.location.hash;
    const data = hash.substring(2).split('&');
    
    window.location.hash = '';

    return data.reduce((initial, item) => {
      const parts = item.split('=');
      const key = parts[0];

      initial[key] = parts[1];

      return initial;
    }, {});
  }
};

export default utils;