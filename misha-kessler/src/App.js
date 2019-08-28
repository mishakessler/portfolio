// React
import React, { Component } from 'react'

// React Router
import {
  Link,
  Route,
  withRouter,
  Switch,
  Redirect
} from 'react-router-dom';

// React Semantic
import {
  Icon,
  Button,
} from 'semantic-ui-react'

// Pages
import Landing from './pages/Landing'

// Components

// Assets 
import Logo from './assets/logo.png'

import './App.css';


function App() {
  return (
    <div className="app">
      <div className="landing-logo">
        <img src={Logo} />
      </div>
      <div className="landing" >
        <Landing />
      </div>
    </div>
  );
}

export default App;
