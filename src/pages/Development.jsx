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
import Header from '../components/modules/Header'
import Hero from '../components/modules/Hero'
import Key from '../components/modules/Key'
import Footer from '../components/modules/Footer'

// Index
import DevelopmentIndex from '../components/indices/DevelopmentIndex'

// Data 
import { Websites } from '../data/WebsiteProjects'

class Development extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: "Featured Websites",
      tagline: "Beautiful, immersive, user-friendly websites, built with a mission in mind.",
      postimage: null,
      description: "For over 5 years, I've been designing and developing websites for social justice causes. Initially, my passion for large-scale social impact intersected with attractive, user-friendly websites which I developed for nonprofit organizations. To this day, I continue to build websites with the goal of enabling social justice programs in branding themselves across digital mediums, thereby amplifying brand recognition and social impact.",
      helper: "Each project card features multiple icons to help preview the project's scope. Check out the icon key in the lower right hand corner, if you're unsure of what the icons mean.",
      websites: Websites,
    }
  }

  // handleOpen = () => {
  //   this.setState({
  //     modalOpen: true,
  //   })
  // }

  // handleClose = () => {
  //   this.setState({
  //     modalOpen: true,
  //   })
  // }

  render() {
    return (
      <div className="page dynamic-page development-page">
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
        <Divider />
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