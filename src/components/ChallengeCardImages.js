import React from 'react'

const ChallengeCardImages = ({ images, numOfImages }) => {
  return (
    <div>
        <div className='w-[360px] md:w-[535px] md:h-[401px] grid grid-cols-2 gap-2 cursor-pointer group'>
            <div className='relative'>
                <img className='w-full h-full object-cover rounded-l-3xl' src={images.img1} alt='Image One' />
                <div className="absolute inset-0 bg-black opacity-0 rounded-l-3xl duration-500 group-hover:opacity-30"></div>
            </div>

            <div className='grid gap-2'>
                <div className='h-[213px] relative'>
                    <img className='w-full h-full object-cover rounded-tr-3xl' src={images.img2} alt='Image Two' />
                    <div className="absolute inset-0 bg-black opacity-0 rounded-tr-3xl duration-500 group-hover:opacity-30"></div>
                </div>
                <div className='h-[180px] relative'>
                    <img className='w-full h-full object-cover rounded-br-3xl' src={images.img3} alt='Image Three' />
                    <div className="absolute inset-0 bg-black opacity-60 rounded-br-3xl duration-500 group-hover:opacity-70"></div>
                    <h1 className='text-white font-normal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><span className='text-4xl font-bold'>+{numOfImages}</span> <br/> See all photos</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChallengeCardImages