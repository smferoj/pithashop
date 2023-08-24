'use client';
import {useState} from 'react';

import Image from 'next/image'
import React from 'react'
import logo from "../../public/temporary/dummy_logo.jpg"
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseSharp} from 'react-icons/io5';

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
         {!open? <GiHamburgerMenu onClick={()=>setOpen(true)}/>: <IoCloseSharp onClick={()=>setOpen(false)}/>
         }
    </div>
  )
}

export default Menu