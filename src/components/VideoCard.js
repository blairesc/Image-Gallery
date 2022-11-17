import React from 'react'
import {BiHeart} from 'react-icons/bi'
import {BiBookmarks} from 'react-icons/bi'
import {TbDownload} from 'react-icons/tb'
import {RiVideoFill} from 'react-icons/ri'

const VideoCard = ({ video }) => {
  return (
    <div className='group relative cursor-pointer max-w-md rounded overflow-hidden shadow-lg'>
        {/**<img className='object-cover w-full h-full' src={`https://i.vimeocdn.com/video/${video.picture_id}_295x166.jpg`} alt='random image'/> */}
        
        <video width='100%' height='100%' controls>
            <source src={video.videos.large.url} type='video/mp4'/>
            Sorry, your browser doesn't support embedded videos.
        </video>
        <RiVideoFill className='mr-2 text-white opacity-90 rounded-md w-7 h-7 md:w-10 md:h-10 cursor-pointer absolute top-1.5 group-hover:hidden'/>
        
        <div className='cursor-pointer absolute top-1.5 right-0 flex invisible group-hover:visible'>
            <BiHeart className='mr-2 bg-white opacity-90 rounded-md w-7 h-7 md:w-10 md:h-10 py-px px-1.5 hover:opacity-75' />
            <BiBookmarks className='mr-2 bg-white opacity-90 rounded-md w-7 h-7 md:w-10 md:h-10 py-px px-1.5 hover:opacity-75' />
        </div>

       <div className='invisible group-hover:visible'>
            <div className='flex items-center absolute bottom-0 left-0 p-3 cursor-pointer'>
                <img src={video.userImageURL} alt={video.user} className='w-7 h-7 md:w-10 md:h-10 rounded-full'/>
                <p className='text-white font-semibold ml-2 text-base'>{video.user}</p>
            </div>
            <TbDownload className='absolute bottom-3 right-3 bg-white opacity-90 rounded-md w-7 h-7 md:w-10 md:h-10 py-px px-1.5 cursor-pointer hover:opacity-75'/>
       </div>
    </div>
  )
}

export default VideoCard