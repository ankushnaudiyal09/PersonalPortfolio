import React, { useState } from 'react'
import {FaBars , FaTimes} from "react-icons/fa"
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);



function NavBar({isDark , setIsDark}) {

    useGSAP(() => {

        let t1 = gsap.timeline();

        t1.from("div div h1" , {
            
            y:-100,
            duration:1,
            opacity:0,
        })

        t1.from("div p" , {
            opacity:0,
            duration:1,
            y:-100,
        })

        gsap.fromTo(".listItem", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
    })



    const [nav,setNav] = useState(false);

    const links = [

        {
            id:1,
            link:"home",

        },
        {
            id:2,
            link:"about",
        },
        {   
            id:3,
            link:"project",
        },
        {
            id:4,
            link:"experience",
        },
        {
            id:5,
            link:"contact"
        },
    ]

    function navHandler()
    {
        setNav(!nav);
    }

    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    
    <div   className={`flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-20 navbar 
                       ${isDark ? "" : "bg-white"}
                    `}> 

        <div  className="">
            <h1  className={`text-2xl lg:text-4xl ml-6   font-bold bg-clip-text text-transparent 
                        ${isDark ? " bg-gradient-to-r from-cyan-400  to-white" : "bg-gradient-to-r from-orange-700 via-orange-700 to-orange-400 "}
                `}>
                PORTFOLIO
            </h1>
        </div>

        <ul className="hidden md:flex"  >

            {
                // humne id or link nikal liye ek link se 
                links.map(({id,link}) => {

                return (
                  <li
                    key={id}
                    className={`px-4 cursor-pointer capitalize font-bold  duration-200 listItem
                                        hover:text-blue-500  ${
                                          isDark
                                            ? "text-gray-500"
                                            : "text-black"
                                        }`}
                  >
                    <Link
                      to={link}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                      onClick={() => scrollToSection(link)}
                    >
                      {link}
                    </Link>
                  </li>
                );
                })
            }


        </ul>

        {/* hamburger */}

        <div  className="cursor-pointer pr-4 z-10 text-gray-500  md:hidden sm:flex"
            onClick={navHandler}>

            {nav ? (<FaTimes  size={30} /> )  : (<FaBars  size={30}   />) } 
        
        </div>
        
        {/* agr nav pr click hua hai , means true hai to tbhi ye wala part dikhao for mobile user */}

        {nav && (

            <ul  className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
                            to bg-gray-700 text-gray-500">
                
                {
                    // humne id or link nikal liye ek link se 
                    links.map(({id,link}) => {

                    return <li key={id} className="cursor-pointer px-4 capitalize py-6 text-4xl mobilelistItem">
                            
                            <Link to={link} duration={500} smooth  onClick={() => setNav(!nav)}>
                                {link}    
                            </Link>

                        </li>

                    })
                }
                
            </ul>


        )}

        <p  onClick={() => setIsDark(!isDark)}  className="cursor-pointer mr-5">
                {
                    isDark ? ( <MdOutlineLightMode  size={25}  className="text-white"/>) 
                    :
                    (<MdDarkMode size={25}   className="text-black"/>)
                }
        </p>



    </div>
  )
}

export default NavBar





