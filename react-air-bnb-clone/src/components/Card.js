import React from 'react'


function Card (props) {
    return (
      <div className='card--container'>
        <div className='card--photo-container'>
          <img src={props.img} alt={props.alt}></img>
          <div className='card--status-flag'>
            <p>{props.paragraph}</p>
          </div>
          <div className='card--info-bar'>
            <div className='card--status-line'>
              <img src={props.src} alt={props.alt}></img>
              <div className='card--info-amount'>{props.price}</div>
              <div className='card--info-location'>{props.location}</div>
              <div className='card--info-title'>{props.title}</div>
              <div className='card--info-price'>{props.price}</div>
            </div>
          </div>
        </div>
      </div>
    )
} 

export default Card;