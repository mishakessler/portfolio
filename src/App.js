// React
import React, { Component } from 'react'

// React Router
import {
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';

// React Transition Group
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

// Pages
import Landing from './pages/Landing'
import Development from './pages/Development'
import Design from './pages/Design'
import Entrepreneurship from './pages/Entrepreneurship'
import Advocacy from './pages/Advocacy'
import About from './pages/About'
import Contact from './pages/Contact'
import SpaceTime from './pages/SpaceTime';
import ErrorPage from './pages/ErrorPage'

// Components

// Assets 

// Stylesheet
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames='fade'>
              <Switch location={location}>
                <Route exact path="/" component={Landing} />
                <Route exact path="/development" component={Development} />
                <Route path="/design" component={Design} />
                <Route exact path="/entrepreneurship" component={Entrepreneurship} />
                <Route path="/advocacy" component={Advocacy} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/woah" component={SpaceTime} />
                <Route path='/*' component={ErrorPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    )
  }
}

export default withRouter(App);
