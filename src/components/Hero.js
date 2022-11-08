import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaEllipsisH} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='max-w-[800px] px-4 py-5 w-full h-96 mx-auto flex flex-col justify-center text-white'>
        <div className='text-center'>
            <h1 className='font-bold text-3xl md:text-4xl py-4'>Best free images & royalty free stocks</h1>
            <p className='font-normal'>The source for visuals that is powered by creators everywhere.</p>
        </div>
        
        <div className='mt-4 flex items-center'>
            <input className='py-3 md:py-4 px-2 rounded-lg my-2 w-full placeholder:font-semibold placeholder:text-l focus:outline-none hover:cursor' placeholder='Search free visuals' type='text'></input>
            <AiOutlineSearch className='text-2xl text-slate-500 ml-[-35px] cursor-pointer'/>
        </div>

        <div className='flex items-center py-4 mb-8 font-semibold ml-[25%]'>
            <p className='text-gray-400 mr-2'>Trending: </p>
            <ul className='flex'>
                <li className='hover:text-gray-400 mr-1 cursor-pointer'>mountains,</li>
                <li className='hover:text-gray-400 mr-1 cursor-pointer'>wallpapers,</li>
                <li className='hover:text-gray-400 mr-1 cursor-pointer'>happy,</li>
                <li className='hover:text-gray-400 mr-1 cursor-pointer'>love</li>
            </ul>
            <FaEllipsisH className='ml-1 bg-gray-600 rounded-full p-1 text-xl cursor-pointer'/>
        </div>

    </div>
  )
}

export default Hero