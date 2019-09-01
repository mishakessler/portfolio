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
      <div className="footer-nav">
        <Link to="/" className="smooth">Home</Link>
        <Link to="/development" className="smooth">Development</Link>
        <Link to="/design" className="smooth">Design</Link>
        <Link to="/Entrepreneurship" className="smooth">Entrepreneurship</Link>
        <Link to="/Advocacy" className="smooth">Advocacy</Link>
        <Link to="/Contact" className="smooth">Contact</Link>
      </div>
      <div className="footer-info">
        <p>This portfolio was conceived, designed, and developed by Misha Kessler using React.</p>
      </div>
      <div className="footer-socials">

      </div>
    </div>
  )
}
