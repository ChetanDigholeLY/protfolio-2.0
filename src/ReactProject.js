import React from 'react'
import foodPanda from './assets/project/foodPanda.jpg'
import youTube from './assets/project/youtube.jpg'
import atoz from './assets/project/atoz.jpg'

const ReactProject = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
      <p className='text-xs text-center'>*If data does not load install 'Allow CORS' extention</p>
      <div className='flex items-start justify-around gap-2 flex-wrap w-full'>
        <div className='max-w-[300px]  border border-black'>
          <div className='flex flex-col items-center gap-2 p-4'>
            <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
              <img alt='img' src={youTube} className='w-[100%] h-full' />
            </div>
            <h1 className='font-[myFont] text-5xl font-medium'>YouTube Clone</h1>
            <p className='text-[#9E9E9E] text-xl text-center font-sans'>YouTube clone using react and redux toolKit.</p>
            <div className='flex justify-between items-center w-full'>
              <a href='https://youtube-clone-chetan-dighole.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
              <a href='https://github.com/ChetanDighole/youTube-clone-react-redux-toolkit' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
            </div>
          </div>
        </div>

        <div className='max-w-[300px]  border border-black'>
          <div className='flex flex-col items-center gap-2 p-4'>
            <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
              <img alt='img' src={foodPanda} className='w-[100%] h-full' />
            </div>
            <h1 className='font-[myFont] text-5xl font-medium'>Food Panda</h1>
            <p className='text-[#9E9E9E] text-xl text-center font-sans'>Food ordering application using react and redux toolKit.</p>
            <div className='flex justify-between items-center w-full'>
              <a href='https://user-github-viewer.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
              <a href='https://github.com/ChetanDighole/github-profile-data-for-ineuron' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
            </div>
          </div>
        </div>

        <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={atoz} className='w-[100%] h-full' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>AtoZ store</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>E-commerce store using react and redux toolKit</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://ecommerce-ineuron-internship.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/E-Commerce-Application-Clone-ineuron' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default ReactProject