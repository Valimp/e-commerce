import Link from 'next/link'
import React from 'react'

type BadgeLinkProps = {
    url: string;
    children: React.ReactNode;
};

// This is a component that wraps a link in a button
const BadgeLink = ({ url, children }: BadgeLinkProps) => {
    return (
        <button className='w-10 h-10 bg-egg-white rounded-full flex justify-center items-center hover:scale-110 duration-300 ease-out'>
            <Link href={url} target='_blank'>
                { children }
            </Link>
        </button>
  )
}

export default BadgeLink