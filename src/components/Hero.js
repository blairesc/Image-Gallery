import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaEllipsisH} from 'react-icons/fa';

const Hero = ({ setSearchTerm, heroTitle, heroText, searchText }) => {
  const [inputText, setInputText] = useState('');
  
  const onSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputText);
  }
  
  return (
    <div className='max-w-[800px] px-4 py-5 w-full h-96 mx-auto mt-8 flex flex-col justify-center text-white'>
        <div className=''>
            <h1 className='font-bold text-4xl md:text-4xl py-2'>{heroTitle}</h1>
            <p className='font-normal'>{heroText}</p>
        </div>
        
        <form onSubmit={onSubmit}>
            <div className='mt-4 flex items-center'>
                <input onChange={event => setInputText(event.target.value)} className='py-3 md:py-4 px-2 rounded-lg my-2 w-full text-black placeholder:font-semibold placeholder:text-l focus:outline-none hover:cursor' placeholder={searchText} type="text" />
                <button className='border-none bg-none p-0' type='submit'>
                    <AiOutlineSearch className='text-2xl text-slate-500 ml-[-35px] cursor-pointer hover:text-[#07a081]'/>
                </button>
            </div>
        </form>

        <div className='flex items-center py-4 mb-8 font-semibold'>
            <p className='text-gray-400 mr-2'>Trending: </p>
            <ul className='flex'>
                <li className='mr-1'>mountains,</li>
                <li className='mr-1'>wallpapers,</li>
                <li className='mr-1'>happy,</li>
                <li className='mr-1'>love</li>
            </ul>
            <FaEllipsisH className='ml-1 bg-gray-300 bg-opacity-50 rounded-full p-1 text-2xl md:text-xl cursor-pointer'/>
        </div>

    </div>
  )
}

export default Hero;