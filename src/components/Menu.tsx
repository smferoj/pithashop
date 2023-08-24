'use client';
import {useState} from 'react';

import Image from 'next/image'
import React from 'react'
import logo from "../../public/temporary/dummy_logo.jpg"
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseSharp} from 'react-icons/io5';
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
  {id:1, title:"Home", url:"/"},
  {id:2, title:"Menu", url:"/menu"},
  {id:3, title:"Working Hours", url:"/"},
  {id:4, title:"Contact", url:"/contact"},
]

const Menu = () => {
  const [open, setOpen] = useState(false)
  
  const user = false
  return (
    <div className=''>
         {!open? <GiHamburgerMenu onClick={()=>setOpen(true)}/>: <IoCloseSharp onClick={()=>setOpen(false)}/>
         }
        
        {open && ( 
         <div className='bg-rose-500 text-white absolute left-0 top-24 w-1/2 h-[calc(100vh-6rem)] flex flex-col items-center  gap-8 capitalize z-10 pt-[65px]'>
          {links.map(item=>(
          <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
            {item.title}
            </Link>
          ))}
          {!user ? (
               <Link href="/login" onClick={()=>setOpen(false)}> Login </Link>
          )
            :
            (
              <Link href="/orders" onClick={()=>setOpen(false)}> Orders </Link>
            )
          }
          <Link href="/cart" onClick={()=>setOpen(false)}>
            <CartIcon/>
          </Link>
        
         </div>
        )
        }
    </div>
  )
}

export default Menu