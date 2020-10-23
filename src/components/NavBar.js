import React, { Component } from 'react';
import './navbar.css' ;
import {Link} from '@reach/router'

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
            scroll:false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    listenScrollEvent = e => {
        if (window.scrollY > 100) {
          this.setState({scroll: true})
        } else {
          this.setState({scroll: false})
        }
      }
    render() {
        return (
            <div className={`navbar ${this.state.scroll?'navbar-scroll':''}`} >
                <Link to="/loggedin"><img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="netflix"/></Link>
                <img className="user-logo" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user"/>
            </div>
        );
    }
}

export default NavBar;