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

export default function Advocate() {
  return (
    <div className="landing-advocate">
      <div className="landing-lettermark">
        <img src={Lettermark} />
      </div>
      <div className="landing-titles">
        <h5>Advocate</h5>
        <span className="hide-on-mobile"><h5>|</h5></span>
        <h5>Speaker</h5>
        <span className="hide-on-mobile"><h5>|</h5></span>
        <h5>Thought Leader</h5>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I use my experiences and knowledge to advocate for mental health and suicide prevention.</h2>
      </div>
      <div className="ctas">
        <div className="left-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> right for entrepreneurship</h6>
        </div>
        <div className="enter-cta">
          <Link to="/advocacy" className="smooth">
            <Button
              basic
              inverted
              content='View Advocacy'
              labelPosition='right'
              className='smooth'
              icon={{
                name: 'chevron down',
              }}
            />
          </Link>
        </div>
        <div className="right-cta">
          <h6 className="smooth"></h6>
        </div>
      </div>
    </div>
  )
}
