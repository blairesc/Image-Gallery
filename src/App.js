import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/1448645/pexels-photo-1448645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover bg-center"> 
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
