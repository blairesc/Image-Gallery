import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        console.log(nav);
    }

    return (
        <div className="flex items-center h-20 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-2xl font-bold cursor-pointer text-[#07a081]">SPLASH</h1>
            <ul className="cursor-pointer items-center hidden md:flex">
                <li className="p-4">Explore</li>
                <li className="p-4">Company</li>
                <li className="p-4">Product</li>
            </ul>
            <div className="flex justify-between items-center">
                <button className="bg-[#07a081] text-white items-center py-2 px-4 rounded-lg"> Join </button>
                <div onClick={handleNav} className="block md:hidden">
                    <AiOutlineMenu className="text-black pl-2 text-3xl cursor-pointer"/>
                </div>
            </div>

            <div className={!nav ? "fixed left-0 top-0 w-full h-[50%] border-r bg-black ease-in-out duration-500" : "fixed left-[-100%]"}>
                <div className="flex m-4">
                    <h1 className="w-full text-2xl font-bold cursor-pointer text-[#07a081]">SPLASH</h1>
                    {/**Add Input Component */}
                    <div onClick={handleNav}>
                        <AiOutlineClose className="text-white text-3xl cursor-pointer"/>
                    </div>
                </div>
                <ul className="uppercase ">
                    <li className="p-4 text-white font-semibold cursor-pointer border-b border-gray-600 hover:text-gray-400 ">Explore</li>
                    <li className="p-4 text-white font-semibold cursor-pointer border-b border-gray-600 hover:text-gray-400 ">Company</li>
                    <li className="p-4 text-white font-semibold cursor-pointer border-b border-gray-600 hover:text-gray-400">Product</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar