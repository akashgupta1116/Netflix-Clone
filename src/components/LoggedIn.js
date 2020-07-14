import React, { Component } from 'react';
import Row from './Row';
import request from '../request.js';
import Banner from './Banner';
import NavBar from './NavBar.js';

class LoggedIn extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Banner request={request.fetchNetflixOriginals}/>
                <Row title='NETFLIX ORIGINALS' request={request.fetchNetflixOriginals} largeImages/>
                <Row title='Trending' request={request.fetchTrending}/>
                <Row title='Top Rated' request={request.fetchTopRated}/>
                <Row title='Action Movies' request={request.fetchActionMovies}/>
                <Row title='Horror Movies' request={request.fetchHorrorMovies}/>
                <Row title='Romantic Movies' request={request.fetchRomanceMovies}/>
                <Row title='Documentaries' request={request.fetchDocumentaries}/>
            </div>
        );
    }
}

export default LoggedIn;