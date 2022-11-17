import React, { useState } from 'react';
import Hero from './components/Hero';
import MiddleNav from './components/MiddleNav';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='overflow-hidden'>
      <div className="bg-[url('https://images.pexels.com/photos/1448645/pexels-photo-1448645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover bg-center"> 
        <Navbar />
        <Hero setSearchTerm={setSearchTerm} />
      </div>
    
      <MiddleNav />
      <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm} />} />
        <Route path='/videos' element={<Videos searchTerm={searchTerm} />} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/challenges' element={<Challenges/>} />
      </Routes>
      
    </div>
  );
}

export default App;
