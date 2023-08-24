'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import slide_1 from '../../public/temporary/slide-1.jpg';
import slide_2 from '../../public/temporary/slide-2.jpg';
import slide_3 from '../../public/temporary/slide-3.jpg';
const data=[
    {id:1,
    title: "slide-1",
    image: slide_1
   },
    {id:2,
    title: "slide-2",
    image: slide_2
   },
    {id:3,
    title: "slide-3",
    image: slide_3
   },

]
const Slider = () => {
    const [currentSlide, setCurrentSlide] =useState(0)
    
    useEffect(()=>{
        const interval = setInterval
        (()=>setCurrentSlide((prev)=> (prev === data.length -1 ? 0 : prev +1)), 2000);
        return ()=> clearInterval(interval)
    },[]);
  return (
    <div className='flex flex-col h-[(calc(100vh-6rem) md:h-[calc(100vh-9rem)]'>
        {/* Text container */}
        <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'> 
         <h1 className='text-5xl text-center uppercase p-4 md:text-6x xl:text-7x'> 
         {data[currentSlide].title}
          </h1>
         <button className='bg-red-500 text-white py-4 px-8 '> Order Now </button>
        </div>
        {/* Image Container */}
        <div className=' w-full h-1/2 relative bg-red-200'>
        <Image src={data[currentSlide].image} alt="slide-1" className='object-cover' height={280} width={280} />
        </div>
    </div>
  )
}

export default Slider
