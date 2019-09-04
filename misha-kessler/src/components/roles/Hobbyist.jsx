// React
import React from 'react'

// Assets 
import Lettermark from '../../assets/graphics/lettermark-white.png'

export default function Hobbyist() {
  return (
    <div className="landing-hobbyist">
      <div className="landing-lettermark">
        <img src={Lettermark} />
      </div>
      <div className="landing-titles">
        <h5>Hmm... didn't think you'd swipe this far. I guess you want to know more?</h5>
      </div>
      <div className="landing-tagline shaded-text">
        <h2>I'm a pretty avid traveler, trekker, and cyclist.</h2>
        <h2>I've also been called a plant daddy, a coffee addict, an Apple cultist, and even an Instagram "micro-influencer."</h2>
        <p>** But let's be honest... "micro-influencer" sounds pretty snooty.</p>
      </div>
      <div className="ctas">
        <div className="left-cta">
          <h6 className="smooth">
            <span className="hide-on-desktop">swipe</span><span className="hide-on-mobile">click & drag</span> right to get outta here</h6>
        </div>
        <div className="enter-cta"></div>
        <div className="right-cta"></div>
      </div>
    </div>
  )
}
