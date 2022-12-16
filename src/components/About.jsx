import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="select-none w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div data-aos="fade-up" className="select-none max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div  className="mt-[4rem] sm:mt-0 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I'm Haresh Kurade always eager to grab knowledge. Am a self taught
          developer, programmer, designer. Open to learn and experiment new
          things. Always try to add some creativity and perfection in every work
          of mine. Trying to scale my knowledge and skills day by day. Like to 
          plan and do things according to my priorities. 
        </p>

        <br />

        <p className="text-xl">
          A good human being, always give my hand to needy. Being tech-savvy
          also an environmentalist, humanist, try not to harm either environment
          or other living beings.  Playing multiple roles as a student and an intern.
          An responsible person, try to think about others first.
        </p>
      </div>
    </div>
  );
};

export default About;
