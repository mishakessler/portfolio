// React
import React, { useRef } from 'react'

// React Router

// React Spring
import { useSprings, animated } from 'react-spring'

// React Gesture
import { useGesture } from 'react-use-gesture'

// React Semantic

// Lodash
import clamp from 'lodash/clamp'

// Pages
import WebDev from './WebDev'

// Components

// Assets 

const pages = [
  <WebDev />,
  <WebDev />,
  <WebDev />,
  <WebDev />,
]

export default function Landing() {
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })

  return props.map(({ x, display, sc }, i) => (
    <animated.div className="page-viewer" {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
      <animated.div className="page-viewer-pages" style={{ transform: sc.interpolate(s => `scale(${s})`) }}>
        {pages[i]}
      </animated.div>/>
    </animated.div>
  ))
}