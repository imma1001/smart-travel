import Destinations from '../Destinations/Data'
import hotels from '../Hotels/Data'
import { FaPhoneVolume,FaAddressCard } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import './footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-lists'>
        <ul className='footer-list'>
            <h3>Destinations</h3>
            {Destinations.map((dest)=>(
            <li  key={dest.id} >{dest.name} </li>)
           ) }
        </ul>
        <ul className='footer-list'>
            <h3>Contact</h3>
            <li className='footer-item'>
            <FaPhoneVolume/> 1234567890
             </li>
             <li className='footer-item'>
            <FaAddressCard/> city,Street
             </li>
             <li className='footer-item'>
            <MdOutlineMarkEmailUnread/> asd@123.com
             </li>
        </ul>
        <ul className='footer-list'>
            <h3>Hotels</h3>
            {hotels.map((hotel)=>(
            <li key={hotel.id} >{hotel.name} </li>)
           ) }
        </ul>
      </div>
    </div>
  )
}

export default Footer