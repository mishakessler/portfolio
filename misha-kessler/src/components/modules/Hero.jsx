// React
import React from 'react'

// React Semantic
import { Divider } from 'semantic-ui-react'

export default function Hero(props) {
  return (
    <div className="hero">
      <img src={props.image} />
      <h1>{props.title}</h1>
      <h3>{props.tagline}</h3>
      <p>{props.description}</p>
      <p>{props.helper}</p>
      <Divider />
    </div>
  )
}