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

import './App.css';


function App() {
  return (
    <div className="app">
      <Landing />
    </div>
  );
}

export default App;
