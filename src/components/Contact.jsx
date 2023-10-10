import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto f-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Get in touch with me:</p>
            </div>
            <div className='flex justify-center items-center'>
                <form className='flex flex-col w-full md:w-1/2' action="https://getform.io/f/3241d5e9-7156-43f0-b1b7-fbd4a9636726" method='POST'>
                    <input type="text" name="name" placeholder='Enter your name:' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'/>
                    <input type="text" name="email" placeholder='Enter your email:' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'/>
                    <textarea placeholder='Enter your message:' name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-100 duration-300'>Contact Me</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact