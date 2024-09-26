import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offer.css';

const Offers = () => {
  return (
    <div className='offers-container bg-gradient-to-r from-red-500 via-red-200 to-yellow-400'>
      <div className="offers-left">
        <h1 className='offers-title'>Exclusive</h1>
        <p className='offers-subtitle'>Offers for you</p>
        <p className='offers-description'>Only On best seller products</p>
        <button className='offers-button'>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers