import React from 'react'
import data from './data'
import Card from './Card'

function Carousel (props) {

  const cards = data.map
  (item => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    )
  })
  
  return (
    <div className="carousel--container">
      {cards}
    </div>
  )
}

export default Carousel