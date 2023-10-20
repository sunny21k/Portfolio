import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-4'>
                <h5 className='text-1xl sm:text-2xl font-bold text-white'>Hello, I'm  <span className='text-purple-400'>Sunny</span></h5>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a  <span className='text-purple-400'>Software </span> Engineer</h2>
                <p className='text-gray-500 py-4 max-w-xl'>
                    who enjoys solving complex problems and building creative web applications. I take pride in crafting user interfaces that are visually appealing yet easy to navigate. As a developer, I appreciate the challenge of taking a concept and bringing it to life in code. I find satisfaction in seeing my applications come together and provide value to users. Bringing ideas into reality through lines of code is an immensely rewarding experience.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500}className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 hover:scale-105 duration-300 transition-smooth cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={30} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home