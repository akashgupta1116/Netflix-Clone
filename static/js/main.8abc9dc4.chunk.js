(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{18:function(e,t,n){e.exports=n(50)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=(n(23),n(24),n(2)),l=n(3),s=n(5),m=n(4),u=(n(25),n(26),n(10)),h=n.n(u),g=n(6),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).responseGoogle=function(e){console.log("response",e.profileObj),e.profileObj&&(localStorage.setItem("profileObj",JSON.stringify(e.profileObj)),a.setState({redirect:!0}))},a.state={redirect:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return this.state.redirect?o.a.createElement(g.c,{to:"/loggedin",noThrow:!0}):o.a.createElement("div",{className:"homepage-nav"},o.a.createElement("img",{className:"home-nav-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png",alt:"netflix-logo"}),o.a.createElement(h.a,{clientId:"846660842017-iqokg41jpqohmujg4elthu1q7usis6u9.apps.googleusercontent.com",render:function(e){return o.a.createElement("button",{className:"sign-in-button",onClick:e.onClick},"Sign In")},buttonText:"SignIn",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}))}}]),n}(a.Component),f=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement(v,null),o.a.createElement("img",{className:"home-image",src:"https://assets.nflxext.com/ffe/siteui/vlv3/e8645526-57d7-4313-9c91-7240482510d7/528f05df-d400-4bc2-a306-577896af36de/IN-en-20200706-popsignuptwoweeks-perspective_alpha_website_small.jpg",alt:"netflix-logo"}),o.a.createElement("div",{className:"text"},o.a.createElement("h1",{className:"large-text"},"Unlimited movies, TV shows and more."),o.a.createElement("p",{className:"small-text"},"Watch anywhere. Cancel anytime.")))}}]),n}(a.Component),d=(n(33),n(12)),p=n(15),b=n.n(p),E=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleMovieTrailer=function(e){console.log("titleName",e),b()(e||"").then((function(e){console.log("response traile",e);var t=new URLSearchParams(new URL(e).search);console.log("urlParams",t),a.setState({trailerPath:t.get("v")},(function(){console.log("trailerPath",a.state.trailerPath)}))})).catch(console.error)},a.state={movies:[],trailerPath:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3").concat(this.props.request)).then((function(e){return e.json()})).then((function(t){console.log(t.results),e.setState({movies:t.results},(function(){console.log("m",e.state.movies)}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",{className:"netflix-headings"},this.props.title),o.a.createElement("div",{className:"image-row"},this.state.movies?this.state.movies.map((function(t){return t.backdrop_path?o.a.createElement("div",{className:"img-card",onClick:function(){return e.handleMovieTrailer(t.name||t.title)}},o.a.createElement("img",{className:e.props.largeImages?"large-image":"image",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.props.largeImages?t.poster_path:t.backdrop_path),alt:t.original_name}),o.a.createElement("p",{className:"overlay"},t.name||t.title)):null})):null),o.a.createElement("div",null,this.state.trailerPath?o.a.createElement(d.a,{videoId:this.state.trailerPath,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}):null))}}]),n}(a.Component),w="46e8e8db28cc36768c2e7b1f9bce5274",k={fetchTrending:"/trending/all/week?api_key=".concat(w,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(w,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(w,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(w,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(w,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(w,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(w,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(w,"&with_genres=99")},y=(n(48),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={bannerImage:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3").concat(this.props.request)).then((function(e){return e.json()})).then((function(t){e.setState({bannerImage:t.results[Math.floor(Math.random()*t.results.length)]},(function(){console.log("b",e.state.bannerImage)}))}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"banner",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original").concat(this.state.bannerImage.backdrop_path,")"),backgroundSize:"cover",backgroundPosition:"center center"}},o.a.createElement("div",{className:"info-div"},o.a.createElement("h1",{className:"title"},this.state.bannerImage.original_name||this.state.bannerImage.name),o.a.createElement("div",{className:"buttons-div"},o.a.createElement("button",{className:"buttons"},"Play"),o.a.createElement("button",{className:"buttons"},"My list")),o.a.createElement("div",{className:"movie-overview"},o.a.createElement("p",null,this.state.bannerImage.overview?this.state.bannerImage.overview.length>150?this.state.bannerImage.overview.slice(0,150)+"...":this.state.bannerImage.overview:""))),o.a.createElement("div",{className:"fade-bottom"})))}}]),n}(a.Component)),N=(n(49),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).listenScrollEvent=function(e){window.scrollY>100?a.setState({scroll:!0}):a.setState({scroll:!1})},a.state={scroll:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return o.a.createElement("div",{className:"navbar ".concat(this.state.scroll?"navbar-scroll":"")},o.a.createElement(g.a,{to:"/loggedin"},o.a.createElement("img",{className:"nav-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png",alt:"netflix"})),o.a.createElement("img",{className:"user-logo",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"user"}))}}]),n}(a.Component)),j=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(y,{request:k.fetchNetflixOriginals}),o.a.createElement(E,{title:"NETFLIX ORIGINALS",request:k.fetchNetflixOriginals,largeImages:!0}),o.a.createElement(E,{title:"Trending",request:k.fetchTrending}),o.a.createElement(E,{title:"Top Rated",request:k.fetchTopRated}),o.a.createElement(E,{title:"Action Movies",request:k.fetchActionMovies}),o.a.createElement(E,{title:"Horror Movies",request:k.fetchHorrorMovies}),o.a.createElement(E,{title:"Romantic Movies",request:k.fetchRomanceMovies}),o.a.createElement(E,{title:"Documentaries",request:k.fetchDocumentaries}))}}]),n}(a.Component),O=n(16),_=n.n(O),I=n(17);o.a.Component;var x=function(){var e=_()(),t=Object(g.e)(e);return console.log(t,e),o.a.createElement(g.b,{history:t},o.a.createElement("div",{className:"App"},o.a.createElement(g.d,{basename:"/Netflix-Clone"},o.a.createElement(f,{path:"/"}),o.a.createElement(j,{path:"/loggedin"}))))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Netflix-Clone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Netflix-Clone","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.8abc9dc4.chunk.js.map