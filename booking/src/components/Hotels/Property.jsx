import React from 'react'
import { MdOutlinePool } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaCity } from "react-icons/fa";

function Property(props) {
     const {rating} = props
  return (
    
  <div className="ml-6 p-8 bg-white rounded-lg shadow-lg ">
  <h2 className="text-2xl font-bold text-blue-900 pb-4">Property Highlights</h2>
  <h2 className="text-2xl text-blue-900">Perfect for a 1-week stay</h2>
  

  <div className="flex items-center space-x-4">
    <span className="text-3xl text-green-500 font-semibold"><IoLocation className="text-2xl text-blue-600"/></span>
    <p className="text-lg font-medium">Top location: Highly rated by recent guests is {rating}</p>
  </div>

  
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Rooms with:</h3>
            <ul className="list-none space-y-4">
        <li className="flex items-center space-x-3">
            <MdOutlinePool className="text-2xl text-blue-600" />
            <span className="text-lg text-gray-700">Sea view</span>
        </li>
        <li className="flex items-center space-x-3">
            <FaCity className="text-2xl text-blue-600" />
            <span className="text-lg text-gray-700">City view</span>
        </li>
        </ul>
  </div>
</div>

  )
}

export default Property