(function(t){function e(e){for(var r,o,a=e[0],c=e[1],l=e[2],u=0,f=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i={app:0},s=[];function a(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0c4f21d4":"d3bc71b9","chunk-11097452":"05ab0ac6","chunk-2d0ccf8b":"1563b321","chunk-4f02bfb8":"02c8da11","chunk-5306f543":"f24a479a"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0c4f21d4":1,"chunk-11097452":1,"chunk-4f02bfb8":1,"chunk-5306f543":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0c4f21d4":"4206b84c","chunk-11097452":"2e2d943d","chunk-2d0ccf8b":"31d6cfe0","chunk-4f02bfb8":"a00e05e5","chunk-5306f543":"35360f01"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var l=s[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],d.parentNode.removeChild(d),n(s)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"039a":function(t,e,n){"use strict";var r=n("7174"),o=n.n(r);o.a},"0ee9":function(t,e,n){"use strict";var r=n("d389"),o=n.n(r);o.a},2031:function(t,e,n){},2669:function(t,e,n){},"2b86":function(t,e,n){t.exports=n.p+"img/spotify_logo.31bad8d4.png"},"4e07":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o=n("2b0e"),i=n("be8d"),s=n.n(i);n("a6f9"),n("8195"),n("15f5");o["a"].directive("click-outside",{bind:function(t,e){r=function(t){var n=e.value,r=n.exclude,o=n.handler;t.target.closest(r)||o()},document.body.addEventListener("click",r)},unbind:function(){document.body.removeEventListener("click",r)}});n("99af"),n("a15b"),n("13d5"),n("a434"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276");var a="http://localhost:8080",c="f3017ca61c164cffbaccf73cfdc44bf1",l=["user-top-read","user-library-read","user-read-recently-played","user-read-playback-position","playlist-read-private"],u={authorizeURI:"https://accounts.spotify.com/authorize",getAuthorizeURI:function(){var t="".concat(this.authorizeURI,"?client_id=").concat(c,"&");return t+="redirect_uri=".concat(a,"&"),t+="scopes=".concat(l.join("%20"),"&"),t+="response_type=token&show_dialog=true",t},getHashData:function(){var t=window.location.hash,e=t.substring(2).split("&");return window.location.hash="",e.reduce((function(t,e){var n=e.split("="),r=n[0];return t[r]=n[1],t}),{})},formatNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",r=t.toString().replace(new RegExp("[,]|[.]","gm"),e),o=r.split(e)[0].split(""),i=r.split(e)[1],s=o.length-1,a=0;while(s>=0)a>=3?(o.splice(s+1,0,n),a=1):a++,s--;return o=o.join(""),void 0!=i?o+e+i:o},parseTime:function(t){var e={hours:0,minutes:0,seconds:0};return e.seconds=Math.floor(t/1e3),e.minutes=Math.floor(e.seconds/60),e.hours=Math.floor(e.minutes/60),e.seconds=e.seconds%60,e.minutes=e.minutes%60,e}},f=u,d=(n("4160"),n("159b"),n("2f62"));o["a"].use(d["a"]);var p=new d["a"].Store({state:{user:null,playlists:[],scrollPosition:{x:0,y:0,z:0}},getters:{user:function(t){return t.user},playlists:function(t){return t.playlists},scrollPosition:function(t){return t.scrollPosition}},mutations:{setUser:function(t,e){t.user=e},setPlaylists:function(t,e){t.playlists=[],e.forEach((function(e){return t.playlists.push(e)}))},setScrollPosition:function(t,e){t.scrollPosition=e},resetScrollPosition:function(t){t.scrollPosition={x:0,y:0,z:0}}}}),h=p,v=n("8c4f");o["a"].use(v["a"]);var m=new v["a"]({routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-4f02bfb8").then(n.bind(null,"bafe"))}},{path:"/search",name:"Search",component:function(){return n.e("chunk-5306f543").then(n.bind(null,"9d9a"))}},{path:"/collection",name:"Library",component:function(){return n.e("chunk-11097452").then(n.bind(null,"d763"))}},{path:"/collection/tracks",name:"LikedSongs",component:function(){return n.e("chunk-2d0ccf8b").then(n.bind(null,"4fcf"))}},{path:"/playlists/:id",name:"Playlist",component:function(){return n.e("chunk-0c4f21d4").then(n.bind(null,"a5d6"))}}]});m.beforeEach((function(t,e,n){h.commit("resetScrollPosition"),n()}));var y=m,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.token?n("SpotifyPlayer"):n("Login")],1)},g=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spotify-login"},[r("img",{staticClass:"spotify-logo",attrs:{src:n("2b86"),alt:"spotify logo"}}),r("a",{staticClass:"btn-login",attrs:{href:t.authorizeURI}},[t._v("Login with Spotify")])])},w=[],_={name:"Login",computed:{authorizeURI:function(){return this.$utils.getAuthorizeURI()}}},C=_,P=(n("039a"),n("2877")),S=Object(P["a"])(C,k,w,!1,null,null,null),x=S.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spotify-player"},[n("div",{staticClass:"container"},[n("Sidebar"),n("PlayerBody")],1),n("PlayerBar")],1)},O=[],$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spotify-sidebar"},[r("router-link",{attrs:{to:{name:"Home"}}},[r("img",{staticClass:"logo",attrs:{src:n("2b86"),alt:"spotify logo"}})]),r("div",{staticClass:"main-options"},[r("IconLink",{attrs:{route:t.homeRoute,"fa-icon":"fa-home",text:"Home",active:t.isLinkActive("/")}}),r("IconLink",{attrs:{route:t.searchRoute,"fa-icon":"fa-search",text:"Search",active:t.isLinkActive("/search")}}),r("IconLink",{attrs:{route:t.libraryRoute,"fa-icon":"fa-book",text:"Your Library",active:t.isLinkActive("/collection")}})],1),r("div",{staticClass:"playlists-options"},[r("p",[t._v("Playlists")]),r("router-link",{staticClass:"btn-liked-songs",style:t.getLinkActiveStyle("/collection/tracks"),attrs:{to:"/collection/tracks"}},[r("i",{staticClass:"fas fa-heart"}),r("h4",[t._v("Liked Songs")])]),r("hr"),t._l(t.playlists,(function(e){return r("TextLink",{key:e.id,attrs:{route:t.getPlaylistRoute(e),text:e.name,active:t.isLinkActive("/playlists/"+e.id)}})}))],2)],1)},E=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"icon-link",style:t.linkStyle,attrs:{to:t.route}},[t.faIcon?n("i",{class:t.iconClasses}):t._e(),n("h4",[t._v(t._s(t.text))])])},A=[],R={name:"IconLink",props:{text:String,faIcon:String,active:Boolean,route:[String,Object]},computed:{linkStyle:function(){return{"background-color":this.active?"#303030":"transparent"}},iconClasses:function(){return["fas",this.faIcon]}}},I=R,B=(n("a945"),Object(P["a"])(I,j,A,!1,null,"bda2932e",null)),T=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"text-link",style:t.linkStyle,attrs:{to:t.route}},[n("p",[t._v(t._s(t.text))])])},M=[],z={name:"TextLink",props:{text:String,active:Boolean,route:[String,Object]},computed:{linkStyle:function(){return{color:this.active?"white":"#d4d4d4"}}}},N=z,H=(n("0ee9"),Object(P["a"])(N,U,M,!1,null,"8d35a1a8",null)),D=H.exports,q={name:"Sidebar",components:{IconLink:T,TextLink:D},computed:{playlists:function(){return this.$store.getters.playlists},homeRoute:function(){return{name:"Home"}},searchRoute:function(){return{name:"Search"}},libraryRoute:function(){return{name:"Library"}}},methods:{isLinkActive:function(t){return this.$route.path===t},getPlaylistRoute:function(t){return{name:"Playlist",params:{id:t.id}}},getLinkActiveStyle:function(t){return{color:this.isLinkActive(t)?"white":"#d4d4d4"}}}},J=q,F=(n("81f3"),Object(P["a"])(J,$,E,!1,null,"2d89e6a6",null)),K=F.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-body"},[n("PlayerNav",{attrs:{"show-overlay":t.scrollPosition.y>5}}),n("div",{ref:"scroll",staticClass:"scroll-container",attrs:{"data-simplebar":""}},[n("div",{ref:"content",staticClass:"player-content",on:{wheel:t.onScroll}},[n("router-view",{key:t.$route.fullPath})],1)])],1)},G=[],Q=(n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:t.navClasses},[n("div",{staticClass:"nav-left"}),n("div",{staticClass:"nav-right"},[n("UserDropdown")],1)])}),V=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-dropdown"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:{exclude:".user-dropdown",handler:t.onOutsideClick},expression:"{exclude: '.user-dropdown', handler: onOutsideClick}"}],staticClass:"dropdown-button",on:{click:t.onButtonClick}},[n("div",{staticClass:"user-picture"}),n("div",{staticClass:"user-name"},[t._v("Rastislav Madera")]),t._m(0)]),n("div",{class:t.dropdownMenuClasses},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Acount")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Profile")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Logout")])])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-arrow"},[n("i",{staticClass:"fas fa-sort-down"})])}],Z={name:"UserDropdown",data:function(){return{menuActive:!1}},computed:{dropdownMenuClasses:function(){return["dropdown-menu",this.menuActive?"dropdown-menu-active":""]}},methods:{onButtonClick:function(){this.menuActive=!this.menuActive},onOutsideClick:function(){this.menuActive=!1}}},tt=Z,et=(n("9f7a"),Object(P["a"])(tt,W,X,!1,null,null,null)),nt=et.exports,rt={name:"PlayerNav",components:{UserDropdown:nt},props:{showOverlay:Boolean},computed:{navClasses:function(){return["player-nav",this.showOverlay?"nav-overlay":""]}}},ot=rt,it=(n("e0bc"),Object(P["a"])(ot,Q,V,!1,null,null,null)),st=it.exports,at={name:"PlayerBody",components:{PlayerNav:st},computed:{scrollPosition:function(){return this.$store.getters.scrollPosition}},methods:{onScroll:function(){if(!this.$refs.scroll)return null;var t=this.$refs.scroll.querySelector(".simplebar-track.simplebar-vertical"),e=t.querySelector(".simplebar-scrollbar"),n=e.style.transform;n=n.replace(new RegExp("^translate3d|px|[(]|[)]","gm"),""),n=n.split(", ").map((function(t){return parseInt(t)})),this.$store.commit("setScrollPosition",{x:n[0],y:n[1],z:n[2]}),console.log(this.scrollPosition)}}},ct=at,lt=(n("9198"),Object(P["a"])(ct,Y,G,!1,null,null,null)),ut=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-bar"})},dt=[],pt={name:"PlayerBar"},ht=pt,vt=(n("9f4d"),Object(P["a"])(ht,ft,dt,!1,null,null,null)),mt=vt.exports,yt={name:"SpotifyPlayer",components:{Sidebar:K,PlayerBody:ut,PlayerBar:mt}},bt=yt,gt=(n("ea30"),Object(P["a"])(bt,L,O,!1,null,null,null)),kt=gt.exports,wt={name:"App",components:{Login:x,SpotifyPlayer:kt},data:function(){return{token:null}},created:function(){var t=this,e=this.$utils.getHashData(),n=e.access_token;n&&(this.token=n,this.$spotify.setAccessToken(n),this.$spotify.getMe().then((function(e){return t.$store.commit("setUser",e)})),this.$spotify.getUserPlaylists().then((function(e){return t.$store.commit("setPlaylists",e.items)})),this.$router.push({name:"Home"}))}},_t=wt,Ct=(n("034f"),Object(P["a"])(_t,b,g,!1,null,null,null)),Pt=Ct.exports;o["a"].config.productionTip=!1,o["a"].prototype.$utils=f,o["a"].prototype.$spotify=new s.a,new o["a"]({render:function(t){return t(Pt)},store:h,router:y}).$mount("#app")},5948:function(t,e,n){},"59fd":function(t,e,n){},7174:function(t,e,n){},"81f3":function(t,e,n){"use strict";var r=n("59fd"),o=n.n(r);o.a},"85ec":function(t,e,n){},9198:function(t,e,n){"use strict";var r=n("2669"),o=n.n(r);o.a},"9f4d":function(t,e,n){"use strict";var r=n("a8e9"),o=n.n(r);o.a},"9f7a":function(t,e,n){"use strict";var r=n("b031"),o=n.n(r);o.a},a8e9:function(t,e,n){},a945:function(t,e,n){"use strict";var r=n("5948"),o=n.n(r);o.a},b031:function(t,e,n){},d389:function(t,e,n){},e0bc:function(t,e,n){"use strict";var r=n("4e07"),o=n.n(r);o.a},ea30:function(t,e,n){"use strict";var r=n("2031"),o=n.n(r);o.a}});
//# sourceMappingURL=app.1c978b10.js.map