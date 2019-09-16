// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// Components
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

// Assets 

class ErrorPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Page Not Found",
      postimage: 'https://imgur.com/',
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
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
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

export default withRouter(ErrorPage)

