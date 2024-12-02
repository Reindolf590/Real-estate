import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-gray-900 md:px-20 lg:px-32 overflow-hidden pt-10 px-4 w-full' id='Footer'>
            <div className='container mx-auto flex flex-col justify-between items-start md:flex-row'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <div><img src={assets.logo_dark} /></div>
                    <p className='text-gray-400 mt-4'>Loreum Ipsum is simply dummy text of the printing and typesetting
                        industry. Loreum Ipsum has been the industry's standard dummy text.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href='#Header' className='hover:text-white'>Home</a>
                        <a href='#About' className='hover:text-white'>About</a>
                        <a href='#Contact' className='hover:text-white'>Contact</a>
                        <a href='#' className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources sent to
                        your inbox weekly
                    </p>
                    <div className='flex gap-2'>
                        <input type='email' placeholder='Enter your email' required
                            className='p-2 rounded border border-gray-700 focus:outline-none bg-gray-800 text-gray-400 w-full md:w-auto' />
                        <button className='px-4 py-2 rounded bg-blue-500 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 mt-10 py-4 text-center text-gray-500'>
                Copyright 2024 @ Reignworks. All Right Reserved
            </div>
        </div>
    )
}

export default Footer
