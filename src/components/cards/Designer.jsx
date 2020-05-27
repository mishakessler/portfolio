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

export default function Designer() {
  return (
    <div className="landing-designer">
      <div className="landing-lettermark">
        <img src={Lettermark} alt='Misha Lettermark' />
      </div>
      <div className="landing-titles">
        <h5>UI/UX Designer</h5>
        <span className="hide-on-mobile"><h5>|</h5></span>
        <h5>Graphic Designer</h5>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I deliver meaningful, consistent, and user-friendly brand identities across all platforms and print media.</h2>
      </div>
      <div className="ctas">
        <div className="left-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> right for development</h6>
        </div>
        <div className="enter-cta">
          <Link to="/design" className="smooth">
            <Button
              basic
              inverted
              content='View Design Portfolio'
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
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> left for leadership</h6>
        </div>
      </div>
    </div>
  )
}
