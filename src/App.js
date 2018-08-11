import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home.js';
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
