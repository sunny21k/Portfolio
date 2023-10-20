import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Hello! My name is Sunny Kumar, a highly motivated Computer Science major at Adelphi University. Throughout my academic career, I have dedicated myself to developing a passion and strong foundation for software development and I have dedicated myself fully to developing a passion and strong foundation for software development. I have taken a rigorous course load focused on programming, algorithms, data structures, and software design. 
            </p>
            <br />
            <p className='text-xl'>I find great satisfaction in solving complex coding problems and creating efficient, user-friendly applications. As a quick learner with strong analytical skills, I am excited to apply my knowledge to real-world software projects. My goal is to continuously learn and advance my software development skills. I am eager to apply my skills and knowledge to make meaningful contributions to the field of development.</p>
        </div>
    </div>
  )
}

export default About