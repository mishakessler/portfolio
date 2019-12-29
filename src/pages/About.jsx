// React
import React, { Component } from 'react'

// React Router
import {
  Link,
  withRouter
} from 'react-router-dom'

// React Semantic UI
import {
  Divider
} from 'semantic-ui-react'

// Components
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Timeline from '../components/modules/Timeline'
import Footer from '../components/modules/Footer'

// Assets 
import Misha from '../assets/images/misha-work.jpg'

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: "https://imgur.com/pcEs3MH.jpg",
      title: "Hey there, I'm Misha.",
      tagline: "And as you've probably noticed, I've worn many hats in my career.",
      postimage: null,
      description: "First and foremost, I'm a dedicated and agile developer and aspiring social entrepreneur. I have over seven years of experience finding creative solutions to pressing issues in the mental and behavioral health space; in that time, I've become a published and award-winning thought leader in suicide prevention, explored founding and developing my own companies and charities, climbed mountains for fundraisers, and spoken to audiences ranging from charity galas and international summit attendees to the United States Congress.",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page static-page about-page">
        <Header />
        <Hero
          className="about-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <Divider />
        <div className="about-why">
          <h3>My "Why"</h3>
          <p>As a young adult, my own experiences with depression and anxiety became the foundation of my career, motivating, informing, and grounding my passionate pursuit of justice and equity in mental healthcare. Since then, the thread of my career has been to bring principles of consumer autonomy, user-centered design, and evidence-based practices to digital mental health technology, always with treatment and prevention outcomes as my lodestar.</p>
          <p>Years later, stronger and wiser for my experiences, I'm results-driven, attentive, and built on a growth mindset; I'm always challenging myself to master new skills and create unique resources that improve consumer quality of life.</p>
        </div>
        <div className="about-journey smooth">
          <img src={Misha} alt="Misha coding at General Assembly." className="shaded-box" />
          <h3>My Journey To Full-Stack Engineering</h3>
          <p>Want to learn more about how and why I came to the intersection of mental health, technology, socially responsible business, and mountain climbing?</p>
          <p>Understandable.</p>
        </div>
        <Timeline />
        <div className="about-roles">
          <div className="about-roles-current">
            <p>Currently, I serve as:
              <ul>
                <li>Board Member of Six Feet Over;</li>
                <li>Committee Member of the National Suicide Prevention Lifeline's Consumer-Survivor Subcommittee;</li>
                <li>Council Member of the NY State Suicide Prevention Council;</li>
                <li>Member of the NY State Department of Health's CDC Suicide Syndromic Surveillance Grant Advisory Board (expected)</li>
              </ul>
            </p>
          </div>
          <div className="about-roles-previous">
            <p>Previously, I've served as:
              <ul>
                <li>Board Member of the Mental Health Association of Maryland;</li>
                <li>Panel Member of the American Psychological Association's Guideline Development Panel for Depressive Disorders;</li>
                <li>Project Director of The Campbell Center's (SAMHSA) Statewide Peer Networking Grant;</li>
                <li>Task Force Member of Governor Cuomo's commissioned NY State Suicide Prevention Task Force.</li>
              </ul>
            </p>
          </div>

          <p>For more, check out my <Link to='/advocacy'>Thought Leadership</Link> and <Link to='/entrepreneurship'>Entrepreneurship</Link> portfolios.</p>

        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(About)

