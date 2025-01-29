import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  

const MapComponent = ({ latitude, longitude }) => {
  const position = [latitude, longitude]

  return (
    <div className='ml-6 py-6'>
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
     
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
     
      <Marker position={position}>
        <Popup>
          Latitude: {latitude}, Longitude: {longitude}
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  )
}

export default MapComponent;
