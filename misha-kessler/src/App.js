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
      <div className="body">
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/resources" render={() =>
              <Listings listings={this.state.listings} />} />
            <Route path="/resources/:id" render={() =>
              <Listing />} />
            <Route path="/articles" render={() =>
              <Articles />} />
            <Route exact path="/sponsors" render={() =>
              <Sponsors sponsors={this.state.sponsors} />} />
            <Route path="/sponsors/:id" render={() =>
              <Sponsor />} />
            <Route path="/directory" render={() =>
              <Directory sponsors={this.state.sponsors} />} /> */}
          <Route path='/*' render={() =>
            <Redirect to='/' />} />
        </Switch>
      </div>

    </div>
  );
}

export default withRouter(App);
