import React, { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };
   return (
    <div className={`${isDarkMode ? "dark bg-gray-800 text-white" : "bg-white text-black"} min-h-[100vh]`}> 
    <div className='flex flex-col'> 
    {/* frist div */}
    <div className='flex items-center justify-between py-4 px-5'>
 <div></div>
 <div className='flex items-center gap-4'>
 <div className='flex items-center gap-3 pr-10'>
 <IoLogoInstagram className='text-[2.1rem] '/>
 <FaFacebook className='text-[2.1rem] '/>
 <CiYoutube className='text-[2.1rem] '/>
 <FaTwitterSquare className='text-[2.1rem] '/>
 <button
          className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-200 dark:text-black"
          onClick={toggleTheme}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
  </div>
{/* languge change option */}
<div className='flex items-center gap-2 px-4'>
<MdLanguage className='text-[2.3rem]'/>
<div className='p-[2.5px] border-[1px] border-black  rounded-xl '> 
<select className='outline-none border-none'>
<option value="English">English</option>
<option value="Bengali">Bengali</option>
<option value="Hindi">Hindi</option>
</select>
</div>
</div>
 </div>
 </div>
{/* hr line */}
<div className='h-[0.2px] w-[100%] bg-black '></div>
{/* 2nd nav bar and options and vedio */}
 
{/*  for all route page */}
<div className='flex items-center justify-between px-3 py-7 border-b-[1px] sticky bg-[#d6d2ce]'>
<a className='text-red-400'>Logo</a>
<div className='flex items-center gap-8 pr-3'>
<a className='text-[2rem] font-semibold '>Home</a>
<a className='text-[2rem] font-semibold '>About</a>
<a className='text-[2rem] font-semibold '>Contact Us</a>
<a className='text-[2rem] font-semibold '>Login</a>
</div>
  </div>
  </div>
    </div>
  )
}

export default Nav
