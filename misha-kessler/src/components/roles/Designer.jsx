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
        <h6>UI/UX Designer</h6>
        <span className="hide-on-mobile"><h6>|</h6></span>
        <h6>Graphic Designer</h6>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I deliver meaningful, consistent, and user-friendly brand idendities across all platforms and print media.</h2>
      </div>
    </div>
  )
}
