import React, { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 3,
      link: 'contact'
    },
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50'>
      <div>
        <h1 className='text-5xl ml-2'>Sunny Kumar</h1>
      </div>
      <ul className='hidden md:flex'> 

        {links.map(({link, id}) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}>
               {link}
               </Link></li>
        ))}

      </ul>
      <div onClick={() => setMenu(!menu)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>

        {menu ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

        {menu && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

            {links.map(({link, id}) => (
              <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setMenu(!menu)} to={link} smooth duration={500}>
               {link}
               </Link></li>
        ))}

      </ul>

          )}
    </div>
  ) 
}

export default Navbar;