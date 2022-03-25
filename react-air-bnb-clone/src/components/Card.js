import React from 'react'
import star from '../assets/star_1.svg'


function Card (props) {

    let message; 

    if (props.item.openSpots === 0) {
      message = "SOLD OUT"
    } else if (props.item.location === 'Online') {
      message = "ONLINE"
    } 

    return (
      <div className='card--container'>
        <div className='card--photo-container'>
          { message && <div className="card--badge-status">{message}</div>}
          <img src={`./src/${props.item.coverImg}`} alt={props.item.alt} className="card--large-photo"></img>
          <div className='card--status-flag'>
            <p>{props.item.paragraph}</p>
          </div>
          <div className='card--info-bar'>
            <div className='card--status-line'>
              <div className='card--info-amount poppins-light'>
              <img src={star} alt={props.item.alt} className="card--img-star"></img>
                <span className="poppins-light">{props.item.rating}</span>
                <span className="poppins-light"> {`(${props.item.stats.reviewCount})`} • </span>
                <span className='card--info-location poppins-light'>{props.item.location}</span> 
              </div>              
              <div className='card--info-title poppins-light'>{props.item.title}</div>
              <div className='card--info-price poppins-bold'>${props.item.price} /person</div>
            </div>
          </div>
        </div>
      </div>
    )
} 

export default Card;