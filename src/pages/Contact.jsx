// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// React Semantic
import {
  Image
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Footer from '../components/modules/Footer'

// Assets 
import Phone from '../assets/graphics/phone.png'
import Mobile from '../assets/graphics/mobile.png'
import Email from '../assets/graphics/email.png'
import Github from '../assets/graphics/github.png'
import LinkedIn from '../assets/graphics/linkedin.png'
import Facebook from '../assets/graphics/facebook.png'
import Instagram from '../assets/graphics/instagram.png'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: "https://imgur.com/pcEs3MH.jpg",
      title: "Get In Touch",
      postimage: null,
      tagline: "Want to get in touch?",
      description: "I've disabled my contact form due to bot spam, so please email me directly or visit the links below!",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page static-page contact-page">
        <Header />
        <Hero
          className="contact-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <div className="body contact-body">
          <div className="contact-socials">
            <Image
              src={Phone}
              verticalAlign='middle'
              as='a'
              href='tel:+16466561620'
              target='_blank'
              rel='noopener'
            />
            <Image
              src={Mobile}
              verticalAlign='middle'
              as='a'
              href='sms:+16466561620&body=Hey%2520Misha!'
              target='_blank'
              rel='noopener'
            />
            <Image
              src={Email}
              verticalAlign='middle'
              as='a'
              href='mailto:misha.kessler@gmail.com&subject=Hey%2520Misha!'
              target='_blank'
              rel='noopener'
            />
            <Image
              src={Github}
              verticalAlign='middle'
              as='a'
              href='https://github.com/mishakessler'
              target='_blank'
              rel='noopener'
            />
            <Image
              src={LinkedIn}
              verticalAlign='middle'
              as='a'
              href='https://www.linkedin.com/in/mishakessler'
              target='_blank'
              rel='noopener'
            />
            <Image
              src={Facebook}
              verticalAlign='middle'
              as='a'
              href='https://www.facebook.com/mishakessler'
              target='_blank'
              rel='noopener'
            />
            <Image
              src={Instagram}
              verticalAlign='middle'
              as='a'
              href='https://www.instagram.com/mishakessler'
              target='_blank'
              rel='noopener'
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default withRouter(Contact)