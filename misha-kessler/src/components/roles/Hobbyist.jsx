// React
import React from 'react'

// React Router
import {
  Link
} from 'react-router-dom'

// React Spring

// React Gesture

// React Semantic
import {
  Button,
  Icon
} from 'semantic-ui-react'

// Lodash

// Pages

// Components

// Assets 

export default function Hobbyist() {
  return (
    <div className="landing-hobbyist">
      <div className="landing-titles">
        <h5>Hmm... didn't think you'd swipe this far. I guess you want to know more?</h5>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I'm a pretty avid traveler, trekker, and cyclist.</h2>
        <br></br>
        <h2>I've also been called a plant daddy, a coffee addict, an Apple cultist, and even an Instagram "micro-influencer."</h2>
        <p>** But let's be honest... "micro-influencer" sounds pretty snooty.</p>
      </div>
      <div className="ctas">
        <div className="left-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> right to get outta here</h6>
        </div>
        <div className="enter-cta"></div>
        <div className="right-cta"></div>
      </div>
    </div>
  )
}
