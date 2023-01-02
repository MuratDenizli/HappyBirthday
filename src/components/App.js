import React, { Component } from 'react';
import '../assets/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

// Google Analytics
export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={(props) => <Home name="Sevgi " {...props} />} />
        </Switch>
        <Footer />
      </Router>
    )
  }

}
