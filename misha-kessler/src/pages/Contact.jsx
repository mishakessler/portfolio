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

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Get In Touch",
      image: 'https://imgur.com/',
      tagline: "",
      description: "",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page contact-page">
        <Header />
        <Hero
          className="contact-hero"
          image={this.state.image}
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body contact-body">

        </div>
        <Footer />
      </div>
    )
  }
}


export default withRouter(Contact)