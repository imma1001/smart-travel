import {useState} from 'react'
import { IoPeopleSharp } from "react-icons/io5"

export default function Guest({adults,setAdults,child,setChild}) {
  
  return (
        <div className="flex">
            <div className="flex items-center gap-2">
            <IoPeopleSharp  className='text-[2.5rem] text-blue-900' />
            <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Adults</label>
          <input
          className='w-20 p-2 text-base mt-2 rounded border border-blue-300'
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
            max='4'
            placeholder="Adults"
          />
        </div>
        <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Children</label>
          <input
          className='w-20 p-2 text-base mt-2 rounded border border-blue-300'
            type="number"
            value={child}
            onChange={(e) => setChild(e.target.value)}
            min="0"
            max="8"
            placeholder="Children"
          />
        </div>
      </div>
    </div>
  )
}
