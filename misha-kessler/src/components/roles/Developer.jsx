// React
import React from 'react'

// React Router
import {
  Link
} from 'react-router-dom'

// React Semantic
import {
  Button,
} from 'semantic-ui-react'

// Assets 
import Lettermark from '../../assets/graphics/lettermark-white.png'

export default function Developer() {
  return (
    <div className="landing-developer">
      <div className="landing-lettermark">
        <img src={Lettermark} alt='Misha Lettermark' />
      </div>
      <div className="landing-titles">
        <h5>Full Stack Developer</h5>
        <span className="hide-on-mobile"><h5>|</h5></span>
        <h5>Technical Project Manager</h5>
      </div>
      <div className="landing-welcome smooth">
        <h1 className="smooth">Welcome.</h1>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>My name's <span className="landing-name">Michael Kessler</span>, but you can call me <span className="landing-name">Misha.</span> I build beautiful, agile, full-stack web applications that make a real difference in the world.</h2>
      </div>
      <div className="ctas">
        <div className="left-cta">
        </div>
        <div className="enter-cta">
          <Link to="/development" className="smooth">
            <Button
              basic
              inverted
              content='View Website Portfolio'
              labelPosition='right'
              className='smooth'
              icon={{
                name: 'chevron down',
              }}
            />
          </Link>
        </div>
        <div className="right-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> left for design
            </h6>
        </div>
      </div>
    </div>
  )
}
