import React from 'react'
import css from "../assests/css.png"
import github from "../assests/github.png"
import javaScript from "../assests/javascript.png"
import nextjs from "../assests/nextjs.png"
import node from "../assests/node.png"
import reactImage from "../assests/react.png"
import tailwind from "../assests/tailwind.png"
import MongoDb from "../assests/MongoDb.jpeg"
import Express from "../assests/expressJs.jpeg"


function Experience({isDark , setIsDark}) {

    const Experience = [
      {
        id: 1,
        src: nextjs,
        title: "c++",
        style: "shadow-white",
      },

      {
        id: 2,
        src: css,
        title: "css",
        style: "shadow-blue-500",
      },

      {
        id: 3,
        src: javaScript,
        title: "javaScript",
        style: "shadow-yellow-500",
      },

      {
        id: 4,
        src: reactImage,
        title: "ReactJs",
        style: "shadow-blue-600",
      },

      {
        id: 5,
        src: tailwind,
        title: "tailwind",
        style: "shadow-sky-400",
      },

      {
        id: 6,
        src: MongoDb,
        title: "MongoDb",
        style: "shadow-sky-400",
      },

      {
        id: 7,
        src: github,
        title: "Git",
        style: "shadow-gray-400",
      },

      {
        id: 8,
        src: node,
        title: "Node",
        style: "shadow-green-400",
      },
      {
        id: 9,
        src: Express,
        title: "Express Js",
        style: "shadow-green-400",
      },
    ];




  return (
    <div
      id="experience"
      className={` w-full h-auto  ${
        isDark
          ? "bg-gradient-to-b from-zinc-900 via-black to-black"
          : "bg-gradient-to-b from-white to-slate-100"
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col  w-full h-full text-white gap-7 ">
        <div className="flex flex-col justify-center items-center gap-5 pt-[150px] sm:pt-[200px] md:pt-[300px] lg:pt-0">
          <p
            className={` text-4xl md:text-6xl font-bold border-b-4 border-white pb-3 inline 
                         ${
                           isDark
                             ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
                             : "text-black border-yellow-500"
                         }
                    `}
          >
            Experience
          </p>
          <p className={`${isDark ? "font-medium" : "text-black font-medium"}`}>
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-[100%] grid md:grid-cols-3 sm:grid-cols-2  gap-y-8 gap-x-4 text-center py-8 px-12 sm:px-0 sm:ml-4  ">
          {Experience.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` w-[220px]  hover:scale-110 duration-300 py-2 rounded-3xl ${style} 
                                ${isDark ? "" : "bg-zinc-900"}
                        `}
            >
              <img src={src} alt="ImagePlease" className="w-20 mx-auto" />

              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience