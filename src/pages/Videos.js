import React from 'react'
import VideoGrid from '../components/VideoGrid';

const Videos = ({ searchTerm }) => {
  return (
    <div>
      <h1 className='text-2xl text-slate-500 font-semibold py-4 px-6 md:px-10'>Free Stock Videos</h1>
      <VideoGrid searchTerm={searchTerm} />
    </div>
  )
}

export default Videos