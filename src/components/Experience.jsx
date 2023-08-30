import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import Cpp from "../assets/C++.png";
import Csharp from "../assets/Csharp.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import R from "../assets/R.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import mongo from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import android from "../assets/android studio.png";
import VS from "../assets/visual studio.png";
import VSC from "../assets/visual studio code.png";
import C from "../assets/C.png";
import net from "../assets/Net.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.png";

const Experience = () => {
  const languages = [
    {
      id: 1,
      src: C,
      title: "C",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Cpp,
      title: "Cpp",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Csharp,
      title: "C Sharp",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: java,
      title: "Java",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 7,
      src: R,
      title: "R",
      style: "shadow-red-700",
    },
  ];

  const SLan = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: net,
      title: ".Net",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: firebase,
      title: "Firebase",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mongo,
      title: "MongoDB",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-pink-900",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-purple-400",
    },
    {
      id: 10,
      src: android,
      title: "Android Studio",
      style: "shadow-teal-400",
    },
    {
      id: 11,
      src: VS,
      title: "Visual Studio",
      style: "shadow-cyan-400",
    },
    {
      id: 12,
      src: VSC,
      title: "VS Code",
      style: "shadow-yellow-400",
    },
    {
      id: 13,
      src: figma,
      title: "Figma",
      style: "shadow-pink-800",
    },
    {
      id: 14,
      src: canva,
      title: "Canva",
      style: "shadow-blue-800",
    },
  ];

  return (
    <div
      name="experience"
      className="select-none bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div
        data-aos="fade-up"
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
      >
        <div className="mt-[4rem] ">
          <p className="select-none text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <div
            key="2"
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg mt-[2rem] shadow-blue-800`}
          >
            <div className="my-4 ml-4 text-[1.5rem] font-bold text-[#ffeb3b]">
              Full Stack Developer in Softel Technologies Inc. Mumbai.
            </div>
            <div className=" ml-[0rem] sm:ml-[4rem] mb-[1rem]">
              <ol className="ml-[2rem] sm:ml-[2rem]" style={{ listStyle: "disc" }}>
                <li>Development using .NET C#, Flutter, HTML, CSS, SQL.</li>
                <li>Project in charge.</li>
                <li>Client handling, Deploying of code on servers, etc.</li>
              </ol>
            </div>
          </div>
          <div
            key="3"
            className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg mt-[2rem] shadow-teal-400"
          >
            <div className="my-4 ml-4 text-[1.5rem] font-bold text-pink-400">
              Six months internship as Full Stack Developer at Softel
              Technologies INC.
            </div>
            <div className=" ml-[0rem] sm:ml-[4rem] mb-[1rem]">
              <ol className="ml-[2rem] sm:ml-[2rem]" style={{ listStyle: "disc" }}>
                <li>Development using .NET C#, Flutter, HTML, CSS, SQL.</li>
                <li>
                  As Head Intern assign tasks to interns, ensure completeness of
                  tasks, guiding them.
                </li>
                <li>Client handling, Deploying of code on servers, etc.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="mt-[2rem] ">
          <div className="h-[4px] w-[13rem] bg-gray-500 mt-4 mb-2"></div>
          <p className="pb-6">These are the Languages I work with</p>
        </div>

        <div
          data-aos="flip-right"
          data-aos-delay="500"
          className="w-full grid grid-cols-2 sm:grid-cols-7 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {languages.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="py-6">
            These are the Scripting Languages IDEs & tools I work with
          </p>
        </div>

        <div
          data-aos="flip-left"
          data-aos-delay="500"
          className="w-full grid grid-cols-2 sm:grid-cols-7 gap-8 text-center px-12 sm:px-0"
        >
          {SLan.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
