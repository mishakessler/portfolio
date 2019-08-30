// React
import React from 'react'

// React Router
import {
  Link
} from 'react-router-dom'

// React Semantic
import {
  Button,
  Icon
} from 'semantic-ui-react'

export default function Developer() {
  return (
    <div className="landing-developer">
      <div className="landing-titles">
        <h6>Full Stack Developer</h6>
        <span className="hide-on-mobile"><h6>|</h6></span>
        <h6>Technical Project Manager</h6>
      </div>
      <div className="landing-welcome smooth">
        <h1 className="smooth">Welcome.</h1>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>My name's <span className="landing-name">Michael Kessler</span>, but you can call me <span className="landing-name">Misha.</span></h2>
        <h2>I build beautiful, agile, full-stack web applications that make a real difference in the world.</h2>
      </div>
      <div className="landing-get-started smooth" >
        <p className="smooth">To get started, click below to view my dev portfolio, or <b><span className="hide-on-desktop">swipe left</span><span className="hide-on-mobile">click and drag left</span></b> to view my other work.</p>
      </div>
      <div className="landing-cta">

      </div>
    </div>
  )
}
