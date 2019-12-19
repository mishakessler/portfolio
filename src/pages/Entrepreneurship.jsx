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

// Data 
import { Projects } from '../data/EntrepreneurshipProjects'

class Entrepreneurship extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Projects",
      postimage: null,
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
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <Divider />
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