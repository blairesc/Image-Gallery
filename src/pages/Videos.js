import React from 'react';
import Footer from '../components/Footer';
import VideoGrid from '../components/VideoGrid';

const Videos = ({ searchTerm }) => {
  return (
    <div>
      <h1 className='text-2xl text-slate-500 font-semibold py-4 px-6 md:px-10'>Free Stock Videos</h1>
      <VideoGrid searchTerm={searchTerm} />
      <Footer bgColor='bg-white' textColor='text-black'/>
    </div>
  )
}

export default Videos;