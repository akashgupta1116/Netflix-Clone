(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{18:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(23),a(24),a(2)),s=a(3),l=a(5),m=a(4),u=(a(25),a(26),a(10)),h=a.n(u),g=a(7),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).responseGoogle=function(e){console.log("response",e.profileObj),e.profileObj&&(localStorage.setItem("profileObj",JSON.stringify(e.profileObj)),n.setState({redirect:!0}))},n.state={redirect:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(g.b,{to:"/loggedin",noThrow:!0}):r.a.createElement("div",{className:"homepage-nav"},r.a.createElement("img",{className:"home-nav-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"}),r.a.createElement(h.a,{clientId:"846660842017-iqokg41jpqohmujg4elthu1q7usis6u9.apps.googleusercontent.com",render:function(e){return r.a.createElement("button",{className:"sign-in-button",onClick:e.onClick},"Sign In")},buttonText:"SignIn",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}))}}]),a}(n.Component),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(v,null),r.a.createElement("img",{className:"home-image",src:"https://assets.nflxext.com/ffe/siteui/vlv3/e8645526-57d7-4313-9c91-7240482510d7/528f05df-d400-4bc2-a306-577896af36de/IN-en-20200706-popsignuptwoweeks-perspective_alpha_website_small.jpg"}),r.a.createElement("div",{className:"text"},r.a.createElement("h1",{className:"large-text"},"Unlimited movies, TV shows and more."),r.a.createElement("p",{className:"small-text"},"Watch anywhere. Cancel anytime.")))}}]),a}(n.Component),f=(a(33),a(12)),d=a(15),b=a.n(d),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleMovieTrailer=function(e){n.state.trailerPath?n.setState({trailerPath:""}):b()(e||"").then((function(e){var t=new URLSearchParams(new URL(e).search);n.setState({trailerPath:t.get("v")})})).catch(console.error)},n.state={movies:[],trailerPath:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3").concat(this.props.request)).then((function(e){return e.json()})).then((function(t){console.log(t.results),e.setState({movies:t.results},(function(){console.log("m",e.state.movies)}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",{className:"netflix-headings"},this.props.title),r.a.createElement("div",{className:"image-row"},this.state.movies?this.state.movies.map((function(t){return t.backdrop_path?r.a.createElement("img",{className:e.props.largeImages?"large-image":"image",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.props.largeImages?t.poster_path:t.backdrop_path),alt:t.original_name,onClick:function(){return e.handleMovieTrailer(t.name)}}):null})):null),r.a.createElement("div",null,this.state.trailerPath?r.a.createElement(f.a,{videoId:this.state.trailerPath,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}):null))}}]),a}(n.Component),w="46e8e8db28cc36768c2e7b1f9bce5274",O={fetchTrending:"/trending/all/week?api_key=".concat(w,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(w,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(w,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(w,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(w,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(w,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(w,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(w,"&with_genres=99")},j=(a(48),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bannerImage:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://api.themoviedb.org/3").concat(this.props.request)).then((function(e){return e.json()})).then((function(t){e.setState({bannerImage:t.results[Math.floor(Math.random()*t.results.length)]},(function(){console.log("b",e.state.bannerImage)}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"banner",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original").concat(this.state.bannerImage.backdrop_path,")"),backgroundSize:"cover",backgroundPosition:"center center"}},r.a.createElement("div",{className:"info-div"},r.a.createElement("h1",{className:"title"},this.state.bannerImage.original_name||this.state.bannerImage.name),r.a.createElement("div",{className:"buttons-div"},r.a.createElement("button",{className:"buttons"},"Play"),r.a.createElement("button",{className:"buttons"},"My list")),r.a.createElement("div",{className:"movie-overview"},r.a.createElement("p",null,this.state.bannerImage.overview?this.state.bannerImage.overview.length>150?this.state.bannerImage.overview.slice(0,150)+"...":this.state.bannerImage.overview:""))),r.a.createElement("div",{className:"fade-bottom"})))}}]),a}(n.Component)),k=(a(49),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).listenScrollEvent=function(e){window.scrollY>100?n.setState({scroll:!0}):n.setState({scroll:!1})},n.state={scroll:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbar ".concat(this.state.scroll?"navbar-scroll":"")},r.a.createElement("a",{href:"/loggedin"},r.a.createElement("img",{className:"nav-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"})),r.a.createElement("img",{className:"user-logo",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"}))}}]),a}(n.Component)),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(j,{request:O.fetchNetflixOriginals}),r.a.createElement(E,{title:"NETFLIX ORIGINALS",request:O.fetchNetflixOriginals,largeImages:!0}),r.a.createElement(E,{title:"Trending",request:O.fetchTrending}),r.a.createElement(E,{title:"Top Rated",request:O.fetchTopRated}),r.a.createElement(E,{title:"Action Movies",request:O.fetchActionMovies}),r.a.createElement(E,{title:"Horror Movies",request:O.fetchHorrorMovies}),r.a.createElement(E,{title:"Romantic Movies",request:O.fetchRomanceMovies}),r.a.createElement(E,{title:"Documentaries",request:O.fetchDocumentaries}))}}]),a}(n.Component),N=a(16),_=a.n(N),I=a(17),S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={user:JSON.parse(localStorage.getItem("profileObj"))},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.as,a=Object(I.a)(e,["as"]);return this.state.user?r.a.createElement(t,a):r.a.createElement(p,null)}}]),a}(r.a.Component);var M=function(){var e=_()(),t=Object(g.d)(e);return console.log(t,e),r.a.createElement(g.a,{history:t},r.a.createElement("div",{className:"App"},r.a.createElement(g.c,{basename:"/Netflix-Clone"},r.a.createElement(p,{path:"/"}),r.a.createElement(S,{as:y,path:"/LoggedIn"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.aac30362.chunk.js.map