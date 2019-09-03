// React
import React from 'react'

// React Router
import {
  Link
} from 'react-router-dom'

// React Spring

// React Gesture

// React Semantic
import {
  Divider,
  Button,
  Icon
} from 'semantic-ui-react'

// Lodash

// Pages

// Components

// Assets


export default function Footer() {
  return (
    <div className="footer">
      <Divider />
      <div className="footer-nav">
        <Link to="/" className="smooth">Home</Link>
        <Link to="/development" className="smooth">Development</Link>
        <Link to="/design" className="smooth">Design</Link>
        <Link to="/entrepreneurship" className="smooth">Entrepreneurship</Link>
        <Link to="/advocacy" className="smooth">Thought Leadership</Link>
        <Link to="/about" className="smooth">About</Link>
        <Link to="/contact" className="smooth">Contact</Link>
      </div>
      <div className="footer-info">
        <p>This portfolio was conceived, designed, and developed by Misha Kessler using React, React Router, React Transition Group, React Spring, React Use Gesture, React Vertical Timeline, and Semantic UI.</p>
      </div>
      <div className="footer-socials">

      </div>
    </div>
  )
}
