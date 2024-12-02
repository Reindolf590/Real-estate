import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { motion } from 'motion/react';
  

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ffa7d03f-b0f3-48c8-9c28-bf43162fa878");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };


    return (
        <motion.div 
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once: true}}
        className='text-center p-6 py-20 lg:px-32 overflow-hidden w-full' id='Contact'>
            <h1 className='text-2xl sm:text-4xl text-center font-bold mb-2'>Contact <span className='underline 
        underline-offset-4 under font-light decorahttps://github.com/Reindolf590/Real-estateion-1'>With us</span></h1>
            <p className='text-center text-gray-500 max-w-80 mx-auto mb-12 '>Ready to make a move? Let's build it together</p>
t
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto pt-8 text-gray-600'>
                <div className='flex flex-wrap'>
                    <div className=' text-left w-full md:w-1/2'>Your name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 outline-gray-300'
                            type='text' name='Name' placeholder='Your Name' required />
                    </div>
                    <div className=' text-left w-full md:w-1/2'>Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 outline-gray-300'
                            type='email' name='Email' placeholder='Your Email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full h-48 border border-gray-300 px-3 py- mt-2 resize-none rounded outline-gray-300'
                        name='Message' placeholder='Enter your message' required />
                </div>
                <button className='bg-blue-600 text-white rounded py-2 px-12 mb-10'>{result ? result : "Send Message"}</button>
            </form>
        </motion.div>
    )
}

export default Contact
