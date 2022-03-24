import React from 'react'
import Nav from './Nav'
import UpperFold from './UpperFold'
import Carousel from './Carousel'
import Card from './Card'
import data from './data'

function App (props) {

    const cards = data.map(item => {
      return (
        <Card
          key = {item.id}
          title = {item.title}
          description = {item.description}
          price = {item.price}
          img = {item.coverImg}
          rating = {item.stats.rating}
          count = {item.stats.reviewCount}
          location = {item.location} 
          spots = {item.openSpots}
        />
      )
    })

  return (
    <div className="main-container">
      <Nav />
      <UpperFold />
      <Carousel />
      {cards}
    </div>
  )
}

export default App