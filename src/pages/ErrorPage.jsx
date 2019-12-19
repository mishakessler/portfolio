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
import Footer from '../components/modules/Footer'

// Assets 

class ErrorPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: 'https://media.giphy.com/media/BsQAVgY6ksvIY/giphy.gif',
      title: "Page Not Found",
      postimage: null,
      tagline: "404 Error",
      description: "Uh-oh! We got lost somewhere along the way...",
      helper: "",
    }
  }

  render() {
    return (
      <div className="page error-page">
        <Header />
        <Hero
          className="error-hero"
          preimage={this.state.preimage}
          title={this.state.title}
          tagline={this.state.tagline}
          postimage={this.state.postimage}
          description={this.state.description}
          helper={this.state.helper}
        />
        <Divider />
        <div className="body error-body">

        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(ErrorPage)

