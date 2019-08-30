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

export default function Designer() {
  return (
    <div className="landing-designer">
      <div className="landing-titles">
        <h5>UI/UX Designer</h5>
        <span className="hide-on-mobile"><h5>|</h5></span>
        <h5>Graphic Designer</h5>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I deliver meaningful, consistent, and user-friendly brand idendities across all platforms and print media.</h2>
      </div>
      <div className="ctas">
        <div className="left-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> right for development</h6>
        </div>
        <div className="enter-cta">
          <Button
            basic
            inverted
            content='View Design Portfolio'
            href='/design'
            labelPosition='right'
            className='smooth'
            icon={{
              name: 'chevron down',
            }}
          />
        </div>
        <div className="right-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> left for entrepreneurship</h6>
        </div>
      </div>
    </div>
  )
}
