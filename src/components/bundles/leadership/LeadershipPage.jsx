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
import Header from '../../modules/Header'
import Hero from '../../modules/Hero'
import Key from '../../modules/Key'
import Footer from '../../modules/Footer'

// Index
// import LeadershipIndex from './LeadershipIndex'

// Data 
// import { Committees } from '../../../data/LeadershipProjects'

class Leadership extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Leadership",
      postimage: null,
      tagline: "",
      description: "",
      helper: "Page under construction. Check back soon!",
    }
  }

  render() {
    return (
      <div className="page dynamic-page leadership-page">
        <Header />
        <Hero
          className="leadership-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <Divider />
        <div className="body leadership-body">
          <div className="index leadership-index">

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


export default withRouter(Leadership)