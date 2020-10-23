import React, { Component } from 'react';
import './homepage.css';
import HomepageNav from './HomepageNav'

class Homepage extends Component {
    
    render() {
        return (
            <div className="main">
                <HomepageNav/>
                <img className="home-image" src ="https://assets.nflxext.com/ffe/siteui/vlv3/e8645526-57d7-4313-9c91-7240482510d7/528f05df-d400-4bc2-a306-577896af36de/IN-en-20200706-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix-logo"/>
                <div className="text">
                    <h1 className="large-text">Unlimited movies, TV shows and more.</h1>
                    <p className="small-text">Watch anywhere. Cancel anytime.</p>
                </div>
            </div>
        );
    }
}

export default Homepage;