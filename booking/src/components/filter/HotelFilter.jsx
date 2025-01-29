import React, { useState } from "react";
import Filter from "./Filter"
import HotelOne from "./oneHotel"
import hotels from "../Hotels/Data"

export default function HotelFilter() {
  const [filteredHotels, setFilteredHotels] = useState(hotels)

  const filterByPrice = (max) => {
    const filtered = hotels.filter(
      (hotel) => hotel.price <= max 
    )
    setFilteredHotels(filtered)
  };

  return (
    <div>
      <Filter onFilter={filterByPrice} />

      <div className="relative justify-center flex p-8 space-x-6 ">
        <h2 className="text-3xl">{filteredHotels.length} Hotels Found</h2>
      </div>

      <HotelOne hotels={filteredHotels} />
    </div>
  );
}
