import React from 'react'
import air_bnb from "../src/assets/Vector.svg"

function Nav () {
  return (
    <>
      <nav className="nav--container">
        <img className="nav--air-bnb-logo" src={air_bnb} alt="airbnb logo"></img>
      </nav>
    </>
  )
}

export default Nav