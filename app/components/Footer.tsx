import Link from 'next/link'
import React from 'react'
import Separator from './Separator'
import BadgeLink from './BadgeLink'

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
            <BadgeLink />
            
        </div>
    </div>
  )
}

export default Footer