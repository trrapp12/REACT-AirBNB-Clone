import React from 'react'

function Hero (props) {
  return (
  <div className="upper--double-container">
    <img className="upper--top-img" src={props.image1} alt={props.alt1}></img>
    <img className="upper--bottom-img" src={props.image2} alt={props.alt2}></img>
  </div>
  )
}

export default Hero