(function(e){function t(t){for(var r,a,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-23bb95c2":"9d276010","chunk-24380437":"c77cfd3d","chunk-2b03ca55":"ad3e6c82","chunk-2d22d746":"d1ece005","chunk-6c65b353":"7fc1fb7e","chunk-88de009e":"113206ea","chunk-021e81cc":"84fa6b03","chunk-2d2250e4":"ebba34c0","chunk-004f566a":"2da3621e","chunk-51c3031a":"fa490f04","chunk-cf855ac2":"9d05bdd0","chunk-750e4b49":"819b5c58","chunk-bf5c7efa":"86a45f3b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-23bb95c2":1,"chunk-24380437":1,"chunk-2b03ca55":1,"chunk-6c65b353":1,"chunk-88de009e":1,"chunk-021e81cc":1,"chunk-004f566a":1,"chunk-cf855ac2":1,"chunk-750e4b49":1,"chunk-bf5c7efa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-23bb95c2":"82e6a9a4","chunk-24380437":"07922cc0","chunk-2b03ca55":"762f6fa1","chunk-2d22d746":"31d6cfe0","chunk-6c65b353":"ff135f89","chunk-88de009e":"e3598e8c","chunk-021e81cc":"c99a04b4","chunk-2d2250e4":"31d6cfe0","chunk-004f566a":"2d450282","chunk-51c3031a":"31d6cfe0","chunk-cf855ac2":"0323932e","chunk-750e4b49":"ee0ed2f5","chunk-bf5c7efa":"48d18792"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===r||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Sidebar"),n("div",{staticClass:"wrapper"},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1),n("vue-progress-bar")],1)],1)},c=[],o=function(){return n.e("chunk-23bb95c2").then(n.bind(null,"f93d"))},s={mounted:function(){this.$Progress.finish()},created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach(function(t,n,r){if(void 0!==t.meta.progress){var a=t.meta.progress;e.$Progress.parseMeta(a)}e.$Progress.start(),r()}),this.$router.afterEach(function(){e.$Progress.finish()})},components:{Sidebar:o}},u=s,i=(n("5c0b"),n("2877")),l=Object(i["a"])(u,a,c,!1,null,null,null),f=l.exports,p=n("8c4f");r["default"].use(p["a"]);var d=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-88de009e").then(n.bind(null,"1eab"))}},{path:"/genres/:genres",name:"genres",component:function(){return n.e("chunk-24380437").then(n.bind(null,"3138"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/movie/:id",name:"movie",component:function(){return n.e("chunk-2b03ca55").then(n.bind(null,"403c"))}},{path:"/search/:q",name:"search",component:function(){return n.e("chunk-6c65b353").then(n.bind(null,"b981"))}},{path:"*",redirect:"/"}]}),h=n("2f62"),g=(n("ac6a"),n("456d"),n("96cf"),n("3b8d")),v=n("bc3a"),b=n.n(v),m=function(){return b.a.create({baseURL:"https://api.themoviedb.org/3",headers:{Accept:"application/json","Content-Type":"application/json"}})},k={initGenres:function(){return m().get("genre/movie/list?api_key=".concat("83cf59bfcc52633721d127b217430773","&language=en-US"))}},_={namespaced:!0,state:{SITE_LOGO:n("cf05"),genres:[],loading:!0},mutations:{SET_GENRES:function(e,t){e.genres=t,setTimeout(function(){e.loading=!1},1e3)}},actions:{fetchGenres:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,k.initGenres();case 4:r=e.sent,Object.keys(r.data.genres).length>0&&n("SET_GENRES",r.data.genres),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}()},getters:{getGenres:function(e){return e.genres}}},S={fetchDiscoverService:function(){return m().get("discover/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"))},getDetailService:function(e){return m().get("movie/".concat(e.id,"?api_key=").concat("83cf59bfcc52633721d127b217430773","&append_to_response=videos"))},fetchDiscoverMore:function(e){return m().get("discover/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(e))},fetchDiscoverPrev:function(e){return m().get("discover/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(e))}},E={namespaced:!0,state:{discover:[],loading:!0,movieLoader:!0,singleMovie:{},page:"",total_pages:""},mutations:{SET_DISCOVER:function(e,t){e.discover=t.results,e.page=t.page,e.total_pages=t.total_pages},SET_SINGLE_MOVIE:function(e,t){e.singleMovie=t,e.movieLoader=!1},SET_SINGLE_LOADER:function(e){e.movieLoader=!0}},actions:{fetchDiscover:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.prev=1,e.next=4,S.fetchDiscoverService();case 4:a=e.sent,Object.keys(a.data.results).length>0&&(n("SET_DISCOVER",a.data),setTimeout(function(){r("contentLoaderHide",null,{root:!0})},1e3)),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDiscoverMore:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,a=t.dispatch,e.prev=1,!(r.page<r.total_pages)){e.next=7;break}return e.next=5,S.fetchDiscoverMore(r.page+1);case 5:c=e.sent,Object.keys(c.data.results).length>0&&(n("SET_DISCOVER",c.data),setTimeout(function(){a("contentLoaderHide",null,{root:!0})},1e3),window.scroll({top:0,left:0,behavior:"smooth"}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchDiscoverPrev:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,a=t.dispatch,e.prev=1,!(r.page<r.total_pages)){e.next=7;break}return e.next=5,S.fetchDiscoverPrev(r.page-1);case 5:c=e.sent,Object.keys(c.data.results).length>0&&(n("SET_DISCOVER",c.data),setTimeout(function(){a("contentLoaderHide",null,{root:!0})},1e3),window.scroll({top:0,left:0,behavior:"smooth"}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}(),getDetail:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,c=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=c.length>1&&void 0!==c[1]?c[1]:0,n("SET_SINGLE_LOADER"),e.prev=3,e.next=6,S.getDetailService(r);case 6:a=e.sent,a&&200===a.status?n("SET_SINGLE_MOVIE",a.data):console.log("muur"),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[3,10]])}));function t(t){return e.apply(this,arguments)}return t}()},getters:{getLoading:function(e){return e.loading},getMovieLoader:function(e){return e.movieLoader},getCurrentPage:function(e){return e.page},getTotalPage:function(e){return e.total_pages}}},y=(n("7f7f"),n("7514"),{fetchGenresService:function(e){return m().get("discover/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&with_genres=").concat(e.id,"&sort_by=popularity.desc"))},fetchGenresMore:function(e,t){return m().get("discover/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&with_genres=").concat(e.id,"&page=").concat(t,"&sort_by=popularity.desc"))},fetchGenresPrev:function(e,t){return m().get("discover/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&with_genres=").concat(e.id,"&page=").concat(t,"&sort_by=popularity.desc"))}}),w={namespaced:!0,state:{genres:[],loadingGenre:!0,UserSelectedGenres:"",page:"",total_pages:""},mutations:{SET_GENRES:function(e,t){e.UserSelectedGenres=t.slug.slug,e.genres=t.results.results,e.page=t.results.page,e.total_pages=t.results.total_pages},SET_LOADING:function(e,t){e.loadingGenre=t}},actions:{fetchGenres:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.rootState,r("SET_LOADING",!0),c=a.menu.genres.find(function(e){return e.name===n.slug}),!c){e.next=16;break}return e.prev=4,e.next=7,y.fetchGenresService(c);case 7:o=e.sent,Object.keys(o.data.results).length>0&&(s=o.data,r("SET_GENRES",{results:s,slug:n}),r("SET_LOADING",!1)),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),console.log(e.t0);case 14:e.next=17;break;case 16:d.push({path:"/"});case 17:case"end":return e.stop()}},e,null,[[4,11]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchGenresMore:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c,o,s,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.rootState,c=t.state,r("SET_LOADING",!0),o=a.menu.genres.find(function(e){return e.name===n.slug}),!o){e.next=17;break}if(e.prev=4,!(c.page<c.total_pages)){e.next=10;break}return e.next=8,y.fetchGenresMore(o,c.page+1);case 8:s=e.sent,Object.keys(s.data.results).length>0&&(u=s.data,r("SET_GENRES",{results:u,slug:n}),r("SET_LOADING",!1),window.scroll({top:0,left:0,behavior:"smooth"}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](4),console.log(e.t0);case 15:e.next=18;break;case 17:d.push({path:"/"});case 18:case"end":return e.stop()}},e,null,[[4,12]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchGenresPrev:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c,o,s,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.rootState,c=t.state,r("SET_LOADING",!0),o=a.menu.genres.find(function(e){return e.name===n.slug}),!o){e.next=17;break}if(e.prev=4,!(c.page<c.total_pages)){e.next=10;break}return e.next=8,y.fetchGenresMore(o,c.page-1);case 8:s=e.sent,Object.keys(s.data.results).length>0&&(u=s.data,r("SET_GENRES",{results:u,slug:n}),r("SET_LOADING",!1),window.scroll({top:0,left:0,behavior:"smooth"}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](4),console.log(e.t0);case 15:e.next=18;break;case 17:d.push({path:"/"});case 18:case"end":return e.stop()}},e,null,[[4,12]])}));function t(t,n){return e.apply(this,arguments)}return t}()},getters:{getGenres:function(e){return e.genres},getLoading:function(e){return e.loadingGenre},getUserSelectedGenres:function(e){return e.UserSelectedGenres},getCurrentPage:function(e){return e.page},getTotalPage:function(e){return e.total_pages}}},O={fetchSearch:function(e){return m().get("search/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&query=").concat(e))},fetchSearchMore:function(e,t){return m().get("search/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&query=").concat(e,"&page=").concat(t))},fetchSearchPrev:function(e,t){return m().get("search/movie?api_key=".concat("83cf59bfcc52633721d127b217430773","&query=").concat(e,"&page=").concat(t))}},T={namespaced:!0,state:{result:{},searchValue:"",page:0,total_pages:0},mutations:{SET_RESULT:function(e,t){e.result=t.results.results,e.page=t.results.page,e.total_pages=t.results.total_pages,e.searchValue=t.value},SET_SEARCH_VALUE:function(e,t){e.result={},e.searchValue=t}},actions:{fetchSearch:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,!(n.value.length>0)){e.next=12;break}return e.prev=2,e.next=5,O.fetchSearch(n.value);case 5:a=e.sent,Object.keys(a.data.results).length>0?r("SET_RESULT",{results:a.data,value:n.value}):r("SET_SEARCH_VALUE",n.value),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchSearchMore:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.state,!(n.value.length>0)){e.next=13;break}if(e.prev=2,!(a.page<a.total_pages)){e.next=8;break}return e.next=6,O.fetchSearchMore(n.value,a.page+1);case 6:c=e.sent,Object.keys(c.data.results).length>0&&(r("SET_RESULT",{results:c.data,value:n.value}),window.scroll({top:0,left:0,behavior:"smooth"}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[2,10]])}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchSearchPrev:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=t.state,!(n.value.length>0)){e.next=13;break}if(e.prev=2,!(a.page<a.total_pages)){e.next=8;break}return e.next=6,O.fetchSearchPrev(n.value,a.page-1);case 6:c=e.sent,Object.keys(c.data.results).length>0&&(r("SET_RESULT",{results:c.data,value:n.value}),window.scroll({top:0,left:0,behavior:"smooth"}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[2,10]])}));function t(t,n){return e.apply(this,arguments)}return t}()},getters:{getResult:function(e){return e.result},getSearchValue:function(e){return e.searchValue},getCurrentPage:function(e){return e.page},getTotalPage:function(e){return e.total_pages}}};r["default"].use(h["a"]);var x=new h["a"].Store({modules:{menu:_,movie:E,genres:w,search:T},state:{contentLoader:!0},mutations:{SET_SHOW_CONTENTLOADER:function(e){e.contentLoader=!0},SET_HIDE_CONTENTLOADER:function(e){e.contentLoader=!1}},actions:{contentLoaderShow:function(e){var t=e.commit,n=e.state;t("SET_SHOW_CONTENTLOADER",n)},contentLoaderHide:function(e){var t=e.commit,n=e.state;t("SET_HIDE_CONTENTLOADER",n)}},getters:{contentLoaderMain:function(e){return e.contentLoader}}}),L=n("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var R=n("fb9a"),G=n.n(R);n("04f2"),n("c789");r["default"].filter("setImagePath",function(e){return void 0==e||null==e?"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg":"https://image.tmdb.org/t/p/w342".concat(e)});n("6b54");r["default"].directive("colorChange",function(e){e.style.color="#"+Math.random().toString().slice(2,8)});var j=n("342d"),N=n.n(j),D=n("5bce"),P=n.n(D),A=n("1881"),C=n.n(A),M=n("e0ec"),I=n.n(M),U=n("26b9"),V=n.n(U);r["default"].use(I.a),r["default"].use(C.a),r["default"].use(P.a),r["default"].use(V.a,{color:"#3498db",failedColor:"#874b4b",thickness:"7px",transition:{speed:"2s",opacity:"1s",termination:900},autoRevert:!0,location:"top",inverse:!1}),r["default"].use(N.a,{separator:"-",complement:"Movie Library"}),r["default"].use(G.a),r["default"].config.productionTip=!1,new r["default"]({router:d,store:x,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.cffaec92.png"},e332:function(e,t,n){}});
//# sourceMappingURL=app.cc3729b9.js.map