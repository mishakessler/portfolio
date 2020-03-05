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

export default function Advocate() {
  return (
    <div className="card advocate-card">
      <div className="card-lettermark">
        <img src={Lettermark} alt='Misha Lettermark' />
      </div>
      <div className="card-titles">
        <h5>Advocate</h5>
        <span className="hide-on-mobile"><h5>|</h5></span>
        <h5>Speaker</h5>
        <span className="hide-on-mobile"><h5>|</h5></span>
        <h5>Thought Leader</h5>
      </div>
      <div className="card-tagline shaded-text">
        <h2>I use my experiences and knowledge to advocate for mental health and suicide prevention.</h2>
      </div>
      <div className="ctas">
        <div className="left-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> right for leadership</h6>
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
        </div>
      </div>
    </div>
  )
}
