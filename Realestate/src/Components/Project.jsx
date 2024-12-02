import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'motion/react'

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCards, setShowCards] = useState(1)

    useEffect(() => {
        const updateShowCards = () => {
            if (window.innerWidth >= 1024) {
                setShowCards(projectsData.length)
            } else {
                setShowCards(1)
            }
            updateShowCards();
        }

        window.addEventListener('resize', updateShowCards)
        return () => window.removeEventListener('resize', updateShowCards)

    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <motion.div 
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once: true}}
        className='container mx-auto my-20 overflow-hidden md:px-20 lg:px-32 w-full px-4 pt-20 py-6' id='Projects'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline 
        underline-offset-4 decoration-1 under font-light'>Completed</span></h2>
            <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Crafting Spaces, Building Legacies-Explore our Portfolio</p>

            {/* slider buttons */}
            <div className='flex justify-end mb-8 items-center'>
                <button onClick={prevProject} className='p-3 bg-gray-200 mr-2 rounded ' aria-label='Previous Projects'>
                    <img src={assets.left_arrow} />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 mr-2 rounded ' aria-label='Next Projects'>
                    <img src={assets.right_arrow} />
                </button>
            </div>

            {/* projects slider */}
            <div className='overflow-hidden'>
                <div className='flex gap-4 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / showCards}%)` }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 bottom-5 right-0 flex justify-center'>
                                <div className='bg-white inline-block w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>{project.price} <span>{project.location}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Project
