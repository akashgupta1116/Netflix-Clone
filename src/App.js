import React,{useState,useEffect} from 'react';
import './App.css';
import Homepage from './components/Homepage'
import LoggedIn from './components/LoggedIn';
import {Router,Redirect} from '@reach/router';
import PrivateRoute from './PrivateRoute.js'

function App() {
 

    
    return (
      <div className="App">
       <Router>
            <Homepage path='/'/>
            {/* <PrivateRoute as={LoggedIn} path="/LoggedIn" /> */}
            <LoggedIn path = '/loggedin'/>
            
       </Router>
        
      </div>
    );
  
  }


export default App;
