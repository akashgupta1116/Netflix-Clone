(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{18:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),c=(a(23),a(24),a(2)),s=a(3),l=a(5),m=a(4),u=(a(25),a(26),a(10)),h=a.n(u),g=a(6),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).responseGoogle=function(e){console.log("response",e.profileObj),e.profileObj&&(localStorage.setItem("profileObj",JSON.stringify(e.profileObj)),n.setState({redirect:!0}))},n.state={redirect:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return this.state.redirect?o.a.createElement(g.b,{to:"/loggedin",noThrow:!0}):o.a.createElement("div",{className:"homepage-nav"},o.a.createElement("img",{className:"home-nav-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"}),o.a.createElement(h.a,{clientId:"846660842017-iqokg41jpqohmujg4elthu1q7usis6u9.apps.googleusercontent.com",render:function(e){return o.a.createElement("button",{className:"sign-in-button",onClick:e.onClick},"Sign In")},buttonText:"SignIn",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}))}}]),a}(n.Component),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement(v,null),o.a.createElement("img",{className:"home-image",src:"https://assets.nflxext.com/ffe/siteui/vlv3/e8645526-57d7-4313-9c91-7240482510d7/528f05df-d400-4bc2-a306-577896af36de/IN-en-20200706-popsignuptwoweeks-perspective_alpha_website_small.jpg"}),o.a.createElement("div",{className:"text"},o.a.createElement("h1",{className:"large-text"},"Unlimited movies, TV shows and more."),o.a.createElement("p",{className:"small-text"},"Watch anywhere. Cancel anytime.")))}}]),a}(n.Component),d=(a(33),a(12)),f=a(15),b=a.n(f),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleMovieTrailer=function(e){n.state.trailerPath?n.setState({trailerPath:""}):b()(e||"").then((function(e){var t=new URLSearchParams(new URL(e).search);n.setState({trailerPath:t.get("v")})})).catch(console.error)},n.state={movies:[],trailerPath:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3").concat(this.props.request)).then((function(e){return e.json()})).then((function(t){console.log(t.results),e.setState({movies:t.results},(function(){console.log("m",e.state.movies)}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",{className:"netflix-headings"},this.props.title),o.a.createElement("div",{className:"image-row"},this.state.movies?this.state.movies.map((function(t){return t.backdrop_path?o.a.createElement("img",{className:e.props.largeImages?"large-image":"image",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.props.largeImages?t.poster_path:t.backdrop_path),alt:t.original_name,onClick:function(){return e.handleMovieTrailer(t.name)}}):null})):null),o.a.createElement("div",null,this.state.trailerPath?o.a.createElement(d.a,{videoId:this.state.trailerPath,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}):null))}}]),a}(n.Component),w="46e8e8db28cc36768c2e7b1f9bce5274",k={fetchTrending:"/trending/all/week?api_key=".concat(w,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(w,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(w,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(w,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(w,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(w,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(w,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(w,"&with_genres=99")},j=(a(48),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={bannerImage:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3").concat(this.props.request)).then((function(e){return e.json()})).then((function(t){e.setState({bannerImage:t.results[Math.floor(Math.random()*t.results.length)]},(function(){console.log("b",e.state.bannerImage)}))}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"banner",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original").concat(this.state.bannerImage.backdrop_path,")"),backgroundSize:"cover",backgroundPosition:"center center"}},o.a.createElement("div",{className:"info-div"},o.a.createElement("h1",{className:"title"},this.state.bannerImage.original_name||this.state.bannerImage.name),o.a.createElement("div",{className:"buttons-div"},o.a.createElement("button",{className:"buttons"},"Play"),o.a.createElement("button",{className:"buttons"},"My list")),o.a.createElement("div",{className:"movie-overview"},o.a.createElement("p",null,this.state.bannerImage.overview?this.state.bannerImage.overview.length>150?this.state.bannerImage.overview.slice(0,150)+"...":this.state.bannerImage.overview:""))),o.a.createElement("div",{className:"fade-bottom"})))}}]),a}(n.Component)),y=(a(49),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).listenScrollEvent=function(e){window.scrollY>100?n.setState({scroll:!0}):n.setState({scroll:!1})},n.state={scroll:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return o.a.createElement("div",{className:"navbar ".concat(this.state.scroll?"navbar-scroll":"")},o.a.createElement("a",{href:"/loggedin"},o.a.createElement("img",{className:"nav-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"})),o.a.createElement("img",{className:"user-logo",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"}))}}]),a}(n.Component)),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(j,{request:k.fetchNetflixOriginals}),o.a.createElement(E,{title:"NETFLIX ORIGINALS",request:k.fetchNetflixOriginals,largeImages:!0}),o.a.createElement(E,{title:"Trending",request:k.fetchTrending}),o.a.createElement(E,{title:"Top Rated",request:k.fetchTopRated}),o.a.createElement(E,{title:"Action Movies",request:k.fetchActionMovies}),o.a.createElement(E,{title:"Horror Movies",request:k.fetchHorrorMovies}),o.a.createElement(E,{title:"Romantic Movies",request:k.fetchRomanceMovies}),o.a.createElement(E,{title:"Documentaries",request:k.fetchDocumentaries}))}}]),a}(n.Component),N=a(16),_=a.n(N),I=a(17);o.a.Component;var S=function(){var e=_()(),t=Object(g.d)(e);return console.log(t,e),o.a.createElement(g.a,{history:t},o.a.createElement("div",{className:"App"},o.a.createElement(g.c,{basename:"/Netflix-Clone"},o.a.createElement(p,{path:"/"}),o.a.createElement(O,{path:"/loggedin"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0e8a51c4.chunk.js.map