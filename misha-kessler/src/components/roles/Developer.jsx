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

export default function Developer() {
  return (
    <div className="landing-developer">
      <div className="landing-titles">
        <h6>Full Stack Developer</h6>
        <span className="hide-on-mobile"><h6>|</h6></span>
        <h6>Technical Project Manager</h6>
      </div>
      <div className="landing-welcome">
        <h1>Welcome.</h1>
      </div>
      <div className="landing-tagline">
        <h2>I build beautiful, agile full-stack web applications that make a real difference.</h2>
      </div>
      {/* <div className="landing-bio">
        <p>I'm a dedicated and agile developer and entrepreneur with over seven years of experience finding creative solutions to pressing issues in the mental and behavioral health space. <span className="hide-on-desktop"><br></br><br></br></span>Results-driven, attentive, and built on a growth mindset, I'm constantly challenging myself to master new technical skills and design high-quality resources that improve the consumer experience.</p>
      </div> */}
      <div className="landing-specialty">
        <p>To get started, enter the site below, or <b><span className="hide-on-desktop">swipe left</span><span className="hide-on-mobile">click and drag left</span></b> to view my other roles.</p>
      </div>
    </div>
  )
}
