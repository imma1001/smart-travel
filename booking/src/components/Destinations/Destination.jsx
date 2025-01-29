import React from 'react'
import destination from './Data'
import './style.css'
import { Link } from 'react-router-dom'
function Destination() {
    const mapping  = destination.map((des) => (
        <div className='destination' key={des.id}> 
          <div className='item-content'>
              
      <img className='item-img' src= {des.image[0]} alt=""/><br/>
      
      <div className='name-style'>
      <Link to={`/destination/details/${des.id}`}><h2>{des.name}</h2></Link>
      </div>
      </div>
      </div>
    )
    )
  return (
    <div className='destination-wrapper'>
    <div className='destination-header'>  
        <h3>Favourite Destinations</h3>
        </div>
        <div className='fav-items'>
                   {mapping}
      </div>
      </div>
  )
}

export default Destination