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

export default function Entrepreneur() {
  return (
    <div className="landing-entrepreneur">
      <div className="landing-lettermark">
        <img src={Lettermark} alt='Misha Lettermark' />
      </div>
      <div className="landing-titles">
        <h5>Social Innovation Entrepreneur</h5>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I conceive, design, and develop sustainably-funded, socially-responsible mental health tech.</h2>
      </div>
      <div className="ctas">
        <div className="left-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> right for design</h6>
        </div>
        <div className="enter-cta">
          <Link to="/leadership" className="smooth">
            <Button
              basic
              inverted
              content='View Leadership'
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
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> left for advocacy</h6>
        </div>
      </div>
    </div>
  )
}
