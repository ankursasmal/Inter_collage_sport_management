 import React from 'react'
 import { Outlet } from 'react-router-dom'
 import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Nav from './components/Nav';
import Footer from './components/Footer';
 function App() {
   return (
     
     <div className='w-[100vw] min-h-[100vh]   '>
      <Nav/>
      <Outlet/>
     <div className='fixed bottom-[4rem] right-[2rem] flex w-[70px] h-[12px] p-[2rem] bg-black rounded-lg items-center justify-center'>
     <div className='flex items-center justify-center'>
<IoChatboxEllipsesOutline className='text-[2.6rem] lg:text-[1.8rem] text-white'/>
<a className=' text-white pl-[.5rem] '>Chat</a>
     <a className='absolute top-0.5 right-1.5 w-[10px] h-[10px] rounded-full bg-white text-black flex items-center justify-center'>1</a>
      </div>
      </div> 
      <div className='mt-[5000px]'></div>
      <Footer/>
    </div>
   )
 }
 
 export default App
 