// React
import React from 'react'

// React Semantic
import { Divider } from 'semantic-ui-react'

export default function Hero(props) {
  return (
    <div className="hero">
      {props.preimage &&
        <img src={props.preimage} alt='Page Hero' />}
      <h1>{props.title}</h1>
      <h3>{props.tagline}</h3>
      {props.postimage &&
        <img src={props.postimage} alt='Page Hero' />}
      <p>{props.description}</p>
      <p>{props.helper}</p>
      <Divider />
    </div>
  )
}