import React from 'react'
import data from './data'
import Card from './Card'

function Carousel (props) {

  const cards = data.map
  (item => {
    return (
      <Card
        key = {item.id}
        title = {item.title}
        description = {item.description}
        price = {item.price}
        img = {`../src/${item.coverImg}`}
        rating = {item.stats.rating}
        count = {item.stats.reviewCount}
        location = {item.location} 
        spots = {item.openSpots}
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