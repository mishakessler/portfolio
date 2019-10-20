// React
import React, { Component } from 'react'

// React Router
import {
  withRouter
} from 'react-router-dom'

// Components
import SpaceTimeContinuum from '../components/modules/SpaceTimeContinuum'

// Assets 

class SpaceTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preimage: null,
      title: null,
      postimage: null,
      tagline: null,
      description: null,
      helper: null,
    }
  }

  render() {
    return (
      <div className="page spacetime-page">
        <img src='https://media.giphy.com/media/xUPGcp5ajQ3NMJ5MIM/giphy.gif' alt='Background GIF' />
        <div className="body spacetime-body">
          <SpaceTimeContinuum />
        </div>
      </div>
    )
  }
}

export default withRouter(SpaceTime)

