import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from 'react-icons/bs'


function SocialMedia({isDark , setIsDark}) {

    const links = [
        {
            id:1,
            child:(
                <>
                    LinkedIn
                    <FaLinkedin  size={30} />
                </>
            ),
            href:"https://linkedin.com",
            style:'rounded-tr-xl'
        },
        {
            id:2,
            child:(
                <>
                    GitHub
                    <FaGithub  size={30} />
                </>
            ),
            href:"https://github.com/ankushnaudiyal09",
        },
        {
            id:3,
            child:(
                <>
                    Mail
                    <HiOutlineMail  size={30} />
                </>
            ),
            href:"mailto:ankushnaudiyal09@gmail.com",
        },
        {
            id:4,
            child:(
                <>
                    Resume
                    <BsFillPersonLinesFill  size={25} />
                </>
            ),
            href:"/Resume.pdf",
            style:"rounded-br-xl",
            download:true,

        }


    ]



  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, download, style, href, child }) => (
          // style ko add kra humne , jisme hogi usme aa jayegi

          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-900 duration-500 hover:ml-[-10px]  hover:border hover:border-blue-500  hover:rounded-[12px] ${style} 
                                ${
                                  isDark
                                    ? "hover:bg-transparent"
                                    : "text-black bg-orange-800"
                                }`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white pl-2 "
              target="_blank"
              download={download}
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia