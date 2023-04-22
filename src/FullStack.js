import React from 'react'
import taskMaster from './assets/project/taskMaster.png'

const FullStack = () => {
  return (
    <div className='flex items-start justify-around gap-2 flex-wrap w-full'>
      <div className='max-w-[300px]  border border-black'>
        <div className='flex flex-col items-center gap-2 p-4'>
          <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
            <img alt='img' src={taskMaster} className='w-[100%] h-full' />
          </div>
          <h1 className='font-[myFont] text-5xl font-medium'>Task Master</h1>
          <p className='text-[#9E9E9E] text-xl text-center font-sans'>Task Master is a powerful productivity tool that lets you stay organized and on top of all your tasks and goals.</p>
          <div className='flex justify-between items-center w-full'>
            <a href='https://task-master-cd.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
            <a href='https://github.com/ChetanDighole/Task-Master' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FullStack