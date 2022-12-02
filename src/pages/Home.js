import React from 'react';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';

const Home = ({ searchTerm }) => {
  return (
    <div>
      <h1 className='text-2xl text-slate-500 font-semibold py-4 px-6 md:px-10'>Free Stock Photos</h1>
      <ImageGrid searchTerm={searchTerm}/>
      <Footer bgColor='bg-white' textColor='text-black' />
    </div>
  )
}

export default Home;