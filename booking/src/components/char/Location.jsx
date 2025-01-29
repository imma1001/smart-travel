import React,{useState} from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { getAccessToken } from "../token/GetAccessToken";

function Location({ origin, destination, handleOrigin, handleDestination }) {
  
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [originQuery, setOriginQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  

  const fetchSuggestions = async (query, setSuggestions) => {
    if (!query) return setSuggestions([]);
    try {
      const accessToken = await getAccessToken();
      const response = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations`,
        {
          params: {
            keyword: query,
            subType: "AIRPORT,CITY",
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setSuggestions(response.data.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleOriginChange = (e) => {
    const query = e.target.value;
    setOriginQuery(query);
    fetchSuggestions(query, setOriginSuggestions);
  };

  const handleDestinationChange = (e) => {
    const query = e.target.value;
    setDestinationQuery(query);
    fetchSuggestions(query, setDestinationSuggestions);
  };

  return (
    <div className="flex items-center gap-10 p-4">
      <div className="flex items-center gap-2">
      <FaLocationDot  className="text-3xl text-blue-900"/>
      <div>
        <label className="text-lg font-medium text-gray-700">From</label>
        <input
          type="text"
          value={originQuery}
          onChange={handleOriginChange}
          placeholder="Enter origin city or airport"
          className="w-full p-3 border rounded-md"
        />
        {originSuggestions.length > 0 && (
          <ul className="bg-white border rounded-md max-h-40 overflow-y-auto mt-1">
            {originSuggestions.map((location) => (
              <li
                key={location.id}
                className="p-2 cursor-pointer hover:bg-blue-100"
                onClick={() => {
                  handleOrigin(location.iataCode);
                  setOriginQuery(location.name);
                  setOriginSuggestions([]);
                }}
              >
                {location.name} ({location.iataCode})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Destination Input */}
      <div>
        <label className="text-lg font-medium text-gray-700">To</label>
        <input
          type="text"
          value={destinationQuery}
          onChange={handleDestinationChange}
          placeholder="Enter destination city or airport"
          className="w-full p-3 border rounded-md"
        />
        {destinationSuggestions.length > 0 && (
          <ul className="bg-white border rounded-md max-h-40 overflow-y-auto mt-1">
            {destinationSuggestions.map((location) => (
              <li
                key={location.id}
                className="p-2 cursor-pointer hover:bg-blue-100"
                onClick={() => {
                  handleDestination(location.iataCode);
                  setDestinationQuery(location.name);
                  setDestinationSuggestions([]);
                }}
              >
                {location.name} ({location.iataCode})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  )
}

export default Location;
