// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// Components
import Header from './Header'
import Hero from './Hero'
import Key from '../components/modules/Key'
import Footer from './Footer'

import DevelopmentIndex from '../components/modules/DevelopmentIndex'

// Assets 
import { Websites } from '../assets/project-assets/WebsiteProjects'

class Development extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Websites",
      tagline: "",
      postimage: null,
      description: "",
      helper: "Each project card features multiple icons to help you preview the project's scope. Feel free to check out the icon key beneath the card gallery, if you're unsure of what some icons imply.",
      websites: Websites,
    }
  }

  render() {
    return (
      <div className="page development-page">
        <Header />
        <Hero
          className="development-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          postimage={this.state.postimage}
          tagline={this.state.tagline}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body development-body">
          <div className="index development-index">
            <DevelopmentIndex
              projects={this.state.websites} />
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

export default withRouter(Development)