'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const UpButton = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    }

    const calculatePosition = () => {
        // make fonction to calculate position of button depending on scroll position and screen size (mobile or desktop)
        if (scrollPosition-60 >= 20) {
            return "20px"; 
        } else {
            return scrollPosition-60+"px";
        }
    }

    return (
        <button 
            onClick={handleUpButton} 
            style={{right: calculatePosition(), bottom: "20px"}}
            className={`w-10 h-10 bg-sun-orange rounded-full fixed flex justify-center items-center transform transition-transform duration-500 animate-bounce`}>
            <IoIosArrowUp className='w-5 h-5 text-egg-white'/>
        </button>
  )
}

export default UpButton