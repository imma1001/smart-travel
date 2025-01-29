import React, { useEffect, useState } from 'react'
import hotels from './Data'
import { MdFitnessCenter } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { IoLocation, IoRestaurant } from "react-icons/io5";
import { MdOutlineRoomService } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import './style.css'
import { useParams } from 'react-router-dom'
import Property from './Property';
import MapComponent from './Map';

export default function Hotel_description() {
  const latitude = 51.505;  
  const longitude = -0.09;
    
  
    const {id} =useParams()
    const [details,setDetails] =useState('')
useEffect(()=>{
     setDetails(hotels.find((hotel)=>hotel.id===parseInt(id)))
},[id])
  return (

        <div className="flex justify-center items-center bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50">
          <div>
          <MapComponent className='mx-auto' latitude={latitude} longitude={longitude} />
          <Property rating={details.rating}/>
          </div>
          <div className="w-full max-w-7xl mx-auto p-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold py-6">{details.name} Hotels, {details.country}</h1>
              <div className='flex items-center justify-center space-x-2 text-center'>
                <IoLocation className='text-blue-600 text-xl' />
                <h1 className='text-lg text-gray-800 font-medium'>{details.address}</h1>
              </div>
            </div>
               <div className="my-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {details.image && details.image.length > 0 && details.image.map((img, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      className="w-full h-80 object-cover transform transition duration-300 hover:scale-105"
                      src={img}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
                <div className="font-bold py-8">
              <div className="text-xl font-medium text-gray-800">
                The price:
                <span className="text-blue-600 font-bold ml-2">${details.price}</span>
              </div>
              <div className="flex items-center space-x-4 text-xl font-medium text-gray-800">
                Rating:
                <span className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-lg">
                  {details.rating}
                </span>
              </div>
            </div>
              </div>
            </div>
      
            <div className="space-y-6 text-gray-700">
              <h2 className="font-bold text-2xl text-center pt-8">Our Services</h2>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-4">
                <li className="flex items-center space-x-3 text-xl bg-white rounded-md shadow-md p-4 hover:bg-blue-100 transition duration-300">
                  <FaSwimmer className="text-blue-500 text-2xl" />
                  <span>Swimming Pool</span>
                </li>
                <li className="flex items-center space-x-3 text-xl bg-white rounded-md shadow-md p-4 hover:bg-blue-100 transition duration-300">
                  <FaWifi className="text-blue-500 text-2xl" />
                  <span>Wi-Fi</span>
                </li>
                <li className="flex items-center space-x-3 text-xl bg-white rounded-md shadow-md p-4 hover:bg-blue-100 transition duration-300">
                  <MdFitnessCenter className="text-blue-500 text-2xl" />
                  <span>Fitness Center</span>
                </li>
                <li className="flex items-center space-x-3 text-xl bg-white rounded-md shadow-md p-4 hover:bg-blue-100 transition duration-300">
                  <IoRestaurant className="text-blue-500 text-2xl" />
                  <span>Restaurant</span>
                </li>
                <li className="flex items-center space-x-3 text-xl bg-white rounded-md shadow-md p-4 hover:bg-blue-100 transition duration-300">
                  <MdOutlineRoomService className="text-blue-500 text-2xl" />
                  <span>Room Service</span>
                </li>
                <li className="flex items-center space-x-3 text-xl bg-white rounded-md shadow-md p-4 hover:bg-blue-100 transition duration-300">
                  <MdOutlineFreeBreakfast className="text-blue-500 text-2xl" />
                  <span>Breakfast</span>
                </li>
              </ul>
            </div>
      
            
          </div>
        </div>
    
  )
}
