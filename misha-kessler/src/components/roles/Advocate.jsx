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

export default function Advocate() {
  return (
    <div className="landing-advocate">
      <div className="landing-titles">
        <h6>Advocate</h6>
        <span className="hide-on-mobile"><h6>|</h6></span>
        <h6>Speaker</h6>
        <span className="hide-on-mobile"><h6>|</h6></span>
        <h6>Thought Leader</h6>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I use my experiences and knowledge to advocate for mental health and suicide prevention.</h2>
      </div>
    </div>
  )
}
