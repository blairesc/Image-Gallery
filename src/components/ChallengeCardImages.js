import React from 'react'

const ChallengeCardImages = () => {
  return (
    <div>

        <div className='w-[535px] h-[401px] grid grid-cols-2 gap-2 cursor-pointer group'>
            <div className='relative'>
                <img className='h-full object-cover rounded-l-3xl' src='https://images.pexels.com/photos/3089988/pexels-photo-3089988.jpeg?auto=compress&cs=tinysrgb&h=400&w=280&fit=crop&crop=focalpoint&dpr=2' alt='' />
                <div className="absolute inset-0 bg-black opacity-0 rounded-l-3xl duration-500 group-hover:opacity-30"></div>
            </div>

            <div className='grid gap-2'>
                <div className='h-[213px] relative'>
                    <img className='w-full h-full object-cover rounded-tr-3xl' src='https://images.pexels.com/photos/2422503/pexels-photo-2422503.jpeg?auto=compress&cs=tinysrgb&h=200&w=180&fit=crop&crop=focalpoint&dpr=2' alt='' />
                    <div className="absolute inset-0 bg-black opacity-0 rounded-tr-3xl duration-500 group-hover:opacity-30"></div>
                </div>
                <div className='h-[180px] relative'>
                    <img className='w-full h-full object-cover rounded-br-3xl' src='https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?h=400&w=300&fit=crop&dpr=2' alt='' />
                    <div className="absolute inset-0 bg-black opacity-60 rounded-br-3xl duration-500 group-hover:opacity-70"></div>
                    <h1 className='text-white font-normal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><span className='text-4xl font-bold'>+2K</span> <br/> See all photos</h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChallengeCardImages