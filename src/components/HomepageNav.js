import React, { Component } from 'react';
import './homepage-nav.css';
import GoogleLogin from 'react-google-login';
import { Redirect } from "@reach/router";

class HomepageNav extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
    }


    responseGoogle=response=>{
        
        console.log(response.profileObj);
        if(response.profileObj){
            localStorage.setItem('profileObj',JSON.stringify(response.profileObj))
            this.setState({
                redirect:true
            })
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/loggedin" noThrow />;
        }
        return (
            <div className="homepage-nav">
                <img className="home-nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"/>
                
                <GoogleLogin
                                    clientId="846660842017-iqokg41jpqohmujg4elthu1q7usis6u9.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button className="sign-in-button" onClick={renderProps.onClick}>Sign In</button>
                                    )}
                                    buttonText="SignIn"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                />
            
            </div>
        );
    }
}

export default HomepageNav;


