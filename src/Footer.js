import React, { useState } from 'react'
import github from './assets/github.png'
import linkedIn from './assets/linkedin footer.png'
import twitter from './assets/twitter footer.png'
import hashnode from './assets/hashnode.png'

const Footer = () => {

  const [mail, setMail] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const setVal = (e) => {
    const { name, value } = e.target

    setMail(() => {
      return {
        ...mail, [name]: value
      }
    })

  }

  const submitMail = async (e) => {
    e.preventDefault()

    const { email, subject, message } = mail

    if (!(email && subject && message)) {
      alert('Fill all details to send mail')
    } else {

      const data = mail

      await fetch('https://formspree.io/f/mvondqrj', {
        mode: 'no-cors',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      setMail({
        email: '',
        subject: '',
        message: ''
      })

    }

  }

  return (
    <div className='bg-[#0F0F0F] mt-12 py-4 px-16 flex justify-between flex-wrap gap-4'>
      <h1 className='text-[#f5f5f5] font-[myFont] text-6xl'>Work with<br /> me</h1>

      <div>
        <form className='flex flex-col gap-2'>
          <input className='p-2'
            value={mail.email} onChange={setVal}
            type='email' required placeholder='Email' name='email' />

          <input className='p-2'
            value={mail.subject} onChange={setVal}
            type='text' required placeholder='Subject' name='subject' />

          <textarea className='p-2'
            value={mail.message} onChange={setVal}
            name="message" rows={4} cols={40} placeholder='Message' />


          <button className='bg-[#5c5c5c] text-white hover:bg-[#f5f5f5] hover:text-black transition duration-300' onClick={(e) => submitMail(e)}>Submit</button>
        </form>
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='text-[#f5f5f5] font-[myFont] text-4xl underline underline-offset-8'>Social handles</h1>
        <div className='flex flex-wrap gap-2 justify-center items-center'>

          <a href='https://github.com/ChetanDighole' target="_blank" rel="noopener noreferrer">
            <img alt='img' src={github} className='w-10 h-10' />
          </a>

          <a href='https://www.linkedin.com/in/chetan-dighole-197b80205/' target="_blank" rel="noopener noreferrer">
            <img alt='img' src={linkedIn} className='w-10 h-10 invert' />
          </a>

          <a href='https://twitter.com/ChetanDighole' target="_blank" rel="noopener noreferrer">
            <img alt='img' src={twitter} className='w-10 h-10 invert' />
          </a>

          <a href='https://codewithchetan.hashnode.dev/' target="_blank" rel="noopener noreferrer">
            <img alt='img' src={hashnode} className='w-10 h-10 invert' />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer