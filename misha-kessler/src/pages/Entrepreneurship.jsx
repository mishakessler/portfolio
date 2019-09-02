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
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

// Assets 
// import Projects from '../assets/project-assets/projects'

class Entrepreneurship extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Featured Projects",
      image: 'https://imgur.com/',
      tagline: "",
      description: "",
      helper: "",
      // projects: Projects,
    }
  }

  render() {
    return (
      <div className="page entrepreneurship-page">
        <Header />
        <Hero
          className="entrepreneurship-hero"
          image={this.state.image}
          type={this.state.type}
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