import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa";

function Filter(props){
  const {onFilter} =props
    const [values, setValues] = useState()
    const [maxprice,setMaxprice]=useState(300)
    const handleChange =(e)=>{
            setMaxprice(Number(e.target.value))
    }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        Filter Hotels
      </h2>
      <div className="justify-center">
       <div className="relative mb-6">
        <span className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm flex justify-between items-center" onClick={()=>setValues(!values)}>Price<FaChevronDown className='ml-2 text-gray-500'/></span>
         {values &&(
          <div className=" mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
              <div className="flex flex-col gap-4">
              <input
              className="price-input "
              value={maxprice}
              type="range"
              min='50'
              max='800'
              onChange={handleChange}
              />  
              </div>
          </div>
         )}
         
       </div>
        <span className="flex justify-between text-gray-600 text-sm">Max Price : {maxprice}$</span>
       <button
              onClick={(e)=>{
                e.preventDefault()
                onFilter(maxprice)
              }}className="w-full px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >Search</button>
      </div>
    </div>
  )
}

export default Filter;
