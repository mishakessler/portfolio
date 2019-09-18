// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// React Semantic UI
import {
  Divider
} from 'semantic-ui-react'

// Components
import Header from './Header'
import Hero from './Hero'
import Key from '../components/modules/Key'
import Footer from './Footer'

import DesignIndex from '../components/modules/DesignIndex'

// Assets 
import Designs from '../assets/project-assets/DesignProjects'

class Design extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Designs",
      tagline: "",
      postimage: null,
      description: "",
      helper: "Portfolio under construction. Check back soon!",
      projects: Designs,
    }
  }

  render() {
    return (
      <div className="page design-page">
        <Header />
        <Hero
          className="design-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <Divider />
        <div className="body design-body">
          <div className="index design-index">
            <DesignIndex
              projects={this.state.projects} />
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

export default withRouter(Design)