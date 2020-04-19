import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import FAQ from './FAQ/FAQ';
import HelpLinks from './HelpLinks/HelpLinks';

class App extends Component{
  render(){
    return (
      <div>
        <NavBar />

        <Switch>
          <Route path='/FAQ' component={FAQ} />
          <Route path='/' exact component={Home} />
          <Route path='/helpful-links' component={HelpLinks} />
        </Switch>
      </div>
    );
  }
}

export default App;
