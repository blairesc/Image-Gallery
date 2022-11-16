import React from 'react'
import ImageGrid from '../components/ImageGrid';

const Home = ({ searchTerm }) => {
  return (
    <ImageGrid searchTerm={searchTerm}/>
  )
}

export default Home