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
import About from './pages/About'
import Contact from './pages/Contact'
import Development from './pages/Development'
import Design from './pages/Design'
import Entrepreneurship from './pages/Entrepreneurship'
import Advocacy from './pages/Advocacy'

// Components

// Assets 

import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/development" render={() =>
          <Development />} />
        <Route path="/design" render={() =>
          <Design />} />
        <Route exact path="/entrepreneurship" render={() =>
          <Entrepreneurship />} />
        <Route path="/advocacy" render={() =>
          <Advocacy />} />
        <Route path="/about" render={() =>
          <About />} />
        <Route path="/contact" render={() =>
          <Contact />} />
        <Route path='/*' render={() =>
          <Redirect to='/' />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
