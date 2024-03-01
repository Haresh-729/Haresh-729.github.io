import React from "react";
import { useNavigate } from "react-router-dom";
import Encrypto from "../assets/portfolio/Encrypto.jpg";
import Modernvate from "../assets/portfolio/Modernvate.png";
import AWD from "../assets/portfolio/AWD.jpg";
import AJP from "../assets/portfolio/AJP.png";
import CN from "../assets/portfolio/CN.png";
import PC from "../assets/portfolio/PC.jpg";
import ST from "../assets/portfolio/Swaad_tales.png";
import CK from "../assets/portfolio/Chef_kart.png";
import CH from "../assets/portfolio/Chatify.png";
import L from "../assets/portfolio/Learner.png";
import SF from "../assets/portfolio/Shop_finder.png";

const DetailPort = () => {
  const navigate =  useNavigate();
  const handleClick = () => {
    navigate("/My_Portfolio")
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
        id: 7,
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
        id: 11,
        src: SF,
        ren: "https://haresh-729.github.io/Shop_finder/",
        code:"https://github.com/Haresh-729",
        // PC
    },
    {
        id: 10,
        src: L,
        ren: "https://haresh-729.github.io/Learner/",
        code:"https://github.com/Haresh-729",
        // PC
    },
    {
        id: 8,
        src: CK,
        ren: "https://haresh-729.github.io/ChefKart/",
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
      id: 3,
      src: AWD,
      ren: "https://youtube.com/playlist?list=PLINxJp0PwkX_1ZkXJCLcMwzQw6UYmu_aW",
      code:"https://github.com/Haresh-729/Advanced-Web-Development",
    },
    {
      id: 4,
      src: CN,
      ren: "https://youtube.com/playlist?list=PLINxJp0PwkX-krc37y_7pouxpjK-IvMVM",
      code:"https://github.com/Haresh-729",
      // CN
    },
    {
      id: 5,
      src: AJP,
      ren: "https://youtube.com/playlist?list=PLINxJp0PwkX_UZEj9TAvJFTooSVpgfKbP",
      code:"https://github.com/Haresh-729/Advanced-Java-Programming",
      // AJP
    },
    {
      id: 6,
      src: PC,
      ren: "https://youtu.be/3CwCsFCymVU",
      code:"https://github.com/Haresh-729",
      // PC
    },
  ];

  return (
    <div
      name="Detail_portfolio"
      className="select-none bg-gradient-to-b from-black to-black w-full text-white "
    >
      <div data-aos="fade-up" className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="select-none flex flex-col pb-8">
            <button className="w-1/5 py-3 duration-200 hover:scale-105 text-left" onClick={handleClick}>
            ◄ Back
            </button>
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
      </div>
    </div>
  );
};

export default DetailPort;
