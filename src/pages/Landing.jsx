import React, { Component } from 'react'

// React Semantic UI
import {
  Divider
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import CardDeck from '../components/modules/CardDeck'
import Footer from '../components/modules/Footer'


export default class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: "https://imgur.com/pcEs3MH.jpg",
      title: "Hey there, I'm Misha.",
      tagline: "Welcome to my portfolio!",
      postimage: null,
      description: "",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page static-page landing-page">
        <Header />
        <Hero
          className="hero landing-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        {/* <CardDeck /> */}
        <Divider />
        <Footer />
      </div>
    )
  }
}
