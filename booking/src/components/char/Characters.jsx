import Guest from './Guest'
import Location from './Location'
import Date from './Date'
import { useState } from 'react'
import SearchAPI from './SearchAPI'

export default function Characters(props) {
  const { img } = props;
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [start, setStart] = useState()
  const [end, setEnd] = useState('')
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(true)
  const[adults,setAdults] = useState(1)
  const[child,setChild] = useState(0)
  

  return (
    <div
      className="relative min-h-screen bg-blanchedalmond bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex justify-center items-end min-h-screen relative z-10">
        <div className="bg-white opacity-90 p-8 rounded-xl shadow-lg max-w-[1600px] w-full">
          <h1 className="text-3xl font-serif text-center text-[#1F1F7B] mb-6">
            Plan Your Next Adventure
          </h1>
          <div className="flex flex-row gap-6 items-center">
            <div className="mb-4">
              <Location
                origin={origin}
                destination={destination}
                handleOrigin={setOrigin}
                handleDestination={setDestination}
              />
            </div>
            <div className="mb-4">
              <Date start={start} end={end} onStartChange={setStart} onEndChange={setEnd} />
            </div>
        
            <div className="mb-4">
              <Guest  adults={adults} child={child} setAdults={setAdults} setChild={setChild}/>
            </div>
            <div className="flex justify-center">
              <SearchAPI
                origin={origin}
                destination={destination}
                start={start}
                end={end}
                setFlights={setFlights}
                setLoading={setLoading}
                setError={setError}
                adults={adults}
                child={child}
              />
            </div>
          </div>

          {loading && <p className="text-center text-blue-600">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {isOpen && flights.length > 0 && (
            <div className="relative grid grid-cols-1 mt-6">
              <button
                onClick={() => 
                  setIsOpen(false)}
                className="absolute top-2 right-2 text-xl text-blue-600 font-bold"
              >
                X
              </button>
              {flights.map((flight, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {flight.itineraries[0].segments.map((segment, i) => (
                    <p key={i} className="text-lg text-gray-600">
                      {segment.departure.iataCode} → {segment.arrival.iataCode} |{' '}
                      {segment.departure.at}<br/>
                      Duration :{segment.duration}<br/>
                      Price :{flight.price.total} in {flight.price.currency}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {flights.length === 0 && !loading && !error && (
            <p className="text-center text-gray-500">
              No flights found. Try adjusting your search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
