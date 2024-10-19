import React, { useState } from 'react'
import rode from './assets/project/rode.png'
import shopify from './assets/project/shopify.png'
import paytm from './assets/project/paytm.png'
import rockPaperScissors from './assets/project/rockPaperScissors.png'
import githubUserProject from './assets/project/githubUserProject.png'
import copyHex from './assets/project/copyHex.png'
import foodPanda from './assets/project/foodPanda.jpg'
import youTube from './assets/project/youtube.jpg'
import atoz from './assets/project/atoz.jpg'
import taskMaster from './assets/project/taskMaster.png'


function ProjectsTab() {

    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div className='flex flex-col justify-center items-center mt-12 gap-6 w-full'>
            <h1 className='font-[myFont] font-lg text-7xl text-center'>Projects</h1>
            <div className='flex justify-around items-center gap-2 flex-wrap w-full'>
                <h1 className={`cursor-pointer font-sans text-3xl text-slate-700 ${currentTab === 0 ? 'underline' : ''} underline-offset-2`} onClick={() => setCurrentTab(0)}>Static</h1>
                <h1 className={`cursor-pointer font-sans text-3xl text-slate-700 ${currentTab === 2 ? 'underline' : ''} underline-offset-2`} onClick={() => setCurrentTab(2)}>React.js</h1>

                <h1 className={`cursor-pointer font-sans text-3xl text-slate-700 ${currentTab === 1 ? 'underline' : ''} underline-offset-2`} onClick={() => setCurrentTab(1)}>Javascript</h1>


                <h1 className={`cursor-pointer font-sans text-3xl text-slate-700 ${currentTab === 3 ? 'underline' : ''} underline-offset-2`} onClick={() => setCurrentTab(3)}>Full Stack</h1>
            </div>

            {/* static projects starts  */}
            {/* <div className='text-red-400 text-center'>Can't deploy clone websites as it violets company policies.</div> */}
            <div className={`${currentTab === 0 ? 'flex' : 'hidden'} items-start justify-around gap-2 flex-wrap w-full`}>
                <div className='max-w-[300px]  border border-black'>
                    <div className='flex flex-col items-center gap-2 p-4'>
                        <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
                            <img alt='img' src={rode} className='w-[100%] ' />
                        </div>
                        <h1 className='font-[myFont] text-5xl font-medium'>Rode.com clone</h1>
                        <p className='text-[#9E9E9E] text-xl text-center font-sans'>This clone is created using tailwind css.</p>
                        <div className='flex justify-between items-center w-full'>
                            <a href='https://musicwebsite1234.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>

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
                            <a href='https://shoppingwebsite1234.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
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
                            <a href='https://paymentclone1234.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a>
                            <a href='https://github.com/ChetanDighole/PayTM-clone' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
                        </div>
                    </div>
                </div>

            </div>
            {/* static projects ends  */}

            {/* javascript starts */}
            <div className={`${currentTab === 1 ? 'flex' : 'hidden'} items-start justify-around gap-2 flex-wrap w-full`}>
                <div className='max-w-[300px]  border border-black'>
                    <div className='flex flex-col items-center gap-2 p-4'>
                        <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
                            <img alt='img' src={rockPaperScissors} className='w-[100%] h-full' />
                        </div>
                        <h1 className='font-[myFont] text-5xl font-medium'>Rock Paper Scissors</h1>
                        <p className='text-[#9E9E9E] text-xl text-center font-sans'>This is rock paper scissor game made using vanila javascript.</p>
                        <div className='flex justify-center items-center w-full'>
                            {/* <a href='https://chetan-dighole-rock-paper-scissor.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a> */}
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
                        <div className='flex justify-center items-center w-full'>
                            {/* <a href='https://user-github-viewer.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a> */}
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
                        <div className='flex justify-center items-center w-full'>
                            {/* <a href='https://copy-hex.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a> */}
                            <a href='https://github.com/ChetanDighole/javascript-assignments/tree/main/Word%20file%20projects/Hex%20Code%20for%20Selected%20Colour' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
                        </div>
                    </div>
                </div>

            </div>
            {/* javascript ends */}


            {/* react project starts  */}
            <div className={`${currentTab === 2 ? 'flex' : 'hidden'}  flex-col gap-3 items-center w-full justify-center`}>
                <p className='text-xs text-center'>*If data does not load install 'Allow CORS' extention</p>
                <div className='flex items-start justify-around gap-2 flex-wrap w-full'>
                    <div className='max-w-[300px]  border border-black'>
                        <div className='flex flex-col items-center gap-2 p-4'>
                            <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
                                <img alt='img' src={youTube} className='w-[100%] h-full' />
                            </div>
                            <h1 className='font-[myFont] text-5xl font-medium'>YouTube Clone</h1>
                            <p className='text-[#9E9E9E] text-xl text-center font-sans'>YouTube clone using react and redux toolKit.</p>
                            <div className='flex justify-center items-center w-full'>
                                {/* <a href='https://youtube-clone-chetan-dighole.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a> */}
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
                            <div className='flex justify-center items-center w-full'>
                                {/* <a href='https://food-panda-react-redux-chetan-dighole.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a> */}
                                <a href='https://github.com/ChetanDighole/Food-Panda-using-react-reduxToolkit' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
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
                            <div className='flex justify-center items-center w-full'>
                                {/* <a href='https://ecommerce-ineuron-internship.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a> */}
                                <a href='https://github.com/ChetanDighole/E-Commerce-Application-Clone-ineuron' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* react project ends  */}

            {/* full stack project starts */}
            <div className={`${currentTab === 3 ? 'flex' : 'hidden'} items-start justify-around gap-2 flex-wrap w-full`}>
                <div className='max-w-[300px]  border border-black'>
                    <div className='flex flex-col items-center gap-2 p-4'>
                        <div className='scrollbarElement  h-[200px] overflow-y-scroll border border-black'>
                            <img alt='img' src={taskMaster} className='w-[100%] h-full' />
                        </div>
                        <h1 className='font-[myFont] text-5xl font-medium'>Task Master</h1>
                        <p className='text-[#9E9E9E] text-xl text-center font-sans'>Task Master is a powerful productivity tool that lets you stay organized and on top of all your tasks and goals.</p>
                        <div className='flex justify-center items-center w-full'>
                            {/* <a href='https://task-master-cd.netlify.app/' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Live</a> */}
                            <a href='https://github.com/ChetanDighole/Task-Master' target="_blank" rel="noopener noreferrer" className='pointer-cursor font-sans underline underline-offset-2'>Source code</a>
                        </div>
                    </div>
                </div>

            </div>
            {/* full stack project ends */}


        </div>
    )
}

export default ProjectsTab