import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Characters from '../char/Characters';
import destination from './Data';
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { MdAttractions } from "react-icons/md"
import { IoHomeOutline } from "react-icons/io5";

export default function DtailDest() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setDetails(destination.find((des) => des.id === parseInt(id)));
  }, [id]);

  return (
    <div>
      <Characters img={details?.image[1]} />

      <section className="mx-12 my-12 py-12 bg-gray-100">
        <div className='flex text-3xl text-gray-500 gap-2 m-8 pt-6 '>
        <Link className='hover:text-blue-900' to='/'><IoHomeOutline/></Link> / <Link className='hover:text-blue-900' to='/destination'>Destination</Link> / ..
        </div>
       <div className="container mx-auto">
       <div className="grid grid-cols-2 gap-2 m-8">
      <button
        className= {`tab ${activeTab === 'overview' ? ' border-b border-blue-400 ' : ''}`}
        onClick={() => setActiveTab('overview')}
      >
        <div className=' flex text-2xl text-blue-900'> 
                <BiSolidPlaneAlt />Overview
                </div>
      </button>
      <button
        className={`tab ${activeTab === 'attractions' ? ' border-b border-blue-400' : ''}`}
        onClick={() => setActiveTab('attractions')}
      >
        <div className=' flex text-2xl text-blue-900'> 
        <MdAttractions />Attractions</div>
      </button>

    </div>

     <div className='container  flex items-center space-x-6 mx-auto'>
    <img
      src={details?.image[0]}
      alt="Cairo"
      className=" left-20 object-cover w-80 h-80 bg-white shadow-lg rounded-xl "
    />
    <div className=" font-medium text-gray-600">
      <h1 className="font-serif text-4xl my-4 text-gray-700">
        {details?.name}: The Capital
      </h1>
      <div className="content text-lg text-gray-600 overflow-hidden">
      {activeTab === 'overview' && <p>{details?.overview}</p>}
      {activeTab === 'attractions' && <p>{details?.attractions}</p>}
    
    </div>
    </div>
    </div>
  </div>
</section>

    </div>
  );
}

