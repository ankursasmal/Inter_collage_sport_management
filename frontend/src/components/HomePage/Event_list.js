import React from 'react'

function Event_list() {
  return (
    <div className='flex items-center p-[2vw] gap-[2vw] flex-wrap justify-center mt-[51vh] lg:mt-[124vh] w-[100%]'>
    {/* 1st event */}
    <div className='w-[31.9%]  h-[15rem]  lg:h-[30rem]  relative  shadow-xl rounded-xl '>
    <img className='w-full h-[15rem]   lg:h-[30rem] rounded-xl' src='/Event.jpg' />
    <a className='font-semibold text-[2rem] md:text-[4rem] lg:text-[9rem] absolute bottom-2 left-20 lg:left-32 text-white'>Events</a>
    </div>
    {/* 2 event */}
    
    <div className='w-[31.9%]  h-[15rem]  lg:h-[30rem]  relative  shadow-xl rounded-xl '>
    <img className='w-full h-[15rem]  lg:h-[30rem] rounded-xl' src='/Sedule.jpg' />
    {/* <span className='font-semibold text-[9rem] absolute bottom-2 left-32 text-white'>Sedule</span> */}
    </div>
    
    {/* 3 event */}
    <div className='w-[31.9%]  h-[15rem]  lg:h-[30rem]  relative  shadow-xl rounded-xl '>
    <img className='w-full h-[15rem]  lg:h-[30rem] rounded-xl' src='/Team.jpg' />
    <span className='font-semibold text-[2rem] md:text-[4rem] lg:text-[9rem] absolute bottom-2 left-18 lg:left-32 text-white'>Team</span>
    </div>
     
    {/* 4 event */}
    <div className='w-[31.9%]  h-[15rem]  lg:h-[30rem]  relative  shadow-xl rounded-xl '>
    <img className='w-full h-[15rem]  lg:h-[30rem] rounded-xl' src='/Score.jpg' />
    <span className='font-semibold text-[1.5rem] md:text-[3rem] lg:text-[5rem] absolute bottom-0   text-white'>Score</span>
    </div>
    {/* 5 event */}
    
    <div className='w-[31.9%]  h-[15rem]  lg:h-[30rem]  relative  shadow-xl rounded-xl '>
    <img className='w-full h-[15rem]  lg:h-[30rem] rounded-xl' src='/Result.jpg' />
    <span className='font-semibold text-[2rem] md:text-[4rem] lg:text-[9rem] absolute bottom-2 left-18 lg:left-32 text-white'>Result</span>
    </div>
     
    {/* 6 event */}
    
    <div className='w-[31.9%]  h-[15rem]  lg:h-[30rem]  relative  shadow-xl rounded-xl '>
    <img className='w-full h-[15rem]  lg:h-[30rem] rounded-xl' src='/Price.jpg' />
    <span className='font-semibold text-[1.5rem] md:text-[3rem] lg:text-[5rem] absolute bottom-1 left-2 lg:left-5 text-white'>Prize Dristubution</span>
    </div>
    {/* 2 event */}
    
    <div className='w-[31.9%]  h-[15rem]  lg:h-[30rem]  relative  shadow-xl rounded-xl '>
    <img className='w-full h-[15rem]  lg:h-[30rem] rounded-xl' src='/Galary.jpg' />
    <span className='font-semibold  text-[2rem] md:text-[4rem] lg:text-[9rem] absolute bottom-2 left-18 lg:left-32  '>Galary</span>
    </div>
    </div>
  )
}

export default Event_list
