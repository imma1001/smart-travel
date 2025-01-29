import axios from "axios"
import { getAccessToken } from "../token/GetAccessToken";
function SearchAPI({ setFlights, setLoading, setError, origin, destination, start, end ,adults,child}) {


  const searchFlights = async () => {
    if (!origin || !destination || !start || !end) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const token = await getAccessToken();
      const response = await axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${start}&returnDate=${end}&adults=${adults}&children=${child}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFlights(response.data.data || []);
    } catch (error) {
      setError("Failed to fetch flights. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
    onClick={(e) => {
      searchFlights()
    }}
    className='bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-200'
  >
    Search
  </button>
  
  )
}

export default SearchAPI;
