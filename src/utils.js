//const redirectURI = 'http://localhost:8080';
const redirectURI = 'https://web-application-clones.gitlab.io/vuejs-music-player';
const clientID = 'f3017ca61c164cffbaccf73cfdc44bf1';

const scopes = [
  'user-library-read',
  'user-follow-read',
  'user-read-recently-played',
  'user-read-currently-playing',
  'user-read-playback-position',
  'playlist-read-private',
];

const utils = {
  authorizeURI: 'https://accounts.spotify.com/authorize',

  getAuthorizeURI() {
    let authorizeURI = `${this.authorizeURI}?client_id=${clientID}&`;

    authorizeURI += `redirect_uri=${redirectURI}&`;
    authorizeURI += `scope=${scopes.join('%20')}&`
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
  },

  formatNumber(number, decimalPoint='.', separator=',', intCount=0) {
    let strNumber = number.toString().replace(new RegExp('[,]|[.]', 'gm'), decimalPoint);
    let intPart = strNumber.split(decimalPoint)[0].split('');
    let decimalPart = strNumber.split(decimalPoint)[1];

    let leadingZeros = intCount > intPart.length ? intCount - intPart.length : 0;
    let index = intPart.length - 1;
    let tenths = 0;
    
    while (index >= 0) {
      if (tenths >= 3) {
        intPart.splice(index + 1, 0, separator)
        tenths = 1;
      } else {
        tenths++;
      }

      index--;
    }

    intPart = intPart.join('');
    
    for (var i = 0; i < leadingZeros; i++) {
      intPart = intPart.slice(0, 0) + '0' + intPart.slice(0);
    }

    return decimalPart != undefined ? intPart + decimalPoint + decimalPart : intPart;
  },

  parseTime(duration) {
    const time = { hours: 0, minutes: 0, seconds: 0 };

    time.seconds = Math.floor(duration / 1000);
    time.minutes = Math.floor(time.seconds / 60);
    time.hours = Math.floor(time.minutes / 60);

    time.seconds = time.seconds % 60;
    time.minutes = time.minutes % 60;

    return time;
  },

  getResource(spotifyAPI, resourceType, resourceId) {
    return new Promise((resolve, reject) => {
        if (resourceType === 'artist') {
          spotifyAPI.getArtist(resourceId)
              .then(artist => this.resolveResource(resolve, artist))
              .catch(error => reject(error));
        } else if (resourceType === 'playlist') {
          spotifyAPI.getPlaylist(resourceId)
              .then(playlist => this.resolveResource(resolve, playlist))
              .catch(error => reject(error));
        } else reject('Resource not found');
    });
  },

  resolveResource(resolve, resource) {
    let description = '';
    let routeName = '';

    if (resource.type === 'artist') {
      description = 'Artist';
      routeName = 'Artist';
    } else if (resource.type === 'playlist') {
      description = resource.owner.id !== 'spotify' ? `By ${resource.owner.display_name}` : resource.description;
      routeName = 'Playlist'
    }

    resolve({
      id: resource.id,
      name: resource.name,
      route: { name: routeName, params: { id: resource.id }},
      image: resource.images ? resource.images[0].url : '',
      description: description
    });
  },

  getImageMainColor(imageElement) {
    const canvas = document.createElement('canvas');
    const image = new Image(imageElement.width, imageElement.height);

    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    image.src = imageElement.src;
    image.crossOrigin = "Anonymous";

    return new Promise(resolve => {
      image.onload = () => {
        canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
        resolve(canvas.getContext('2d').getImageData(50, 50, 1, 1).data);
      }
    });
  }
};

export default utils;