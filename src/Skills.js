import React from 'react'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import reactjs from './assets/reactjs.png'
import mysql from './assets/mysql.png'
import bootstrap from './assets/bootstrap.png'
import nodejs from './assets/nodejs.png'
import mongodb from './assets/mongodb.png'
import express from './assets/express.png'
import git from './assets/git.png'
import tailwind from './assets/tailwind.png'
import redux from './assets/redux.png'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <h1 className='font-[myFont] font-lg text-7xl'>SKILLS</h1>

      <div className='grid grid-cols-4 justify-items-center w-full text-center gap-2'>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={html} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>HTML</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={css} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>CSS</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={javascript} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Javascript</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={bootstrap} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Bootstrap</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={tailwind} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Tailwind CSS</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={reactjs} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>React.js</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={redux} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Redux Toolkit</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={nodejs} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Node.js</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={express} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Express.js</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={mysql} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>My SQL</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={mongodb} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Mongo db</h4>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <img alt='img' src={git} className='w-12 h-12 sm:w-20 sm:h-20' />
          <h4>Git</h4>
        </div>

      </div>
    </div>
  )
}

export default Skills
