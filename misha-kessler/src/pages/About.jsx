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
  constructor(props) {
    super(props)

    this.state = {
      title: "About Me",
      image: 'https://imgur.com/',
      tagline: "",
      description: "",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page about-page">
        <Header />
        <Hero
          className="about-hero"
          image={this.state.image}
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body about-body">

        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(About)

