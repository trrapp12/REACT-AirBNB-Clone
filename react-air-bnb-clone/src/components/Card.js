import React from 'react'
import star from '../assets/star_1.svg'


function Card (props) {
    return (
      <div className='card--container'>
        <div className='card--photo-container'>
          <img src={props.img} alt={props.alt} className="card--large-photo"></img>
          <div className='card--status-flag'>
            <p>{props.paragraph}</p>
          </div>
          <div className='card--info-bar'>
            <div className='card--status-line'>
              <div className='card--info-amount poppins-light'>
              <img src={star} alt={props.alt}></img>
                <span className="poppins-light">{props.rating}</span>
                <span className="poppins-light"> {`(${props.reviewCount})`} • </span>
                <span className='card--info-location poppins-light'>{props.location}</span> 
              </div>              
              <div className='card--info-title poppins-light'>{props.title}</div>
              <div className='card--info-price poppins-bold'>{props.price} /person</div>
            </div>
          </div>
        </div>
      </div>
    )
} 

export default Card;