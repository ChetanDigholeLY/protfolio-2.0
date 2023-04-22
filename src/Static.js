import React from 'react'
import rode from './assets/project/rode.png'
import shopify from './assets/project/shopify.png'
import paytm from './assets/project/paytm.png'

const Static = () => {
  return (
    <div className='flex items-start justify-around gap-2 flex-wrap w-full'>
      <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={rode} className='w-[100%] ' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>Rode.com clone</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>This clone is created using tailwind css.</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://rode-clone-by-chetan-dighole.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/rode.com-clone' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

      <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={shopify} className='w-[100%] ' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>Shopify.com clone</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>This clone is created using tailwind css.</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://shopify-clone-by-chetan-dighole.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/shopify.com-clone' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

      <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={paytm} className='w-[100%] ' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>Paytm.com clone</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>This clone is created using tailwind css.</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://paytm-clone-by-chetan-dighole.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/PayTM-clone' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Static
