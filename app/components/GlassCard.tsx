import React from 'react'

const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-4/5 h-auto sm:w-[50rem] sm:h-[24rem] bg-deep-green/10 rounded-3xl px-8 sm:px-16 py-10 backdrop-blur-lg'>
        { children }
    </div>
  )
}

export default GlassCard