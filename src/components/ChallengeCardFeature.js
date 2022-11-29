import React from 'react'
import ChallengeButton from './ChallengeButton'
import {GiBackwardTime} from 'react-icons/gi'

const ChallengeCardFeature = () => {
  return (
    <div className='mt-4 mr-[30%]'>

      <h1 className=' text-4xl md:text-5xl font-normal'>All Out Autumn</h1>
      <p className='font-medium mt-2 md:text-lg'>Share your photos + videos of Autumn in the US</p>

      <div className='flex pt-5 md:justify-between'>
        <ChallengeButton text={'Join the challenge'} />
        
        <div className='flex ml-4 items-center'>
          <GiBackwardTime className='text-xl mr-2'/>
          <p className='font-semibold'> 7 days</p>
        </div>
      </div>

      <div className='mt-7'>
        <div className='flex items-center md:text-lg'>
          <p className='text-slate-600'>Presented by</p>
          <p className='text-slate-600 ml-[122px] md:ml-[137px]'>Prize</p>
        </div>

        <div className='flex mt-3 items-center justify-between md:text-lg'>
          <div className='flex items-center'>
            <img src='https://images.pexels.com/static/challengeorganizer/244/image/static-689.png?w=30&h=30&fit=crop&dpr=2' alt='' className='w-7 h-7 md:w-10 md:h-10 rounded-full'/>
            <p className='text-black font-semibold ml-2'>Godox</p>
          </div>

          <p className='text-black font-semibold'>Over $300 in Prizes</p>
        </div>
      </div>

    </div>
  )
}

export default ChallengeCardFeature