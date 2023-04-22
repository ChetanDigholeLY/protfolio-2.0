import React from 'react'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center '>
      <a href='/'>
      <h1 className='font-[myFont] text-6xl font-medium'>CHETAN</h1>
      </a>
        <div className='hidden sm:flex gap-8'>
          <a href='https://github.com/ChetanDighole' target="_blank" rel="noopener noreferrer">
          <img alt='github img' src={github} className='invert w-10 h-10' />
          </a>

          <a href='https://www.linkedin.com/in/chetan-dighole-197b80205/'  target="_blank" rel="noopener noreferrer">
          <img alt='linkedin img' src={linkedin} className='w-10 h-10' />
          </a>
        </div>
        
    </div>
  )
}

export default Header
