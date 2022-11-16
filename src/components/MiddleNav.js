import React from 'react'
import { NavLink } from 'react-router-dom'

const MiddleNav = () => {
  return (
    <div className='flex items-center justify-center my-4 md:my-6 p-4'>
        <ul className='flex items-center cursor-pointer text-base md:text-lg font-semibold text-slate-500'>
            <li className='mr-6 hover:text-black'>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-black py-2 px-4 rounded-full text-white transition ease-in hover:bg-opacity-75' : undefined )}>Home</NavLink>
            </li>
            <li className='mr-6 hover:text-black'> 
              <NavLink to="/videos" className={({ isActive }) => (isActive ? 'bg-black py-2 px-4 rounded-full text-white transition ease-in hover:bg-opacity-75' : undefined )}>Videos</NavLink>
            </li>
            <li className='mr-6 hover:text-black'> 
              <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? 'bg-black py-2 px-4 rounded-full text-white transition ease-in hover:bg-opacity-75' : undefined )}>Leaderboard</NavLink>
            </li>
            <li className='mr-6 hover:text-black'> 
              <NavLink to="/challenges" className={({ isActive }) => (isActive ? 'bg-black py-2 px-4 rounded-full text-white transition ease-in hover:bg-opacity-75' : undefined )}>Challenges</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default MiddleNav