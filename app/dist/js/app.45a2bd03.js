(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"039a":function(t,e,n){"use strict";var r=n("7174"),a=n.n(r);a.a},"14ee":function(t,e,n){},2031:function(t,e,n){},"2b86":function(t,e,n){t.exports=n.p+"img/spotify_logo.31bad8d4.png"},"2dae":function(t,e,n){"use strict";var r=n("14ee"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("be8d"),o=n.n(a),i=(n("99af"),n("a15b"),n("13d5"),n("ac1f"),n("1276"),"http://localhost:8080"),s="f3017ca61c164cffbaccf73cfdc44bf1",u=["user-top-read","user-library-read","user-read-recently-played","user-read-playback-position","playlist-read-private"],c={authorizeURI:"https://accounts.spotify.com/authorize",getAuthorizeURI:function(){var t="".concat(this.authorizeURI,"?client_id=").concat(s,"&");return t+="redirect_uri=".concat(i,"&"),t+="scopes=".concat(u.join("%20"),"&"),t+="response_type=token&show_dialog=true",t},getHashData:function(){var t=window.location.hash,e=t.substring(1).split("&");return window.location.hash="",e.reduce((function(t,e){var n=e.split("="),r=n[0];return t[r]=n[1],t}),{})}},l=c,f=(n("4160"),n("159b"),n("2f62"));r["a"].use(f["a"]);var p=new f["a"].Store({state:{user:null,playlists:[]},getters:{user:function(t){return t.user},playlists:function(t){return t.playlists}},mutations:{setUser:function(t,e){t.user=e},setPlaylists:function(t,e){t.playlists=[],e.forEach((function(e){return t.playlists.push(e)}))}}}),d=p,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.token?n("SpotifyPlayer"):n("Login")],1)},h=[],b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spotify-login"},[r("img",{staticClass:"spotify-logo",attrs:{src:n("2b86"),alt:"spotify logo"}}),r("a",{staticClass:"btn-login",attrs:{href:t.authorizeURI}},[t._v("Login with Spotify")])])},v=[],g={name:"Login",computed:{authorizeURI:function(){return this.$utils.getAuthorizeURI()}}},m=g,_=(n("039a"),n("2877")),w=Object(_["a"])(m,b,v,!1,null,null,null),O=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spotify-player"},[n("Sidebar"),n("Content"),n("PlayerBar")],1)},$=[],P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spotify-sidebar"},[r("img",{staticClass:"logo",attrs:{src:n("2b86"),alt:"spotify logo"}})])}],S={name:"Sidebar"},C=S,k=(n("2dae"),Object(_["a"])(C,P,x,!1,null,null,null)),E=k.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-content"})},z=[],I={name:"Content"},R=I,M=(n("b318"),Object(_["a"])(R,U,z,!1,null,null,null)),A=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-bar"})},T=[],B={name:"PlayerBar"},D=B,H=(n("9f4d"),Object(_["a"])(D,L,T,!1,null,null,null)),J=H.exports,q={name:"SpotifyPlayer",components:{Sidebar:E,Content:A,PlayerBar:J}},F=q,G=(n("ea30"),Object(_["a"])(F,j,$,!1,null,null,null)),K=G.exports,N={name:"App",components:{Login:O,SpotifyPlayer:K},data:function(){return{token:null}},created:function(){var t=this,e=this.$utils.getHashData(),n=e.access_token;n&&(this.token=n,this.$spotify.setAccessToken(n),this.$spotify.getMe().then((function(e){return t.$store.commit("setUser",e)})))}},Q=N,V=(n("034f"),Object(_["a"])(Q,y,h,!1,null,null,null)),W=V.exports;r["a"].config.productionTip=!1,r["a"].prototype.$utils=l,r["a"].prototype.$spotify=new o.a,new r["a"]({render:function(t){return t(W)},store:d}).$mount("#app")},7174:function(t,e,n){},"85ec":function(t,e,n){},"9f4d":function(t,e,n){"use strict";var r=n("a8e9"),a=n.n(r);a.a},a8e9:function(t,e,n){},b318:function(t,e,n){"use strict";var r=n("d1f0"),a=n.n(r);a.a},d1f0:function(t,e,n){},ea30:function(t,e,n){"use strict";var r=n("2031"),a=n.n(r);a.a}});
//# sourceMappingURL=app.45a2bd03.js.map