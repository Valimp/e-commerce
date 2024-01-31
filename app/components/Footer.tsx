import Link from 'next/link'
import React from 'react'
import Separator from './Separator'
import BadgeLink from './BadgeLink'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsThreads } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='h-auto bg-deep-green flex items-start px-10 py-6 gap-24'>
        <nav className='flex flex-col'>
            <h3 className='text-egg-white text-lg'>Navigation</h3>
            <Separator horizontal="15px" />
            <Link className='lowercase' href='/'>accueil</Link>
            <Link className='lowercase' href='/'>nos offres</Link>
            <Link className='lowercase' href='/'>nous contacter</Link>
        </nav>
        <div className='flex flex-col'>
            <h3 className='text-egg-white text-lg'>Nous contacter</h3>
            <Separator horizontal="15px" />
            <Link className='lowercase' href='/'>page de contact</Link>
            <p className='lowercase text-egg-white text-sm' >valimp.contact@gmail.com</p>
            <p className='lowercase text-egg-white text-sm' >06 XX XX XX XX</p>
        </div>
        <div>
            <h3 className='text-egg-white text-lg'>Suivez-nous</h3>
            <Separator horizontal="15px" />
            <div className='flex gap-4'>
                <BadgeLink url="https://www.linkedin.com/in/valimp/" >
                    <BsLinkedin className='text-grass-green text-2xl' />
                </BadgeLink>
                <BadgeLink url="/" >
                    <BsInstagram className='text-grass-green text-2xl' />
                </BadgeLink>
                <BadgeLink url="/" >
                    <BsThreads className='text-grass-green text-2xl' />
                </BadgeLink>
            </div>
            
        </div>
    </div>
  )
}

export default Footer