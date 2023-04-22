import React from 'react'
import mainImage from './assets/mainImage.png'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:h-[80vh] gap-x-14 mt-4'>
        
            <img alt='Hero Img' src={mainImage} className='mainImageClass w-auto' />
        
        <div>
            <p className='text-[#9E9E9E] text-2xl font-sans'>Hi there! I am</p>
            <h1 className='font-[myFont] text-9xl leading-[100px]' >CHETAN DIGHOLE</h1>
            <h2 className='font-sans text-xl'>Web Developer</h2>
            <p className='text-md font-sans'> Bringing websites to life, one pixel at a time.</p>
            <p className=' text-md font-sans'> Mumbai, India.</p>
        </div>
    </div>
  )
}

export default Hero
