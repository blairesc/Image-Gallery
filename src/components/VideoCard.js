import React from 'react';
import {BiHeart} from 'react-icons/bi';
import {BiBookmarks} from 'react-icons/bi';

const VideoCard = ({ video }) => {
  return (
    <div className='group relative cursor-pointer max-w-lg rounded overflow-hidden shadow-lg'>
        <div className="absolute inset-0 bg-black opacity-0 duration-500 group-hover:opacity-30"></div>
        <video width='100%' height='100%' playsInline autoPlay muted controls poster={`https://i.vimeocdn.com/video/${video.picture_id}`}>
            <source src={video.videos.small.url} type='video/mp4' />
            Sorry, your browser doesn't support embedded videos.
        </video>
       
        <div className='invisible group-hover:visible'>
            <div className='flex items-center absolute top-1.5 p-3 cursor-pointer'>
                <img src={video.userImageURL} alt={video.user} className='w-7 h-7 md:w-8 md:h-8 rounded-full'/>
                <p className='text-white font-semibold ml-2 text-base'>{video.user}</p>
            </div>
       </div>

        <div className='cursor-pointer absolute top-1.5 right-0 flex invisible group-hover:visible'>
            <BiHeart className='mr-2 bg-white opacity-90 rounded-md w-7 h-7 md:w-8 md:h-8 py-px px-1.5 hover:opacity-75' />
            <BiBookmarks className='mr-2 bg-white opacity-90 rounded-md w-7 h-7 md:w-8 md:h-8 py-px px-1.5 hover:opacity-75' />
        </div>
    </div>
  )
}

export default VideoCard;