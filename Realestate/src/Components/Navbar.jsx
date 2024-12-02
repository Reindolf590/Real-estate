import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobilemenu, setMobilemenu] = useState(false)
  useEffect(() => {
    if (showMobilemenu) {
      document.body.overflow = 'hidden'
    }
    else {
      document.body.overflow = 'auto'
    }
    return () => {
      document.body.overflow = 'auto'
    }
  }, [showMobilemenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center px-6 py-4
        md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} />
        <ul className='hidden md:flex text-white gap-7'>
          <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
          <a href='#Contact' className='cursor-pointer hover:text-gray-400'>Contact</a>
          <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block px-8 py-2 bg-white cursor-pointer rounded-full '>Sign up</button>
        <img src={assets.menu_icon} onClick={() => setMobilemenu(true)} className='md:hidden w-7 cursor-pointer' />
      </div>

      {/* mobile-menu */}
      <div className={`md:hiddden ${showMobilemenu ? 'fixed w-full' : 'w-0 h-0'} top-0 right-0 bottom-0 overflow-hidden transition-all bg-white`}>
        <div className='flex justify-end px-6'>
          <img src={assets.cross_icon} className='w-6 mt-5 cursor-pointer' onClick={() => setMobilemenu(false)} />
        </div>
        <ul className='flex flex-col gap-2 items-center mt-5 px-5 font-medium text-lg'>
          <a onClick={() => setMobilemenu(false)} href='#Header' className='px-4 py-2 inline-block rounded-full'>Home</a>
          <a onClick={() => setMobilemenu(false)} href='#About' className='px-4 py-2 inline-block rounded-full'>About</a>
          <a onClick={() => setMobilemenu(false)} href='#Contact' className='px-4 py-2 inline-block rounded-full'>Contact</a>
          <a onClick={() => setMobilemenu(false)} href='#Testimonials' className='px-4 py-2 inline-block rounded-full'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
