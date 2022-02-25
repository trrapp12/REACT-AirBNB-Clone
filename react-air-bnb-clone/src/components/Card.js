import React from 'react'
import Info from './Info'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='card--container'>
        <div className='card--photo-container'>
          <img src={} alt={}></img>
          <div className='card--status-flag'>
            <p>{}</p>
          </div>
          <Info />
        </div>

      </div>
    )
  }
}

export default Card;