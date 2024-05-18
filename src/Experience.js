import React from 'react'
import lemonyellowLogo from './assets/lemon_yellow_logo.svg'
import cognizantLogo from './assets/cognizant_logo.png'

function Experience() {
    return (
        <div className='mt-12'>
            <h1 className='font-[myFont] font-lg text-7xl text-center'>Experience</h1>
            <div className='border border-[#9E9E9E] w-full p-4 flex flex-col gap-2 mt-6'>
                {/* header */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img alt='img' src={lemonyellowLogo} className='w-12 h-12 sm:w-16 sm:h-16' />
                        <h2 className='font-sans text-base md:text-3xl text-slate-700'>Lemon Yellow LLP - (Front-End Developer)</h2>
                    </div>
                    <div className='text-[#9E9E9E] text-base md:text-xl text-center font-sans underline underline-offset-2`'>May 2023 - Present</div>
                </div>
                <div className='flex items-center'>
                    <div className='w-12 h-2 sm:w-16 sm:h-8'></div>
                    <ul className='list-disc'>
                        <li>Developed a frontend application for the international shipping client Torm using the <span className='font-bold'>Angular.js</span> framework as the <span className='font-bold'>project owner</span>.</li>
                        <li>Collaborated with <span className='font-bold'>Sony Liv</span> on the <span className='font-bold'>Asian Games</span> project, contributing to the development of web pages such as the medals page and match schedule page.</li>
                        <li>Collaborated with India Shelter to enhance their loan application UI and addressed bugs using <span className='font-bold'>React.js</span>.</li>
                        <li>Utilized the <span className='font-bold'>Django</span> framework to enhance <a className='font-medium underline underline-offset-1' rel="noopener noreferrer" target='_blank' href='https://www.lemonyellow.design/'>lemonyellow.design</a>, focusing on upgrading the user interface and backend functionality for a sleek and responsive site.</li>
                    </ul>
                </div>
            </div>

            <div className='border border-[#9E9E9E] w-full p-4 flex flex-col gap-2 mt-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img alt='img' src={cognizantLogo} className='h-12 sm:h-16' />
                        <h2 className='font-sans text-base md:text-3xl text-slate-700'>Java Full-Stack Intern</h2>
                    </div>
                    <div className='text-[#9E9E9E] text-base md:text-xl text-center font-sans underline underline-offset-2`'>Oct 2022 - Feb 2023</div>
                </div>
                <div className='flex items-center'>
                    <div className='w-12 h-2 sm:w-16 sm:h-8'></div>
                    <ul className='list-disc'>
                        <li>Designed and developed dynamic and responsive websites using <span className='font-bold'>HTML, CSS, JavaScript, bootstrap and Java</span>.</li>
                        <li>Contributed to the development of a claim management application, which enabled users to submit insurance claims directly to the insurance company, resulting in an 80% reduction in processing time. As a member of a team of 4, this experience provided me with practical exposure to <span className='font-bold'>Java Full Stack Development</span>, where I specifically worked on the <span className='font-bold'>front-end</span> of the application.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Experience