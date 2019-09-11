// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

class Entrepreneurship extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Featured Projects",
      tagline: "",
      description: "",
      helper: "Page under construction. Check back soon!",
    }
  }

  render() {
    return (
      <div className="page entrepreneurship-page">
        <Header />
        <Hero
          className="entrepreneurship-hero"
          title={this.state.title}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body entrepreneurship-body">
          <div className="index entrepreneurship-index">

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


export default withRouter(Entrepreneurship)