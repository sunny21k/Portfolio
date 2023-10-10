import React from 'react'
import { AiFillHtml5} from 'react-icons/ai'
import { FaReact, FaJava } from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si'
import {BiLogoJavascript, BiLogoCss3, BiLogoPython, BiLogoTypescript, BiLogoCPlusPlus} from 'react-icons/bi'

const Experiences = () => {

    const skills = [
        {
            id: 1,
            skill: <AiFillHtml5 size={120} className="mx-auto"/>,
            name: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            skill: <FaReact size={120} className="mx-auto"/>,
            name: "React",
            style: "shadow-cyan-400",
        },
        {
            id: 3,
            skill: <FaJava size={120} className="mx-auto"/>,
            name: "Java",
            style: "shadow-red-600",
        },
        {
            id: 4,
            skill: <SiTailwindcss size={120} className="mx-auto"/>,
            name: "Tailwind",
            style: "shadow-blue-400",
        },
        {
            id: 5,
            skill: <BiLogoJavascript size={120} className="mx-auto"/>,
            name: "Javascript",
            style: "shadow-yellow-300",
        },
        {
            id: 6,
            skill: <BiLogoCss3 size={120} className="mx-auto"/>,
            name: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 7,
            skill: <BiLogoPython size={120} className="mx-auto"/>,
            name: "Python",
            style: "shadow-yellow-700",
        },
        {
            id: 8,
            skill: <BiLogoTypescript size={120} className="mx-auto"/>,
            name: "Typescript",
            style: "shadow-teal-300",
        },
        {
            id: 9,
            skill: <BiLogoCPlusPlus size={120} className="mx-auto"/>,
            name: "C++",
            style: "shadow-blue-300",
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to to-black w-full h-full pt-10'>
        <div className='text-white max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experiences</p>
                <p className='py-6'>These are the technologies I've worked with:</p>
            </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {skills.map(({id, skill, name, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            {skill}
                            <p className='mt-4'>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experiences