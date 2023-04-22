import React from 'react'
import fullStackCerti from './assets/certificates/Full Stack Javascript Web Developer.png'
import reactjsCerti from './assets/certificates/react js certificate.png'
import htmlCss from './assets/certificates/HTML and CSS certificate.png'
import gitAndGithub from './assets/certificates/Git and Github certificate.png'

const Certification = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12 gap-6'>
            <h1 className='font-[myFont] font-lg text-7xl'>Certifications</h1>
            {/* <div className='flex flex-wrap gap-4 justify-center items-center'> */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

                <div className='max-w-[300px] h-[300px]   border border-black'>
                    <div className='p-4 w-full h-full flex flex-col justify-center items-center gap-2'>
                        <img alt='img' src={fullStackCerti} className='h-[200px] w-[100%] border border-black' />
                        <h1 className='font-[myFont] text-4xl md:text-5xl text-center font-medium'>Full Stack javascript developer</h1>
                    </div>
                </div>

                <div className='max-w-[300px] h-[300px]   border border-black'>
                    <div className='p-4 w-full h-full flex flex-col justify-center items-center gap-2'>
                        <img alt='img' src={reactjsCerti} className='h-[200px] w-[100%] border border-black' />
                        <h1 className='font-[myFont] text-4xl md:text-5xl text-center font-medium'>React js developer</h1>
                    </div>
                </div>

                <div className='max-w-[300px] h-[300px]   border border-black'>
                    <div className='p-4 w-full h-full flex flex-col justify-center items-center gap-2'>
                        <img alt='img' src={htmlCss} className='h-[200px] w-[100%] border border-black' />
                        <h1 className='font-[myFont] text-4xl md:text-5xl text-center font-medium'>HTML and CSS</h1>
                    </div>
                </div>

                <div className='max-w-[300px] h-[300px]  border border-black'>
                    <div className='p-4 w-full h-full flex flex-col justify-center items-center gap-2'>
                        <img alt='img' src={gitAndGithub} className='h-[200px] w-[100%] border border-black' />
                        <h1 className='font-[myFont] text-4xl md:text-5xl text-center font-medium'>Git and Github</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Certification