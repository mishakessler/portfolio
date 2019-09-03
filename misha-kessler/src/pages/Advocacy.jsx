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
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

// Assets 
import Advocacies from '../assets/project-assets/Advocacies'

class Advocacy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Featured Advocacy",
      tagline: "",
      description: "Portfolio under construction. Check back soon!",
      helper: "",
      projects: Advocacies,
    }
  }

  render() {
    return (
      <div className="page advocacy-page">
        <Header />
        <Hero
          className="advocacy-hero"
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body advocacy-body">
          <div className="index advocacy-index">
          </div>
          <div className='key-modal'>
            <Key />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Advocacy)

