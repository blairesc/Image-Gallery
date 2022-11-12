import React from 'react'
import {BiHeart} from 'react-icons/bi'
import {BiBookmarks} from 'react-icons/bi'
import {TbDownload} from 'react-icons/tb'
import { useState } from 'react'

const ImageCard = ({ image }) => {
  return (
    <div className='group relative cursor-pointer max-w-md rounded overflow-hidden shadow-lg'>
        <img className='object-cover w-full h-full' src={image.webformatURL} alt='random image'/>
        <div className='cursor-pointer absolute top-1.5 right-0 flex invisible group-hover:visible'>
            <BiHeart className='mr-2 bg-white opacity-90 rounded-md w-7 h-7 md:w-10 md:h-10 py-px px-1.5 hover:opacity-75' />
            <BiBookmarks className='mr-2 bg-white opacity-90 rounded-md w-7 h-7 md:w-10 md:h-10 py-px px-1.5 hover:opacity-75' />
        </div>

       <div className='invisible group-hover:visible'>
            <div className='flex items-center absolute bottom-0 left-0 p-3 cursor-pointer'>
                <img src={image.userImageURL} alt={image.user} className='w-7 h-7 md:w-10 md:h-10 rounded-full'/>
                <p className='text-white font-semibold ml-2 text-base'>{image.user}</p>
            </div>
            <TbDownload className='absolute bottom-3 right-3 bg-white opacity-90 rounded-md w-7 h-7 md:w-10 md:h-10 py-px px-1.5 cursor-pointer hover:opacity-75'/>
       </div>
    </div>

  )
}

export default ImageCard