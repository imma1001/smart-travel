import React from 'react'
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
        <div className='flex items-center space-x-3 text-xl bg-white rounded-md shadow-md p-4 '>
           <div className=' flex text-blue-900 text-8xl'> 
           <Link to={`/`}><BiSolidPlaneAlt /></Link>
          <h1 className='text-2xl'>Safari<em className='font-bold'>.com</em></h1>
          </div>
             <ul className='flex gap-10 text-2xl px-12 justify-center '>
             <Link to={`/destination`}> <li className="hover:text-blue-900">Our Destinations</li></Link>
             <Link to={`/hotels`}> <li className="hover:text-blue-900">Our Hotels</li></Link>
             </ul>
            <button className='absolute  my-8 right-0.5 top-0.5 px-6 py-4
            text-sm text-white bg-blue-900 rounded-r-full'>Booking Now</button>
    
    </div>
  )
}

export default Navbar