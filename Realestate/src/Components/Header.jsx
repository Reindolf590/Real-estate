import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='items-center flex bg-cover bg-center overflow-hidden min-h-screen w-full mb-4'
            style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: true}}
                className='container mx-auto px-6 md:px-20 lg:px-32 text-white text-center py-4 '>
                <h1 className='text-5xl sm:text-6xl md:text-[82px] font-semibold
         max-w-3xl inline-block pt-20'>Explore homes that fit your dreams</h1>
                <div className='space-x-6 mt-16'>
                    <a href='#Projects' className='border border-white rounded px-8 py-3'>Projects</a>
                    <a href='#Contact' className='bg-blue-500 rounded px-8 py-3'>Contact us</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Header
