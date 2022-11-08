import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
        console.log(nav);
    }

    return (
        <div className='flex items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
            <img src='splash-logo.png' alt='Splash Logo' className='w-10 mr-4 rounded-md cursor-pointer' />
            <h1 className='w-full text-2xl font-bold cursor-pointer text-white'>Splash</h1>
            <ul className='cursor-pointer items-center font-semibold hidden md:flex'>
                <li className='p-4 hover:text-gray-400'>Explore</li>
                <li className='p-4 hover:text-gray-400'>Company</li>
                <li className='p-4 hover:text-gray-400'>Product</li>
            </ul>
            <div className='flex justify-between items-center'>
                <button className='bg-white text-black items-center py-2 px-5 rounded-md font-semibold transition ease-in hover:bg-[#07a081] hover:text-white'> Join </button>
                <div onClick={handleNav} className='block md:hidden'>
                    <AiOutlineMenu className='text-white ml-2 text-xl cursor-pointer'/>
                </div>
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-full h-full border-r bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className="flex m-4">
                    <h1 className='w-full text-2xl font-bold cursor-pointer text-[#07a081]'>SPLASH</h1>
                    {/**Add Input Component */}
                    <div onClick={handleNav}>
                        <AiOutlineClose className='text-white text-3xl cursor-pointer'/>
                    </div>
                </div>
                <ul className='uppercase'>
                    <li className='p-4 text-white font-normal cursor-pointer border-b border-gray-600 hover:text-gray-400'>Explore</li>
                    <li className='p-4 text-white font-normal cursor-pointer border-b border-gray-600 hover:text-gray-400'>Company</li>
                    <li className='p-4 text-white font-normal cursor-pointer border-b border-gray-600 hover:text-gray-400'>Product</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar