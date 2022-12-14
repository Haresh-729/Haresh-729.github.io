import React from "react";
import Encrypto from "../assets/portfolio/Encrypto.jpg";
import Modernvate from "../assets/portfolio/Modernvate.png";
import AWD from "../assets/portfolio/AWD.jpg";
import AJP from "../assets/portfolio/AJP.png";
import CN from "../assets/portfolio/CN.png";
import PC from "../assets/portfolio/PC.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Encrypto,
      ren: "https://youtu.be/8jVO0MsCm0Y",
      code:"https://github.com/Haresh-729",
    },
    {
      id: 2,
      src: Modernvate,
      ren: "https://youtu.be/MM1LFj3zFto",
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
      name="portfolio"
      className="select-none bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
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
                <a href={ren}>
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

export default Portfolio;
