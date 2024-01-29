'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const UpButton = () => {

    const [shouldAnimate, setShouldAnimate] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShouldAnimate(window.scrollY === 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleUpButton = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button 
            onClick={handleUpButton} 
            className={`w-10 h-10 bg-grass-green rounded-full fixed bottom-4 right-4 flex justify-center items-center 
                transform transition-transform duration-500 ${shouldAnimate ? 'translate-x-16' : 'translate-x-0 animate-bounce'}`}>
            <IoIosArrowUp className='w-5 h-5 text-egg-white'/>
        </button>
  )
}

export default UpButton