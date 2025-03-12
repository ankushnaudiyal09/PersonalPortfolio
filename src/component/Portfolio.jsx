import React from 'react'
import LMS from "../assests/portfolio/LMS.jpeg"
import devDective from "../assests/portfolio/devDective.jpeg"
import BIGINT from "../assests/portfolio/BIGINT.jpeg"
import Razorpay from "../assests/portfolio/Razorpay.jpeg"

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
// scroll Trigger ko chalane ke liye krna pdega 
gsap.registerPlugin(ScrollTrigger)


function Portfolio({isDark , setIsDark}) {

    const portfolio = [
      {
        id: 1,
        src: LMS,
        liveLink:"https://github.com/ankushnaudiyal09?tab=repositories",
        codeLink:"https://github.com/ankushnaudiyal09?tab=repositories",
      },

      {
        id: 2,
        src: BIGINT,
        liveLink:"https://github.com/ankushnaudiyal09/BIGINT_CPP",
        codeLink:"https://github.com/ankushnaudiyal09/BIGINT_CPP",

      },

      {
        id: 3,
        src: devDective,
        liveLink: "https://devdetective03.netlify.app/",
        codeLink: "https://github.com/ankushnaudiyal09/DevDetective" 
      },

      {
        id: 4,
        src: Razorpay,
        liveLink:"https://6780c9efa3564507c5357e3c--razorpayclonewebsite1.netlify.app/",
        codeLink:"https://github.com/ankushnaudiyal09/RazorPay_Clone"
      },
    ];

  return (
    <div
      id="project"
      className={` w-full text-white lg:h-[800px] md:h-screen mt-0 
                ${
                  isDark
                    ? "bg-gradient-to-b from-black via-black to-zinc-900"
                    : "bg-slate-100"
                }`}
    >
      <div className="max-w-screen-lg pt-0 mx-auto flex flex-col justify-start w-full h-full gap-[50px] md:pt-[90px]">
        <div className="flex justify-center items-center">
          <p
            className={`text-6xl font-bold border-b-4   pb-2 text-transparent bg-clip-text  projectHeading pt-[120px] md:pt-0
                        ${
                          isDark
                            ? " bg-gradient-to-r from-red-900 to-red-400 border-blue-700"
                            : "bg-gradient-to-r from-blue-900 to-cyan-700 border-red-700"
                        }`}
          >
            Project
          </p>
        </div>

        <div className="w-[100%] grid sm:grid-cols-2 lg:grid-cols-3 gap-1 gap-y-10  sm:px-0 pb-8 mt-0 ">
          {portfolio.map(({ id, src , liveLink , codeLink}) => (
            <div
              key={id}
              className={`shadow-md  h-[180px] w-[270px] rounded-3xl p-3 hover:scale-110 duration-300 mx-auto
                                    hover:border-2  
                                ${
                                  isDark
                                    ? "border border-black shadow-circle "
                                    : "border border-cyan-500 shadow-card"
                                }
                                    `}
            >
              <img src={src} alt="" className="rounded-2xl h-[75%] w-full" />

              <div
                className={`flex justify-center items-center ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                <button
                  className={`w-1/2 px-6 mx-4 pt-3 duration-200  hover:text-red-700 font-bold`}
                >
                  <a href={liveLink}>Demo</a>
                </button>
                <button className="w-1/2 px-6 mx-4 pt-3 hover:text-red-700 font-bold ">
                  <a href={codeLink}>
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio



                    

                
                    