import React from 'react'
import rockPaperScissors from './assets/project/rockPaperScissors.png'
import githubUserProject from './assets/project/githubUserProject.png'
import copyHex from './assets/project/copyHex.png'

const Javascript = () => {
  return (
    <div className='flex items-start justify-around gap-2 flex-wrap w-full'>
      <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={rockPaperScissors} className='w-[100%] h-full' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>Rock Paper Scissors</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>This is rock paper scissor game made using vanila javascript.</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://chetan-dighole-rock-paper-scissor.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/javascript-assignments/tree/main/javascript%20codesandbox%20projects/05RockPaperScissor' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

      <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={githubUserProject} className='w-[100%] h-full' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>GitGrab</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>The project retrieves a user's GitHub information by simply entering their user ID.</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://user-github-viewer.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/github-profile-data-for-ineuron' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

      <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={copyHex} className='w-[100%] h-full' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>Copy Hex</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>A project generating random colors with copyable hex code on page reload.</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://copy-hex.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/javascript-assignments/tree/main/Word%20file%20projects/Hex%20Code%20for%20Selected%20Colour' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Javascript