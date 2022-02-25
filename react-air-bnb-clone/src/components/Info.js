import React from 'react'

class Info extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render () {
    return (
      <div className='card--info-bar'>
        <div className='card--status-line'>
          <img src={} alt={}></img>
          <div className='card--info-amount'></div>
          <div className='card--info-location'></div>
          <div className='card--info-title'></div>
          <div className='card--info-price'></div>
        </div>
      </div>
    )
  }
}

export default Info