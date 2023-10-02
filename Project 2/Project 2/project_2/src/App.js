import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Staff from './component/pages/Staff';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route path="/" exact={true} component={Home} />
          <Route path="/" exact={true} component={Staff} />
          <h1>Hello</h1>
        </div>
      </Router>
    )
  }
}
export default App