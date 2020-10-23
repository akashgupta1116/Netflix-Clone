import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import LoggedIn from './components/LoggedIn';
import {Router,createHistory,
  LocationProvider,} from '@reach/router';
import createHashSource from 'hash-source'
import PrivateRoute from './PrivateRoute.js'

function App() {
  
  let source = createHashSource();
  let history = createHistory(source);
  console.log(history,source);
    return (
        <LocationProvider history={history}>
          <div className="App">

            <Router basename='/Netflix-Clone' >
                  <Homepage path='/'/>
                  <PrivateRoute as={LoggedIn} path="/LoggedIn" />
                  <LoggedIn path = '/loggedin'/>
                  
            </Router>
          </div>
        </LocationProvider>
        
    );
  
  }


export default App;
