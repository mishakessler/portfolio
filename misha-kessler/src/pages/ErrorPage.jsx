// React
import React, { Component } from 'react'

// React Router
import {
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
      title: "Page Not Found",
      image: 'https://imgur.com/',
      tagline: "404 Error",
      description: "Uh-oh! We got lost somewhere along the way. That said, getting lost is a great opportunity to explore...",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page error-page">
        <Header />
        <Hero
          className="error-hero"
          image={this.state.image}
          type={this.state.type}
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body error-body">

        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(About)

