import React from 'react'

const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-4/5 h-auto sm:w-[50rem] sm:h-[24rem] bg-egg-white/20 rounded-3xl shadow-lg px-8 sm:px-16 py-10 backdrop-blur-md hover:scale-110 duration-300 ease-in-out'>
        { children }
    </div>
  )
}

export default GlassCard