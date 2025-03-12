import React  from 'react'
import Mern from "../assests/mern.png"
import dsa from "../assests/dsa.png"
import cpp from "../assests/cPlusPlus.jpeg"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
// scroll Trigger ko chalane ke liye krna pdega 

gsap.registerPlugin(ScrollTrigger);

function About({isDark , setIsDark}) {



    let Card = [

      {
        id:1,
        title:"MERN Stack Web Developer",
        img:Mern,
      },
      {
        id:2,
        title:"C++",
        img:cpp
      },
      {
        id:3,
        title:"Data Structure And Algorithms",
        img:dsa
      }

    ]

  return (
    
    <div id="about"  className={`min-h-screen w-[100vw] flex flex-col md:flex-row gap-10 first 
        ${isDark ? " bg-gradient-to-b from-zinc-900 to-black" : "bg-slate-100"}
    `}>
      
      <div className="w-[50%] h-[100vh] flex justify-center items-center gap-[30px] ml-10 second pt-[120px] md:pt-0">

          <div className="flex items-center justify-center flex-col mt-[30px] circle">
            
            <div className={`w-[60px] h-[60px] rounded-[50%] ${isDark ? "bg-[#7ad7ea] shadow-circle" : "bg-orange-500 shadow-circleLight"}`}></div>
            
            <div className={`w-[2px] h-[120px] line ${isDark ? "bg-[#f0f8ff]" : "bg-black"}`}></div>

            <div className={`w-[60px] h-[60px] circle rounded-[50%] ${isDark ? "bg-[#7ad7ea] shadow-circle" : "bg-orange-500 shadow-circleLight"}`}></div>
            <div className={`w-[2px] h-[120px] line ${isDark ? "bg-[#f0f8ff]" : "bg-black"}`}></div>

            <div className={`w-[60px] h-[60px] circle rounded-[50%] ${isDark ? "bg-[#7ad7ea] shadow-circle" : "bg-orange-500 shadow-circleLight"}`}></div>

          </div>

          <div className="flex gap-[40px] flex-col pt-[150px] third">

            <div  className="gap-5 personalInfo">
              <h1 className={`text-2xl md:text-4xl font-bold heading
                  ${isDark ? "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text" : "text-black"}
                `}>Personal Info</h1>
              
              <ul className="list-none pl-3 gap-5">
                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>Name</span> : Ankush Naudiyal 
                  </li>

                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>Age</span> : 20 Years
                  </li>

                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>Gender</span> : Male
                  </li>
                  
                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>Language</span> : English , Hindi
                  </li>
              
              </ul>
            </div>

            <div className="gap-5 Education">
              <h1 className={` text-4xl font-bold
                  ${isDark ? "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text" : "text-black"}
                `}>Education</h1>
              
              <ul  className="list-none pl-3 gap-5">
                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>Degree</span> : BSC
                  </li>

                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>Branch</span> : Information Technology
                  </li>

                  <li className="text-white">
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>CGPA</span> : 7.2 Cgpa Current
                  </li>
              
              </ul>
            </div>

            <div className="gap-5 skills">
              <h1 className={` text-4xl font-bold
                  ${isDark ? "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text" : "text-black"}
                `}>Skills</h1>
              
              <ul  className="list-none pl-3 gap-5 font-semibold text-lg">
                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    MERN Stack Web Developer
                  </li>

                  <li className={`${isDark ? "text-white font-semibold text-lg" : "text-black font-semibold text-lg"}`}>
                    Data Structure And Algorithms 
                  </li>

                  <li  className={` ${isDark ? "text-white font-semibold text-lg" : "text-black font-semibold text-lg"}`}>
                    C++ , SQl 
                  </li>

                  <li className={`${isDark ? "text-white" : "text-black"}`}>
                    <span className={`text-[#7ad7ea] font-semibold text-lg ${isDark ? "" : "text-orange-600"}`}>Familier With </span> : C , java , OOPs , DBMS , OS
                  </li>
                
              
              </ul>
            </div>

          </div>

      </div>
      

      <div className=" w-full md:w-[50%] h-[60vh] flex justify-center items-center flex-col gap-9 p-[10%] mt-[300px] pt-0 md:mt-[30px] md:pt-10 md:justify-center pb-0 mb-0 md:h-[100vh]  rightAbout">
        {Card.map(({ id, title, img }) => (
          
          <div  key={id}
            className="w-[90%] max-w-[320px] h-[140px] overflow-hidden relative flex items-center justify-center text-center shadow-card rounded-3xl transition-all cursor-pointer flex-shrink-0 p-[10px] group hover:scale-110 duration-300 ">
            {/* Text */}
            <h1 className="bg-gradient-to-r from-red-800 via bg-red-600 to-white font-bold text-3xl text-transparent bg-clip-text  transition-all group-hover:z-0 z-10">
              {title}
            </h1>

            {/* Image */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-800 via-black to-black flex justify-center items-center backdrop-blur-[7px] z-11">
              <img
                src={img}
                alt="Card"
                className="w-full h-full object-contain scale-0 transition-all duration-500 group-hover:scale-105 p-5 "
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default About










