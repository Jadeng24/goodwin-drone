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
import Videos from './Components/Videos/Videos.js';
import Pricing from './Components/Pricing/Pricing.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';

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
              <Route component={Videos} path='/videos' />
              <Route component={Pricing} path='/pricing' />
              <Route component={About} path='/about' />
              <Route component={Contact} path='/contact' />
             
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
