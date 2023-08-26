// import { menu } from '@/data'
import { MenuType } from '@/types/types';
import Link from 'next/link'
import React from 'react';

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories", {cache:"no-store"})

  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json()
}

const MenuPage = async () => {
  const menu:MenuType = await getData();
  return (
    <div className=' lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col gap-3 md:flex-row items-center'>
      {menu.map((category)=>(
        <Link href={`/menu/${category.slug}`} key={category.id} className='w=full h-1/3 bg-cover p-8' style={{backgroundImage:`url(${category.img})`}}>
          <div className={`text-${category.color} w-1/2`}>
            <h1 className='upppecase font-bold text-3xl'>{category.title}</h1>
            <p className='text-small my-8'>{category.desc}</p>
            <button className={`bg-${category.color} text-red-500 py-2 text-xl px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage