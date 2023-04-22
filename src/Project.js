import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12 gap-6'>
            <h1 className='font-[myFont] font-lg text-7xl'>Project</h1>
            <div className='flex justify-around items-center flex-wrap w-full'>
                <Link to={'/'}>
                    <h1 className='pointer-cursor font-sans text-3xl text-slate-700 underline underline-offset-2'>Static</h1>
                </Link>

                <Link to={'project/javascript'}>
                    <h1 className='pointer-cursor font-sans text-3xl text-slate-700 underline underline-offset-2'>Javascript</h1>
                </Link>

                <Link to={'project/React'}>
                    <h1 className='pointer-cursor font-sans text-3xl text-slate-700 underline underline-offset-2'>React.js</h1>
                </Link>

                <Link to={'project/fullstack'}>
                    <h1 className='pointer-cursor font-sans text-3xl text-slate-700 underline underline-offset-2'>Full Stack</h1>
                </Link>

            </div>
            <div className='my-6 w-full'>

                <Outlet />

            </div>

            <a href='https://github.com/ChetanDighole target="_blank" rel="noopener noreferrer"'>
                <h1 className='font-sans underline underline-offset-2'>...more on github</h1>
            </a>
        </div>
    )
}

export default Project
