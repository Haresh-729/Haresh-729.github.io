import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  let [count, setCount] = useState(0);
  const increment = (e) => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const links = [
    {
      id: 1,
      logo: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/haresh-kurade-22a04b241",
      style: "rounded-tl-md rounded-bl-md",
    },
    {
      id: 2,
      logo: <FaGithub size={30} />,
      href: "https://github.com/Haresh-729",
    },
    {
      id: 3,
      logo: <HiOutlineMail size={30} />,
      href: "mailto:kuradeharesh4002@gmail.com",
    },
    {
      id: 4,
      logo: <BsFillPersonLinesFill size={30} />,
      href: "/Haresh_Kurade_resume.pdf",

      download: true,
    },
    {
      id: 5,
      logo: <FaInstagram size={30} />,
      href: "https://www.instagram.com/haresh_kurade_729/",
    },
    {
      id: 6,
      logo: <FaFacebook size={30} />,
      style: "rounded-br-md rounded-tr-md",
      href: "https://www.facebook.com/haresh.kurade.729/",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch(
        "https://getform.io/f/186afd40-252b-43f7-b129-3d652b8f0c6a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        alert("Successfully Sent...!");
      } else {
        console.error("Form submission failed:", response.statusText);
        // Handle the error or show an error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div
      name="contact"
      className="select-none w-full h-screen bg-gradient-to-b to-black from-gray-800 p-4 text-white"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="select-none flex flex-col p-4 mt-[2rem] lg:mt-[4rem] justify-center max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Felt Something interesting about me? Feel Free to contact with me.
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/186afd40-252b-43f7-b129-3d652b8f0c6a"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleChange}
            />
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleChange}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleChange}
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className="flex flex-row lg:hidden md:hidden items-center">
          {links.map(({ id, href, style, download, logo }) => (
            <div
              key={id}
              className={
                "flex flex-row justify-center w-20 h-14 px-2 bg-gray-500 " +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex flex-row justify-center items-center w-full text-white focus:text-[#42a5f5] hover:text-[#42a5f5]"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {logo}
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={increment}
            className="text-white bg-gradient-to-b from-[#fce4ec] via-[#f06292] to-[#b71c1c] px-6 mt-1 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
          >
            ❤ Likes {count}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
