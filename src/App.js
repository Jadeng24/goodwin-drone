import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHelicopter,
   faKey } from '@fortawesome/free-solid-svg-icons';


//Components
import Home from './Components/Home/Home.js';
library.add(faHelicopter, faKey);
class App extends Component {
  render() {
    return (
      <div className="App">

        <div>

          <Router>

            <Switch>

              {/*===| Nav |=================================*/}


              {/*===| Routes |=================================*/}
              <Route component={Home} exact path='/' />
              {/* <Route component={About} path='/about' />
              */}
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
