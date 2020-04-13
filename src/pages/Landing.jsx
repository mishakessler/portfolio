// React
import React, { Component } from 'react'

// React Router
import {
  Link,
  withRouter
} from 'react-router-dom'

// React Semantic UI
import {
  Divider
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Cards from '../components/modules/Cards'
import Footer from '../components/modules/Footer'

// Assets 
import Misha from '../assets/images/misha-work.jpg'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: "https://imgur.com/pcEs3MH.jpg",
      title: "Welcome.",
      tagline: null,
      postimage: null,
      description: null,
      helper: null,
    }
  }

  render() {
    return (
      <div className="page dynamic-page landing-page">
        <Header />
        <div className="landing-welcome">
          <h1 className="smooth">Welcome.</h1>
        </div>
        <Cards />
        <Divider />
        <Footer />
      </div>
    )
  }
}

export default withRouter(Landing)

