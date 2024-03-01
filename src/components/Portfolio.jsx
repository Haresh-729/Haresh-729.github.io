import React from "react";
import { useNavigate } from "react-router-dom";
import Encrypto from "../assets/portfolio/Encrypto.jpg";
import Modernvate from "../assets/portfolio/Modernvate.png";
import AWD from "../assets/portfolio/AWD.jpg";
import CH from "../assets/portfolio/Chatify.png";
import ST from "../assets/portfolio/Swaad_tales.png";
import SF from "../assets/portfolio/Shop_finder.png";

const Portfolio = () => {
  const navigate =  useNavigate();
  const handleClick = () => {
    navigate("/portfolio")
  }
  const portfolios = [
    {
      id: 1,
      src: Modernvate,
      // ren: "https://youtu.be/MM1LFj3zFto",
      ren: "https://Haresh-729.github.io/Dashboard",
      code:"https://github.com/Haresh-729",
    },
    {
      id: 5,
      src: ST,
      ren: "https://haresh-729.github.io/Swaad-Tales/",
      code:"https://github.com/Haresh-729",
      // PC
    },
    {
      id: 9,
      src: CH,
      ren: "https://haresh-729.github.io/Chatify/",
      code:"https://github.com/Haresh-729",
      // PC
  },
    {
      id: 2,
      src: Encrypto,
      ren: "https://youtu.be/8jVO0MsCm0Y",
      code:"https://github.com/Haresh-729",
    },
    {
      id: 11,
      src: SF,
      ren: "https://haresh-729.github.io/Shop_finder/",
      code:"https://github.com/Haresh-729",
      // PC
    },
    {
      id: 3,
      src: AWD,
      ren: "https://youtube.com/playlist?list=PLINxJp0PwkX_1ZkXJCLcMwzQw6UYmu_aW",
      code:"https://github.com/Haresh-729/Advanced-Web-Development",
    },
  ];

  return (
    <div
      name="portfolio"
      className="select-none bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div data-aos="fade-up" className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="select-none mt-[4rem]  pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, ren, code }) => (
            <div key={id} data-aos="flip-right" data-aos-delay='500' className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a target="_blank" href={ren}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="w-1/5 px-6 py-1 font-bold m-4 duration-200 hover:scale-105 self-end" onClick={handleClick}>
          More Projects . . . ►
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
