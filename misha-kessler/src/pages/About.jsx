// React
import React, { Component } from 'react'

// React Router
import {
  Link,
  withRouter
} from 'react-router-dom'

// React Semantic
import {
  Button,
  Icon
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Footer from '../components/modules/Footer'

// Assets 


class About extends Component {
  render() {
    return (
      <div className="page about-page">
        <h1>The About Page</h1>
      </div>
    )
  }
}

export default withRouter(About)

