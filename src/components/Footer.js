import React from 'react';
import {TfiWorld} from 'react-icons/tfi';

const Footer = ({ bgColor, textColor }) => {
  return (
    <div className={` ${bgColor} ${textColor} flex items-center justify-center md:justify-between px-3 py-4 font-semibold`}>
        <a href='#' className='cursor'>&copy; 2022 Splash</a>
        <ul className='hidden md:flex'>
            <li className='mr-4'>Terms of Use</li>
            <li className='mr-4'>Privacy Policy</li>
            <li className='mr-4'>License</li>
            <li className='mr-4'>Imprint</li>
        </ul>
        <button className='bg-slate-500 text-white font-normal cursor py-2 px-5 rounded-md hidden md:flex items-center'>
            <TfiWorld className='mr-2'/>
            English
        </button>
    </div>
  )
}

export default Footer;