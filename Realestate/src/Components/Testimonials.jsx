import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{once: true}}
    className='container max-auto w-full lg:px-32 overflow-hidden py-10' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl text-center font-bold mb-2'>Customer <span className='underline 
        underline-offset-4 under font-light decoration-1'>Testimonials</span></h1>
      <p className='text-center text-gray-500 max-w-80 mx-auto mb-12 '>Real stories from those who found home with us</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='max-w-[340px] border shadow-lg text-center rounded px-8 py-12'>
            <img src={testimonial.image} className='w-20 h-20 rounded-full mx-auto mb-4'/>
            <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 mb-4 text-red-500'>
              {Array.from({length: testimonial.rating}, (item, index)=>(
                <img key={index} src={assets.star_icon}/>
              ))}
            </div>
            <p className='text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
