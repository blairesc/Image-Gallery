import React from 'react'
import {GiBackwardTime} from 'react-icons/gi'

const ChallengeCardFeature = ({ title, text }) => {
  return (
    <div className='mt-4 ml-[5%] lg:mr-[30%]'>

      <h1 className=' text-4xl md:text-5xl font-normal'>{title}</h1>
      <p className='font-medium mt-2 md:text-lg'>{text}</p>

      <div className='flex pt-5'>
        <button className='bg-black text-white font-semibold cursor border py-1.5 md:py-3 px-6 rounded-md border-black hover:bg-white hover:text-black'>
          Join the challenge
        </button>
        
        <div className='flex items-center ml-4'>
          <GiBackwardTime className='text-xl mr-2'/>
          <p className='font-semibold'>30 days</p>
        </div>
      </div>

      <div className='mt-7'>
        <div className='flex items-center md:text-lg'>
          <p className='text-slate-600'>Presented by</p>
          <p className='text-slate-600 ml-[90px]'>Prize</p>
        </div>

        <div className='flex mt-3 items-center md:text-lg'>
          <div className='flex items-center'>
            <img src='/splash-logo.png' alt='Splash Logo' className='w-7 h-7 md:w-10 md:h-10 rounded-full'/>
            <p className='text-black font-semibold ml-2'>Splash</p>
          </div>

          <p className='text-black font-semibold ml-[98px] md:ml-[93px]'>Homepage feature</p>
        </div>
      </div>

    </div>
  )
}

export default ChallengeCardFeature