(this.webpackJsonpclone=this.webpackJsonpclone||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),o=n(15),a=n.n(o),i=(n(21),n(22),n(4)),s=n.n(i),l=n(5),u=n(3),d=n(16),f=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(42),n(0));var b=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,o=Object(c.useState)([]),a=Object(u.a)(o,2),i=a[0],d=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log(i),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("div",{className:"row_posters",children:i.map((function(e){return Object(h.jsx)("img",{onClick:function(){return function(){var e=window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank","noopener,noreferrer");e&&(e.opener=null)}()},className:"row_poster ".concat(r&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/","/").concat(r?e.poster_path:e.backdrop_path),alt:e.title},e.id)}))})]})},v="bab3dc222c39e3d87c0a6f3152477038",j={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")};n(44);var p=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(j.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n);var o,a,i=function(){var e=window.open("https://www.youtube.com/watch?v=q9RAZxNdCk8","_blank","noopener,noreferrer");e&&(e.opener=null)};return Object(h.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(h.jsxs)("div",{className:"banner_contents",children:[Object(h.jsx)("h1",{className:"banner_title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(h.jsxs)("div",{className:"banner_btns",children:[Object(h.jsx)("button",{className:"banner_btn",onClick:function(){return i()},children:"Play"}),Object(h.jsx)("button",{className:"banner_btn",onClick:function(){return i()},children:"My List"})]}),Object(h.jsx)("h1",{className:"banner_description",children:(o=null===n||void 0===n?void 0:n.overview,a=150,(null===o||void 0===o?void 0:o.length)>a?o.substring(0,a-1)+"...":o)})]}),Object(h.jsx)("div",{className:"banner-fade-bottom"})]})};n(45);var m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(h.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix",className:"nav_logo"}),Object(h.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Avatar",className:"nav_avatar"})]})};var g=function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(m,{}),Object(h.jsx)(p,{}),Object(h.jsx)(b,{title:"Netflix originals",fetchUrl:j.fetchNetflixOriginals,isLargeRow:!0}),Object(h.jsx)(b,{title:"Top Rated",fetchUrl:j.fetchTopRated}),Object(h.jsx)(b,{title:"Trending Now",fetchUrl:j.fetchTrending}),Object(h.jsx)(b,{title:"Action",fetchUrl:j.fetchActionMovies}),Object(h.jsx)(b,{title:"Comedy",fetchUrl:j.fetchComedyMovies}),Object(h.jsx)(b,{title:"Documentary",fetchUrl:j.fetchDocumentaries}),Object(h.jsx)(b,{title:"Horror",fetchUrl:j.fetchHorrorMovies}),Object(h.jsx)(b,{title:"Romance",fetchUrl:j.fetchRomanceMovies})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.0fd61185.chunk.js.map