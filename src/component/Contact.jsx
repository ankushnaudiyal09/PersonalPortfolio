// import React from 'react'
// import { MdPerson } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
// import Con from "../assests/contact.png"

// function Contact({isDark , setIsDark}) {
//   return (
    
//     <div  name="contact"  className={`w-full h-full  text-white flex flex-col items-center justify-center pt-[120px] sm:pt-[100px] md:pt-[50px] lg:pt-0
                
//             ${isDark ? "bg-gradient-to-b from-black via-black to-gray-900 " : "bg-gradient-to-b from-slate-100 to-white"}
//     `}>

//         <div  className='pb-8 text-center'>

//             <p  className={`text-5xl font-bold inline border-b-4  ${isDark ? "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400  to-white border-gray-500" : "text-black border-yellow-500"} `}>
//                     Contact
//             </p>

//             <p  className={`py-6  text-xl ${isDark ? "text-white" : "text-green-500"}`}>
//                     Submit the form below to get in touch with me
//             </p>

//         </div>

//         <div    className="w-[80%] h-full flex flex-col gap-[70px] md:flex-row ">

//             <div  className="hidden md:flex w-[100%] h-[300px] mt-[30px] md:w-[35%]">
                
//                 <img  src={Con}  className="w-[90%] h-full aspect-square"  alt="Contact" />
            
//             </div>

//             <div  className="w-[90%] mx-auto h-full border border-cyan-900 shadow-circle rounded-2xl flex  md:w-[50%]">

//                 <form  action='https://getform.io/f/bjjjyeob' method='POST' className="w-[90%] h-full flex flex-col gap-3 justify-center items-center p-3 pt-5" >

//                     <div className="flex items-center gap-4 w-full">
//                         <MdPerson size={30} className={`${isDark ? "text-white" : "text-black"}`}/>
//                         <input  type="text" placeholder='Enter Full Name' name="FullName"
//                         className={`w-full py-4 rounded-3xl bg-transparent border border-cyan-500 pl-3 focus:outline-none 
//                             ${isDark ? "" : "text-black border-orange-500"}`}
//                     />
//                     </div>

//                     <div className="flex items-center gap-4 w-full">
//                         <MdEmail  size={30} className={`${isDark ? "text-white" : "text-black"}`}/>
//                         <input  type="email" placeholder='Enter Your Email' name='Email'
//                         className={`w-full py-4 rounded-3xl bg-transparent border border-cyan-500 pl-3 focus:outline-none 
//                             ${isDark ? "" : "border-orange-500 text-black"}`}
//                     />
//                     </div>

//                     <textarea  placeholder='Enter Your Message' rows={7} name="Message"
//                             className={`w-[90%] py-4 rounded-3xl bg-transparent border border-cyan-500 pl-3 focus:outline-none ml-7
//                             ${isDark ? "" : "text-black border-orange-500"}`}>

//                     </textarea>

//                     <button  className={` p-2 border border-cyan-500  rounded-full bg-cyan-500 hover:bg-transparent hover:border hover:border-cyan-500 duration-500  hover:scale-105
//                         ${isDark ? "" : "text-black"}`}>
//                         Contact Me
//                     </button>

//                 </form>



//             </div>


//         </div>




//     </div>
//   )
// }

// export default Contact








import React from "react";
import { MdPerson, MdEmail } from "react-icons/md";
import Con from "../assests/contact.png";

function Contact({ isDark, setIsDark }) {
  return (
    <div
      id="contact"
      className={`w-full min-h-screen text-white flex flex-col items-center justify-center pt-[120px] sm:pt-[100px] md:pt-[50px] lg:pt-0
        ${
          isDark
            ? "bg-gradient-to-b from-black via-black to-gray-900 "
            : "bg-gradient-to-b from-slate-100 to-white"
        }
      `}
    >
      <div className="pb-8 text-center">
        <p
          className={`text-5xl font-bold inline border-b-4 ${
            isDark
              ? "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white border-gray-500"
              : "text-black border-yellow-500"
          } `}
        >
          Contact
        </p>
        <p
          className={`py-6 text-xl ${isDark ? "text-white" : "text-green-500"}`}
        >
          Submit the form below to get in touch with me
        </p>
      </div>

      <div className="w-[80%] h-full flex flex-col gap-[70px] md:flex-row">
        <div className="hidden md:flex w-[100%] h-[300px] mt-[30px] md:w-[35%]">
          <img
            src={Con}
            className="w-[90%] h-full aspect-square"
            alt="Contact"
          />
        </div>

        <div className="w-[90%] mx-auto h-full border border-cyan-900 shadow-circle rounded-2xl flex md:w-[50%]">
          <form
            action="https://getform.io/f/bjjjyeob"
            method="POST"
            className="w-[90%] h-full flex flex-col gap-3 justify-center items-center p-3 pt-5"
          >
            <div className="flex items-center gap-4 w-full">
              <MdPerson
                size={30}
                className={`${isDark ? "text-white" : "text-black"}`}
              />
              <input
                type="text"
                placeholder="Enter Full Name"
                name="FullName"
                className={`w-full py-4 rounded-3xl bg-transparent border border-cyan-500 pl-3 focus:outline-none ${
                  isDark ? "" : "text-black border-orange-500"
                }`}
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <MdEmail
                size={30}
                className={`${isDark ? "text-white" : "text-black"}`}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="Email"
                className={`w-full py-4 rounded-3xl bg-transparent border border-cyan-500 pl-3 focus:outline-none ${
                  isDark ? "" : "border-orange-500 text-black"
                }`}
              />
            </div>

            <textarea
              placeholder="Enter Your Message"
              rows={7}
              name="Message"
              className={`w-[90%] py-4 rounded-3xl bg-transparent border border-cyan-500 pl-3 focus:outline-none ml-7 ${
                isDark ? "" : "text-black border-orange-500"
              }`}
            ></textarea>

            <button
              className={`p-2 border border-cyan-500 rounded-full bg-cyan-500 hover:bg-transparent hover:border hover:border-cyan-500 duration-500 hover:scale-105 ${
                isDark ? "" : "text-black"
              }`}
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
