'use client'
import Image from 'next/image'
import React from 'react';
import banner_pitha from '../../public/temporary/banner_pitha.jpg'
import CountDown from './CountDown';


const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
       <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'> 
       {/* Text container */}
       <h1 className='text-white text-5xl font-bold xl:text-6xl'> Have you like to taste ?</h1>
       <p className=' text-white xl:text-2xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus delectus ut asperiores commodi ed?</p>
       <CountDown/>
       <button className='background: bg-rose-500 text-white rounded-md py-3 px-6'> Order Now </button>
        </div>
         {/* Image container */}
       <div className='flex-1 w-full relative'>
       <Image src={banner_pitha} alt='' fill className='object-contain'/>
         </div>
    </div>
  )
}

export default Offer