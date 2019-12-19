// React
import React, { useRef } from 'react'

// React Spring
import { useSprings, animated } from 'react-spring'

// React Gesture
import { useGesture } from 'react-use-gesture'

// Lodash
import clamp from 'lodash/clamp'

// Cards
import Advocate from '../components/cards/Advocate'
import Designer from '../components/cards/Designer'
import Developer from '../components/cards/Developer'
import Entrepreneur from '../components/cards/Entrepreneur'
import Hobbyist from '../components/cards/Hobbyist'

// Assets 

const cards = [
  <Developer />,
  <Designer />,
  <Entrepreneur />,
  <Advocate />,
  <Hobbyist />
]

export default function Landing() {
  const index = useRef(0)
  const [props, set] = useSprings(cards.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, cards.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })

  return props.map(({ x, display, sc }, i) => (
    <div className="page-viewer-container">
      <animated.div className="page-viewer" {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
        <animated.div className="page-viewer-cards" style={{ transform: sc.interpolate(s => `scale(${s})`) }}>
          {cards[i]}
        </animated.div>
      </animated.div>
    </div>
  ))
}