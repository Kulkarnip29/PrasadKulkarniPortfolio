import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'hero' },
    { id: 2, link: 'about' },
    { id: 3, link: 'experience' },
    { id: 4, link: 'trainings'},
    { id: 5, link: 'projects' },
    { id: 6, link: 'skills' },
    { id: 7, link: 'education' },
    { id: 8, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <ScrollLink to="hero" smooth duration={500} className="cursor-pointer">
            <u className="text-yellow-300">port</u><i>f</i><u className="text-blue-500">olio</u>
            {/* PRASAD <sup className='subscript font-semibold w-1 h-0  text-wrap'>Portfolio</sup> */}
          </ScrollLink>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            <ScrollLink 
              to={link} 
              smooth 
              duration={500}
              offset={-80}
              spy
              activeClass="text-blue-600"
            >
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <ScrollLink
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="text-white"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;