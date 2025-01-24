import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ReactTypingEffect from 'react-typing-effect';


const Home = () => {
  return (
    <div
      name="home"
      className="select-none h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className=" flex lg:w-[50rem]">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a <span style={{ paddingRight: "5px" }}></span>
              <ReactTypingEffect
                text={[
                  "Web Developer,",
                  "Fullstack Dev.",
                  "DB Manager,",
                  "Student,",
                  "Designer,",
                  "Programmer",
                  "Project Manager,",
                  "Organizer.",
                ]}
                speed={30}
                eraseSpeed={100}
                eraseDelay={100}
                className="bg-clip-text text-transparent bg-gradient-to-b from-[#ffeb3b] to-[#e53935]"
                loop
              />
            </h2>
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            I am currently pursuing B.Tech in Computer Engineering. Looking
            forward to work on projects that will boost my skills in becoming
            better Computer Engineer in future.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="border-4 p-4 lg:p-[0.5rem] lg:border-2 rounded-[2rem] lg:rounded-[1rem] border-[#fb8c00] hover:border-[#e64a19]">
          <img
            data-aos="flip-right"
            data-aos-delay="500"
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto h-[20rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
