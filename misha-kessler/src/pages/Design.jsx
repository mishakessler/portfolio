// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// React Semantic
import {
  Label,
  Grid,
  Card,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

// Assets 
import Designs from '../assets/project-assets/Designs'

class Design extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Featured Designs",
      image: 'https://imgur.com/',
      tagline: "",
      description: "",
      helper: "",
      projects: Designs,
    }
  }

  render() {
    return (
      <div className="page design-page">
        <Header />
        <Hero
          className="design-hero"
          image={this.state.image}
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="index design-index">

        </div>
        <div className='key-modal'>
          <Key />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Design)