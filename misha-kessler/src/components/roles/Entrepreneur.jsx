// React
import React from 'react'

// React Semantic
import {
  Button,
} from 'semantic-ui-react'

export default function Entrepreneur() {
  return (
    <div className="landing-entrepreneur">
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
          <Button
            basic
            inverted
            content='View Entrepreneurship'
            href='/entrepreneurship'
            labelPosition='right'
            className='smooth'
            icon={{
              name: 'chevron down',
            }}
          />
        </div>
        <div className="right-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> left for advocacy</h6>
        </div>
      </div>
    </div>
  )
}
