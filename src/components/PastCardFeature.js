import React from 'react'
import ClosedButton from './ClosedButton'

const PastCardFeature = ({ title, text }) => {
  return (
    
    <div className='mt-4 mr-14 md:mr-[23%] lg:mr-[30%]'>

      <h1 className='text-white text-4xl md:text-5xl font-normal'>{title}</h1>
      <p className='text-white font-medium mt-2 md:text-lg'>{text}</p>

      <div className='flex pt-5 md:justify-between'>
        <ClosedButton />
      </div>

    </div>
    

  )
}

export default PastCardFeature