import React from 'react'
import Menu from './Menu'
import Link from 'next/link';
import {FiPhoneIncoming} from 'react-icons/fi'
import CartIcon from './CartIcon';

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-rose-500 p-4 flex justify-between items-center border-b-2 border-b-rose-500 uppercase md:h-24 lg:px-20 xl:px-40 '>
      {/* =====Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/"> HomePage </Link>
        <Link href="/menu">Menu </Link>
        <Link href="/"> Contact </Link>
      </div>
      <div className=' text-xl md:font-bold flex-1 md:text-center'>
      <Link href="/">PithaShop </Link>
      </div>
      {/*  ======= Mobile Menu ========= */}
      <div className='md:hidden'>
      <Menu/>
      </div>

      {/* =========Right Link */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2  lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-2 rounded-md py-1'>
          <FiPhoneIncoming/>
          <span>+88001010101</span>
        </div>
        {!user ? (
 <Link href="/login"> Login </Link>
        ):
        (
          <Link href="/orders">Orders </Link>
        )
      }
       
      
      <CartIcon/>
      </div>

    </div>
  )
}

export default Navbar