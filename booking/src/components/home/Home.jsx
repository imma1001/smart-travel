import Characters from '../char/Characters'
import Destination from '../Destinations/Destination'
import Hotel from '../Hotels/Hotel'
import img from '../../assets/images/airplane-1632598_1920.jpg'


export default function Home() {
  return (
    <div>  
         <Characters img={img}/>
         <Destination/>
         <Hotel/>
         
    </div>
  )
}
