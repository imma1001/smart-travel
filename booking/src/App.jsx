import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from './components/Destinations/Destination';
import Layout from './components/layout/Layout';
import HotelFilter from './components/filter/HotelFilter';
import Hotel_description from './components/Hotels/Hotel_description';
import DtailDest from './components/Destinations/DtailDest';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='hotels' element={<HotelFilter/>}/>
        <Route path='destination' element={<Destination/>}/>
        <Route path='hotels/details/:id' element={<Hotel_description/>}/>
        <Route path='destination/details/:id' element={<DtailDest/>}/>
        </Route>
       </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App;
