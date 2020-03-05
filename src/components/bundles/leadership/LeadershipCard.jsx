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
import Lettermark from '../../../assets/graphics/lettermark-white.png'

export default function Leader() {
  return (
    <div className="card leadership-card">
      <div className="card-lettermark">
        <img src={Lettermark} alt='Misha Lettermark' />
      </div>
      <div className="card-titles">
        <h5>Social Innovation Entrepreneur</h5>
      </div>
      <div className="card-tagline shaded-text">
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
