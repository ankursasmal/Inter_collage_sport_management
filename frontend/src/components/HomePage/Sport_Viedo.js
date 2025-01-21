import React from 'react'

function Sport_Viedo() {
  return (
    <div className='mt-[1vh] flex items-center justify-center w-[100vw] flex-col'>
   {/* one portion */}
      <div className='flex items-center  justify-evenly px-4'>
<div className='w-[50%] pl-10 '>
<video  className='w-[40vw] h-[30vw] rounded-xl' controls autoplay loop>
  <source src="Prize_drist.mp4" type="video/mp4" />
  <source src="Prize_drist.ogg" type="video/ogg" />
 </video>
</div>
<div className='flex items-start w-[50%] flex-col px-12'>
<a className='text-[1rem] lg:text-[1.5rem] pr-4'>The Inter-College Prize Distribution Ceremony celebrated excellence in academics, sports, and extracurricular activities. Students were honored with trophies, medals, and certificates in a vibrant event featuring cultural performances. The chief guest’s motivational speech inspired everyone to aim higher. The ceremony concluded with a vote of thanks, leaving participants proud and motivated to achieve greater success.</a>
<button className='hover:scale-125 text-[1.5rem] mt-7 font-semibold text-white bg-blue-500 rounded-full px-[2rem] py-[1rem]   font-serif'>Prize Dristribtion{'  '} {'->'}</button>

</div>
      </div>

      {/* 2nd portion */}
      <div className='flex mt-[6rem] items-center  justify-evenly px-4'>
      <div className='flex items-start w-[50%] flex-col px-12'>
<a className='text-[1rem] lg:text-[1.5rem] pr-4'>A sprocket, or spro, is a wheel with teeth designed to engage a chain or track. Commonly used in bicycles, motorcycles, and machinery, sprockets transmit rotary motion and power efficiently. They vary in size and materials, offering durability and precision. Essential for smooth mechanical operations, sprockets are crucial in industries like automotive, agriculture, and industrial automation.</a>
<button className='hover:scale-125 text-[1.5rem] mt-7 font-semibold text-white bg-blue-500 rounded-full px-[2rem] py-[1rem]   font-serif'>Play Now{'  '} {'->'}</button>

</div>
<div className='w-[50%] pl-7 '>
<video  className='w-[40vw] h-[30vw] rounded-l-xl' controls autoplay loop>
  <source src="Prize_drist.mp4" type="video/mp4" />
  <source src="Prize_drist.ogg" type="video/ogg" />
 </video>
</div>
 
      </div>
    </div>
  )
}

export default Sport_Viedo
