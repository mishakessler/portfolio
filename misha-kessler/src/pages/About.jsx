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
import Timeline from '../components/modules/Timeline';
import Footer from '../components/modules/Footer'

// Assets 

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Hey there, I'm Misha.",
      image: null,
      tagline: "And as you've probably noticed, I've worn many hats in my career.",
      description: "I'm a dedicated and agile developer and entrepreneur with over seven years of experience finding creative solutions to pressing issues in the mental and behavioral health space. Results-driven, attentive, and built on a growth mindset, I'm constantly challenging myself to master new technical skills and design high-quality resources that improve the consumer experience.",
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
          <Timeline />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(About)

