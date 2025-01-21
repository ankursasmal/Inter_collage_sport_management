import React from 'react'
import Event_list from './Event_list'
import Sport_Viedo from './Sport_Viedo'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col '> 
{/* image and nav part */}

    <div className='w-[100vw]   absolute top-0 left-0 '>
 {/* // use for only home route page */}
 <img className='w-full h-[50vh] lg:h-[120vh]' src="/Home_ppage.jpg" alt="Description" />

{/* nav options */}
<div className='flex absolute top-0 items-center justify-between px-3 py-7    w-[100vw] bg-[#d6d2ce] bg-opacity-25'>
<a className='text-red-400'>Logo</a>
<div className='flex items-center gap-8 pr-3'>
<Link to='/sport/login'>  <a className='text-[2rem] font-semibold text-white'>Home</a></Link>
<a className='text-[2rem] font-semibold text-white'>About</a>
<a className='text-[2rem] font-semibold text-white'>Contact Us</a>
<a className='text-[2rem] font-semibold text-white'>Login</a>
</div>
  </div>

{/* Image above picture */}

<div className='flex items-start flex-col absolute left-20 top-80'>
{/* <span className='text-[4rem] font-semibold text-[#1cd5ed] py-1.5'>HOME</span> */}
{/* <span className='text-[6rem] font-extrabold text-white'>HOME</span> */}
<span className='text-[3.4rem] font-bold font-[SFMono-Regular] text-[#ebd63b] py-1'>Inter College Sport Management System</span>
<div className='w-[35vw] mb-6'> 
<span className='text-[1.5rem] font-bold text-white font-serif'>Sports Management System is develop for sports scheduling and results monitoring. This software is developed using MySql for making work flow smoothly.</span>
</div>
<button className='hover:scale-125 text-[2rem] font-semibold text-white bg-blue-500 rounded-full px-[2.5rem] py-[0.6rem]   font-serif'>Play now</button>
</div>
   </div>

{/* Event list */}

 <Event_list/>
 <Sport_Viedo/>
 <Footer/>
   </div>
   )
}

export default Home
