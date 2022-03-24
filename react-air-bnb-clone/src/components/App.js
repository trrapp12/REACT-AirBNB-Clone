import React from 'react'
import Nav from './Nav'
import UpperFold from './UpperFold'
import Carousel from './Carousel'

function App (props) {

  return (
    <div className="main-container">
      <Nav />
      <UpperFold />
      <Carousel />
    </div>
  )
}

export default App