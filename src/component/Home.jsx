import React from 'react'
import Img from "../assests/man.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll"
import TypingEffect from "react-typing-effect"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);


const Home = ({isDark , setIsDark}) => {

      const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    useGSAP(() => {

        let h1 = gsap.timeline();
        let h2 = gsap.timeline();

        h1.from(".homeGsap"  ,{

            opacity:0,
            duration:1,
            x:-80,
        })

        h2.from(".image",{
            opacity:0,
            duration:2,
            x:100,
        })
    })

  
    return (
      // via black means , start back se , center pr bhi black fir gray-500 color

      <div
        id="home"
        className={`h-full w-[100vw] 
        ${
          isDark
            ? "bg-gradient-to-b from-black via-black to-zinc-900 "
            : "bg-gradient-to-b from-white to-slate-100"
        }      
    `}
      >
        <div className="max-w-screen-xl pt-[100px] md:pt-0 w-full mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full w-[100%]  homeGsap">
            <h2 className="flex flex-col md:text-sm ">
              <p
                className={`text-xs sm:text-4xl font-medium  inline pb-3 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Hi , I'm
                <span
                  className={`bg-clip-text text-transparent 
                                    ${
                                      isDark
                                        ? "bg-gradient-to-r from-cyan-500 to-white"
                                        : "bg-gradient-to-r from-red-900 to-red-400"
                                    }
                        `}
                >
                  {" "}
                  Ankush Naudiyal
                </span>
              </p>

              <TypingEffect
                className={`text-xl sm:text-2xl font-bold  bg-clip-text text-transparent md:text-3xl lg:text-4xl
                                    ${
                                      isDark
                                        ? "bg-gradient-to-r from-cyan-500 to-white"
                                        : "bg-gradient-to-r from-red-900 to-red-400"
                                    } 
                    `}
                text={[
                  "Full Stack Developer... ",
                  "Software Developer... ",
                  "React Developer...",
                ]}
                speed={100} // 100ms
                eraseSpeed={50} // ms
                eraseDelay={2000} // ms
                typingDelay={500}
                cursor="|"
              />
            </h2>
            <p className="py-3 md:py-6 max-w-md text-gray-500 text-xs md:text-xl">
              I have a 2+ Years in experience building and designing software.
              Currently , i love to work on web Application using technologies
              like ReactJs , Tailwind and others.
            </p>

            <Link
              to="project"
              smooth
              duration={500}
              className={`my-3 md:w-[135px] md:h-[50px] w-[90px] h-[30px] group hover:scale-110 duration-300 ${
                isDark ? "text-white" : "text-black"
              }`}
              onClick={() => scrollToSection("project")}
            >
              <button
                className={`w-full h-full rounded-full bg-cyan-500 flex gap-1  justify-center items-center font-medium
                             text-lg md:text-xl pl-2 mx-3 py-2 my-1  hover:bg-transparent hover:border-2 hover:border-blue-500 duration-500
                                        
                                `}
              >
                Project
                <MdOutlineKeyboardArrowRight
                  size={23}
                  className="group-hover:rotate-90 duration-500"
                />
              </button>
            </Link>
          </div>

          <div className="w-[60%] h-[400px] mt-8 image">
            <img
              src={Img}
              alt="My Profile"
              className="rounded-[60px] h-full w-full object-center"
            />
          </div>
        </div>
      </div>
    );
}

export default Home

