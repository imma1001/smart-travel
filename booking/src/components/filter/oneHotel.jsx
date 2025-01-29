import React from 'react'
import '../Hotels/style.css'
import { Link } from "react-router-dom";

export default function oneHotel({ hotels }) {
  const hotelMapping = hotels.map((hotel) => (
    <div className="hotel-item" key={hotel.id}>
      <div className="item-content">
        <img className="item-img" src={hotel.image[0]} alt={hotel.name} />
        <div className="item-overlay">
          <Link to={`/hotels/details/${hotel.id}`}>
            <h2>{hotel.name}</h2>
          </Link>
          <p>{hotel.country}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="hotel-wrapper">
      <h3>Famous Hotels Around the World</h3>
      <div className="hotel-items">{hotelMapping}</div>
    </div>
  )
}
