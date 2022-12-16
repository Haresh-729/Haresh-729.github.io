import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  // const theme = [
  //   {
  //     id: 1,
  //     link: "theme1",
  //   }
  // ]

  // const [themeDiv, setThemeDiv] = useState(false);
  // const handleTheme =e=>{
  //   setThemeDiv(current => !current);
  // }

  return (
    <div className="select-none top-0 flex sticky z-50 justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div>
        <h1 className="lg:text-5xl text-3xl font-signature ml-2">Haresh</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* <button onClick={handleTheme} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 border-2 hover:border-black rounded-[3rem] ">
        <h1>Theme</h1>
      </button>
      {themeDiv?(<div className="absolute float-right flex flex-col ml-[89rem] mt-[3.5rem] rounded-[3rem] w-[8.5rem] bg-white"> 
        <h1 className="text-black">Hello</h1>
        <ul>
          {theme.map(({ id, link }) => (
            <li key={id} className="capitalize">
              
            </li>
          ))}

        </ul>
      
      </div>):null} */}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
