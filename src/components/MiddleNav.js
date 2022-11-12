import React from 'react'

const MiddleNav = () => {
  return (
    <div className='flex items-center justify-center my-4 md:my-6 p-4'>
        <ul className='flex items-center cursor-pointer text-base md:text-lg font-semibold text-slate-500'>
            <li className='mr-6 bg-black py-2 px-4 rounded-full text-white transition ease-in hover:bg-opacity-75'>Home</li>
            <li className='mr-6 hover:text-black'>Videos</li>
            <li className='mr-6 hover:text-black'>Leaderboard</li>
            <li className='mr-6 hover:text-black'>Challenges</li>
        </ul>
    </div>
  )
}

export default MiddleNav