import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/haresh-kurade-22a04b241",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Haresh-729",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kuradeharesh4002@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1SSfRLt-JTVGTK5kVlxTUSvWz5-jC_peL/view?usp=drivesdk",
      
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/haresh_kurade_729/",
    },
    {
      id: 6,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "https://www.facebook.com/haresh.kurade.729/",
    },
  ];

  return (
    <div className="select-none hidden lg:flex lg:flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "select-none flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
