import React, { useState } from 'react';
import Hero from './components/Hero';
import MiddleNav from './components/MiddleNav';
import Navbar from './components/Navbar'
import ImageGrid from './components/ImageGrid';

function App() {
  {/**have local state here and send a prop function to Hero which communicates the input value
    then send that value to Image Grid as a prop */}

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='overflow-hidden'>
      <div className="bg-[url('https://images.pexels.com/photos/1448645/pexels-photo-1448645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover bg-center"> 
        <Navbar />
        <Hero setSearchTerm={setSearchTerm} />
      </div>
    
      <MiddleNav />
      <ImageGrid searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
