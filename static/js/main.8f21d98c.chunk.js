(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),i=c(17),r=c.n(i),o=(c(53),c(11)),l=(c(54),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("bb3137bb69414e0398f0551c8b3887d9","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var j=function(){return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(s.jsx)("a",{href:l,children:"LOGIN TO SPOTIFY"}),Object(s.jsxs)("p",{className:"appissues",children:["If you encounter any issues with the app please ",Object(s.jsx)("a",{href:"https://www.linkedin.com/in/b3ns44d/",children:"contact"})," me to fix it I will be grateful"]})]})};c(55),c(56),c(57);var d=function(e){var t=e.title,c=e.Icon;return Object(s.jsxs)("div",{className:"sidebarOption",children:[c&&Object(s.jsx)(c,{className:"sidebarOptionIcon"}),c?Object(s.jsx)("h4",{children:t}):Object(s.jsx)("p",{children:t})]})},u=c(27),b=c.n(u),O=c(20),p=c.n(O),h=c(32),f=c.n(h),x=Object(n.createContext)(),y=function(e){var t=e.initialState,c=e.reducer,a=e.children;return Object(s.jsx)(x.Provider,{value:Object(n.useReducer)(c,t),children:a})},_=function(){return Object(n.useContext)(x)};var m=function(){var e,t=_(),c=Object(o.a)(t,2),n=c[0].playlists;return c[1],console.log(n),Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("img",{className:"sidebarLogo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(s.jsx)(d,{Icon:b.a,title:"Home"}),Object(s.jsx)(d,{Icon:p.a,title:"Search"}),Object(s.jsx)(d,{Icon:f.a,title:"Your Library"}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{className:"playlistTitle",children:"PLAYLISTS"}),Object(s.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(s.jsx)(d,{title:e.name})}))]})},v=(c(63),c(82));var g=function(){var e=_(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"header__left",children:[Object(s.jsx)(p.a,{}),Object(s.jsx)("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})]}),Object(s.jsxs)("div",{className:"header__right",children:[Object(s.jsx)(v.a,{alt:null===c||void 0===c?void 0:c.display_name,src:null===c||void 0===c?void 0:c.images[0].url}),Object(s.jsx)("h4",{children:null===c||void 0===c?void 0:c.display_name})]})]})};c(64),c(65);var S=function(e){var t=e.track,c=e.playSong;return console.log(t),Object(s.jsxs)("div",{className:"songRow",onClick:function(){return c(t.id)},children:[Object(s.jsx)("div",{className:"track__number"}),Object(s.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(s.jsxs)("div",{className:"songRow__info",children:[Object(s.jsx)("h1",{children:t.name}),Object(s.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})},T=c(33),N=c.n(T),E=c(34),I=c.n(E),k=c(35),w=c.n(k);var P=function(e){var t=e.spotify,c=_(),n=Object(o.a)(c,2),a=n[0].discover_weekly,i=n[1],r=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))};return Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)(g,{spotify:t}),Object(s.jsxs)("div",{className:"body__info",children:[Object(s.jsx)("img",{src:null===a||void 0===a?void 0:a.images[0].url,alt:""}),Object(s.jsxs)("div",{className:"body__infoText",children:[Object(s.jsx)("strong",{children:"PLAYLIST"}),Object(s.jsx)("h2",{children:"Discover Weekly"}),Object(s.jsx)("p",{children:null===a||void 0===a?void 0:a.description})]})]}),Object(s.jsxs)("div",{className:"body__songs",children:[Object(s.jsxs)("div",{className:"body__icons",children:[Object(s.jsx)(N.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcS3R9rFpIuZv"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))}}),Object(s.jsx)(I.a,{fontSize:"large"}),Object(s.jsx)(w.a,{})]}),Object(s.jsx)("div",{className:"body__title"}),null===a||void 0===a?void 0:a.tracks.items.map((function(e){return Object(s.jsx)(S,{playSong:r,track:e.track})}))]})]})},L=c(38),R=c.n(L),Y=c(37),A=c.n(Y),C=c(39),F=c.n(C),M=c(36),U=c.n(M),D=c(40),G=c.n(D),K=c(42),V=c.n(K),Z=c(41),z=c.n(Z),B=(c(66),c(80)),W=c(81);var J=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer__left",children:[Object(s.jsx)("img",{className:"footer__albumLogo",src:"",alt:""}),Object(s.jsxs)("div",{className:"footer__songInfo",children:[Object(s.jsx)("h4",{children:"yeah"}),Object(s.jsx)("p",{children:"Usher"})]})]}),Object(s.jsxs)("div",{className:"footer__center",children:[Object(s.jsx)(U.a,{className:"footer__green"}),Object(s.jsx)(A.a,{className:"footer__icon"}),Object(s.jsx)(R.a,{fontSize:"large",className:"footer__icon"}),Object(s.jsx)(F.a,{className:"footer__icon"}),Object(s.jsx)(G.a,{className:"footer__green"})]}),Object(s.jsx)("div",{className:"footer__right",children:Object(s.jsxs)(B.a,{container:!0,spacing:2,children:[Object(s.jsx)(B.a,{item:!0,children:Object(s.jsx)(z.a,{})}),Object(s.jsx)(B.a,{item:!0,children:Object(s.jsx)(V.a,{})}),Object(s.jsx)(B.a,{item:!0,xs:!0,children:Object(s.jsx)(W.a,{"aria-labelledby":"continuous-slider"})})]})})]})};var Q=function(e){var t=e.spotify;return Object(s.jsxs)("div",{className:"player",children:[Object(s.jsxs)("div",{className:"playerBody",children:[Object(s.jsx)(m,{})," ",Object(s.jsx)(P,{spotify:t})," "]}),Object(s.jsx)(J,{})," "]})},X=c(43),H=new(c.n(X).a);var q=function(){var e=_(),t=Object(o.a)(e,2),c=t[0].token,a=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(H.setAccessToken(t),a({type:"SET_TOKEN",token:t}),H.getMe().then((function(e){a({type:"SET_USER",user:e})})),H.getUserPlaylists().then((function(e){a({type:"SET_PLAYLISTS",playlists:e})})),H.getPlaylist("37i9dQZEVXcS3R9rFpIuZv").then((function(e){return a({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),H.getMyTopArtists().then((function(e){return a({type:"SET_TOP_ARTISTS",top_artists:e})})),a({type:"SET_SPOTIFY",spotify:H}))}),[c,a]),Object(s.jsxs)("div",{className:"app",children:[!c&&Object(s.jsx)(j,{}),c&&Object(s.jsx)(Q,{spotify:H})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},ee=c(4),te=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ee.a)(Object(ee.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(ee.a)(Object(ee.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(ee.a)(Object(ee.a)({},e),{},{item:t.item});case"SET_DISCOVER_WEEKLY":return Object(ee.a)(Object(ee.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object(ee.a)(Object(ee.a)({},e),{},{top_artists:t.top_artists});case"SET_TOKEN":return Object(ee.a)(Object(ee.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object(ee.a)(Object(ee.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object(ee.a)(Object(ee.a)({},e),{},{playlists:t.playlists});default:return e}};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:te,children:Object(s.jsx)(q,{})})}),document.getElementById("root")),$()}},[[67,1,2]]]);
//# sourceMappingURL=main.8f21d98c.chunk.js.map