import React, { useState } from 'react';
import Hero from './components/Hero';
import MiddleNav from './components/MiddleNav';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Challenges from './pages/Challenges';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const navStyle = {
    logoColor: 'text-white',
    textColor: 'text-white',
    hoverTextColor: 'text-gray-400',
    buttonBgColor: 'bg-white',
    buttonTextColor: 'text-black'
  };

  const challengeNavStyle = {
    logoColor: 'text-black',
    textColor: 'text-slate-600',
    hoverTextColor: 'text-black',
    buttonBgColor: 'bg-[#07a081]',
    buttonTextColor: 'text-white'
  };

  return (
    <div className='overflow-hidden'>
      {
        	{
            '/': 
              <div className="bg-no-repeat bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/12366051/pexels-photo-12366051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}> 
                <Navbar {...navStyle} />
                <Hero setSearchTerm={setSearchTerm} heroTitle='Best free images & royalty free stocks' heroText='The source for photos that is powered by creators everywhere.' searchText='Search for free photos' />
              </div>,
            '/videos':
              <div className="bg-no-repeat bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=600')"}}> 
                <Navbar {...navStyle} />
                <Hero setSearchTerm={setSearchTerm} heroTitle='Best free stock videos shared' heroText='The source for videos that is powered by the community.' searchText='Search for free videos' />
              </div>,
            '/challenges':
              <div className=""> 
                <Navbar {...challengeNavStyle} />
              </div>
        	}[location.pathname]
      }  
     
      <MiddleNav />
      <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm} />} />
        <Route path='/videos' element={<Videos searchTerm={searchTerm} />} />
        <Route path='/challenges' element={<Challenges/>} />
      </Routes>
      
    </div>
  );
}

export default App;
