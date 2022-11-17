import React from 'react'
import VideoGrid from '../components/VideoGrid';

const Videos = ({ searchTerm }) => {
  return (
    <VideoGrid searchTerm={searchTerm} />
  )
}

export default Videos